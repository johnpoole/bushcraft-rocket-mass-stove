// Cut stakes
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.stakes",
    "kind": "gather",
    "title": "Cut stakes",
    "purpose": "Cut pointed stakes for the walls, the weir, racks and the counter.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "stakes",
          "qty": 10
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Cut straight live or freshly dead poles 5–8 cm thick with the saw.",
      "Saw them to the length the job needs, measured with the measuring stick. Walls and racks take stakes about 1.5 m long; the weir takes 1.2 m.",
      "Stand each one on the chopping block and sharpen the thick end to a point with the axe, turning it a quarter turn between strokes, over the last 20 cm."
    ],
    "checks": [
      "Ten stakes, each with a centred point that goes in straight when driven."
    ],
    "safety": [],
    "estimate": {
      "hours": 1,
      "note": "About 5 minutes a stake."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
