// Cut rafters
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.rafters",
    "kind": "gather",
    "title": "Cut rafters",
    "purpose": "Cut the rafters that run from the beam down to the plate and carry the roof.",
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
          "id": "rafters",
          "qty": 10
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Choose straight young spruce or pine 10–12 cm thick at chest height, from a thicket where thinning helps the rest.",
      "Fell each one.",
      "Limb it with the axe, from the butt toward the top.",
      "Saw it to 3.0 m, measured with the stick. The small end must still be at least 8 cm thick.",
      "Carry them to the site and lay them off the ground."
    ],
    "checks": [
      "Ten straight rafters, 3.0 m long and at least 8 cm thick at the small end."
    ],
    "safety": [],
    "estimate": {
      "hours": 3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
