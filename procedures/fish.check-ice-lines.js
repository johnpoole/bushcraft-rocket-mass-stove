// Check the ice lines and jig
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.check-ice-lines",
    "kind": "task",
    "title": "Check the ice lines and jig",
    "purpose": "Take up the overnight lines at first light and jig through the holes for lake trout and burbot.",
    "requires": {
      "tools": [
        "fishing-kit",
        "gaff",
        "knife",
        "club"
      ],
      "materials": [],
      "skills": [
        "skill.hook-and-line",
        "skill.clean-fish"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The holes are open (ice.clear-holes) and lines were set the evening before (fish.set-ice-lines)."
    ],
    "steps": [
      "Pull each overnight line up slowly and steadily.",
      "When a fish reaches the hole, slide the gaff under its jaw and lift it out onto the ice. Do not lift a heavy fish by the line; it tears free at the hole.",
      "Kill each fish at once with the club.",
      "Jig at the best hole for up to an hour, while your hands stay warm.",
      "Wind in the lines and take the hooks home, or leave them down if you will jig again before dark.",
      {
        "call": "food.clean-fish",
        "note": "on the ice, beside the hole"
      }
    ],
    "checks": [
      "Every line up and accounted for, and every fish killed and cleaned."
    ],
    "safety": [
      "Stop jigging when your fingers numb. Warm them in your armpits and do not touch wet line with bare hands at −20 °C."
    ],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
