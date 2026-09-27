const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const L = require('../engine/lib.js');
const { checkProject } = require('../engine/check.js');
const C = require('../procedures/catalog.js');
const { IDS, load } = require('../procedures/index.js');
const project = require('../procedures/project.js');
const params = project.params();

const dir = path.join(__dirname, '..', 'procedures');
const reg = L.byId(load());

test('the index lists every procedure file and nothing else', () => {
  const files = fs.readdirSync(dir).filter((f) => /^[a-z]+(\.[a-z0-9-]+)+\.js$/.test(f) && !f.startsWith('catalog.')).map((f) => f.slice(0, -3)).sort();
  assert.deepEqual([...IDS].sort(), files);
  for (const id of IDS) assert.equal(reg.get(id).id, id, `${id}.js defines "${reg.get(id).id}"`);
});

test('the camp keeps every rule the engine checks', () => {
  assert.deepEqual(checkProject({ reg, cat: C, root: project.root, params }), []);
});

test('the kit is exactly the ten items taken in, and nothing is bought', () => {
  assert.equal(C.KIT.length, 10);
  const kitTools = Object.entries(C.TOOLS).filter(([, t]) => t.source === 'kit').map(([id]) => id).sort();
  assert.deepEqual(kitTools, [...C.KIT].sort());
  const bought = [...Object.entries(C.TOOLS), ...Object.entries(C.MATERIALS)].filter(([, x]) => x.source === 'bought').map(([id]) => id);
  assert.deepEqual(bought, []);
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
