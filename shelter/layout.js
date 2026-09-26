// Dimensions of the one-person shelter built around the rocket mass stove.
// Metres. x runs west along the rock face from the inside of the east wall,
// z runs out from the rock face toward the stream, y is up from the floor.
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
    rockGap: 0.1,
    foundation: 0.1,
    dome: 0.58,
    bench: { width: 0.7, height: 0.45, legWidth: 0.6 },
    chimney: { outer: 0.4, z: 1.8, roofClearance: 0.1 },
    stream: { distance: 25, drop: 2.5 },
    stove: { riserHeight: 100, tunnelLength: 40, riserSize: 10, feedSize: 10 },
    // L-shaped counter in the south-east corner: one leg along the east wall for food prep,
    // one along the front wall holding the water basin. Room is left in front of the feed tube.
    counter: { height: 0.8, depth: 0.45, feedClearance: 0.45, frontEnd: 0.85, top: 0.06 },
    basin: { length: 0.36, width: 0.3, height: 0.16 },
  };

  const coreX0 = S.rockGap, coreZ0 = S.rockGap;
  const coreX1 = coreX0 + S.dome;
  const riser = { x: coreX0 + S.dome / 2, z: coreZ0 + S.dome / 2 };
  const feed = { x: riser.x, z: riser.z + (S.stove.tunnelLength - S.stove.riserSize / 2 - S.stove.feedSize / 2) / 100 };
  const channelZ = S.rockGap + S.bench.width / 2;
  const legX0 = S.inside.x - S.bench.legWidth;
  const bendX = legX0 + S.bench.legWidth / 2;
  const roofWestEdge = S.inside.x + S.wall + S.overhang.west;
  const chimneyX = roofWestEdge + S.chimney.roofClearance + S.chimney.outer / 2;

  const channelLength = (bendX - coreX1) + (S.chimney.z - channelZ) + (chimneyX - bendX);
  const riserTop = S.foundation + S.stove.riserHeight / 100;
  const roofTop = S.backHeight + S.roofBuild;
  const chimneyTop = roofTop + 0.6;

  const derived = {
    core: { x0: coreX0, z0: coreZ0, x1: coreX1, z1: coreZ0 + S.dome },
    riser, feed, channelZ, legX0, bendX, chimneyX, roofWestEdge,
    channelLength, riserTop, roofTop, chimneyTop,
    sleepLength: S.inside.x - coreX1,
    cooktopTop: riserTop + 0.07 + 0.06,
    counter: {
      x0: 0, x1: S.counter.depth,
      z0: feed.z + 0.11 + S.counter.feedClearance, z1: S.inside.z - 0.05,
      frontX1: S.counter.frontEnd, frontZ0: S.inside.z - 0.05 - S.counter.depth,
    },
  };
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
