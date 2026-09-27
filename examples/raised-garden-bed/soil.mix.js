// Mix the soil
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'soil.mix',
    kind: 'gather',
    title: 'Mix the soil',
    purpose: 'Mix topsoil and compost three to two, enough to fill the bed with 10% over for settling.',
    requires: {
      tools: ['wheelbarrow', 'spade'],
      materials: [{ id: 'topsoil', qty: G.topsoil }, { id: 'compost', qty: G.compost }],
      skills: ['skill.lift'],
    },
    produces: { tools: [], materials: [{ id: 'soil-mix', qty: G.topsoil + G.compost }] },
    preconditions: ['The topsoil and compost are delivered, in separate heaps, close to the bed.'],
    steps: [
      'Load the barrow with three spades of topsoil, then two of compost.',
      'Turn the load over twice in the barrow with the spade.',
      'Tip it into the bed and repeat until both heaps are used: {soil.topsoil} m³ of topsoil and {soil.compost} m³ of compost.',
    ],
    checks: ['No streaks of plain compost or plain topsoil show in the bed.'],
    safety: ['Fill the barrow no more than two-thirds. Push, don\'t pull, on slopes.'],
    estimate: { hours: 3, note: 'About half a cubic metre an hour, barrowing a short distance.' },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
