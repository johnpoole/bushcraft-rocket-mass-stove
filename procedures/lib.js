// Procedures treated like code: each one declares what it needs and what it produces,
// and calls other procedures as steps. This file checks them and works out, for any
// procedure, everything it and its callees need.
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
    return e;
  }

  // Every procedure's source must point back at a real procedure that produces it.
  function validateCatalog(reg, cat) {
    const e = [];
    for (const t of cat.KIT) if (!cat.TOOLS[t] || cat.TOOLS[t].source !== 'kit') e.push(`kit item "${t}" is not a kit tool in the catalog`);
    for (const [id, t] of Object.entries(cat.TOOLS)) {
      if (t.source === 'kit') { if (!cat.KIT.includes(id)) e.push(`tool "${id}" says kit but is not one of the ten items`); continue; }
      const p = reg.get(t.source);
      if (!p) e.push(`tool "${id}" is made by "${t.source}", which does not exist`);
      else if (!p.produces.tools.includes(id)) e.push(`tool "${id}": ${t.source} does not list it in produces.tools`);
    }
    for (const [id, m] of Object.entries(cat.MATERIALS)) {
      if (m.source === 'site') continue;
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
    const carried = [...tools].filter((t) => cat.TOOLS[t] && cat.TOOLS[t].source === 'kit');
    const toMake = [...tools].filter((t) => cat.TOOLS[t] && cat.TOOLS[t].source !== 'kit' && !made.has(t));
    const inputs = [...used].filter(([m]) => !produced.has(m)).map(([m, qty]) => ({ id: m, qty }));
    return { tools: [...tools], carried, made: [...made], toMake, skills: [...skills], inputs, produced: [...produced].map(([m, qty]) => ({ id: m, qty })) };
  }

  // Walk a top-level procedure and check that every made tool and every produced material
  // exists by the time something that needs it finishes.
  function availability(id, reg, cat) {
    const ev = trace(id, reg);
    const done = new Map();
    ev.forEach((x, i) => { if (x.type === 'exit' && !done.has(x.id)) done.set(x.id, i); });
    const e = [];
    ev.forEach((x, i) => {
      if (x.type !== 'exit') return;
      const p = reg.get(x.id);
      for (const t of p.requires.tools) {
        const src = cat.TOOLS[t] && cat.TOOLS[t].source;
        if (!src || src === 'kit') continue;
        if (!(done.get(src) < i)) e.push(`${id}: "${x.id}" needs the ${t}, but ${src} has not run before it`);
      }
      for (const m of p.requires.materials) {
        const src = cat.MATERIALS[m.id] && cat.MATERIALS[m.id].source;
        if (!src || src === 'site') continue;
        if (!(done.get(src) < i)) e.push(`${id}: "${x.id}" needs ${m.id}, but ${src} has not run before it`);
      }
    });
    return e;
  }

  // Totals over one run of a top-level plan: each produced material must cover its use.
  function balance(id, reg, cat) {
    const made = new Map(), used = new Map();
    for (const x of trace(id, reg)) {
      if (x.type !== 'exit') continue;
      const p = reg.get(x.id);
      for (const m of p.produces.materials) made.set(m.id, (made.get(m.id) || 0) + m.qty);
      for (const m of p.requires.materials) used.set(m.id, (used.get(m.id) || 0) + m.qty);
    }
    const e = [];
    for (const [m, q] of used) {
      if (cat.MATERIALS[m].source === 'site') continue;
      const have = made.get(m) || 0;
      if (have + 1e-9 < q) e.push(`${id}: uses ${q} ${cat.MATERIALS[m].unit} of ${m} but only produces ${have}`);
    }
    return e;
  }

  const usedBy = (id, reg) => [...reg.values()].filter((p) => callsOf(p).includes(id) || p.requires.skills.includes(id)).map((p) => p.id);
  const roots = (reg) => [...reg.values()].filter((p) => p.kind !== 'skill' && ![...reg.values()].some((q) => callsOf(q).includes(p.id))).map((p) => p.id);

  // Hours of work in one run of a procedure and everything it calls.
  const hours = (id, reg) => trace(id, reg).filter((x) => x.type === 'exit').reduce((t, x) => t + reg.get(x.id).estimate.hours, 0);

  const api = { KINDS, byId, validate, validateCatalog, trace, needs, availability, balance, usedBy, roots, hours, callsOf, isCall };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProcLib = api;
})(this);
