const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const L = require('../engine/lib.js');
const S = require('../engine/schedule.js');
const { checkProject } = require('../engine/check.js');
const dir = path.join(__dirname, '..', 'examples', 'raised-garden-bed');
const C = require(path.join(dir, 'catalog.js'));
const { IDS, load } = require(path.join(dir, 'index.js'));
const project = require(path.join(dir, 'project.js'));
const G = require(path.join(dir, 'design.js'));

const reg = L.byId(load());

test('the garden index lists every procedure file and nothing else', () => {
  const files = fs.readdirSync(dir).filter((f) => /^[a-z]+(\.[a-z0-9-]+)+\.js$/.test(f)).map((f) => f.slice(0, -3)).sort();
  assert.deepEqual([...IDS].sort(), files);
});

test('the garden keeps every rule the engine checks', () => {
  assert.deepEqual(checkProject({ reg, cat: C, root: project.root, params: project.params() }), []);
});

test('the cut list, screws, mesh and soil cover the bed', () => {
  assert.ok(G.topsoil + G.compost >= G.fill, `soil ${G.topsoil + G.compost} m³ for a fill of ${G.fill.toFixed(2)} m³`);
  assert.ok(G.fill >= G.volume * 1.1 - 1e-9);
  const endsPerBoard = Math.floor(G.board.length / G.innerWidth);
  assert.ok((G.boards - G.longPieces) * endsPerBoard >= G.endPieces, 'not enough boards for the end pieces');
  assert.ok(G.postSticks * Math.floor(G.post.length / G.height) >= 4, 'not enough post for four corners');
  assert.ok(G.screwBoxes * G.screwsPerBox >= G.screws);
  assert.ok(G.meshLength >= G.innerLength && G.meshWidth >= G.innerWidth, 'mesh does not cover the floor');
});

test('what the bed costs is the catalog price of everything bought, and nothing else is bought', () => {
  const n = L.needs(project.root, reg, C);
  const expected = n.boughtTools.reduce((t, id) => t + C.TOOLS[id].cost, 0)
    + n.boughtMaterials.reduce((t, m) => t + m.qty * C.MATERIALS[m.id].cost, 0);
  assert.ok(Math.abs(n.cost - expected) < 1e-9);
  assert.ok(n.cost > 300 && n.cost < 700, `cost $${n.cost.toFixed(0)}`);
  assert.equal(n.boughtMaterials.find((m) => m.id === 'cedar-boards').qty, G.boards);
  for (const m of n.inputs) assert.ok(['bought', 'site'].includes(C.MATERIALS[m.id].source), `${m.id} is neither bought nor on hand`);
});

test('on its weekend calendar the bed is built by Sunday, filled and sown the next week, and watered daily after', () => {
  const r = S.run(project.root, reg, C, L, project.calendar);
  assert.deepEqual(r.unfinished, []);
  assert.deepEqual(r.late, []);
  assert.ok(r.finish('plan.first-weekend') <= 1, `frame done on day ${r.finish('plan.first-weekend')}`);
  const settled = r.finish('soil.settle'), sown = r.finish('plant.sow');
  assert.ok(sown >= settled + 2, `sown on day ${sown}, settling finished day ${settled} with 2 days to wait`);
  const watered = r.days.filter((d) => d.routines.includes('routine.water')).map((d) => d.day);
  assert.equal(watered[0], 10);
  assert.equal(r.dateOf(0), '2027-04-24');
  assert.equal(r.days[0].work, 6);
  assert.equal(r.days[2].work, 1.5);
});
