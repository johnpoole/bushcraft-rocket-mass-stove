// Cut frame posts
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.frame-posts",
    "kind": "gather",
    "title": "Cut frame posts",
    "purpose": "Cut posts for the shelter frame: the corner post, the post halfway along the back, the door posts, and the props that carry the beam and plate beside the three trees.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.felling",
        "skill.saw",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "frame-posts",
          "qty": 4
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Choose straight spruce or pine about 14 cm thick at chest height. Sound dead standing trees are lighter to carry and shrink less; live ones are fine.",
      "Fell four of them.",
      "Limb each one with the axe, from the butt toward the top.",
      "Saw two to 2.6 m long and two to 1.8 m long, measured with the stick.",
      "Saw and chop a U-shaped saddle 5 cm deep across the top of each, as wide as the beam or plate that will sit in it.",
      "Peel the bark off the lower 60 cm with the axe, so the part in the ground does not rot as fast.",
      "Carry them to the site and lay them off the ground."
    ],
    "checks": [
      "Four straight posts, about 14 cm thick, two 2.6 m and two 1.8 m long, each with a saddle at the top."
    ],
    "safety": [
      "Carry long posts on your shoulder with the front end high, so it does not catch the ground and twist you."
    ],
    "estimate": {
      "hours": 2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
