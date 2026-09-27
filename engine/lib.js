// Procedures treated like code: each one declares what it needs and what it produces,
// and calls other procedures as steps. This file checks them and works out, for any
// procedure, everything it and its callees need. It knows nothing about any one project.
//
// Where things come from, in a catalog entry's `source`:
//   'kit'    a tool or material you have at the start; the project's KIT lists them
//   'site'   a material free for the taking, as much as you need
//   'bought' bought before it is needed, as much as you need, at `cost` each (per unit for materials)
//   an id    made or gathered by that procedure
(function (root) {
  'use strict';

  const KINDS = ['plan', 'task', 'make', 'gather', 'skill'];
  const ID = /^[a-z]+(\.[a-z0-9-]+)+$/;

  const isCall = (s) => s && typeof s === 'object' && typeof s.call === 'string';
  // Calls in order; a step with times: n calls its procedure n times.
  const callsOf = (p) => p.steps.filter(isCall).flatMap((s) => Array(s.times || 1).fill(s.call));

  function byId(list) {
    const reg = new Map();
    for (const p of list) {
      if (reg.has(p.id)) throw new Error(`procedure "${p.id}" is defined twice`);
      reg.set(p.id, p);
    }
    return reg;
  }

  // Shape and references of one procedure. Returns a list of problems, empty when it is sound.
  function validate(p, reg, cat) {
    const e = [];
    const at = `procedure "${p && p.id}"`;
    if (!p || typeof p !== 'object') return [`${at}: not an object`];
    if (!ID.test(p.id || '')) e.push(`${at}: id must look like "shelter.snow-bank"`);
    if (!KINDS.includes(p.kind)) e.push(`${at}: kind must be one of ${KINDS.join(', ')}, got ${JSON.stringify(p.kind)}`);
    for (const f of ['title', 'purpose']) if (typeof p[f] !== 'string' || !p[f].trim()) e.push(`${at}: ${f} is missing`);
    const r = p.requires || {}, o = p.produces || {};
    for (const [name, v] of [['requires.tools', r.tools], ['requires.materials', r.materials], ['requires.skills', r.skills],
      ['produces.tools', o.tools], ['produces.materials', o.materials], ['preconditions', p.preconditions],
      ['steps', p.steps], ['checks', p.checks], ['safety', p.safety]]) {
      if (!Array.isArray(v)) e.push(`${at}: ${name} must be a list (use [] for none)`);
    }
    if (e.length) return e;

    for (const t of r.tools) if (!cat.TOOLS[t]) e.push(`${at}: requires unknown tool "${t}"`);
    for (const m of [...r.materials, ...o.materials]) {
      if (!m || !cat.MATERIALS[m.id]) e.push(`${at}: unknown material ${JSON.stringify(m && m.id)}`);
      else if (!(typeof m.qty === 'number' && m.qty > 0)) e.push(`${at}: material "${m.id}" needs a quantity above 0`);
    }
    for (const s of r.skills) {
      const sk = reg.get(s);
      if (!sk) e.push(`${at}: requires skill "${s}", which has no procedure`);
      else if (sk.kind !== 'skill') e.push(`${at}: "${s}" is listed as a skill but is a ${sk.kind}`);
    }
    for (const t of o.tools) {
      if (!cat.TOOLS[t]) e.push(`${at}: produces unknown tool "${t}"`);
      else if (cat.TOOLS[t].source !== p.id) e.push(`${at}: produces "${t}", but the catalog says ${cat.TOOLS[t].source} makes it`);
    }
    for (const m of o.materials) {
      if (cat.MATERIALS[m.id] && cat.MATERIALS[m.id].source !== p.id) e.push(`${at}: produces "${m.id}", but the catalog says ${cat.MATERIALS[m.id].source} does`);
    }
    if (p.kind === 'make' && !o.tools.length) e.push(`${at}: a make procedure must produce a tool`);
    if (p.kind === 'gather' && !o.materials.length) e.push(`${at}: a gather procedure must produce a material`);
    if (!p.steps.length) e.push(`${at}: has no steps`);
    for (const s of p.steps) {
      if (isCall(s)) {
        if (!reg.get(s.call)) e.push(`${at}: calls "${s.call}", which does not exist`);
        if (s.times !== undefined && !(Number.isInteger(s.times) && s.times >= 1)) e.push(`${at}: times on the call to "${s.call}" must be a whole number of 1 or more`);
      }
      else if (typeof s !== 'string' || !s.trim()) e.push(`${at}: a step must be text or {call: "id"}`);
    }
    if (!p.checks.length && p.kind !== 'skill') e.push(`${at}: needs at least one check that says when it is done`);
    if (!p.estimate || !(typeof p.estimate.hours === 'number' && p.estimate.hours >= 0)) e.push(`${at}: estimate.hours is missing`);
    if (p.estimate && p.estimate.waitDays !== undefined && !(typeof p.estimate.waitDays === 'number' && p.estimate.waitDays > 0)) e.push(`${at}: estimate.waitDays must be a number of days above 0`);
    if (p.repeat !== undefined && p.repeat !== 'daily') e.push(`${at}: repeat must be "daily" when given`);
    if (p.estimate && p.estimate.afterDark !== undefined && typeof p.estimate.afterDark !== 'boolean') e.push(`${at}: estimate.afterDark must be true or false`);
    if (p.window !== undefined) {
      const w = p.window;
      if (p.kind !== 'plan') e.push(`${at}: only a plan can have a window`);
      if (!w || !(typeof w.from === 'number' && w.from >= 0) || (w.to !== undefined && !(typeof w.to === 'number' && w.to >= w.from))) e.push(`${at}: window must be { from, to } in days from the start, with to ≥ from`);
    }
    return e;
  }

  const badCost = (x) => !(typeof x.cost === 'number' && x.cost >= 0);

  // Every catalog source must be the kit, the site, a purchase with a price, or a real
  // procedure that lists the thing among what it produces.
  function validateCatalog(reg, cat) {
    const e = [];
    for (const t of cat.KIT) if (!cat.TOOLS[t] || cat.TOOLS[t].source !== 'kit') e.push(`kit item "${t}" is not a kit tool in the catalog`);
    for (const [id, t] of Object.entries(cat.TOOLS)) {
      if (t.source === 'kit') { if (!cat.KIT.includes(id)) e.push(`tool "${id}" says kit but is not in the kit list`); continue; }
      if (t.source === 'bought') { if (badCost(t)) e.push(`tool "${id}" is bought but has no cost`); continue; }
      const p = reg.get(t.source);
      if (!p) e.push(`tool "${id}" is made by "${t.source}", which does not exist`);
      else if (!p.produces.tools.includes(id)) e.push(`tool "${id}": ${t.source} does not list it in produces.tools`);
    }
    for (const [id, m] of Object.entries(cat.MATERIALS)) {
      if (m.source === 'site') continue;
      if (m.source === 'bought') { if (badCost(m)) e.push(`material "${id}" is bought but has no cost per ${m.unit}`); continue; }
      const p = reg.get(m.source);
      if (!p) e.push(`material "${id}" comes from "${m.source}", which does not exist`);
      else if (!p.produces.materials.some((x) => x.id === id)) e.push(`material "${id}": ${m.source} does not list it in produces.materials`);
    }
    return e;
  }

  // Run a procedure on paper: the order in which procedures start and finish.
  // Throws on a cycle, the way a function that calls itself forever would.
  function trace(id, reg) {
    const events = [];
    const walk = (pid, stack) => {
      if (stack.includes(pid)) throw new Error(`cycle: ${[...stack, pid].join(' → ')}`);
      const p = reg.get(pid);
      if (!p) throw new Error(`"${pid}" does not exist (called from ${stack[stack.length - 1] || 'the top'})`);
      events.push({ type: 'enter', id: pid, depth: stack.length });
      for (const c of callsOf(p)) walk(c, [...stack, pid]);
      events.push({ type: 'exit', id: pid, depth: stack.length });
    };
    walk(id, []);
    return events;
  }

  // Everything a procedure needs, including what its callees need. Materials produced
  // inside the call tree are not inputs; everything else is.
  function needs(id, reg, cat) {
    const ev = trace(id, reg).filter((x) => x.type === 'exit');
    const tools = new Set(), skills = new Set(), made = new Set(), produced = new Map(), used = new Map();
    const addSkill = (s) => {
      if (skills.has(s)) return;
      skills.add(s);
      const sk = reg.get(s);
      if (sk) { sk.requires.tools.forEach((t) => tools.add(t)); sk.requires.skills.forEach(addSkill); }
    };
    for (const { id: pid } of ev) {
      const p = reg.get(pid);
      p.requires.tools.forEach((t) => tools.add(t));
      p.requires.skills.forEach(addSkill);
      p.produces.tools.forEach((t) => made.add(t));
      for (const m of p.requires.materials) used.set(m.id, (used.get(m.id) || 0) + m.qty);
      for (const m of p.produces.materials) produced.set(m.id, (produced.get(m.id) || 0) + m.qty);
    }
    const src = (t) => cat.TOOLS[t] && cat.TOOLS[t].source;
    const carried = [...tools].filter((t) => src(t) === 'kit');
    const boughtTools = [...tools].filter((t) => src(t) === 'bought');
    const toMake = [...tools].filter((t) => src(t) && src(t) !== 'kit' && src(t) !== 'bought' && !made.has(t));
    const inputs = [...used].filter(([m]) => !produced.has(m)).map(([m, qty]) => ({ id: m, qty }));
    const boughtMaterials = inputs.filter((m) => cat.MATERIALS[m.id] && cat.MATERIALS[m.id].source === 'bought');
    const cost = boughtTools.reduce((t, id) => t + cat.TOOLS[id].cost, 0)
      + boughtMaterials.reduce((t, m) => t + m.qty * cat.MATERIALS[m.id].cost, 0);
    return { tools: [...tools], carried, boughtTools, made: [...made], toMake, skills: [...skills], inputs, boughtMaterials, cost,
      produced: [...produced].map(([m, qty]) => ({ id: m, qty })) };
  }

  // Run a plan on paper the way a person works: tools persist once made, and materials sit in
  // a stock. A call to a make procedure is skipped when its tools already exist; a call to a
  // gather procedure runs, up to its times, only while the stock is short of what the caller
  // needs. Each procedure takes the materials it needs from the stock when it finishes.
  // Daily routines are left out (schedule.js runs them day by day) unless includeDaily is set.
  function run(id, reg, cat, opt = {}) {
    const tools = new Set(Object.keys(cat.TOOLS).filter((t) => cat.TOOLS[t].source === 'kit' || cat.TOOLS[t].source === 'bought'));
    const bought = new Map();   // material id → quantity bought along the way
    const stock = new Map(opt.stock || []), reserved = new Map();
    const events = [], errors = [];
    const have = (m) => stock.get(m) || 0;
    const free = (m) => have(m) - (reserved.get(m) || 0);
    const skipDaily = !opt.includeDaily;
    const exec = (pid, stack) => {
      if (stack.includes(pid)) throw new Error(`cycle: ${[...stack, pid].join(' → ')}`);
      const p = reg.get(pid);
      const mine = new Map();   // materials this procedure has gathered for itself and holds back
      events.push({ type: 'enter', id: pid, depth: stack.length });
      for (const s of p.steps) {
        if (!isCall(s)) continue;
        const c = reg.get(s.call);
        if (skipDaily && c.repeat === 'daily') continue;
        if (c.kind === 'make' && c.produces.tools.length && c.produces.tools.every((t) => tools.has(t))) continue;
        const wanted = c.kind === 'gather' ? p.requires.materials.filter((m) => c.produces.materials.some((x) => x.id === m.id) && !mine.has(m.id)) : [];
        if (wanted.length) {
          // Gather until this procedure's need is covered, then hold it back from its sub-steps.
          for (let n = 0; n < 200 && wanted.some((m) => free(m.id) < m.qty - 1e-9); n++) exec(s.call, [...stack, pid]);
          for (const m of wanted) { mine.set(m.id, m.qty); reserved.set(m.id, (reserved.get(m.id) || 0) + m.qty); }
        } else {
          for (let i = 0; i < (s.times || 1); i++) exec(s.call, [...stack, pid]);
        }
      }
      for (const [m, q] of mine) reserved.set(m, reserved.get(m) - q);
      for (const t of p.requires.tools) if (!tools.has(t)) errors.push(`${id}: "${pid}" needs the ${t}, but ${cat.TOOLS[t] ? cat.TOOLS[t].source : '?'} has not made it yet`);
      for (const m of p.requires.materials) {
        const src = cat.MATERIALS[m.id] && cat.MATERIALS[m.id].source;
        if (src === 'bought') { bought.set(m.id, (bought.get(m.id) || 0) + m.qty); continue; }
        if (src === 'site' || (opt.supplied && opt.supplied.has(m.id))) continue;
        if (free(m.id) + 1e-9 < m.qty) errors.push(`${id}: "${pid}" needs ${m.qty} ${cat.MATERIALS[m.id].unit} of ${m.id} but only ${+Math.max(0, free(m.id)).toFixed(2)} is free in stock`);
        stock.set(m.id, have(m.id) - m.qty);
      }
      p.produces.tools.forEach((t) => tools.add(t));
      for (const m of p.produces.materials) stock.set(m.id, have(m.id) + m.qty);
      events.push({ type: 'exit', id: pid, depth: stack.length });
    };
    exec(id, []);
    return { events, errors, stock, tools, bought };
  }

  // Materials that daily routines inside a plan produce or use; schedule.js balances them day by day.
  function dailyMaterials(id, reg) {
    const daily = new Set();
    for (const x of trace(id, reg)) {
      if (x.type !== 'enter' || reg.get(x.id).repeat !== 'daily') continue;
      for (const y of trace(x.id, reg)) if (y.type === 'exit') {
        const q = reg.get(y.id);
        q.produces.materials.forEach((m) => daily.add(m.id));
        q.requires.materials.forEach((m) => daily.add(m.id));
      }
    }
    return daily;
  }

  // Fill {name} placeholders in a procedure's text from the design numbers in params.js.
  const PLACEHOLDER = /\{([a-z][A-Za-z0-9]*(?:\.[A-Za-z0-9]+)+)\}/g;
  const render = (text, params) => String(text).replace(PLACEHOLDER, (m, k) => (k in params ? String(params[k]) : m));
  function texts(p) {
    return [p.title, p.purpose, ...p.preconditions, ...p.checks, ...p.safety,
      ...p.steps.map((s) => (isCall(s) ? s.note || '' : s)), (p.estimate && p.estimate.note) || ''];
  }
  const placeholders = (p) => texts(p).flatMap((t) => [...String(t).matchAll(PLACEHOLDER)].map((m) => m[1]));

  const usedBy = (id, reg) => [...reg.values()].filter((p) => callsOf(p).includes(id) || p.requires.skills.includes(id)).map((p) => p.id);
  const roots = (reg) => [...reg.values()].filter((p) => p.kind !== 'skill' && ![...reg.values()].some((q) => callsOf(q).includes(p.id))).map((p) => p.id);

  // Hours of work in one run of a procedure and everything it calls.
  const hours = (id, reg, cat) => (cat ? run(id, reg, cat, { includeDaily: true, supplied: new Set(Object.keys(cat.MATERIALS)) }).events : trace(id, reg))
    .filter((x) => x.type === 'exit').reduce((t, x) => t + reg.get(x.id).estimate.hours, 0);

  const api = { KINDS, byId, validate, validateCatalog, trace, run, dailyMaterials, needs, usedBy, roots, hours, callsOf, isCall, render, placeholders, texts };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProcLib = api;
})(this);
