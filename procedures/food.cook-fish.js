// Cook a fish meal
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.cook-fish",
    "kind": "task",
    "title": "Cook a fish meal",
    "purpose": "Cook half a day's fish, about 2 kg whole, and eat all of it, fat and organs included.",
    "requires": {
      "tools": [
        "pot",
        "knife"
      ],
      "materials": [
        {
          "id": "fresh-fish",
          "qty": 2
        },
        {
          "id": "water",
          "qty": 2
        },
        {
          "id": "dry-wood",
          "qty": 0.5
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "A fire is burning: the smoke-rack fire in open water, the stove in winter."
    ],
    "steps": [
      "Fill the pot half full of water.",
      "Cut the fish into chunks with the skin on. Put in the heads, bones, livers and roe too.",
      "Bring it to the boil and boil it until every piece is white and flakes right through, then five minutes more.",
      "Eat the flesh, skin, eyes, livers and roe, and drink the broth, which holds the fat."
    ],
    "checks": [
      "The thickest piece is white and flakes right through.",
      "The pot is empty."
    ],
    "safety": [
      "Fish from this lake can carry tapeworm. Never eat it raw or underdone."
    ],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
