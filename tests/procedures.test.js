const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const L = require('../procedures/lib.js');
const C = require('../procedures/catalog.js');
const { IDS, load } = require('../procedures/index.js');
const params = require('../procedures/params.js').load();

const dir = path.join(__dirname, '..', 'procedures');
const reg = L.byId(load());

test('the index lists every procedure file and nothing else', () => {
  const files = fs.readdirSync(dir).filter((f) => /^[a-z]+(\.[a-z0-9-]+)+\.js$/.test(f) && !f.startsWith('catalog.')).map((f) => f.slice(0, -3)).sort();
  assert.deepEqual([...IDS].sort(), files);
  for (const id of IDS) assert.equal(reg.get(id).id, id, `${id}.js defines "${reg.get(id).id}"`);
});

test('every procedure is well formed and every reference resolves', () => {
  const errors = [...reg.values()].flatMap((p) => L.validate(p, reg, C));
  assert.deepEqual(errors, []);
});

test('every made tool and produced material points back at a procedure that makes it', () => {
  assert.deepEqual(L.validateCatalog(reg, C), []);
});

test('the kit is exactly the ten items taken in, and nothing else is assumed', () => {
  assert.equal(C.KIT.length, 10);
  const kitTools = Object.entries(C.TOOLS).filter(([, t]) => t.source === 'kit').map(([id]) => id).sort();
  assert.deepEqual(kitTools, [...C.KIT].sort());
});

test('no procedure calls itself, directly or through others', () => {
  for (const id of IDS) assert.doesNotThrow(() => L.trace(id, reg), id);
});

test('run on paper with a running stock, the season makes every tool and has every material in stock when it is needed', () => {
  const r = L.run('plan.season', reg, C, { supplied: L.dailyMaterials('plan.season', reg) });
  assert.deepEqual(r.errors, []);
});

test('every procedure calls the gathering for each material it uses, so it reads like a self-contained function', () => {
  const daily = L.dailyMaterials('plan.season', reg);
  for (const p of reg.values()) {
    const calls = new Set(L.callsOf(p));
    for (const m of p.requires.materials) {
      const src = C.MATERIALS[m.id].source;
      if (src === 'site' || daily.has(m.id) || src === p.id) continue;
      assert.ok(calls.has(src), `${p.id} uses ${m.id} but does not call ${src}`);
    }
  }
});

test('a tool is made only once in the season, however many procedures call its maker', () => {
  const r = L.run('plan.season', reg, C, { supplied: L.dailyMaterials('plan.season', reg) });
  const makes = r.events.filter((e) => e.type === 'exit' && reg.get(e.id).kind === 'make').map((e) => e.id);
  assert.deepEqual(makes.filter((id, i) => makes.indexOf(id) !== i), []);
});

test('every skill a procedure relies on has its own procedure, and every skill is used', () => {
  const used = new Set([...reg.values()].flatMap((p) => p.requires.skills));
  for (const p of reg.values()) if (p.kind === 'skill') assert.ok(used.has(p.id), `${p.id} is never required`);
});

test('every procedure is reachable from a top-level plan', () => {
  const reached = new Set();
  for (const id of L.roots(reg)) L.trace(id, reg).forEach((e) => reached.add(e.id));
  for (const p of reg.values()) if (p.kind !== 'skill') assert.ok(reached.has(p.id), `${p.id} is never called`);
});

test('the season needs nothing beyond the kit, the site and procedures it calls', () => {
  assert.deepEqual(L.roots(reg), ['plan.season']);
  const n = L.needs('plan.season', reg, C);
  assert.deepEqual(n.toMake, []);
  for (const t of n.carried) assert.ok(C.KIT.includes(t));
  for (const m of n.inputs) assert.equal(C.MATERIALS[m.id].source, 'site', `${m.id} is an input but is not on the site`);
});

test('every design number a procedure quotes comes from params.js', () => {
  for (const p of reg.values()) for (const k of L.placeholders(p)) assert.ok(k in params, `${p.id} quotes {${k}}, which params.js does not define`);
});

test('no procedure hard-codes a stove size that params.js provides', () => {
  // A bare "110 cm" in text would drift the next time the design changes.
  const sizes = ['stove.riserHeight', 'stove.tunnelLength', 'chimney.top'].map((k) => String(params[k]));
  for (const p of reg.values()) if (p.id.startsWith('stove.')) for (const t of L.texts(p)) for (const v of sizes) {
    assert.ok(!new RegExp(`(^|[^\\d.{])${v.replace('.', '\\.')} ?c?m\\b`).test(t), `${p.id} writes ${v} directly: "${t}"`);
  }
});

test('every catalog name that quotes a design number can be filled in', () => {
  for (const [id, x] of [...Object.entries(C.TOOLS), ...Object.entries(C.MATERIALS)]) {
    for (const m of x.name.matchAll(/\{([a-zA-Z.]+)\}/g)) assert.ok(m[1] in params, `${id} quotes {${m[1]}}`);
  }
});
