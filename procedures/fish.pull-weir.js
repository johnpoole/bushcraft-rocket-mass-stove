// Pull the weir stakes
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.pull-weir",
    "kind": "task",
    "title": "Pull the weir stakes",
    "purpose": "Pull the weir stakes out of the creek before the ice freezes solid, or the ice crushes them.",
    "requires": {
      "tools": [
        "axe",
        "club",
        "slush-ladle",
        "ice-pole",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.read-ice",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The creek has ice on it but still flows underneath. Do it before the ice reaches the creek bed."
    ],
    "steps": [
      "Take everything out of the pen first.",
      "Work from the bank. The creek ice over moving water is thin; do not stand on it. Where you must reach the middle, lay the ice pole across the creek from bank to bank and kneel on the bank end.",
      "Chop the ice away from around each stake with the axe, a hand's width all round, and ladle out the chips.",
      "Rock each stake back and forth until it is loose, and pull it straight up. If it will not come, strike it sideways low down with the club, then pull again.",
      "Pull the woven branches out with the stakes, or leave them to rot; they are not needed again.",
      "Stack the stakes on the bank on two poles, off the ground, under boughs. They are dry firewood by spring, or stakes for next season.",
      "Leave the stones along the bottom. They do no harm and save work next year."
    ],
    "checks": [
      "No stake left standing in the creek.",
      "About 80 stakes stacked and counted on the bank."
    ],
    "safety": [
      "Keep your hands and feet dry. Wet mittens at −15 °C freeze your fingers in minutes: change into dry ones at once and warm your hands in your armpits.",
      "Stop when your fingers go white or numb."
    ],
    "estimate": {
      "hours": 3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
