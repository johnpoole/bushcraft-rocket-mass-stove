// Open water: fill the store and build the stove
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
    "id": "plan.open-water",
    "kind": "plan",
    "window": {
      "from": 14,
      "to": 50
    },
    "title": "Open water: fill the store and build the stove",
    "purpose": "Catch and smoke more fish than you eat while the lake is open, and build the walls and stove around the fishing.",
    "steps": [
      {
        "call": "stove.prepare-blocks"
      },
      {
        "call": "stove.make-blocks",
        "times": 10,
        "note": "about 20 blocks a batch, from the first free days"
      },
      {
        "call": "food.smoke-fish",
        "times": 8,
        "note": "a batch every few days"
      },
      {
        "call": "shelter.roof-insulate",
        "note": "once the moss is dry"
      },
      {
        "call": "shelter.walls"
      },
      {
        "call": "plan.stove-stage-one"
      },
      {
        "call": "stove.first-firing"
      },
      {
        "call": "shelter.fit-out"
      },
      {
        "call": "stove.hot-stones",
        "note": "sleep on hot stones until the bench is done"
      },
      {
        "call": "plan.stove-stage-two"
      },
      {
        "call": "shelter.earth-skirt",
        "note": "before the ground freezes"
      },
      {
        "call": "make.snow-paddle"
      },
      {
        "call": "make.ice-gear"
      },
      {
        "call": "fish.pull-weir",
        "note": "before the creek freezes solid"
      },
      {
        "call": "routine.open-water-day"
      },
      {
        "call": "stove.fire-evening",
        "note": "every evening once the stove is built"
      }
    ],
    "checks": [
      "At least 90 kg of fish smoked and stored.",
      "The stove and bench are built and dry."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
