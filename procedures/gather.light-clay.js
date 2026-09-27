// Mix light clay insulation
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.light-clay",
    "kind": "gather",
    "title": "Mix light clay insulation",
    "purpose": "Mix clay slurry into chopped dry grass to make light, airy insulation for the base, the riser and the gap behind the bench.",
    "requires": {
      "tools": [
        "pot"
      ],
      "materials": [
        {
          "id": "clay",
          "qty": 0.02
        },
        {
          "id": "grass-fibre",
          "qty": 3
        },
        {
          "id": "water",
          "qty": 30
        }
      ],
      "skills": [
        "skill.tread-mix"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "light-clay",
          "qty": 0.1
        }
      ]
    },
    "preconditions": [
      "The mixing place: a bare, flat rock ledge at least 1.5 m across within about 20 m of the stove, swept clean. The east arm is mostly bare granite. Clay and sand are piled beside it under bark."
    ],
    "steps": [
      "Heap the chopped grass on the ledge.",
      "In the pot, break up clay in water and stir it with your hand into a slurry like thin cream. Make it a potful at a time.",
      "Pour each potful over the grass and toss it with your hands, until every strand is just coated.",
      "Stop adding slurry when it is coated: you want it light and full of air, with no slurry pooling under the heap.",
      "Dry wood ash can stand in for some of the grass when you have it."
    ],
    "checks": [
      "About 0.1 m³.",
      "A double handful squeezed into a ball holds together, and no slurry drips from it."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
