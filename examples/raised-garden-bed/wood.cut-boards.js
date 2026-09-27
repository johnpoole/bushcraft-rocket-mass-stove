// Cut the side boards
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'wood.cut-boards',
    kind: 'gather',
    title: 'Cut the side boards',
    purpose: 'Cut the {cut.boards} boards into the long sides and the end pieces.',
    requires: { tools: ['tape-measure', 'hand-saw', 'speed-square'], materials: [{ id: 'cedar-boards', qty: G.boards }], skills: ['skill.measure-cut'] },
    produces: { tools: [], materials: [{ id: 'side-boards', qty: G.pieces }] },
    preconditions: [],
    steps: [
      'Square one end of each board: mark a line with the speed square and saw off the rough end.',
      'Keep {cut.longPieces} boards whole as the long sides, at their full {board.length} m.',
      'Cut the remaining boards into end pieces {cut.endLength} cm long, two from each board.',
      'Mark each piece long or end in pencil.',
    ],
    checks: ['{cut.longPieces} long boards the same length and {cut.endPieces} end pieces of {cut.endLength} cm, all with square ends.'],
    safety: ['Support both sides of the cut so the saw does not pinch or the board fall on your foot.'],
    estimate: { hours: 1.5 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
