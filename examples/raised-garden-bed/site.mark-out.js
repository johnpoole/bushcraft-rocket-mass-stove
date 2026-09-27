// Mark out the bed square
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'site.mark-out',
    kind: 'task',
    title: 'Mark out the bed square',
    purpose: 'Put a stake at each outside corner of the bed, with the corners square.',
    requires: { tools: ['tape-measure', 'layout-stakes'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: ['The ground is cleared.'],
    steps: [
      { call: 'make.layout-stakes' },
      'Push in a stake at one corner. Run the line {bed.length} m along the long side and set the second stake.',
      'From the first stake, measure {bed.width} m along the short side and set the third stake.',
      'Measure the diagonal from the second stake to the third. Move the third stake until it reads {bed.diagonal} cm.',
      'Set the fourth stake {bed.length} m from the third and {bed.width} m from the second.',
    ],
    checks: ['Both diagonals measure {bed.diagonal} cm, within 1 cm of each other.'],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
