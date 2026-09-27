// Make an ash rake
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.ash-rake",
    "kind": "make",
    "title": "Make an ash rake",
    "purpose": "Make a long wooden hoe for raking ash out of the tunnel, the dome and the duct bends, since there is no metal rake.",
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
      "tools": [
        "ash-rake"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a green birch or willow sapling about 3 cm thick with a stout side branch leaving it at close to a right angle.",
      "Saw the stem 1.2 m long, with the side branch near one end.",
      "Cut the side branch off 8 cm from the stem and carve it into a flat blade, narrower than the {stove.size} cm opening by a finger-width.",
      "Carve the stem above the blade smooth, and round the handle end."
    ],
    "checks": [
      "The blade slides through the feed tube and reaches the foot of the riser.",
      "The blade does not break when dragged hard across a stone."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
