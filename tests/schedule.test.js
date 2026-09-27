const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../procedures/lib.js');
const C = require('../procedures/catalog.js');
const S = require('../procedures/schedule.js');
const { load } = require('../procedures/index.js');

// A tiny made-up plan, so the engine can be checked against numbers worked out by hand.
const P = (id, kind, extra = {}) => ({
  id, kind, title: id, purpose: id,
  requires: { tools: [], materials: [], skills: [] }, produces: { tools: [], materials: [] },
  preconditions: [], steps: [], checks: ['done'], safety: [], estimate: { hours: 0 }, ...extra,
});
const toy = (routineHours = 0, window = { from: 0 }) => L.byId([
  P('plan.toy', 'plan', { window, steps: [{ call: 'task.chores' }, { call: 'make.digging-stick' }, { call: 'task.dig' }] }),
  P('task.chores', 'task', { repeat: 'daily', estimate: { hours: routineHours } }),
  P('make.digging-stick', 'make', { produces: { tools: ['digging-stick'], materials: [] }, estimate: { hours: 4, waitDays: 2 } }),
  P('task.dig', 'task', { requires: { tools: ['digging-stick'], materials: [], skills: [] }, estimate: { hours: 12 } }),
]);
const opts = { days: 20, maxWorkHours: 8, overheadHours: 0, minWorkHours: 0 };

test('daylight at 62.5° N matches the almanac within a quarter hour', () => {
  assert.ok(Math.abs(S.daylight(258, 62.5) - 12.8) < 0.25);  // 15 September
  assert.ok(Math.abs(S.daylight(355, 62.5) - 4.9) < 0.25);   // 21 December
  assert.ok(S.daylight(172, 62.5) > 19.5);                     // 21 June
});

test('a job waits for the tool it needs and for that tool\'s wait days', () => {
  const r = S.run('plan.toy', toy(), C, L, opts);
  const stick = r.jobs.find((j) => j.id === 'make.digging-stick'), dig = r.jobs.find((j) => j.id === 'task.dig');
  assert.equal(r.done[stick.index], 0);
  const firstDig = r.days.findIndex((d) => d.did.some((x) => x.id === 'task.dig'));
  assert.equal(firstDig, 3, 'made on day 0, two days of waiting, dug from day 3');
  assert.equal(r.done[dig.index], 4, '12 hours at 8 hours a day');
});

test('daily routines come out of the working day before any building', () => {
  const r = S.run('plan.toy', toy(6), C, L, opts);
  assert.ok(r.days.every((d) => d.buildHours <= 2 + 1e-9));
  const dig = r.jobs.find((j) => j.id === 'task.dig');
  assert.equal(r.done[dig.index], 9, 'two free hours a day: the stick takes days 0–1, the dig days 4–9');
});

test('nothing in a plan starts before its window opens, and jobs past their window are reported late', () => {
  const r = S.run('plan.toy', toy(0, { from: 5, to: 6 }), C, L, opts);
  assert.ok(r.days.slice(0, 5).every((d) => d.buildHours === 0));
  assert.ok(r.late.some((x) => x.id === 'task.dig'));
});

test('the season schedules every job the stock-aware run does, in an order its tools and materials allow', () => {
  const reg = L.byId(load());
  const r = S.run('plan.season', reg, C, L);
  const ran = L.run('plan.season', reg, C, { supplied: L.dailyMaterials('plan.season', reg) }).events
    .filter((e) => e.type === 'exit' && !['plan', 'skill'].includes(reg.get(e.id).kind));
  assert.equal(r.jobs.length, ran.length);
  assert.ok(Math.abs(r.needed - ran.reduce((t, e) => t + reg.get(e.id).estimate.hours, 0)) < 1e-6);
  for (const j of r.jobs) for (const d of j.deps) {
    if (r.done[j.index] !== null) assert.ok(r.done[d] !== null && r.done[d] <= r.done[j.index], `${j.id} finished before ${r.jobs[d].id}`);
  }
  assert.ok(r.built <= r.days.reduce((t, d) => t + d.work, 0));
});

test('a routine step counts only once the tool it needs exists: no weir checks before the weir', () => {
  const reg = L.byId([
    P('plan.toy', 'plan', { window: { from: 0 }, steps: [{ call: 'task.chores' }, { call: 'make.digging-stick' }] }),
    P('task.chores', 'task', { repeat: 'daily', steps: [{ call: 'task.check' }] }),
    P('task.check', 'task', { requires: { tools: ['digging-stick'], materials: [], skills: [] }, estimate: { hours: 3 } }),
    P('make.digging-stick', 'make', { produces: { tools: ['digging-stick'], materials: [] }, estimate: { hours: 4 } }),
  ]);
  const r = S.run('plan.toy', reg, C, L, opts);
  assert.equal(r.days[0].routineHours, 0, 'the stick is made on day 0, so nothing to check yet');
  assert.equal(r.days[1].routineHours, 3);
});
