// Make a digging stick
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.digging-stick",
    "kind": "make",
    "title": "Make a digging stick",
    "purpose": "Make a fire-hardened stick for loosening soil and prying out stones, since there is no shovel.",
    "requires": {
      "tools": [
        "saw",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "digging-stick"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a straight birch or other hardwood sapling about 4–5 cm thick. Saw it off at the ground and saw it to 1.3 m long.",
      "Trim off side shoots and the bark.",
      "Carve the thick end to a flat chisel point 8 cm long, like a wide screwdriver tip.",
      {
        "call": "task.light-fire"
      },
      "When the fire has burned down to coals, hold the point just above them and turn it slowly until the wood darkens to brown all over. Pull it back if it smokes heavily or blackens: charred wood crumbles.",
      "Let it cool, then rub off the loose surface."
    ],
    "checks": [
      "The point stays sharp after ten hard stabs into packed ground."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
