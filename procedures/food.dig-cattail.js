// Dig cattail roots
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.dig-cattail",
    "kind": "gather",
    "title": "Dig cattail roots",
    "purpose": "Dig cattail roots in the shallows before the ice, for starch.",
    "requires": {
      "tools": [
        "digging-stick",
        "knife",
        "pot"
      ],
      "materials": [],
      "skills": [
        "skill.forage"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "cattail-roots",
          "qty": 1
        }
      ]
    },
    "preconditions": [
      "Open water; before the shallows freeze."
    ],
    "steps": [
      "In a shallow, weedy bay, find cattail by its brown cigar-shaped head.",
      "Follow a stem down into the mud with your hand and loosen the root runner with the digging stick. Pull it out whole.",
      "Wash it, peel off the spongy outer layer, and cut the white core into pieces.",
      "Boil it in the fish broth, or chew it raw and spit out the fibres."
    ],
    "checks": [
      "About 1 kg of washed white root, each piece traced to a stem with a cattail head."
    ],
    "safety": [
      "Water hemlock grows in the same wet ground and one bite of its root can kill. Take only roots you have followed up to a cattail stem.",
      "Keep your time in the water short and warm your hands at the fire after."
    ],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
