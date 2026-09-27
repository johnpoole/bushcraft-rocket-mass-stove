// Lay the mesh floor
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'base.lay-mesh',
    kind: 'task',
    builds: ['mesh'],
    title: 'Lay the mesh floor',
    purpose: 'Line the bottom with hardware cloth so moles and voles can\'t tunnel up into the bed.',
    requires: {
      tools: ['tin-snips', 'staple-gun', 'work-gloves', 'tape-measure'],
      materials: [{ id: 'hardware-cloth', qty: G.meshLength }, { id: 'staples', qty: 1 }],
      skills: [],
    },
    produces: { tools: [], materials: [] },
    preconditions: ['The frame is level.'],
    steps: [
      'Cut {mesh.length} m of hardware cloth with the snips.',
      'Lay it flat on the soil inside the frame, turned up 5 cm against the boards all round.',
      'Staple the turned-up edge to the boards every 10 cm.',
    ],
    checks: ['No gap anywhere between the mesh and the boards wider than a finger.'],
    safety: ['Wear gloves. Cut mesh edges are sharp.'],
    estimate: { hours: 1 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
