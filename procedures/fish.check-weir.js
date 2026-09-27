// Empty the weir pen
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.check-weir",
    "kind": "task",
    "title": "Empty the weir pen",
    "purpose": "Take the fish out of the weir pen and keep the fence tight.",
    "requires": {
      "tools": [
        "knife",
        "club",
        "axe",
        "fish-weir"
      ],
      "materials": [],
      "skills": [
        "skill.clean-fish"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The weir is built (fish.build-weir)."
    ],
    "steps": [
      "Walk up to the pen from the bank on the downstream side, quietly.",
      "Step into the pen, or reach in from the bank. Herd each fish into a corner with your legs and lift it out by hand, a thumb in its mouth or a hand behind its gills.",
      "Throw each fish up the bank, well away from the water, and kill it with the club.",
      "Walk the fence. Clear leaves and drift off the upstream side of the V and the pen by hand.",
      "Push any leaning stake back upright and drive it again with the club. Wedge stones back into any gap along the bottom.",
      "After rain or high water, repair the fence before you leave: re-weave any washed-out branches and re-drive any lifted stakes.",
      "Once the creek skins over but still flows, chop a hole over the pen with the axe and keep it under boughs and snow, like the ice holes, and look into it at each check.",
      {
        "call": "food.clean-fish",
        "note": "at the cleaning rock, well along the shore from the weir"
      }
    ],
    "checks": [
      "The pen is empty and the 10 cm gap at the point of the V is clear.",
      "No gap anywhere along the fence or the pen wider than 3 cm."
    ],
    "safety": [
      "The creek bed is slippery. Step slowly and keep your weight on the back foot."
    ],
    "estimate": {
      "hours": 0.2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
