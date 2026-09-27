// Clear the ground
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'site.clear',
    kind: 'task',
    title: 'Clear the ground',
    purpose: 'Lift the sod and weeds so the bed sits on bare soil.',
    requires: { tools: ['spade', 'wheelbarrow', 'rake', 'work-gloves'], materials: [], skills: ['skill.lift'] },
    produces: { tools: [], materials: [{ id: 'sod', qty: G.length * G.width + 1 }] },
    preconditions: ['The spot is chosen and its corners marked.'],
    steps: [
      'Cut the sod into strips a spade wide, 30 cm beyond the corner stones all round.',
      'Slide the spade under each strip, lift it, and stack it grass-down on the compost heap.',
      'Pull out any deep roots of dandelion, dock or thistle.',
      'Rake the bare soil level.',
    ],
    checks: ['Bare soil, raked level, with no grass or roots showing, 30 cm past the bed on every side.'],
    safety: ['Lift sod in small pieces. It is heavier than it looks.'],
    estimate: { hours: 3, note: 'About 1 m² every 20 minutes in turf.' },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
