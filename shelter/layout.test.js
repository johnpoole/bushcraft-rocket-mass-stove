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

test('the channel run is within the guide limit of 3–4 m plus the duct to the chimney and the climb out of the pit', () => {
  const flat = D.channelLength - D.channelRise;
  assert.ok(flat >= 3 && flat <= 4.5, `level channel ${flat} m`);
});

test('the sunken core puts the cooktop at cooking height and keeps the pit dry', () => {
  assert.ok(D.cooktopTop >= 0.85 && D.cooktopTop <= 1.0, `cooktop ${D.cooktopTop} m`);
  assert.ok(D.feedTop >= 0.05, `feed tube opening ${D.feedTop} m above the floor`);
  assert.ok(S.drainDepth > S.coreSink + 0.1, `drain ${S.drainDepth} m is not below the pit floor at ${S.coreSink} m`);
  assert.ok(D.channelRise > 0, 'the channel must rise from the core toward the chimney');
});

test('there is room to sleep and to stand', () => {
  assert.ok(D.sleepLength >= 2.0, `sleeping bench ${D.sleepLength} m`);
  assert.ok(S.backHeight >= 1.8, `height at the back wall ${S.backHeight} m`);
  assert.ok(S.door.height < S.frontHeight, 'door taller than the front wall');
  assert.ok(S.door.x0 > D.core.x1 && S.door.x0 + S.door.width < D.legX0, 'door blocked by the stove or bench');
});

test('the counter leaves room to feed the stove and to walk through the door', () => {
  const C = D.counter;
  assert.ok(C.z0 - (D.feed.z + 0.11) >= 0.4, `only ${(C.z0 - D.feed.z - 0.11).toFixed(2)} m clear in front of the feed tube`);
  assert.ok(C.frontX1 <= S.door.x0 - 0.05, `counter reaches ${C.frontX1} m, door starts at ${S.door.x0} m`);
  assert.ok(C.z1 <= S.inside.z && C.x0 >= 0, 'counter outside the walls');
  assert.ok(S.counter.height >= 0.7 && S.counter.height <= 0.95, `counter height ${S.counter.height} m`);
  assert.ok(D.prepArea >= 0.3, `prep area ${D.prepArea.toFixed(2)} m²`);
});

test('the basin sits on the front leg of the counter', () => {
  const C = D.counter, B = S.basin;
  assert.ok(D.basin.x - B.length / 2 >= C.x1 && D.basin.x + B.length / 2 <= C.frontX1, 'basin hangs off the counter along x');
  assert.ok(D.basin.z - B.width / 2 >= C.frontZ0 && D.basin.z + B.width / 2 <= C.z1, 'basin hangs off the counter along z');
});

test('the stove core fits inside, off the back and east walls', () => {
  assert.ok(D.core.x0 >= S.backGap && D.core.z0 >= S.backGap);
  assert.ok(D.feed.z + 0.11 < S.inside.z, 'feed tube outside the shelter');
  assert.ok(D.cooktopTop < S.backHeight - 0.5, `cooktop ${D.cooktopTop} m too close to the roof`);
});

test('the stove, pit and chimney keep clear of the trees', () => {
  const nearest = Math.min(...D.trees.map((t) => Math.hypot(t.x - D.riser.x, t.z - D.riser.z)));
  const toPost = Math.hypot(D.corners.post.x - D.riser.x, D.corners.post.z - D.riser.z);
  assert.ok(toPost < nearest, 'the stove should sit in the post corner, farthest from the trees');
  assert.ok(D.pitToTree >= 1.0, `stove pit ${D.pitToTree.toFixed(2)} m from a trunk`);
  assert.ok(D.chimneyToTree >= 0.6, `chimney ${D.chimneyToTree.toFixed(2)} m from a trunk`);
  assert.ok(S.tree.lowestBranch - D.chimneyTop >= 2, `branches ${S.tree.lowestBranch - D.chimneyTop} m above the chimney top`);
});

test('the trees stand at three corners in a right angle', () => {
  const { treeNW: a, treeSW: b, treeSE: c } = D.corners;
  const dot = (a.x - b.x) * (c.x - b.x) + (a.z - b.z) * (c.z - b.z);
  assert.equal(Math.abs(dot) < 1e-9, true, 'no right angle at the south-west tree');
  assert.ok(D.treeSpacing.x > S.inside.x && D.treeSpacing.z > S.inside.z);
});
