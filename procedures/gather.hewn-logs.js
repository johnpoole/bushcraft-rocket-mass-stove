// Hew wall logs
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.hewn-logs",
    "kind": "gather",
    "title": "Hew wall logs",
    "purpose": "Hew the top and bottom of wall logs flat so they sit tight on each other with small gaps to chink.",
    "requires": {
      "tools": [
        "axe",
        "knife"
      ],
      "materials": [
        {
          "id": "wall-logs",
          "qty": 5
        }
      ],
      "skills": [
        "skill.hewing"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "hewn-logs",
          "qty": 5
        }
      ]
    },
    "preconditions": [],
    "steps": [
      {
        "call": "gather.wall-logs"
      },
      "Hew a flat 6–8 cm wide along the top of each piece.",
      "Roll it over and hew a matching flat along the bottom, parallel to the top one.",
      "Stack the hewn pieces by length, off the ground."
    ],
    "checks": [
      "About 5 m of log with two parallel flats 6–8 cm wide. A straight pole laid on each flat shows no gap over 1 cm."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.75,
      "note": "About 10 minutes a metre for both faces with a sharp axe."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
