// Thin the seedlings two weeks after sowing
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plan.thinning',
    kind: 'plan',
    title: 'Thin the seedlings two weeks after sowing',
    purpose: 'Wait until the seedlings have their first true leaves, then thin them.',
    window: { from: 24, to: 30 },
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [{ call: 'plant.thin' }],
    checks: ['Every row is thinned.'],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
