// Gather creek and shore stones
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.creek-stones",
    "kind": "gather",
    "title": "Gather creek and shore stones",
    "purpose": "Collect stones from the creek bed and the shore to weigh down the weir, the pen and the net anchor.",
    "requires": {
      "tools": [
        "bark-tray"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "creek-stones",
          "qty": 0.1
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Pick stones from fist-sized to head-sized from the creek bed below the weir site and from the shore beside the mouth.",
      "Carry the small ones in the bark tray and roll the big ones along the bank.",
      "Pile them on the bank next to where they will be used."
    ],
    "checks": [
      "A pile of about 0.1 m³, about as much as fills the bark tray five times."
    ],
    "safety": [
      "These stones are wet. Never put them near a fire, the stove or the smoke rack: water inside can burst them.",
      "Lift with your legs, back straight."
    ],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
