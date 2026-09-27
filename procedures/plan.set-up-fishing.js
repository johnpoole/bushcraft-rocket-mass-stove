// Set up the fishing and the food store
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
    "id": "plan.set-up-fishing",
    "kind": "plan",
    "window": {
      "from": 5,
      "to": 14
    },
    "title": "Set up the fishing and the food store",
    "purpose": "Build what catches and keeps food, before anything else: the weir, the lines, the snares, the smoke rack and the cache.",
    "steps": [
      {
        "call": "fish.build-weir"
      },
      {
        "call": "snare.set-line"
      },
      {
        "call": "make.smoke-rack"
      },
      {
        "call": "food.hang-cache"
      },
      {
        "call": "routine.camp-start-day"
      }
    ],
    "checks": [
      "The weir, snares, smoke rack and cache are all working."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
