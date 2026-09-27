// Measure and cut square
(function (root) {
  'use strict';
  const G = (typeof module !== 'undefined' && module.exports) ? require('./design.js') : root.GardenDesign;
  const procedure = {
    id: 'skill.measure-cut',
    kind: 'skill',
    title: 'Measure and cut square',
    purpose: 'Mark a length and saw it off square.',
    requires: { tools: ['tape-measure', 'speed-square', 'hand-saw'], materials: [], skills: [] },
    produces: { tools: [], materials: [] },
    preconditions: [],
    steps: [
      'Hook the tape on the squared end and mark the length with a V, its point on the length.',
      'Hold the speed square tight against the edge and draw the line through the point of the V.',
      'Saw on the waste side of the line, with slow full strokes, letting the saw do the work.',
    ],
    checks: [],
    safety: ['Clamp or kneel on the board. Never hold it with your hand in line with the saw.'],
    estimate: { hours: 0 },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
