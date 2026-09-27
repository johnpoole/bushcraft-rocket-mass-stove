const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const L = require('../engine/lib.js');
const S = require('../engine/schedule.js');
const { checkProject } = require('../engine/check.js');
const { assemble } = require('../engine/catalog.js');
const dir = path.join(__dirname, '..', 'examples', 'raised-garden-bed');
const C = require(path.join(dir, 'catalog.js'));
const { load } = require(path.join(dir, 'index.js'));
const project = require(path.join(dir, 'project.js'));

// A fresh, editable copy of the garden project to break in different ways.
const fresh = () => {
  const procs = load().map((p) => JSON.parse(JSON.stringify(p)));
  const cat = JSON.parse(JSON.stringify(C));
  return { reg: L.byId(procs), cat, root: project.root, params: project.params(), parts: { ...project.parts() } };
};
const problems = (mutate) => { const p = fresh(); mutate(p); return checkProject(p).join('\n'); };

test('the unbroken garden has no problems, so each break below is what the checker finds', () => {
  assert.equal(problems(() => {}), '');
});

test('the checker catches a call to a procedure that does not exist', () => {
  assert.match(problems(({ reg }) => reg.get('plan.first-weekend').steps.push({ call: 'site.nowhere' })), /calls "site\.nowhere", which does not exist/);
});

test('the checker catches a tool that nothing provides', () => {
  assert.match(problems(({ reg }) => reg.get('plant.thin').requires.tools.push('chainsaw')), /unknown tool "chainsaw"/);
});

test('the checker catches a bought item with no price', () => {
  assert.match(problems(({ cat }) => { delete cat.MATERIALS.topsoil.cost; }), /material "topsoil" is bought but has no cost/);
});

test('the checker catches a material used when nothing has made it', () => {
  assert.match(problems(({ reg }) => { reg.get('frame.place').steps = reg.get('frame.place').steps.filter((s) => !s.call); }),
    /frame\.place uses bed-frame but does not call frame\.assemble|needs 1 count of bed-frame/);
});

test('the checker catches a procedure that calls itself through others', () => {
  assert.match(problems(({ reg }) => reg.get('soil.mix').steps.push({ call: 'soil.fill' })), /cycle/);
});

test('the checker catches a procedure nothing calls', () => {
  assert.match(problems(({ reg }) => { reg.get('plan.first-weeks').steps = reg.get('plan.first-weeks').steps.filter((s) => s.call !== 'plan.thinning'); }),
    /only top-level procedure should be "plan\.build-bed"/);
});

test('the checker catches a quoted number the project does not define', () => {
  assert.match(problems(({ reg }) => reg.get('plant.thin').steps.push('Space them {bed.spacing} cm apart.')), /quotes \{bed\.spacing\}/);
});

test('a kit tool must be on the kit list', () => {
  assert.match(problems(({ cat }) => { cat.KIT = cat.KIT.filter((t) => t !== 'spade'); }), /tool "spade" says kit but is not in the kit list/);
});

test('the catalog merger refuses a part that redefines something', () => {
  assert.throws(() => assemble({ KIT: [], TOOLS: { axe: {} }, MATERIALS: {} }, { extra: { TOOLS: { axe: {} } } }), /catalog part "extra" redefines tool "axe"/);
});

test('calendars: fixed, weekly and daylight hours, and a clear error for a bad one', () => {
  assert.equal(S.workHours({ start: '2027-01-04', hours: { type: 'fixed', hours: 4 } }, 3).work, 4);
  const weekly = { start: '2027-04-24', hours: { type: 'weekly', hours: [6, 1, 1, 1, 1, 1, 6] } };
  assert.deepEqual([0, 1, 2].map((d) => S.workHours(weekly, d).work), [6, 6, 1]);   // Saturday, Sunday, Monday
  const north = { start: '2026-12-21', hours: { type: 'daylight', latitude: 62.5 } };
  const light = S.workHours(north, 0).light;
  assert.ok(light > 4.5 && light < 5.5, `midwinter daylight at 62.5°N ${light.toFixed(2)} h`);
  assert.throws(() => S.workHours({ start: '2027-01-01', hours: { type: 'moon' } }, 0), /fixed, weekly or daylight/);
  assert.throws(() => S.run(project.root, fresh().reg, C, L, { start: 'soon' }), /calendar\.start must be a date/);
});

test('the camp calendar gives the same working day the camp scheduler used before', () => {
  const camp = require('../procedures/project.js');
  const { work, light } = S.workHours(camp.calendar, 0);
  const expected = Math.max(3, Math.min(10, S.daylight(258, 62.5) - 1));
  assert.ok(Math.abs(work - expected) < 1e-9 && light > 12, `day one ${work.toFixed(2)} h of work in ${light.toFixed(2)} h of light`);
});

test('the checker catches a design part nothing builds, and a procedure building a part the design lacks', () => {
  assert.match(problems(({ parts }) => { parts.trellis = 'Trellis'; }), /design part "trellis" is built by no procedure/);
  assert.match(problems(({ reg }) => { reg.get('plant.thin').builds = ['greenhouse']; }), /plant\.thin builds "greenhouse", which is not a part of the design/);
  assert.match(problems(({ reg }) => { reg.get('plan.thinning').builds = ['rows']; }), /a plan cannot build a design part/);
});
