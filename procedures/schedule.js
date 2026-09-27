// Runs a season plan day by day: daylight at the camp's latitude, daily routines first,
// then build jobs in the order the plan calls them, each starting only when what it needs
// has been made and any drying wait has passed. Hours are the procedures' own estimates.
(function (root) {
  'use strict';

  const DEFAULTS = Object.freeze({
    latitude: 62.5,       // °N, east arm of Great Slave Lake
    startDayOfYear: 258,  // 15 September
    days: 140,            // into early February
    overheadHours: 1.5,   // eating, fetching water, tending yourself
    maxWorkHours: 10,     // a long day's physical work on short rations
    minWorkHours: 3,
  });

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

  function dateOf(day, opt) {
    const d = new Date(Date.UTC(2026, 0, 1));
    d.setUTCDate(opt.startDayOfYear + day);
    return d.toISOString().slice(5, 10);
  }

  // Turn the plan into jobs and daily routines. A plan procedure may carry a window
  // { from, to } in days from the start: its jobs cannot start before `from` and should be
  // finished by `to`; a routine (repeat: 'daily') called inside it runs every day of the window.
  function compile(rootId, reg, cat, L) {
    const jobs = [], routines = [];
    const lastMaker = new Map();   // tool or material id → index of the job that last produced it
    const walk = (id, window, parents) => {
      const p = reg.get(id);
      const w = p.window ? { from: Math.max(window.from, p.window.from), to: p.window.to !== undefined ? p.window.to : window.to } : window;
      if (p.repeat === 'daily') {
        routines.push({ id, window: w, hours: L.hours(id, reg), afterDark: !!(p.estimate && p.estimate.afterDark) });
        return;
      }
      for (const c of L.callsOf(p)) walk(c, w, [...parents, id]);
      if (p.kind === 'plan' || p.kind === 'skill') return;
      const deps = new Set();
      for (const t of p.requires.tools) if (lastMaker.has(t)) deps.add(lastMaker.get(t));
      for (const m of p.requires.materials) if (lastMaker.has(m.id)) deps.add(lastMaker.get(m.id));
      const job = { index: jobs.length, id, hours: p.estimate.hours, waitDays: p.estimate.waitDays || 0, deps: [...deps], window: w, parents: [...parents] };
      jobs.push(job);
      for (const t of p.produces.tools) lastMaker.set(t, job.index);
      for (const m of p.produces.materials) lastMaker.set(m.id, job.index);
    };
    walk(rootId, { from: 0, to: Infinity }, []);
    return { jobs, routines };
  }

  function run(rootId, reg, cat, L, options = {}) {
    const opt = { ...DEFAULTS, ...options };
    const { jobs, routines } = compile(rootId, reg, cat, L);
    const left = jobs.map((j) => j.hours);
    const done = jobs.map(() => null);   // day finished
    const days = [];
    let cursor = 0;
    for (let day = 0; day < opt.days; day++) {
      const light = daylight(opt.startDayOfYear + day, opt.latitude);
      const work = Math.max(opt.minWorkHours, Math.min(opt.maxWorkHours, light - opt.overheadHours));
      const active = routines.filter((r) => day >= r.window.from && day <= r.window.to);
      const routineHours = active.filter((r) => !r.afterDark).reduce((t, r) => t + r.hours, 0);
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
      days.push({ day, date: dateOf(day, opt), daylight: light, work, routines: active.map((r) => r.id), routineHours, buildHours: work - routineHours - free, idle: free, did });
    }
    const finish = (id) => {
      const idx = jobs.filter((j) => j.id === id || j.parents.includes(id)).map((j) => j.index);
      if (!idx.length) return null;
      return idx.some((i) => done[i] === null) ? null : Math.max(...idx.map((i) => done[i]));
    };
    const late = jobs.filter((j) => j.window.to !== Infinity && (done[j.index] === null || done[j.index] > j.window.to))
      .map((j) => ({ id: j.id, due: j.window.to, finished: done[j.index] }));
    const unfinished = jobs.filter((j) => done[j.index] === null).map((j) => j.id);
    return { options: opt, jobs, routines, done, days, finish, late, unfinished, dateOf: (d) => dateOf(d, opt) };
  }

  const api = { DEFAULTS, daylight, compile, run };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProcSchedule = api;
})(this);
