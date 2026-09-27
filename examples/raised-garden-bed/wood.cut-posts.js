// Cut the corner posts
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'wood.cut-posts',
    kind: 'gather',
    title: 'Cut the corner posts',
    purpose: 'Cut the post into four corner posts as tall as the bed.',
    requires: { tools: ['tape-measure', 'hand-saw', 'speed-square'], materials: [{ id: 'cedar-post', qty: G.postSticks }], skills: ['skill.measure-cut'] },
    produces: { tools: [], materials: [{ id: 'corner-posts', qty: 4 }] },
    preconditions: [],
    steps: [
      'Mark four lengths of {cut.postLength} cm, squaring each line round all four faces.',
      'Saw each one, turning the post to follow the line on every face.',
    ],
    checks: ['Four posts of {cut.postLength} cm that stand upright on their own.'],
    safety: [],
    estimate: { hours: 0.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
