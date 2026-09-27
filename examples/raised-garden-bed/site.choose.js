// Choose the spot
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'site.choose',
    kind: 'task',
    title: 'Choose the spot',
    purpose: 'Find level ground in full sun, in reach of the hose, with room to walk all round.',
    requires: { tools: ['tape-measure'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Watch the yard through one sunny day and note where the sun falls for 6 to 8 hours.',
      'Pick ground that is roughly level, within reach of the hose, and at least 3 m from any large tree whose roots would take the water.',
      'Measure out {bed.length} × {bed.width} m with 60 cm of path on every side, and set a stone at each corner.',
    ],
    checks: ['The spot gets 6 or more hours of direct sun, the hose reaches its far end, and there is 60 cm to walk on every side.'],
    safety: ['Call before you dig if there may be buried cables or pipes.'],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
