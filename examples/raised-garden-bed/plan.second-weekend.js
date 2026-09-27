// Second weekend: fill and sow
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plan.second-weekend',
    kind: 'plan',
    title: 'Second weekend: fill and sow',
    purpose: 'Fill the bed, let the soil settle, then sow and mulch it.',
    window: { from: 7, to: 12 },
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'soil.fill' },
      { call: 'plant.sow' },
    ],
    checks: ['The bed is full, sown and mulched.'],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
