// Pit-fire clay tiles
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.fired-bricks",
    "kind": "gather",
    "title": "Pit-fire clay tiles",
    "purpose": "Make fired clay tiles for the burn tunnel floor, which wears fastest: fired clay lasts far longer than raw.",
    "requires": {
      "tools": [
        "knife",
        "measuring-stick",
        "digging-stick"
      ],
      "materials": [
        {
          "id": "refractory-mix",
          "qty": 0.01
        },
        {
          "id": "dry-wood",
          "qty": 6
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "fired-bricks",
          "qty": 4
        }
      ]
    },
    "preconditions": [
      "Clay and sand are at the mixing place."
    ],
    "steps": [
      {
        "call": "gather.refractory-mix",
        "note": "the rest goes into the tunnel"
      },
      "On a flat stone dusted with sand, pat out four tiles of refractory mix about 20 × 15 cm and 4 cm thick. Square the edges with the knife.",
      "Dry them near a fire for about three days, turning them each day.",
      {
        "call": "gather.dry-wood",
        "times": 2
      },
      "Dig a pit about half a metre across and 30 cm deep on bare ground away from the shelter.",
      {
        "call": "task.light-fire",
        "note": "in the pit"
      },
      "While the fire burns down to a bed of coals, warm the tiles beside it for an hour.",
      "Set the tiles on the coals, heap more wood over them, and keep a hard fire going for about four hours.",
      "Let it burn down and leave the tiles buried in the ashes to cool overnight."
    ],
    "checks": [
      "Four tiles that ring clear when tapped together.",
      "After an hour in water a tile stays hard, and a fingernail will not scratch it."
    ],
    "safety": [
      "Tiles that are not fully dry can burst in the fire. Warm them slowly first, and stand back when you add wood."
    ],
    "estimate": {
      "hours": 7,
      "waitDays": 3,
      "note": "Estimate: an hour to shape, three days to dry, a day to fire."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
