// Build the layered roof
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.roof",
    "kind": "task",
    "title": "Build the layered roof",
    "purpose": "Roof the shelter so it sheds rain and holds heat: a pole mat, spruce boughs and 15 cm of dry moss kept dry under the tarp, with soil on top to hold it all down.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "measuring-stick",
        "tarp",
        "bark-tray"
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
          "id": "dry-moss",
          "qty": 1
        },
        {
          "id": "soil",
          "qty": 0.5
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
      "The shelter frame is up: the beam at 2.0 m along the back, the plate at 1.2 m along the front, and rafters every 40 cm from beam to plate."
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
      {
        "call": "gather.moss",
        "note": "start this early: the moss needs three or four dry days"
      },
      {
        "call": "dig.soil"
      },
      "Lay the poles across the rafters, at right angles to them, about 10 cm apart, from the back beam to the front plate. Tie each pole to the outer rafters with soaked root cordage.",
      "Lay the spruce boughs over the poles, starting at the front edge, butt ends up the slope and each row overlapping the one below by half, like shingles.",
      "Spread the dry moss evenly over the boughs, 15 cm deep after pressing it down lightly with your palms. Check the depth with the measuring stick every metre.",
      "Stop the boughs and moss 30 cm short of the west edge, beside the chimney. Cover that strip with bark and soil only.",
      "Stretch the tarp over the moss, overlapping every edge by at least 20 cm. Fold the edges down over the ends of the poles so rain runs off beyond the moss, and tie the corners and edges to the frame with root cordage.",
      "Where the roof passes a trunk, cut the tarp around it with a hand-width to spare and lay bark over the gap.",
      "Carry soil up in the bark tray and spread it 5–10 cm deep over the tarp, with moss or boughs on the steepest part to stop it sliding."
    ],
    "checks": [
      "Dry moss 15 cm deep everywhere under the tarp, measured with the stick.",
      "No moss outside the tarp edges, and none within 30 cm of the chimney.",
      "Rafters sag less than 2 cm at mid-span under the finished roof, measured against a string pulled tight from end to end.",
      "After the first rain, the moss under the tarp is still dry."
    ],
    "safety": [
      "Work from the ground or from a log round. Never stand on the rafters.",
      "Keep the tarp and moss well away from the chimney: a spark melts through a tarp and dry moss burns fast."
    ],
    "estimate": {
      "hours": 8
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
