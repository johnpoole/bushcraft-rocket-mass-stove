// Dimensions of the one-person shelter built around the rocket mass stove.
// Three living trees stand at the north-west, south-west and south-east corners and a
// post at the north-east corner. Metres. x runs west from the inside of the east wall,
// z runs south from the inside of the back wall toward the stream, y is up from the floor.
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
    // Stone and cob to 1 m, then a hollow log lined with clay, lashed to a post beside it.
    chimney: { outer: 0.4, z: 1.25, roofClearance: 0.15, top: 2.35, masonryHeight: 1.0, logOuter: 0.28, braceGap: 0.3 },
    stream: { distance: 25, drop: 2.5 },
    // Chosen by searching the build guide's ranges with simulator/model.js: a tall riser keeps
    // more heat and starts better from cold; a 6 cm cooktop gap leaves room for soot.
    // The burn tunnel floor is level with the shelter floor, and a step brings the cooktop to working height.
    stove: {
      riserHeight: 110, tunnelLength: 40, riserSize: 10, feedSize: 10, feedHeight: 30,
      riserInsulation: 8, topGap: 6, sideGap: 5, benchCover: 20,
    },
    domeWall: 0.08,
    step: { x0: 0.72, x1: 1.12, z0: 0.82, z1: 1.22, workingHeight: 0.95 },
    // Buried base under the core: dry stone to drain, light clay on top to keep heat out of the ground.
    coreBase: { stone: 0.1, lightClay: 0.1 },
    drainDepth: 0.3,
    // L-shaped counter in the south-east corner: one leg along the east wall for food prep,
    // one along the front wall holding the water basin. Room is left in front of the feed tube.
    counter: { height: 0.8, depth: 0.45, feedClearance: 0.45, frontEnd: 0.85, top: 0.06, wallGap: 0.12 },
    basin: { length: 0.36, width: 0.3, height: 0.16 },
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

  const api = { S, derived, stoveChanges };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ShelterLayout = api;
})(this);
