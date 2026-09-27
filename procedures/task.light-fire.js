// Light a fire with the ferro rod
(function (root) {
  'use strict';
  const procedure = {
    "id": "task.light-fire",
    "kind": "task",
    "title": "Light a fire with the ferro rod",
    "purpose": "Start a fire from dry wood and birch bark with the ferro rod, for cooking, fire-hardening and heat.",
    "requires": {
      "tools": [
        "ferro-rod",
        "knife"
      ],
      "materials": [
        {
          "id": "birch-bark",
          "qty": 1
        },
        {
          "id": "dry-wood",
          "qty": 1
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
    "preconditions": [],
    "steps": [
      {
        "call": "gather.birch-bark",
        "note": "if you have no birch bark left"
      },
      {
        "call": "gather.dry-wood",
        "note": "if you have no dry wood left"
      },
      "Clear a spot to bare mineral soil or rock, 1 m across, away from roots and overhanging branches.",
      "Sort the wood into three piles: matchstick-thin, pencil-thick, and thumb- to wrist-thick. Collect twice as much of the thin sizes as you think you need.",
      "Scrape a small heap of fine shavings, as fine as hair, from a piece of birch bark with the back of the knife. Set it on a flat sheet of bark as a base.",
      "Hold the ferro rod with its tip in the shavings. Hold the striker still against the rod and pull the rod back hard toward you, so the sparks fall into the shavings and the rod does not scatter them.",
      "When the shavings catch, add matchstick-thin wood at once, then pencil-thick, leaning the pieces together over the flame like a tent. Add the thicker wood only when the pencil wood is burning well.",
      "Put the fire out when you are finished: drown it, stir the ashes, and drown it again until nothing is warm to the back of your hand."
    ],
    "checks": [
      "A fire burning on thumb-thick wood without help.",
      "When finished, ashes cold to the back of the hand."
    ],
    "safety": [
      "Never leave a fire burning unattended."
    ],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
