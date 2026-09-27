// Dry and finish the bench
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.bench-dry",
    "kind": "task",
    "title": "Dry and finish the bench",
    "purpose": "Dry the bench fast without cracking or freezing it, then plaster the top.",
    "requires": {
      "tools": [
        "ferro-rod",
        "knife"
      ],
      "materials": [
        {
          "id": "slip",
          "qty": 2
        },
        {
          "id": "plaster",
          "qty": 0.05
        },
        {
          "id": "grass-fibre",
          "qty": 2
        },
        {
          "id": "dry-wood",
          "qty": 4
        },
        {
          "id": "birch-bark",
          "qty": 2
        }
      ],
      "skills": [
        "skill.judge-dryness",
        "skill.plaster",
        "skill.stove-safety"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The bench is built to its full height."
    ],
    "steps": [
      {
        "call": "gather.dry-wood"
      },
      {
        "call": "gather.slip"
      },
      {
        "call": "gather.grass-fibre"
      },
      {
        "call": "gather.birch-bark"
      },
      "Fire little and often: two or three short fires a day dry it faster than one long one, and heating wet clay slowly keeps it from cracking.",
      "Open the door and the vent during and after each firing, or the steam condenses on the tarp and soaks into your sleeping bag.",
      "Cover the wet sections with dry grass at night. A shelter fired every evening, with a warm duct under the bench, keeps them above freezing even when it freezes outside.",
      "If the shelter itself freezes overnight, stop adding wet material until it does not: wet clay that freezes crumbles.",
      "Fill cracks with slip as they appear. Hairline cracks are normal.",
      "Check before you seal: lay a sheet of birch bark on the bench overnight. If it is damp underneath in the morning, the bench is still wet.",
      {
        "call": "gather.plaster",
        "note": "only once the bark test is dry"
      },
      "Plaster the top last, 1–2 cm, leaving the bend plugs free."
    ],
    "checks": [
      "Bark laid overnight at both ends and in the middle is dry underneath in the morning.",
      "No crack wider than a hairline after plastering.",
      "The bench top is warm to the hand the morning after an evening firing."
    ],
    "safety": [
      "If you get a headache, dizziness or nausea, get outside at once."
    ],
    "estimate": {
      "hours": 8,
      "waitDays": 7,
      "note": "Estimate: short fires tended over one to three weeks, then half a day plastering."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
