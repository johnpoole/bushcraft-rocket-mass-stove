// Tie lashings with root cordage
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.lashing",
    "kind": "skill",
    "title": "Tie lashings with root cordage",
    "purpose": "Join poles and logs with soaked root cordage: a clove hitch to start and finish, and a square lashing where two poles cross.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Soak the root cordage for at least an hour first. Dry root cracks when bent.",
      "Clove hitch: wrap the cord once around the pole, cross over the first turn, wrap again, and tuck the end under the crossing. Pull both ends tight.",
      "Square lashing, where two poles cross: start with a clove hitch on the lower pole just below the crossing. Wrap the cord over the upper pole, behind the lower pole, over the upper pole on the other side and behind the lower again. Make three or four such turns, pulling each tight.",
      "Then take two or three frapping turns: wrap between the two poles, around the turns you have just made, pulling hard to tighten everything.",
      "Finish with a clove hitch on the upper pole. Tuck the end under the last turns.",
      "Where a lashing goes round a living tree, pad the bark first with moss or a folded piece of bark and wrap loosely, so the tree can sway and grow."
    ],
    "checks": [],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
