// Use an axe safely
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.axe",
    "kind": "skill",
    "title": "Use an axe safely",
    "purpose": "Chop, limb and split without cutting yourself, using the axe from the kit.",
    "requires": {
      "tools": [
        "axe"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Check the head before every use: grip the handle and push the head hard against a log. If it moves on the handle, soak the head end in water overnight so the wood swells, and do not use it until it is tight.",
      "Clear a circle around you twice as wide as your arm plus the axe. Look up: no branches or lines in the swing, and nobody inside the circle.",
      "Chop on a chopping block, a round of log at least 25 cm across, never on rock or bare ground where a glancing blow runs on into your foot.",
      "Stand with your feet apart and the block between you and your feet, so a miss goes into the block or the ground ahead of you, not into your leg.",
      "To cut through a log, cut a V: chop down at about 45° from one side, then from the other, each blow taking out a chip. Make the V as wide as the log is thick.",
      "To split, stand the round on the block, aim for a crack or the centre, and let the axe fall with the weight of the head. If it sticks, lift axe and round together and bring them down on the block.",
      "To limb a felled tree, stand on the opposite side of the trunk from the branch and cut from the underside of the branch toward its tip.",
      "Keep the edge sharp: rub it with a fine-grained flat stone from dry ground, in small circles on each side at the same angle as the existing bevel, until it catches on a thumbnail.",
      "Mask the edge with a folded piece of birch bark tied on with cordage when you carry it, and never leave it lying in the snow or leaves."
    ],
    "checks": [],
    "safety": [
      "Stop when you are tired. Most axe injuries happen late in the day.",
      "Never swing toward any part of your body, and never chop with your foot on the log."
    ],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
