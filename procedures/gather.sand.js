// Gather sand
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.sand",
    "kind": "gather",
    "title": "Gather sand",
    "purpose": "Collect coarse sand and grit to mix with clay so it does not crack.",
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
          "id": "sand",
          "qty": 0.1
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Scoop coarse sand from the lake beach or a creek bar with your hands into the bark tray.",
      "Choose sharp, gritty sand over fine, rounded beach sand when you have the choice; it locks together better in cob.",
      "Pick out sticks and shells, and drain it on a flat rock before carrying it to the mixing place."
    ],
    "checks": [
      "About 0.1 m³ of sand at the mixing place."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
