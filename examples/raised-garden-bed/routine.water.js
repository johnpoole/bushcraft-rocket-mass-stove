// Water the bed
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'routine.water',
    kind: 'task',
    repeat: 'daily',
    title: 'Water the bed',
    purpose: 'Keep the seed rows damp until the seedlings are established.',
    requires: { tools: ['garden-hose'], materials: [{ id: 'water', qty: 30 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Push a finger into the soil beside a row. If it is dry at the first knuckle, water.',
      'Water along the rows with a fine spray until the surface stays dark for a minute, about 30 litres.',
      'Skip the day after heavy rain.',
    ],
    checks: ['The soil beside the rows is damp at the first knuckle.'],
    safety: [],
    estimate: { hours: 0.25 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
