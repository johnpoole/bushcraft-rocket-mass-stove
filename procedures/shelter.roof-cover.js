// Cover the roof
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.roof-cover",
    "kind": "task",
    "title": "Cover the roof",
    "purpose": "Put a roof over the frame in the first days: a mat of poles and spruce boughs, the inner tarp piece as a vapour barrier, and the outer piece over it to keep rain off until the moss goes on.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "measuring-stick",
        "tarp-inner",
        "tarp-outer"
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
      "Let the poles reach {shelter.overhangWest} cm past the outside of the west wall line and no further, so the roof edge stays clear of the chimney. The rest of their length overhangs the east end.",
      "Lay the spruce boughs over the poles, starting at the front edge, butt ends up the slope and each row overlapping the one below by half, like shingles.",
      "Stop the boughs 30 cm short of the west edge, beside the chimney.",
      "Stretch the inner tarp piece over the boughs, shiny side down, and centre it across the width of the roof. It covers the ceiling inside the walls; its lower edge reaches the front wall top.",
      "The inner piece is about {tarp.innerShort} cm short of the back beam. Lap that strip with sheets of birch bark, white side down, slid 20 cm under the tarp edge.",
      "Tuck the side and front edges of the inner piece down onto the wall tops and tie them to the rafters with root cordage. This piece does not have to shed rain; it has to stay whole, with no holes and no gaps at the edges.",
      "Where the roof passes a trunk, cut the tarp around it with a hand-width to spare, and seal the gap round the trunk with a collar of moss pressed into clay.",
      "Lay the outer piece over the inner one as a rain cover for now, overlapping every edge by at least 20 cm and folded down over the ends of the poles. Tie it with slip knots so it can be lifted when the moss goes on."
    ],
    "checks": [
      "Both tarp pieces are tight, and rain drains off every edge of the outer piece with no pools on it.",
      "Nothing under the inner piece is wet after the first rain.",
      "No boughs within 30 cm of where the chimney will stand."
    ],
    "safety": [
      "Work from the ground or from a log round. Never stand on the rafters."
    ],
    "estimate": {
      "hours": 4.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
