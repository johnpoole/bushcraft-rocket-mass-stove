// Winter
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
    "id": "plan.winter",
    "kind": "plan",
    "window": {
      "from": 90,
      "to": 140
    },
    "title": "Winter",
    "purpose": "Fish through the ice, keep the snares running, and keep warm on the bench.",
    "steps": [
      {
        "call": "stove.clean",
        "note": "once a month"
      },
      {
        "call": "shelter.inspect",
        "note": "after every storm"
      },
      {
        "call": "routine.winter-day"
      },
      {
        "call": "stove.fire-evening"
      }
    ],
    "checks": [
      "Eating enough each day to hold your weight within the limit you set."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
