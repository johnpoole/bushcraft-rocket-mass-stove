// Carve net floats
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.net-floats",
    "kind": "gather",
    "title": "Carve net floats",
    "purpose": "Make floats to hold the top of the gill net up, since the kit net has none.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "net-floats",
          "qty": 13
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Find dry, dead, standing spruce or pine about 5 cm thick, light for its size. Wood that has lain on the ground is waterlogged and sinks.",
      "Saw it into 13 pieces, each 15 cm long.",
      "Carve a groove 1 cm deep around the middle of each piece, so a tie does not slip off.",
      "Drop each one in the lake: keep only those that float with more than half their thickness above the water."
    ],
    "checks": [
      "13 floats, 15 cm long, each floating at least half out of the water."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
