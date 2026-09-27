// Weave the riser basket
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.riser-basket",
    "kind": "gather",
    "title": "Weave the riser basket",
    "purpose": "Weave a square basket tube of withies as the riser former. It holds its shape while you build and burns out cleanly on the first fires.",
    "requires": {
      "tools": [
        "knife",
        "size-gauge",
        "measuring-stick",
        "digging-stick"
      ],
      "materials": [
        {
          "id": "withies",
          "qty": 60
        },
        {
          "id": "root-cordage",
          "qty": 3
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
          "id": "riser-basket",
          "qty": 1
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "On soft ground, mark a square the size of the former gauge on each side.",
      "Push eight uprights into the ground round it, one at each corner and one in the middle of each side, so the former gauge just fits between opposite ones.",
      "Weave the thin withies in and out round the uprights, pressing each row down onto the one below. Start each new withy beside where the last one ended.",
      "Go on until the basket is {stove.riserHeight} cm less {stove.size} cm tall: it stands on the tunnel walls, so its top will then be {stove.riserHeight} cm above the tunnel floor.",
      "Tie the top row to each upright with root cordage, and cut the uprights off level with it.",
      "Work it out of the ground and trim the bottom ends flush.",
      "Stand it near a fire, out of the flame, for two days to dry."
    ],
    "checks": [
      "The former gauge fits across the inside both ways at the top, middle and bottom.",
      "Stood on flat ground, it stays upright on its own."
    ],
    "safety": [],
    "estimate": {
      "hours": 4,
      "waitDays": 2,
      "note": "Estimate; then two days drying by the fire."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
