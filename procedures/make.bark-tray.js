// Make a bark carrying tray
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.bark-tray",
    "kind": "make",
    "title": "Make a bark carrying tray",
    "purpose": "Make a tray for carrying soil, moss and snow, since there is no bucket.",
    "requires": {
      "tools": [
        "knife",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "birch-bark",
          "qty": 1
        },
        {
          "id": "root-cordage",
          "qty": 3
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "bark-tray"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      {
        "call": "gather.birch-bark"
      },
      {
        "call": "make.root-cordage"
      },
      "Trim a sheet of birch bark to about 60 × 80 cm, white side out.",
      "Warm the sheet over a fire or in the sun until it bends without cracking.",
      "Score a line 10 cm in from each edge with the back of the knife, pressing hard but not cutting through.",
      "Fold up the four sides along the score lines. At each corner, fold the spare bark into a triangle and press it flat against the end wall.",
      "Punch two holes through each corner with the knife tip, and stitch the corner triangles tight with soaked root cordage.",
      "Lash a stick along the top of each long side with root cordage, with 15 cm left over at each end as handles."
    ],
    "checks": [
      "Tray about 40 × 60 × 10 cm, holding about 20 litres.",
      "Lifted by its handles with a full load of wet sand, the corners stay closed."
    ],
    "safety": [
      "A full tray of soil weighs about 30 kg. Carry it half full."
    ],
    "estimate": {
      "hours": 2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
