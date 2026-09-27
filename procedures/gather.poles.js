// Gather poles
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.poles",
    "kind": "gather",
    "title": "Gather poles",
    "purpose": "Cut straight poles for the roof mat and racks.",
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
          "id": "poles",
          "qty": 20
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Look for straight dead standing trees or thin live trees 4–6 cm thick at chest height, in thickets where thinning helps the others grow.",
      "Saw each one off near the ground.",
      "Limb it with the axe from the butt toward the top.",
      "Measure 3.5 m with the measuring stick and saw it to length.",
      "Stack the poles off the ground."
    ],
    "checks": [
      "20 poles, 3.5 m long, 4–6 cm thick, straight enough to lie flat on the rafters."
    ],
    "safety": [],
    "estimate": {
      "hours": 3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
