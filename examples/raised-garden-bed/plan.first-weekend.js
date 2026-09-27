// First weekend: site and frame
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'plan.first-weekend',
    kind: 'plan',
    title: 'First weekend: site and frame',
    purpose: 'Choose and clear the spot, then build the frame and set it level on a mesh floor.',
    window: { from: 0, to: 1 },
    requires: { tools: [], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      { call: 'site.choose' },
      { call: 'site.clear' },
      { call: 'site.mark-out' },
      { call: 'frame.place' },
      { call: 'base.lay-mesh' },
    ],
    checks: ['The empty frame stands level and square on its mesh floor.'],
    safety: [],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
