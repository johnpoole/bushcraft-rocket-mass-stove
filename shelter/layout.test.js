const test = require('node:test');
const assert = require('node:assert/strict');
const M = require('../simulator/model.js');
const { S, derived: D, stoveChanges, stage1Changes } = require('./layout.js');

test('the stove in this layout draws well with no problems', () => {
  const res = M.simulate({ ...M.DEFAULTS, ...stoveChanges });
  assert.deepEqual(M.diagnose(res).map((d) => `${d.id}: ${d.text}`), []);
  assert.ok(res.airRatio >= 1.5, `air ratio ${res.airRatio}`);
  assert.ok(res.bench.warmHours >= 8, `bench warm ${res.bench.warmHours} h`);
});

test('stage one, with only a covered duct, already draws well and starts from cold', () => {
  const p = { ...M.DEFAULTS, ...stage1Changes };
  const res = M.simulate(p);
  const ids = M.diagnose(res).map((d) => d.id);
  assert.deepEqual(ids.filter((id) => id !== 'thinMass'), [], `stage one problems: ${ids.join(', ')}`);
  assert.ok(res.airRatio >= 1.5, `air ratio ${res.airRatio}`);
  const cold = M.simulate({ ...p, coldStart: true });
  assert.ok(!cold.stalled && cold.airRatio >= 1.2, `cold start air ratio ${cold.airRatio}`);
});

test('stage one needs well under half the clay and stone of the finished stove', () => {
  const V = D.volumes;
  assert.ok(V.stage1 > 0 && V.stage2 > 0);
  assert.ok(V.stage1 < 0.5 * (V.stage1 + V.stage2), `stage one ${V.stage1.toFixed(2)} m³ of ${(V.stage1 + V.stage2).toFixed(2)} m³`);
  assert.ok(V.stage1 + V.stage2 > 0.8 && V.stage1 + V.stage2 < 2, `total ${(V.stage1 + V.stage2).toFixed(2)} m³`);
});

test('the chimney clears the riser and the roof beside it', () => {
  assert.ok(D.chimneyTop - D.riserTop >= 0.6, `chimney ${D.chimneyTop} riser ${D.riserTop}`);
  assert.ok(D.chimneyTop - D.roofBesideChimney >= 0.6, `chimney ${D.chimneyTop} roof beside it ${D.roofBesideChimney}`);
  assert.ok(D.chimneyX - S.chimney.outer / 2 > D.roofWestEdge, 'chimney touches the roof edge');
});

test('the chimney is stone and cob all the way up, with no wood in the flue', () => {
  assert.deepEqual(Object.keys(S.chimney).filter((k) => /log|brace|masonry/i.test(k)), [], 'chimney layout still has a log part');
  const flue = (S.stove.riserSize / 100) ** 2;
  assert.ok(D.volumes.chimneyBase >= (S.chimney.outer ** 2 - flue) * S.chimney.top - 1e-9, 'chimney volume does not reach the top');
});

test('the channel run is within the guide limit of 3–4 m plus the duct to the chimney and the climb out of the pit', () => {
  const flat = D.channelLength - D.channelRise;
  assert.ok(flat >= 3 && flat <= 4.5, `level channel ${flat} m`);
});

test('the stove sits on an insulated base with no open pit, and the step brings the cooktop to working height', () => {
  const work = D.cooktopTop - D.stepHeight;
  assert.ok(work >= 0.9 && work <= 1.0, `cooktop ${work.toFixed(2)} m above the step`);
  assert.ok(D.stepHeight >= 0 && D.stepHeight <= 0.35, `step ${D.stepHeight} m`);
  assert.ok(D.feedTop >= 0.25, `feed tube opening only ${D.feedTop} m above the floor`);
  assert.equal(D.coreBase, 0, 'the burn tunnel floor should be level with the shelter floor');
  assert.ok(S.stove.riserHeight >= 2 * S.stove.tunnelLength, `riser ${S.stove.riserHeight} cm is under twice the tunnel ${S.stove.tunnelLength} cm`);
  assert.ok(S.coreBase.lightClay >= 0.1, `light clay under the core ${S.coreBase.lightClay} m`);
  assert.ok(S.drainDepth > -D.base.y0, `drain ${S.drainDepth} m is not below the base at ${-D.base.y0} m`);
  assert.ok(D.channelRise > 0, 'the channel must rise from the core toward the chimney');
});

