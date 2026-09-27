// Fell a small tree
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.felling",
    "kind": "skill",
    "title": "Fell a small tree",
    "purpose": "Bring down a tree up to about 20 cm thick so it falls where you choose, with the saw and axe.",
    "requires": {
      "tools": [
        "saw",
        "axe"
      ],
      "materials": [],
      "skills": [
        "skill.axe",
        "skill.saw"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Choose a dead standing tree or a live one no thicker than 20 cm at waist height. Look up: no dead branches hanging in it (widowmakers), and no other tree it will lodge in.",
      "Decide which way it will fall: usually the way it leans. Clear two escape routes back and to the side, at 45° away from that direction, and clear the brush around the trunk.",
      "On the side facing the fall, saw a notch: a flat cut a quarter of the way into the trunk, then a sloping cut from above to meet it, and knock out the wedge.",
      "On the opposite side, saw straight in 3–5 cm higher than the bottom of the notch. Stop when 2–3 cm of uncut wood (the hinge) is left between this cut and the notch.",
      "As the tree starts to lean, pull the saw out and walk away along an escape route, watching the top.",
      "If it sits back and pinches the saw, leave the saw, cut a wooden wedge, and drive it into the back cut with the club to tip the tree.",
      "Never cut a tree that is hung up in another. Roll or lever it down with a long pole from the side."
    ],
    "checks": [],
    "safety": [
      "Never stand behind the stump as the tree falls: the butt can kick back.",
      "Stop if the wind is gusting."
    ],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
