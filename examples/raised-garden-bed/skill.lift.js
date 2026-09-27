// Lift and barrow loads safely
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'skill.lift',
    kind: 'skill',
    title: 'Lift and barrow loads safely',
    purpose: 'Move sod, soil and the frame without hurting your back.',
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Bend your knees, keep your back straight, and hold the load close.',
      'Turn with your feet, not your waist.',
      'Load a wheelbarrow no more than two-thirds full and keep the weight over the wheel.',
    ],
    checks: [],
    safety: ['Get help for anything over 25 kg.'],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