test('every place ash settles has a cleanout you can reach', () => {
  const byId = Object.fromEntries(D.cleanouts.map((c) => [c.id, c]));
  assert.equal(D.cleanouts.length, stoveChanges.bends + 2);
  const dome = byId.dome;
  assert.ok(dome.y0 >= 0 && dome.y1 <= 0.2, 'dome cleanout must sit at floor level');
  assert.ok(dome.x0 > D.feed.x + 0.11 && dome.x1 <= D.core.x1, 'dome cleanout blocked by the feed tube');
  assert.ok(dome.x1 - dome.x0 >= 0.1, `dome cleanout only ${(dome.x1 - dome.x0).toFixed(2)} m wide`);
  assert.ok(D.counter.z0 - dome.z >= 0.4, 'counter blocks the dome cleanout');
  assert.deepEqual([byId.bend1.x, byId.bend1.z], [D.bendX, D.channelZ]);
  assert.deepEqual([byId.bend2.x, byId.bend2.z], [D.bendX, S.chimney.z]);
  assert.ok(byId.chimney.x > S.inside.x + S.wall, 'chimney cleanout must be outside');
});

test('the log walls leave the door, vent and air inlet open and stop short of the trunks', () => {
  const d = S.log.diameter;
  const hits = (l, x0, x1) => l.axis === 'x' && l.a < x1 && l.b > x0;
  const door = D.logs.filter((l) => l.wall === 'front' && l.y - d / 2 < S.door.height && hits(l, S.door.x0, S.door.x0 + S.door.width));
  assert.deepEqual(door, [], 'a log crosses the door opening');
  const back = D.logs.filter((l) => l.wall === 'back');
  const topY = Math.max(...back.map((l) => l.y));
  assert.equal(back.filter((l) => l.y === topY && hits(l, S.vent.x0, S.vent.x1)).length, 0, 'no vent in the top course of the back wall');
  for (const l of D.logs) {
    assert.ok(l.y + d / 2 <= D.roofLine(l.axis === 'z' ? l.b : l.fixed) + 1e-9, `a ${l.wall} log at ${l.y.toFixed(2)} m pokes above the roof line`);
    for (const t of D.trees) {
      const [ex, ez] = l.axis === 'x' ? [[l.a, l.fixed], [l.b, l.fixed]] : [[l.fixed, l.a], [l.fixed, l.b]];
      for (const [x, z] of [ex, ez]) assert.ok(Math.hypot(x - t.x, z - t.z) >= S.tree.radius + S.log.trunkGap - 1e-9, `a ${l.wall} log end touches a trunk`);
    }
  }
  assert.ok(D.logLength > 50 && D.logLength < 200, `wall logs ${D.logLength.toFixed(0)} m in all`);
});

test('nothing inside the shelter runs into a trunk', () => {
  const rects = [
    ['counter', D.counter.x0, D.counter.z0, D.counter.x1, D.counter.z1],
    ['counter front leg', D.counter.x1, D.counter.frontZ0, D.counter.frontX1, D.counter.z1],
    ['bench', D.core.x1, S.backGap, S.inside.x, S.backGap + S.bench.width],
    ['seat', D.legX0, S.backGap + S.bench.width, S.inside.x, S.inside.z - 0.1],
  ];
  for (const [name, x0, z0, x1, z1] of rects) for (const t of D.trees) {
    const dx = Math.max(x0 - t.x, 0, t.x - x1), dz = Math.max(z0 - t.z, 0, t.z - z1);
    assert.ok(Math.hypot(dx, dz) >= S.tree.radius - 1e-9, `${name} runs into a trunk`);
  }
});

