// Drive screws without splitting the wood
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'skill.drive-screws',
    kind: 'skill',
    title: 'Drive screws without splitting the wood',
    purpose: 'Screw boards to posts so the heads sit flush and the ends don\'t split.',
    requires: { tools: ['drill-driver'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Keep screws at least 3 cm from the end of a board.',
      'Hold the driver in line with the screw, press firmly, and drive at low speed.',
      'Stop as the head reaches the surface.',
    ],
    checks: [],
    safety: ['Wear eye protection if the bit slips out of the head.'],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
