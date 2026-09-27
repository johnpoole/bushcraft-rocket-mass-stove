// Build, fill and plant a raised bed
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plan.build-bed',
    kind: 'plan',
    title: 'Build, fill and plant a raised bed',
    purpose: 'A cedar bed {bed.length} × {bed.width} m and {bed.height} cm deep, built over one weekend, filled and sown the next, then watered until the seedlings are up.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: ['The lumber, screws, mesh, soil, straw and seed are bought and delivered.'],
    steps: [
      { call: 'plan.first-weekend' },
      { call: 'plan.second-weekend' },
      { call: 'plan.first-weeks' },
    ],
    checks: ['The bed stands level and square, full of soil, sown and mulched, with seedlings up and thinned.'],
    safety: [],
    estimate: { hours: 0, note: 'The hours are in the plans it calls.' },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
