// Make layout stakes and a string line
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'make.layout-stakes',
    kind: 'make',
    title: 'Make layout stakes and a string line',
    purpose: 'Four pointed stakes and a line to mark the bed out square.',
    requires: { tools: ['hand-saw'], materials: [{ id: 'sticks', qty: 4 }, { id: 'mason-line', qty: 1 }], skills: ['skill.measure-cut'] },
    produces: { tools: ['layout-stakes'], materials: [] },
    preconditions: [],
    steps: [
      'Saw one end of each stick to a point with two angled cuts.',
      'Cut 8 m of mason line and tie one end to a stake.',
    ],
    checks: ['Four stakes that push into the ground by hand, and 8 m of line.'],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