test('the camp keeps food and fish waste away from the shelter and the fish work at the water', () => {
  const C = D.camp;
  assert.ok(C.cacheToShelter >= 30 && C.cacheToShelter <= 60, `food cache ${C.cacheToShelter.toFixed(1)} m from the shelter`);
  assert.ok(S.camp.cache.height >= 4, `food cache only ${S.camp.cache.height} m up`);
  assert.ok(C.cacheToTrunk >= 1.5, `food cache ${C.cacheToTrunk.toFixed(2)} m from a trunk, a bear can reach it`);
  assert.ok(C.cleaningToShore <= 1 && C.cleaningToShelter >= 20, `cleaning rock ${C.cleaningToShelter.toFixed(1)} m from the shelter, ${C.cleaningToShore.toFixed(1)} m from the water`);
  assert.ok(C.smokeRackToShelter >= 10, `smoke rack ${C.smokeRackToShelter.toFixed(1)} m from the shelter`);
  assert.ok(C.smokeRackToShore > 0 && C.smokeRackToShore <= 5, `smoke rack ${C.smokeRackToShore.toFixed(1)} m from the water`);
  assert.ok(C.winterCacheToShelter >= 8 && C.winterCacheToShelter <= 20, `winter cache ${C.winterCacheToShelter.toFixed(1)} m from the shelter`);
  assert.ok(C.shelterToShore >= 20, `shelter only ${C.shelterToShore.toFixed(1)} m from the water`);
  assert.ok(C.weirToShelter <= 35, `weir ${C.weirToShelter.toFixed(1)} m from the shelter`);
  assert.ok(C.creekToShelter >= 10, `creek only ${C.creekToShelter.toFixed(1)} m from the shelter`);
  assert.ok(C.weirToCleaning >= 5, `cleaning rock ${C.weirToCleaning.toFixed(1)} m from the weir, guts would foul it`);
  assert.ok(S.lake.shoreZ - S.camp.weir.z >= 1 && S.lake.shoreZ - S.camp.weir.z <= 5, 'weir should sit just above the creek mouth');
  assert.ok(S.camp.snares >= 15 && C.snareLineLength >= 30, `snare line ${C.snareLineLength.toFixed(0)} m with ${S.camp.snares} snares`);
});

test('no young spruce grows in or against the shelter', () => {
  const c = S.camp.spruceClearance, w = S.wall;
  const inside = D.camp.youngSpruce.filter(({ x, z }) => x > -w - c && x < S.inside.x + w + c && z > -w - c && z < S.inside.z + w + c);
  assert.deepEqual(inside, [], `young spruce within ${c} m of the shelter`);
  assert.ok(D.camp.youngSpruce.length >= 15, `only ${D.camp.youngSpruce.length} young spruce along the snare line`);
});

test('the step stays clear of the cleanout, the feed tube, the bench and the counter', () => {
  const s = S.step, dome = D.cleanouts.find((c) => c.id === 'dome');
  assert.ok(s.x0 >= dome.x1 + 0.05, 'step covers the dome cleanout');
  assert.ok(s.x0 >= D.feed.x + 0.22 + 0.05, 'step sits on the hearth stone in front of the feed tube');
  assert.ok(s.z0 >= S.backGap + S.bench.width, 'step overlaps the bench');
  assert.ok(s.x0 >= D.counter.x1, 'step overlaps the counter');
  assert.ok(s.x0 - D.core.x1 <= 0.1, 'step too far from the cooktop to reach it');
});

test('the stove sizes stay inside the build guide ranges', () => {
  const st = S.stove;
  assert.ok(st.riserHeight >= 80 && st.riserHeight <= 120);
  assert.ok(st.riserHeight >= 2 * st.tunnelLength);
  assert.ok(st.tunnelLength >= 30 && st.tunnelLength <= 40);
  assert.ok(st.topGap >= 5 && st.topGap <= 8);
  assert.ok(st.benchCover >= 15 && st.benchCover <= 25);
  assert.ok(st.riserInsulation >= 8 && st.riserInsulation <= 10);
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
  assert.ok(D.baseToTree >= 1.0, `stove base ${D.baseToTree.toFixed(2)} m from a trunk`);
  assert.ok(D.chimneyToTree >= 0.6, `chimney ${D.chimneyToTree.toFixed(2)} m from a trunk`);
  assert.ok(S.tree.lowestBranch - D.chimneyTop >= 2, `branches ${S.tree.lowestBranch - D.chimneyTop} m above the chimney top`);
});

test('the trees stand at three corners in a right angle', () => {
  const { treeNW: a, treeSW: b, treeSE: c } = D.corners;
  const dot = (a.x - b.x) * (c.x - b.x) + (a.z - b.z) * (c.z - b.z);
  assert.equal(Math.abs(dot) < 1e-9, true, 'no right angle at the south-west tree');
  assert.ok(D.treeSpacing.x > S.inside.x && D.treeSpacing.z > S.inside.z);
});
