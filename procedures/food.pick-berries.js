// Pick berries
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.pick-berries",
    "kind": "gather",
    "title": "Pick berries",
    "purpose": "Pick every berry you can reach on the way to the net and the lines, for sugar and vitamin C.",
    "requires": {
      "tools": [
        "pot",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.forage"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "berries",
          "qty": 1
        }
      ]
    },
    "preconditions": [
      "Late August to first snow."
    ],
    "steps": [
      "Carry the pot on the way to the net and the lines.",
      "Pick blueberries, lowbush cranberries and crowberries as you pass them. Stop for a patch only if it is on the way.",
      "Eat some as you go.",
      "Spread the rest on a sheet of bark in the sun or near the smoke-rack fire, one berry deep, and turn them daily until they rattle."
    ],
    "checks": [
      "About a litre picked, a third of the pot."
    ],
    "safety": [
      "Bears feed on berries in September. Talk or sing as you go through berry patches, and back away from any bear."
    ],
    "estimate": {
      "hours": 0.5,
      "note": "Half an hour beyond the walk you make anyway."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
