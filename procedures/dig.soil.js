// Dig and carry soil
(function (root) {
  'use strict';
  const procedure = {
    "id": "dig.soil",
    "kind": "gather",
    "title": "Dig and carry soil",
    "purpose": "Loosen mineral soil and carry it where it is needed, with a digging stick and a bark tray.",
    "requires": {
      "tools": [
        "digging-stick",
        "bark-tray"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "soil",
          "qty": 0.5
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Choose a borrow spot downhill of the shelter, at least 3 m from the shelter and from any tree you rely on, where water will not collect in the hole.",
      "Scrape the moss and leaf litter aside and keep it; lay it back over the hole when you finish.",
      "Stab the digging stick into the soil at a slant and lever it back to loosen a patch 30 cm across. Pry out stones as you meet them and set them aside.",
      "Scoop the loose soil into the tray with your hands, half full, and carry it to where it goes.",
      "Stop the hole when you reach rock or water. Take the next load from a new spot."
    ],
    "checks": [
      "About 0.5 m³ of soil delivered, roughly 50 half-full trays."
    ],
    "safety": [
      "Lift with your legs, back straight. Carry half loads."
    ],
    "estimate": {
      "hours": 5,
      "note": "About 0.1 m³ an hour in stony soil."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
