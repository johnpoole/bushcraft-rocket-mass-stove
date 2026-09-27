// First weeks: water and thin
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plan.first-weeks',
    kind: 'plan',
    title: 'First weeks: water and thin',
    purpose: 'Keep the seed bed damp every day until the seedlings are up, then thin them.',
    window: { from: 10, to: 40 },
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'routine.water' },
      { call: 'plan.thinning' },
    ],
    checks: ['Seedlings are up in every row and thinned to their spacing.'],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
