// Cut the beam and plate
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.beam-logs",
    "kind": "gather",
    "title": "Cut the beam and plate",
    "purpose": "Cut the two logs that carry the rafters: the beam along the back and the plate along the front.",
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
          "id": "beam-logs",
          "qty": 2
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Choose two straight spruce or pine 16–18 cm thick at chest height, still 14 cm thick 3.5 m up. Look for ones with no sweep: sight along the trunk from below.",
      "Fell each one.",
      "Limb it with the axe, from the butt toward the top.",
      "Measure with the stick on the ground: from the corner post mark to the bark of the north-west tree, and from bark to bark between the two south trees. Saw the beam 10 cm longer than the first, less {shelter.trunkGap} cm, so it stops {shelter.trunkGap} cm clear of the bark. Saw the plate {shelter.trunkGap} cm shorter than the second at each end.",
      "Peel off the bark with the axe held flat.",
      "Drag each one to the site butt first, one end at a time if it is too heavy to lift."
    ],
    "checks": [
      "Two straight logs, at least 14 cm thick at the small end, cut to fit, with no crack or rot."
    ],
    "safety": [
      "A green 3.5 m log of this size weighs 40–50 kg. Drag it; lift only one end at a time."
    ],
    "estimate": {
      "hours": 2.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
