// Runs a plan day by day: daily routines first, then jobs in the order the plan calls them,
// each starting only when what it needs has been made and any wait has passed. Hours are the
// procedures' own estimates. How many hours a day there are comes from the project's calendar.
//
// Calendar, all fields optional except start:
//   start   'YYYY-MM-DD', the first day
//   days    how many days to run
//   hours   one of
//     { type: 'fixed', hours }                        the same hours every day
//     { type: 'weekly', hours: [Sun, Mon, … Sat] }    hours by day of the week
//     { type: 'daylight', latitude, overheadHours, maxWorkHours, minWorkHours }
//                                                     sunrise to sunset, less overhead, within limits
(function (root) {
  'use strict';

  const DEFAULTS = Object.freeze({ days: 60, hours: Object.freeze({ type: 'fixed', hours: 6 }) });

  // Hours from sunrise to sunset, with the usual allowance for refraction.
  function daylight(dayOfYear, latitude) {
    const rad = Math.PI / 180;
    const decl = 23.44 * rad * Math.sin(2 * Math.PI * (284 + dayOfYear) / 365);
    const phi = latitude * rad;
    const c = (Math.sin(-0.833 * rad) - Math.sin(phi) * Math.sin(decl)) / (Math.cos(phi) * Math.cos(decl));
    if (c <= -1) return 24;
    if (c >= 1) return 0;
    return (2 * Math.acos(c) / rad) / 15;
  }

  function startDate(cal) {
    if (typeof cal.start !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(cal.start)) {
      throw new Error(`schedule: calendar.start must be a date like "2026-09-15", got ${JSON.stringify(cal.start)}`);
    }
    return new Date(`${cal.start}T00:00:00Z`);
  }

  const dateOn = (cal, day) => { const d = startDate(cal); d.setUTCDate(d.getUTCDate() + day); return d; };
  const dayOfYear = (d) => Math.floor((d - Date.UTC(d.getUTCFullYear(), 0, 1)) / 86400000) + 1;

  // Working hours on a given day, and the daylight when the calendar uses it.
  function workHours(cal, day) {
    const h = cal.hours, d = dateOn(cal, day);
    if (h.type === 'fixed') {
      if (!(typeof h.hours === 'number' && h.hours >= 0)) throw new Error('schedule: fixed calendar needs hours ≥ 0');
      return { work: h.hours, light: null };
    }
    if (h.type === 'weekly') {
      if (!Array.isArray(h.hours) || h.hours.length !== 7 || h.hours.some((x) => !(typeof x === 'number' && x >= 0))) {
        throw new Error('schedule: weekly calendar needs hours as 7 numbers, Sunday first');
      }
      return { work: h.hours[d.getUTCDay()], light: null };
    }
    if (h.type === 'daylight') {
      if (typeof h.latitude !== 'number') throw new Error('schedule: daylight calendar needs a latitude');
      const light = daylight(dayOfYear(d), h.latitude);
      const work = Math.max(h.minWorkHours || 0, Math.min(h.maxWorkHours ?? 24, light - (h.overheadHours || 0)));
      return { work, light };
    }
    throw new Error(`schedule: calendar.hours.type must be fixed, weekly or daylight, got ${JSON.stringify(h.type)}`);
  }

  // Turn the plan into jobs and daily routines. A plan procedure may carry a window
  // { from, to } in days from the start: its jobs cannot start before `from` and should be
  // finished by `to`; a routine (repeat: 'daily') called inside it runs every day of the window.
  function compile(rootId, reg, cat, L) {
    const merge = (w, p) => (p.window ? { from: Math.max(w.from, p.window.from), to: p.window.to !== undefined ? p.window.to : w.to } : w);
    // Daily routines, with the window of the plans that call them.
    const routines = [];
    const findRoutines = (id, w) => {
      const p = reg.get(id), ww = merge(w, p);
      if (p.repeat === 'daily') {
        // Each step of a routine counts only once the made tools it needs exist: no weir checks before the weir.
        const madeTools = (cid) => [...new Set(L.trace(cid, reg).filter((e) => e.type === 'exit')
          .flatMap((e) => reg.get(e.id).requires.tools).filter((t) => cat.TOOLS[t] && cat.TOOLS[t].source !== 'kit' && cat.TOOLS[t].source !== 'bought'))];
        const parts = [{ hours: p.estimate.hours, needs: [] }, ...p.steps.filter(L.isCall).flatMap((st) =>
          Array(st.times || 1).fill({ hours: L.hours(st.call, reg, cat), needs: madeTools(st.call) }))];
        routines.push({ id, window: ww, parts, hours: parts.reduce((t, x) => t + x.hours, 0), afterDark: !!p.estimate.afterDark });
        return;
      }
      for (const c of L.callsOf(p)) findRoutines(c, ww);
    };
    findRoutines(rootId, { from: 0, to: Infinity });
    // Build jobs: what actually runs once the stock is taken into account.
    const r = L.run(rootId, reg, cat, { supplied: L.dailyMaterials(rootId, reg) });
    const jobs = [], lastMaker = new Map(), toolMaker = new Map(), stack = [];
    for (const e of r.events) {
      const p = reg.get(e.id);
      if (e.type === 'enter') { stack.push({ id: e.id, window: merge(stack.length ? stack[stack.length - 1].window : { from: 0, to: Infinity }, p) }); continue; }
      const frame = stack.pop();
      if (p.kind === 'plan' || p.kind === 'skill') continue;
      const deps = new Set();
      for (const t of p.requires.tools) if (lastMaker.has(t)) deps.add(lastMaker.get(t));
      for (const m of p.requires.materials) if (lastMaker.has(m.id)) deps.add(lastMaker.get(m.id));
      const job = { index: jobs.length, id: e.id, hours: p.estimate.hours, waitDays: p.estimate.waitDays || 0, deps: [...deps], window: frame.window, parents: stack.map((f) => f.id) };
      jobs.push(job);
      for (const t of p.produces.tools) { lastMaker.set(t, job.index); if (!toolMaker.has(t)) toolMaker.set(t, job.index); }
      for (const m of p.produces.materials) lastMaker.set(m.id, job.index);
    }
    return { jobs, routines, toolMaker };
  }

  function run(rootId, reg, cat, L, calendar) {
    if (!calendar || typeof calendar !== 'object') throw new Error('schedule: run needs the project calendar');
    const cal = { ...DEFAULTS, ...calendar, hours: calendar.hours || DEFAULTS.hours };
    startDate(cal);
    const { jobs, routines, toolMaker } = compile(rootId, reg, cat, L);
    const left = jobs.map((j) => j.hours);
    const done = jobs.map(() => null);   // day finished
    // A tool made by a job counts from the day after that job finishes; one no job makes is taken as there.
    const toolReady = (t, day) => !toolMaker.has(t) || (done[toolMaker.get(t)] !== null && done[toolMaker.get(t)] < day);
    const routineHoursOn = (r, day) => r.parts.filter((x) => x.needs.every((t) => toolReady(t, day))).reduce((a, x) => a + x.hours, 0);
    const days = [];
    const dateOf = (day) => dateOn(cal, day).toISOString().slice(0, 10);
    let cursor = 0;
    for (let day = 0; day < cal.days; day++) {
      const { work, light } = workHours(cal, day);
      const active = routines.filter((r) => day >= r.window.from && day <= r.window.to);
      const routineHours = active.filter((r) => !r.afterDark).reduce((t, r) => t + routineHoursOn(r, day), 0);
      let free = Math.max(0, work - routineHours);
      const did = [];
      const ready = (j) => day >= j.window.from && j.deps.every((d) => done[d] !== null && day > done[d] + jobs[d].waitDays - (jobs[d].waitDays ? 0 : 1));
      for (let i = cursor; i < jobs.length && free > 1e-9; i++) {
        if (done[i] !== null || !ready(jobs[i])) continue;
        const h = Math.min(free, left[i]);
        left[i] -= h; free -= h;
        if (h > 0) did.push({ id: jobs[i].id, hours: h });
        if (left[i] <= 1e-9) done[i] = day;
      }
      while (cursor < jobs.length && done[cursor] !== null) cursor++;
      days.push({ day, date: dateOf(day), daylight: light, work, routines: active.map((r) => r.id), routineHours, buildHours: Math.max(0, work - routineHours) - free, idle: free, did });
    }
    const finish = (id) => {
      const idx = jobs.filter((j) => j.id === id || j.parents.includes(id)).map((j) => j.index);
      if (!idx.length) return null;
      return idx.some((i) => done[i] === null) ? null : Math.max(...idx.map((i) => done[i]));
    };
    const late = jobs.filter((j) => j.window.to !== Infinity && (done[j.index] === null || done[j.index] > j.window.to))
      .map((j) => ({ id: j.id, due: j.window.to, finished: done[j.index] }));
    const unfinished = jobs.filter((j) => done[j.index] === null).map((j) => j.id);
    const needed = jobs.reduce((t, j) => t + j.hours, 0);
    const built = days.reduce((t, d) => t + d.buildHours, 0);
    const short = days.reduce((t, d) => t + Math.max(0, d.routineHours - d.work), 0);
    return { calendar: cal, jobs, routines, done, days, finish, late, unfinished, needed, built, routineOverrun: short, dateOf };
  }

  const api = { DEFAULTS, daylight, workHours, compile, run };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProcSchedule = api;
})(this);
