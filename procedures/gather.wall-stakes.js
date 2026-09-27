// Cut wall stakes
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.wall-stakes",
    "kind": "gather",
    "title": "Cut wall stakes",
    "purpose": "Cut the tall stakes that stand in pairs at the ends of each wall and hold the logs in place.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.felling",
        "skill.saw",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "wall-stakes",
          "qty": 12
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Choose straight young trees 7–9 cm thick at chest height, live or sound dead.",
      "Fell each one and limb it with the axe.",
      "Saw it to 2.6 m, measured with the stick. The ones for the front wall are sawn shorter when they are set.",
      "Stand each on the chopping block and sharpen the thick end to a point over the last 25 cm, turning it a quarter turn between strokes."
    ],
    "checks": [
      "Twelve stakes, 2.6 m long, 7–9 cm thick, each with a centred point."
    ],
    "safety": [],
    "estimate": {
      "hours": 2.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
