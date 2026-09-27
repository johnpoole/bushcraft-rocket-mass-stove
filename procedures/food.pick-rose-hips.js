// Pick rose hips
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.pick-rose-hips",
    "kind": "gather",
    "title": "Pick rose hips",
    "purpose": "Pick rose hips, which stay on the bush into winter, for sugar and vitamin C.",
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
          "id": "rose-hips",
          "qty": 0.5
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Walk the wild rose bushes along the shore and the forest edge.",
      "Pick the red hips that are soft to a squeeze. Frost sweetens them.",
      "Split each with the knife and scrape out the hairy seeds.",
      "Eat the flesh raw, or boil it in the fish broth."
    ],
    "checks": [
      "Half a litre of hips, seeds out."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
