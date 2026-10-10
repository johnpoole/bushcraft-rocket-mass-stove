const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { build, out } = require('../pick-2/build.js');

test('the pick 2 checklist carries the current instructions (run node pick-2/build.js if not)', () => {
  const file = fs.readFileSync(path.join(__dirname, '..', 'pick-2', 'design.js'), 'utf8');
  assert.equal(file, out(build()));
});

test('every size in the pick 2 checklist is filled in', () => {
  assert.doesNotMatch(out(build()), /\{[a-z][A-Za-z0-9]*\.[A-Za-z0-9.]+\}/);
});

test('every pick 2 site change still finds the text it replaces', () => {
  assert.deepEqual(build().unused.map((c) => c.find), []);
});

test('no lake-shore wording is left in the pick 2 checklist', () => {
  assert.doesNotMatch(out(build()), /\blake\b|lakeshore|high-water|east arm|rock ledge/i);
});
