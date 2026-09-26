const test = require('node:test');
const assert = require('node:assert/strict');
const M = require('../simulator/model.js');
const { S, derived: D, stoveChanges } = require('./layout.js');

test('the stove in this layout draws well with no problems', () => {
  const res = M.simulate({ ...M.DEFAULTS, ...stoveChanges });
  assert.deepEqual(M.diagnose(res).map((d) => `${d.id}: ${d.text}`), []);
  assert.ok(res.airRatio >= 1.5, `air ratio ${res.airRatio}`);
  assert.ok(res.bench.warmHours >= 8, `bench warm ${res.bench.warmHours} h`);
});

test('the chimney clears the riser and the roof', () => {
  assert.ok(D.chimneyTop - D.riserTop >= 0.6, `chimney ${D.chimneyTop} riser ${D.riserTop}`);
  assert.ok(D.chimneyTop - D.roofTop >= 0.6, `chimney ${D.chimneyTop} roof ${D.roofTop}`);
  assert.ok(D.chimneyX - S.chimney.outer / 2 > D.roofWestEdge, 'chimney touches the roof edge');
});

test('the channel run is within the guide limit of 3–4 m plus the duct to the chimney', () => {
  assert.ok(D.channelLength >= 3 && D.channelLength <= 4.5, `channel ${D.channelLength} m`);
});

test('there is room to sleep and to stand', () => {
  assert.ok(D.sleepLength >= 2.0, `sleeping bench ${D.sleepLength} m`);
  assert.ok(S.backHeight >= 1.8, `height at the rock ${S.backHeight} m`);
  assert.ok(S.door.height < S.frontHeight, 'door taller than the front wall');
  assert.ok(S.door.x0 > D.core.x1 && S.door.x0 + S.door.width < D.legX0, 'door blocked by the stove or bench');
});

test('the stove core fits inside, off the rock and the east wall', () => {
  assert.ok(D.core.x0 >= S.rockGap && D.core.z0 >= S.rockGap);
  assert.ok(D.feed.z + 0.11 < S.inside.z, 'feed tube outside the shelter');
  assert.ok(D.cooktopTop < S.backHeight - 0.5, `cooktop ${D.cooktopTop} m too close to the roof`);
});
