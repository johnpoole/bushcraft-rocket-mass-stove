// Assemble the frame
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'frame.assemble',
    kind: 'gather',
    title: 'Assemble the frame',
    purpose: 'Screw the boards to the corner posts to make the open box.',
    requires: {
      tools: ['drill-driver', 'speed-square', 'tape-measure'],
      materials: [{ id: 'side-boards', qty: G.pieces }, { id: 'corner-posts', qty: 4 }, { id: 'deck-screws', qty: G.screwBoxes }],
      skills: ['skill.drive-screws', 'skill.measure-cut'],
    },
    produces: { tools: [], materials: [{ id: 'bed-frame', qty: 1 }] },
    preconditions: ['Work on flat ground near the bed.'],
    steps: [
      { call: 'wood.cut-boards' },
      { call: 'wood.cut-posts' },
      'Lay a long board on edge. Stand a post inside each end, flush with the board\'s end and top.',
      'Drive {screws.perJoint} screws through the board into each post.',
      'Add the second long board below the first, tight against it, and screw it the same way.',
      'Build the other long side the same way.',
      'Stand the two sides up and fit the end pieces between them, against the posts, and screw them to the posts.',
    ],
    checks: [
      'All {screws.count} screws in, heads flush.',
      'The two diagonals of the box measure the same, within 1 cm.',
    ],
    safety: ['Keep your free hand out of line with the screw.'],
    estimate: { hours: 2 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
