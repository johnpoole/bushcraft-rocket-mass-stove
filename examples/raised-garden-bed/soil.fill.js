// Fill the bed
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'soil.fill',
    kind: 'task',
    builds: ['soil'],
    title: 'Fill the bed',
    purpose: 'Fill the frame with the mixed soil and rake it level.',
    requires: { tools: ['rake', 'spade'], materials: [{ id: 'soil-mix', qty: G.fill }], skills: ['skill.lift'] },
    produces: { tools: [], materials: [] },
    preconditions: ['The mesh floor is in.'],
    steps: [
      { call: 'soil.mix' },
      'Spread each load across the bed as it goes in, so no corner is left short.',
      'Rake the top level, 2 to 3 cm above the boards. It will settle.',
    ],
    checks: ['The soil stands level just above the top of the boards, with no hollows.'],
    safety: [],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
