// Build the winter cache
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.winter-cache",
    "kind": "task",
    "title": "Build the winter cache",
    "purpose": "Keep frozen fish and hares under stones on a log platform closer to camp, once nothing thaws.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "bark-tray",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "poles",
          "qty": 10
        },
        {
          "id": "stones",
          "qty": 0.25
        },
        {
          "id": "spruce-boughs",
          "qty": 2
        },
        {
          "id": "snow",
          "qty": 0.5
        }
      ],
      "skills": [
        "skill.saw",
        "skill.axe",
        "skill.felling"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The days stay below freezing, so what goes in stays frozen.",
      "The bears have denned, usually by the end of October."
    ],
    "steps": [
      {
        "call": "gather.poles"
      },
      {
        "call": "gather.stones"
      },
      {
        "call": "gather.boughs"
      },
      "Choose flat ground about {winterCache.toShelter} m from the shelter, away from the stove's warm wall and out of the sun at midday.",
      "Cut two dead logs about 15 cm thick and 2 m long, and lay them 1.2 m apart as sleepers.",
      "Saw ten poles to 2 m and lay them side by side across the sleepers as the floor.",
      "Lay a layer of boughs on the floor.",
      "Lay the fish and hares on the boughs, gutted and frozen stiff first overnight on the smoke rack, packed close.",
      "Lay a layer of boughs over them, then the rest of the poles over those.",
      "Pile stones over the whole platform, working from the edges in, until nothing shows between them.",
      "Shovel snow over the pile with the bark tray to hide the smell.",
      "Each time you take food out, lift the stones at one end only and put them back the same way."
    ],
    "checks": [
      "The floor stands at least 15 cm off the ground on its sleepers.",
      "No gap between the stones wider than 3 cm, so a fox cannot push its nose in.",
      "The next morning, no tracks have got into the pile."
    ],
    "safety": [
      "Wolverines can move large stones. Check the pile every day and move the food into the hanging cache if one finds it.",
      "Lift stones with your legs. Frozen stones are slippery; wear mittens."
    ],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
