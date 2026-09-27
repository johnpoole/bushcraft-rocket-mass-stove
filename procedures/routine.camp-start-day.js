// A day in the first two weeks
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
      "hours": 0.25
    },
    "id": "routine.camp-start-day",
    "kind": "task",
    "repeat": "daily",
    "title": "A day in the first two weeks",
    "purpose": "The daily fishing and eating while the camp is being set up, before the weir, lines and snares are running.",
    "steps": [
      {
        "call": "fish.check-net",
        "note": "at dawn"
      },
      {
        "call": "food.cook-fish",
        "note": "at midday"
      },
      {
        "call": "fish.check-net",
        "note": "at dusk"
      },
      {
        "call": "food.cook-fish",
        "note": "in the evening"
      }
    ],
    "checks": [
      "The net checked twice and two cooked meals eaten."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
