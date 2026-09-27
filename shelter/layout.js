// Dimensions of the one-person shelter built around the rocket mass stove.
// Three living trees stand at the north-west, south-west and south-east corners and a
// post at the north-east corner. Metres. x runs west from the inside of the east wall,
// z runs south from the inside of the back wall toward the stream, y is up from the floor.
(function (root) {
  'use strict';

  const S = {
    inside: { x: 3.0, z: 2.1 },
    wall: 0.2,
    plinth: 0.3,
    backHeight: 2.0,
    frontHeight: 1.2,
    roofBuild: 0.2,
    overhang: { front: 0.4, east: 0.3, west: 0.15 },
    door: { x0: 0.95, width: 0.7, height: 1.05 },
    // Light clay between the back wall and the stove and bench.
    backGap: 0.1,
    foundation: 0.1,
    dome: 0.58,
    bench: { width: 0.7, height: 0.45, legWidth: 0.6 },
    // Stone and cob to 1 m, then a hollow log lined with clay, lashed to a post beside it.
    chimney: { outer: 0.4, z: 1.3, roofClearance: 0.1, top: 2.35, masonryHeight: 1.0, logOuter: 0.28, braceGap: 0.3 },
    stream: { distance: 25, drop: 2.5 },
    stove: { riserHeight: 100, tunnelLength: 40, riserSize: 10, feedSize: 10, feedHeight: 30 },
    // The core stands in a stone-lined pit so the cooktop sits at cooking height.
    coreSink: 0.3,
    drainDepth: 0.5,
    // L-shaped counter in the south-east corner: one leg along the east wall for food prep,
    // one along the front wall holding the water basin. Room is left in front of the feed tube.
    counter: { height: 0.8, depth: 0.45, feedClearance: 0.45, frontEnd: 0.85, top: 0.06 },
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

  const coreX0 = S.backGap, coreZ0 = S.backGap;
  const coreX1 = coreX0 + S.dome;
  const riser = { x: coreX0 + S.dome / 2, z: coreZ0 + S.dome / 2 };
  const feed = { x: riser.x, z: riser.z + (S.stove.tunnelLength - S.stove.riserSize / 2 - S.stove.feedSize / 2) / 100 };
  const channelZ = S.backGap + S.bench.width / 2;
  const legX0 = S.inside.x - S.bench.legWidth;
  const bendX = legX0 + S.bench.legWidth / 2;
  const roofWestEdge = S.inside.x + S.wall + S.overhang.west;
  const chimneyX = roofWestEdge + S.chimney.roofClearance + S.chimney.outer / 2;

  const coreBase = S.foundation - S.coreSink;
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
    core: { x0: coreX0, z0: coreZ0, x1: coreX1, z1: coreZ0 + S.dome },
    riser, feed, channelZ, legX0, bendX, chimneyX, roofWestEdge, coreBase, channelRise,
    feedTop: coreBase + S.stove.feedHeight / 100,
    channelLength, riserTop, roofTop, chimneyTop,
    roofBesideChimney: roofAt(S.chimney.z),
    sleepLength: S.inside.x - coreX1,
    cooktopTop: riserTop + 0.07 + 0.06,
    treeSpacing: { x: corners.treeNW.x - corners.treeSE.x, z: corners.treeSW.z - corners.treeNW.z },
    counter: {
      x0: 0, x1: S.counter.depth,
      z0: feed.z + 0.11 + S.counter.feedClearance, z1: S.inside.z - 0.05,
      frontX1: S.counter.frontEnd, frontZ0: S.inside.z - 0.05 - S.counter.depth,
    },
  };
  derived.pit = { x0: coreX0 - 0.06, z0: coreZ0 - 0.06, x1: coreX1 + 0.04, z1: feed.z + 0.15 };
  derived.pitToTree = trunkToRect(derived.pit.x0, derived.pit.z0, derived.pit.x1, derived.pit.z1);
  const co = S.chimney.outer / 2;
  derived.chimneyToTree = trunkToRect(chimneyX - co, S.chimney.z - co, chimneyX + co, S.chimney.z + co);
  derived.basin = {
    x: (S.counter.depth + S.counter.frontEnd) / 2,
    z: derived.counter.frontZ0 + S.counter.depth / 2,
  };
  derived.prepArea = (derived.counter.x1 - derived.counter.x0) * (derived.counter.z1 - derived.counter.z0);

  // Changes from the guide design in simulator/model.js that this layout makes.
  const stoveChanges = {
    channelLength: Math.round(channelLength * 100),
    bends: 2,
    chimneyAboveRiser: Math.round((chimneyTop - riserTop) * 100),
  };

  const api = { S, derived, stoveChanges };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ShelterLayout = api;
})(this);
