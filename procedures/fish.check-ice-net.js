// Check the net under the ice
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.check-ice-net",
    "kind": "task",
    "title": "Check the net under the ice",
    "purpose": "Pull the net out through one hole, take out the fish, and pull it back under.",
    "requires": {
      "tools": [
        "gill-net",
        "gaff",
        "knife",
        "club"
      ],
      "materials": [],
      "skills": [
        "skill.gill-net",
        "skill.clean-fish"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The net is set under the ice (fish.ice-net) and both net holes are open (ice.clear-holes)."
    ],
    "steps": [
      "At the far hole, untie the net's short line from its cross-stick and pull the net up and out onto the snow, hand over hand. The tail line pays out under the ice behind it from the near hole.",
      "Pick each fish out as it comes up, lifting heavy ones with the gaff, and kill it.",
      "Keep the net moving: take the fish out and let the net back into the water within a few minutes, before it freezes stiff.",
      "At the near hole, pull the tail line until the net is back under and its short line reaches the far hole again. Tie both off to their cross-sticks.",
      {
        "call": "food.clean-fish",
        "note": "on the ice, beside the hole"
      }
    ],
    "checks": [
      "The net is back under the ice, both lines tied off, and the holes covered."
    ],
    "safety": [
      "Pick fish with your mittens off only a minute at a time. Wet hands at −30 °C freeze in minutes."
    ],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
