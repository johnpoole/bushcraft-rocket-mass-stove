// Set the frame level
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'frame.place',
    kind: 'task',
    builds: ['frame'],
    title: 'Set the frame level',
    purpose: 'Put the frame on the marked spot and bed it level and square.',
    requires: { tools: ['level', 'spade', 'tape-measure'], materials: [{ id: 'bed-frame', qty: 1 }], skills: ['skill.lift'] },
    produces: { tools: [], materials: [] },
    preconditions: ['The bed is marked out.'],
    steps: [
      { call: 'frame.assemble' },
      'With a helper, carry the frame to the stakes and set it inside them.',
      'Lay the level along each side. Dig the soil away under the high corners until every side is level.',
      'Check the diagonals again and nudge the frame square.',
      'Pull the stakes.',
    ],
    checks: ['The level reads true along all four sides, and the diagonals match within 1 cm.'],
    safety: ['Lift the frame with two people. It weighs around 60 kg.'],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
