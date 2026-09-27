// Sow and mulch the bed
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plant.sow',
    kind: 'task',
    title: 'Sow and mulch the bed',
    purpose: 'Sow four rows along the bed and mulch between them.',
    requires: { tools: ['tape-measure', 'rake', 'work-gloves'], materials: [{ id: 'seeds', qty: G.seedPackets }, { id: 'settled-bed', qty: 1 }, { id: 'straw', qty: 1 }], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: ['The soil has settled and is damp, not wet.'],
    steps: [
      { call: 'soil.settle' },
      'Rake the surface fine.',
      'Draw four shallow drills the length of the bed, 25 cm apart, with the corner of the rake, to the depth on each packet.',
      'Sow thinly along each drill, one packet to a row.',
      'Cover the seed and firm it with the back of the rake.',
      'Label each row with the empty packet on a stick.',
      'Tease the straw apart and lay it 5 cm deep between the rows, 5 cm back from each drill so the seedlings can come up.',
    ],
    checks: ['Four labelled rows, covered and firmed, with straw between them and every drill clear.'],
    safety: [],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
