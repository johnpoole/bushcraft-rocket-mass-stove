// Thin the seedlings
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plant.thin',
    kind: 'task',
    title: 'Thin the seedlings',
    purpose: 'Give each seedling room to grow.',
    requires: { tools: ['tape-measure'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: ['The seedlings have their first true leaves.'],
    steps: [
      'Pinch out the weakest seedlings until the rest stand at the spacing on the packet.',
      'Water the row afterwards to settle the ones left.',
    ],
    checks: ['Every row at its packet spacing.'],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
