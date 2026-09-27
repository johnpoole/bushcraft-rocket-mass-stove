// Water the soil in and let it settle
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'soil.settle',
    kind: 'task',
    title: 'Water the soil in and let it settle',
    purpose: 'Soak the whole depth so it settles before sowing.',
    requires: { tools: ['garden-hose'], materials: [{ id: 'water', qty: G.firstWater }], skills: [] },
    produces: { tools: [], materials: [{ id: 'settled-bed', qty: 1 }] },
    preconditions: ['The bed is full.'],
    steps: [
      'Water the bed with a gentle spray, about {soil.firstWater} litres in all, in three passes an hour apart.',
      'Leave it two days.',
      'Top up any low spots with soil from the heap and rake level, 3 to 5 cm below the top of the boards.',
    ],
    checks: ['A finger pushed in to the knuckle comes out damp, and the soil sits 3 to 5 cm below the boards.'],
    safety: [],
    estimate: { hours: 0.5, waitDays: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
