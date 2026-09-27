// Check the gill net
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.check-net",
    "kind": "task",
    "title": "Check the gill net",
    "purpose": "Bring the net ashore along its loop, take out the fish, and send it back out.",
    "requires": {
      "tools": [
        "gill-net",
        "net-poles",
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
      "The net is set on its running loop (fish.set-gill-net)."
    ],
    "steps": [
      "At the creek mouth, untie the running loop from the shore post.",
      "Pull the near side of the loop hand over hand. The net comes in along the line, inner end first. Lay it in a heap on the rock as it comes, floats on one side and sinkers on the other.",
      "Kill each fish as it comes out of the mesh, and put it in the shallows under a stone.",
      "Pick out weed and sticks as the net comes in.",
      "When the net is ashore, pull the far side of the loop to send it back out, feeding it from the heap so it does not tangle, until the inner end is back at the shore post.",
      "Tie the loop off at the shore post again.",
      "Every third day, or if the net is fouled, hang it on the net poles for the day to dry and set it again at dusk.",
      "If a storm blows onshore, bring the net in and leave it on the net poles until the waves drop.",
      {
        "call": "food.clean-fish",
        "note": "take the catch to the cleaning rock"
      }
    ],
    "checks": [
      "The whole net was ashore, every fish out, and the net is back out with all its floats in a straight row from the shore."
    ],
    "safety": [
      "Stand on dry rock to pull. Wet granite at the waterline is as slippery as ice."
    ],
    "estimate": {
      "hours": 0.5,
      "note": "Estimate; longer when the net is full or fouled."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
