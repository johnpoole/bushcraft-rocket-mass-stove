// The season
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
    "preconditions": [
      "You have the ten kit items and have measured your saw blade at home."
    ],
    "safety": [],
    "estimate": {
      "hours": 0
    },
    "id": "plan.season",
    "kind": "plan",
    "window": {
      "from": 0,
      "to": 140
    },
    "title": "The season",
    "purpose": "The whole season on the east arm of Great Slave Lake, from mid-September into winter, in order. Everything else is called from here.",
    "steps": [
      {
        "call": "plan.first-days"
      },
      {
        "call": "plan.set-up-fishing"
      },
      {
        "call": "plan.open-water"
      },
      {
        "call": "plan.freeze-up"
      },
      {
        "call": "plan.winter"
      }
    ],
    "checks": [
      "Each phase passes its own checks."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
