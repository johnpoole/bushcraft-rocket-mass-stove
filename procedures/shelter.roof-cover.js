// Cover the roof
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.roof-cover",
    "kind": "task",
    "title": "Cover the roof",
    "purpose": "Put a roof over the frame in the first days: a mat of poles, spruce boughs and the tarp, tied down. Moss goes under the tarp later, once it is dry.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "measuring-stick",
        "tarp"
      ],
      "materials": [
        {
          "id": "poles",
          "qty": 20
        },
        {
          "id": "spruce-boughs",
          "qty": 6
        },
        {
          "id": "root-cordage",
          "qty": 20
        }
      ],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The shelter frame is up: the beam at {shelter.backHeight} m along the back, the plate at {shelter.frontHeight} m along the front, and rafters every {shelter.rafterSpacing} cm from beam to plate."
    ],
    "steps": [
      {
        "call": "gather.poles"
      },
      {
        "call": "make.root-cordage",
        "times": 2,
        "note": "for about 20 m"
      },
      {
        "call": "gather.boughs"
      },
      "Lay the poles across the rafters, at right angles to them, about 10 cm apart, from the back beam to the front plate. Tie each pole to the outer rafters with soaked root cordage.",
      "Lay the spruce boughs over the poles, starting at the front edge, butt ends up the slope and each row overlapping the one below by half, like shingles.",
      "Stop the boughs 30 cm short of the west edge, beside the chimney.",
      "Stretch the tarp over the boughs, overlapping every edge by at least 20 cm. Fold the edges down over the ends of the poles so rain runs off beyond them, and tie the corners and edges to the frame with root cordage, using slip knots on the front half so it can be opened again.",
      "Where the roof passes a trunk, cut the tarp around it with a hand-width to spare and lay bark over the gap."
    ],
    "checks": [
      "The tarp is tight and drains off every edge, with no pools on it after rain.",
      "Nothing under the tarp is wet after the first rain.",
      "No boughs within 30 cm of where the chimney will stand."
    ],
    "safety": [
      "Work from the ground or from a log round. Never stand on the rafters."
    ],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
