// Freeze-up
(function (root) {
  'use strict';
  const procedure = {
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "safety": [],
    "estimate": {
      "hours": 0
    },
    "id": "plan.freeze-up",
    "kind": "plan",
    "window": {
      "from": 50,
      "to": 90
    },
    "title": "Freeze-up",
    "purpose": "Live on the store while the ice is too thin to walk on, wrap the shelter in snow, and get ready to fish through the ice.",
    "steps": [
      {
        "call": "shelter.snow-bank",
        "note": "once the bench is dry and snow has come to stay"
      },
      {
        "call": "food.winter-cache"
      },
      {
        "call": "ice.cut-holes",
        "note": "once a bay holds 10 cm of clear ice"
      },
      {
        "call": "fish.ice-net"
      },
      {
        "call": "routine.freeze-up-day"
      },
      {
        "call": "stove.fire-evening"
      }
    ],
    "checks": [
      "The shelter is banked with snow, and the ice lines and net are fishing."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
