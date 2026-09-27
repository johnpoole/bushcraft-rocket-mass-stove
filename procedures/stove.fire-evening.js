// Fire the stove in the evening
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.fire-evening",
    "kind": "task",
    "repeat": "daily",
    "title": "Fire the stove in the evening",
    "purpose": "Run the stove each evening to cook and to heat the shelter, and let it burn out before you sleep.",
    "requires": {
      "tools": [
        "ferro-rod",
        "knife",
        "pot"
      ],
      "materials": [
        {
          "id": "dry-wood",
          "qty": 2
        }
      ],
      "skills": [
        "skill.read-draw",
        "skill.stove-safety",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The stove has had its first firing."
    ],
    "steps": [
      {
        "call": "gather.dry-wood",
        "note": "when the pile is down to less than two armloads"
      },
      "Check that the vent and the air inlet are open, and the cleanout plugs are in place.",
      "Carve a small heap of fine shavings and a few thin sticks from dry wood.",
      "Warm the riser first: light the shavings on a stick and push them along the tunnel floor to the foot of the riser with thin sticks on top, until you hear it draw.",
      "Stand dry, finger- to wrist-thick sticks upright in the feed tube. Push them down as they burn: the fire stays at the bottom and burns sideways.",
      "If smoke rolls back out of the feed tube, the system is cold or blocked: add a little more small, hot fuel at the riser, and if it still smokes, clean out.",
      "Cook standing on the step, with the pot on the cooktop. It is hottest over the riser; slide the pot toward the edge to simmer.",
      "Fire it hard for 1–3 hours. After stage two the bench gives off heat for about {stove.warmHours} hours afterwards.",
      "Let the fire burn out completely before you sleep."
    ],
    "checks": [
      "The flame leans sideways into the tunnel and no smoke comes out of the feed tube.",
      "Before you sleep, no flame is left and the feed tube is dark."
    ],
    "safety": [
      "Never leave it burning unattended, and never put a lid on the feed tube while it is burning.",
      "If you get a headache, dizziness or nausea, get outside at once."
    ],
    "estimate": {
      "hours": 2,
      "afterDark": true,
      "note": "Estimate: 1–3 hours of tending most evenings, plus about an hour gathering wood."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
