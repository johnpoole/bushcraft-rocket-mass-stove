// Dimensions of the one-person shelter built around the rocket mass stove.
// Three living trees stand at the north-west, south-west and south-east corners and a
// post at the north-east corner. Metres. x runs west from the inside of the east wall,
// z runs south from the inside of the back wall toward the lake, y is up from the floor.
(function (root) {
  'use strict';

  const S = {
    inside: { x: 3.0, z: 2.1 },
    // Walls of 15 cm logs stacked between pairs of stakes on one course of flat stones.
    wall: 0.15,
    plinth: 0.15,
    log: { diameter: 0.15, trunkGap: 0.05 },
    vent: { x0: 2.0, x1: 2.4 },
    airInlet: { x0: 0.15, x1: 0.35, course: 1 },
    backHeight: 2.0,
    frontHeight: 1.2,
    roofBuild: 0.2,
    overhang: { front: 0.4, east: 0.3, west: 0.15 },
    door: { x0: 0.95, width: 0.7, height: 1.05 },
    // Light clay between the back wall and the stove and bench.
    backGap: 0.1,
    foundation: 0.1,
    bench: { width: 0.7, height: 0.45, legWidth: 0.6 },
    // Stone and cob all the way up. No wood anywhere in the flue: in stage one, with only a
    // thin duct cover, the exhaust runs hotter than the finished bench lets it.
    chimney: { outer: 0.4, z: 1.25, roofClearance: 0.15, top: 2.35 },
    // The shore runs east to west, 25 m south of the shelter and 2.5 m below it.
    lake: { shoreZ: 25, drop: 2.5 },
    // Camp for fishing and snaring. Points are ground positions in metres.
    camp: {
      smokeRack: { x: 6, z: 21.5, width: 1.5, depth: 1.0, height: 1.5 },
      cleaningRock: { x: -7, z: 24.6 },
      netPoles: { x: 12, z: 23, span: 3 },
      cache: { treeA: { x: -30, z: 10 }, treeB: { x: -26, z: 10 }, height: 4.0 },
      winterCache: { x: -9, z: 7 },
      skinningStump: { x: -2, z: 4.5 },
      snareLine: [[3.5, 1.5], [9, -2], [15, -5], [21, -3], [24, 3], [20, 8], [13, 7]],
      snares: 15,
      spruceClearance: 1.0,
      // A creek runs into the lake east of camp. The weir sits just above its mouth, and the
      // gill net is set out from the mouth to catch fish moving along the shore toward it.
      creek: { x: -14, width: 1.4 },
      weir: { z: 22.5, penRadius: 0.8 },
      gillNet: { length: 12 },
    },
    // Chosen by searching the build guide's ranges with simulator/model.js: a tall riser keeps
    // more heat and starts better from cold; a 6 cm cooktop gap leaves room for soot.
    // The burn tunnel floor is level with the shelter floor, and a step brings the cooktop to working height.
    stove: {
      riserHeight: 110, tunnelLength: 40, riserSize: 11, feedSize: 11, feedHeight: 30,
      riserInsulation: 8, topGap: 6, sideGap: 5, benchCover: 20,
    },
    domeWall: 0.08,
    // Stage one lays the channel as a stone-lined duct under flat stones; stage two packs the
    // bench mass over it.
    stage1: { ductCover: 5, ductWidth: 0.3 },
    massDensity: 1800,
    step: { x0: 0.72, x1: 1.12, z0: 0.82, z1: 1.22, workingHeight: 0.95 },
    // Buried base under the core: dry stone to drain, light clay on top to keep heat out of the ground.
    coreBase: { stone: 0.1, lightClay: 0.1 },
    drainDepth: 0.3,
    // L-shaped counter in the south-east corner: one leg along the east wall for food prep,
    // one along the front wall holding the water basin. Room is left in front of the feed tube.
    counter: { height: 0.8, depth: 0.45, feedClearance: 0.45, frontEnd: 0.85, top: 0.06, wallGap: 0.12 },
    basin: { length: 0.36, width: 0.3, height: 0.16 },
    // The kit tarp, cut in two: the outer piece sheds rain over the moss, the inner piece
    // under the moss keeps the shelter's moisture out of it.
    tarp: { width: 3.7, length: 4.9, outerLength: 2.8, lap: 0.2 },
    tree: { radius: 0.18, lowestBranch: 5.0 },
    post: { radius: 0.07 },
  };

  const w2 = S.wall / 2;
  const corners = {
    post: { x: -w2, z: -w2 },
    treeNW: { x: S.inside.x + w2, z: -w2 },
    treeSW: { x: S.inside.x + w2, z: S.inside.z + w2 },
    treeSE: { x: -w2, z: S.inside.z + w2 },
  };
  const trees = [corners.treeNW, corners.treeSW, corners.treeSE];

  const st = S.stove;
  const dome = (st.riserSize + 2 * (3 + st.riserInsulation) + 2 * st.sideGap) / 100 + 2 * S.domeWall;
  const coreX0 = S.backGap, coreZ0 = S.backGap;
  const coreX1 = coreX0 + dome;
  const riser = { x: coreX0 + dome / 2, z: coreZ0 + dome / 2 };
  const feed = { x: riser.x, z: riser.z + (S.stove.tunnelLength - S.stove.riserSize / 2 - S.stove.feedSize / 2) / 100 };
  const channelZ = S.backGap + S.bench.width / 2;
  const legX0 = S.inside.x - S.bench.legWidth;
  const bendX = legX0 + S.bench.legWidth / 2;
  const roofWestEdge = S.inside.x + S.wall + S.overhang.west;
  const chimneyX = roofWestEdge + S.chimney.roofClearance + S.chimney.outer / 2;

  const coreBase = 0;
  const channelRise = S.foundation - coreBase;
  const channelLength = (bendX - coreX1) + (S.chimney.z - channelZ) + (chimneyX - bendX) + channelRise;
  const riserTop = coreBase + S.stove.riserHeight / 100;
  const roofTop = S.backHeight + S.roofBuild;
  const chimneyTop = S.chimney.top;
  // Top surface of the roof at a distance z from the inside of the back wall.
  const roofAt = (z) => S.backHeight + (S.frontHeight - S.backHeight) * (z + S.wall / 2) / (S.inside.z + S.wall) + S.roofBuild;

  // Nearest distance from a tree trunk's surface to a rectangle on the ground.
  const trunkToRect = (x0, z0, x1, z1) => Math.min(...trees.map((t) => {
    const dx = Math.max(x0 - t.x, 0, t.x - x1), dz = Math.max(z0 - t.z, 0, t.z - z1);
    return Math.hypot(dx, dz) - S.tree.radius;
  }));

  const derived = {
    corners, trees,
    dome,
    core: { x0: coreX0, z0: coreZ0, x1: coreX1, z1: coreZ0 + dome },
    riser, feed, channelZ, legX0, bendX, chimneyX, roofWestEdge, coreBase, channelRise,
    feedTop: coreBase + S.stove.feedHeight / 100,
    channelLength, riserTop, roofTop, chimneyTop,
    roofBesideChimney: roofAt(S.chimney.z),
    sleepLength: S.inside.x - coreX1,
    cooktopTop: riserTop + st.topGap / 100 + 0.06,
    treeSpacing: { x: corners.treeNW.x - corners.treeSE.x, z: corners.treeSW.z - corners.treeNW.z },
    counter: {
      x0: 0, x1: S.counter.depth,
      z0: feed.z + 0.11 + S.counter.feedClearance, z1: S.inside.z - S.counter.wallGap,
      frontX1: S.counter.frontEnd, frontZ0: S.inside.z - S.counter.wallGap - S.counter.depth,
    },
  };
  derived.base = {
    x0: coreX0 - 0.06, z0: coreZ0 - 0.06, x1: coreX1 + 0.04, z1: feed.z + 0.15,
    y0: coreBase - S.coreBase.stone - S.coreBase.lightClay, y1: coreBase,
  };
  derived.baseToTree = trunkToRect(derived.base.x0, derived.base.z0, derived.base.x1, derived.base.z1);
  const co = S.chimney.outer / 2;
  // Removable stone plugs where ash settles: the bottom of the dome, each bend in the
  // bench channel, and the foot of the chimney.
  derived.cleanouts = [
    { id: 'dome', name: 'cleanout, bottom of the dome', x0: feed.x + 0.13, x1: coreX1 - 0.02, y0: coreBase, y1: coreBase + 0.12, z: coreZ0 + dome },
    { id: 'bend1', name: 'cleanout, first bend', x: bendX, z: channelZ, y: S.bench.height },
    { id: 'bend2', name: 'cleanout, second bend', x: bendX, z: S.chimney.z, y: S.bench.height },
    { id: 'chimney', name: 'cleanout, foot of the chimney', x: chimneyX + co, z: S.chimney.z, y0: S.foundation, y1: S.foundation + 0.12 },
  ];
  derived.chimneyToTree = trunkToRect(chimneyX - co, S.chimney.z - co, chimneyX + co, S.chimney.z + co);
  // Camp distances, measured from the middle of the shelter floor.
  const mid = { x: S.inside.x / 2, z: S.inside.z / 2 };
  const dist = (p) => Math.hypot(p.x - mid.x, p.z - mid.z);
  const C = S.camp;
  const cacheMid = { x: (C.cache.treeA.x + C.cache.treeB.x) / 2, z: (C.cache.treeA.z + C.cache.treeB.z) / 2 };
  derived.camp = {
    cacheMid,
    cacheToShelter: dist(cacheMid),
    cacheToTrunk: Math.hypot(C.cache.treeA.x - cacheMid.x, C.cache.treeA.z - cacheMid.z) - S.tree.radius,
    winterCacheToShelter: dist(C.winterCache),
    smokeRackToShelter: dist(C.smokeRack),
    smokeRackToShore: S.lake.shoreZ - C.smokeRack.z,
    cleaningToShelter: dist(C.cleaningRock),
    cleaningToShore: Math.abs(S.lake.shoreZ - C.cleaningRock.z),
    shelterToShore: S.lake.shoreZ - (S.inside.z + S.wall),
    weirToShelter: dist({ x: C.creek.x, z: C.weir.z }),
    weirToCleaning: Math.hypot(C.creek.x - C.cleaningRock.x, C.weir.z - C.cleaningRock.z),
    creekToShelter: Math.abs(C.creek.x - mid.x),
    snareLineLength: C.snareLine.slice(1).reduce((t, p, i) => t + Math.hypot(p[0] - C.snareLine[i][0], p[1] - C.snareLine[i][1]), 0),
  };

  // Young spruce scattered along the snare line, kept clear of the shelter and its trees.
  const jitter = (a, b) => Math.sin(a * 1.7 + Math.sin(b * 0.9)) * 0.5 + Math.sin(a * 0.43 + b * 1.3) * 0.35 + Math.sin(a * 3.1 - b * 2.3) * 0.15;
  const clear = S.camp.spruceClearance;
  const offShelter = (x, z) => x < -S.wall - clear || x > S.inside.x + S.wall + clear || z < -S.wall - clear || z > S.inside.z + S.wall + clear;
  derived.camp.youngSpruce = [];
  for (let i = 0; i < 26; i++) {
    const p = C.snareLine[i % C.snareLine.length];
    const x = p[0] + jitter(i, 4) * 2.4, z = p[1] + jitter(i, 8) * 2.4;
    if (offShelter(x, z)) derived.camp.youngSpruce.push({ x, z, h: 1.2 + Math.abs(jitter(i, 6)) * 1.6 });
  }

  derived.basin = {
    x: (S.counter.depth + S.counter.frontEnd) / 2,
    z: derived.counter.frontZ0 + S.counter.depth / 2,
  };
  // Wall logs, course by course. Each wall runs between its corner supports and stops short of
  // the trunks; the tops follow the roof line; the door, the vent and the air inlet are gaps.
  const roofLine = (z) => S.backHeight + (S.frontHeight - S.backHeight) * (z + w2) / (S.inside.z + S.wall);
  const d = S.log.diameter, trunkEnd = S.tree.radius + S.log.trunkGap;
  const logs = [];
  const courses = (top) => { const ys = []; for (let y = S.plinth + d / 2; y + d / 2 <= top + 1e-9; y += d) ys.push(y); return ys; };
  const addRun = (wall, axis, a, b, fixed, y, gaps = []) => {
    let pieces = [[a, b]];
    for (const [g0, g1] of gaps) pieces = pieces.flatMap(([p0, p1]) => (g1 <= p0 || g0 >= p1 ? [[p0, p1]] : [[p0, g0], [g1, p1]]));
    for (const [p0, p1] of pieces) if (p1 - p0 > 0.3) logs.push({ wall, axis, a: p0, b: p1, fixed, y });
  };
  const backTop = courses(roofLine(-w2));
  backTop.forEach((y, i) => addRun('back', 'x', corners.post.x, corners.treeNW.x - trunkEnd, -w2, y,
    i === backTop.length - 1 ? [[S.vent.x0, S.vent.x1]] : []));
  courses(roofLine(S.inside.z + w2)).forEach((y, i) => addRun('front', 'x', corners.treeSE.x + trunkEnd, corners.treeSW.x - trunkEnd, S.inside.z + w2, y,
    [...(y - d / 2 < S.door.height ? [[S.door.x0, S.door.x0 + S.door.width]] : []),
     ...(i === S.airInlet.course ? [[S.airInlet.x0, S.airInlet.x1]] : [])]));
  // End walls slope with the roof: each course stops where the roof line comes down to it.
  const zUnder = (y) => (S.backHeight - (y + d / 2)) * (S.inside.z + S.wall) / (S.backHeight - S.frontHeight) - w2;
  for (const y of courses(roofLine(-w2))) {
    const zCap = zUnder(y);
    addRun('east', 'z', corners.post.z, Math.min(corners.treeSE.z - trunkEnd, zCap), -w2, y);
    addRun('west', 'z', corners.treeNW.z + trunkEnd, Math.min(corners.treeSW.z - trunkEnd, zCap), S.inside.x + w2, y);
  }
  derived.logs = logs;

  // Clay, sand and stone for each stage, in cubic metres.
  const domeH = derived.cooktopTop - 0.06 - coreBase;
  const riserOuter = (st.riserSize + 2 * (3 + st.riserInsulation)) / 100;
  const inner = dome - 2 * S.domeWall;
  const flue = (st.riserSize / 100) ** 2;
  const core = dome * dome * domeH - inner * inner * (domeH - S.domeWall)
    + (riserOuter * riserOuter - flue) * st.riserHeight / 100 + 0.03;
  const chimneyBase = (S.chimney.outer ** 2 - flue) * S.chimney.top;
  const benchVol = (S.inside.x - coreX1) * S.bench.width * (S.bench.height - S.foundation)
    + S.bench.legWidth * (S.inside.z - 0.1 - S.backGap - S.bench.width) * (S.bench.height - S.foundation)
    - flue * channelLength;
  derived.volumes = { core, chimneyBase, bench: benchVol, stage1: core + chimneyBase, stage2: benchVol };
  // Roof over the walls, and the tarp pieces that cover it.
  const ceiling = { x: S.inside.x + 2 * S.wall, slope: Math.hypot(S.inside.z + S.wall, S.backHeight - S.frontHeight) };
  derived.tarp = {
    ceiling,
    outer: { x: S.tarp.width, slope: S.tarp.outerLength },
    inner: { x: S.tarp.width, slope: S.tarp.length - S.tarp.outerLength },
    outerNeeds: { x: ceiling.x + 2 * S.tarp.lap, slope: ceiling.slope + 2 * S.tarp.lap },
  };
  derived.tarp.innerShort = Math.max(0, ceiling.slope - derived.tarp.inner.slope);
  derived.roofLine = roofLine;
  derived.logLength = logs.reduce((t, l) => t + (l.b - l.a), 0);

  // Step height rounded to 5 cm so the cooktop sits near working height.
  derived.stepHeight = Math.round((derived.cooktopTop - S.step.workingHeight) * 20) / 20;
  derived.prepArea = (derived.counter.x1 - derived.counter.x0) * (derived.counter.z1 - derived.counter.z0);

  // Changes from the guide design in simulator/model.js that this layout makes.
  const stoveChanges = {
    channelLength: Math.round(channelLength * 100),
    bends: 2,
    riserHeight: st.riserHeight, tunnelLength: st.tunnelLength, feedHeight: st.feedHeight,
    riserInsulation: st.riserInsulation, topGap: st.topGap, sideGap: st.sideGap, benchCover: st.benchCover,
    chimneyAboveRiser: Math.round((chimneyTop - riserTop) * 100),
  };

  const stage1Changes = { ...stoveChanges, benchCover: S.stage1.ductCover };

  // The parts of the design a procedure can build, by id. Each procedure that builds one names
  // it in its `builds` list, and the 3D view shows the part from the day that procedure finishes.
  const PARTS = {
    'ditch': 'Drain ditch',
    'frame': 'Frame',
    'roof-cover': 'Roof cover',
    'roof-insulation': 'Roof insulation',
    'walls': 'Log walls',
    'stove-base': 'Stove base and drain',
    'feed-tube': 'Feed tube and hearth',
    'riser': 'Heat riser',
    'dome': 'Dome and cooktop',
    'duct': 'Stone duct',
    'bench': 'Bench',
    'chimney': 'Chimney',
    'fit-out': 'Counter and pegs',
    'water-basin': 'Water basin',
    'weir': 'Fish weir',
    'gill-net': 'Gill net',
    'net-poles': 'Net poles',
    'smoke-rack': 'Smoke rack',
    'food-cache': 'Food cache',
    'winter-cache': 'Winter cache',
    'snare-line': 'Snare line',
    'ice-gear': 'Ice gear',
  };

  const api = { S, derived, stoveChanges, stage1Changes, PARTS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ShelterLayout = api;
})(this);
