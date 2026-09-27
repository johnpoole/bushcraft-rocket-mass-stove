// Rig the gill net with floats and sinkers
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.rig-net",
    "kind": "task",
    "title": "Rig the gill net with floats and sinkers",
    "purpose": "Tie floats to the top cord and sinkers to the bottom cord, so the net stands upright in the water like a fence.",
    "requires": {
      "tools": [
        "gill-net",
        "fishing-kit",
        "knife",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "net-floats",
          "qty": 13
        },
        {
          "id": "net-sinkers",
          "qty": 13
        }
      ],
      "skills": [
        "skill.gill-net"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The kit net has a cord along its top edge and one along its bottom edge. If it already carries floats and sinkers, skip this."
    ],
    "steps": [
      {
        "call": "gather.net-floats"
      },
      {
        "call": "gather.net-sinkers"
      },
      "Hang the net on the net poles by its top cord and shake it out so the mesh hangs free.",
      "Mark every metre along the top cord with the measuring stick, from one end to the other.",
      "At each mark, tie a float to the top cord with 40 cm of fishing line: two turns around the groove in the float, a clove hitch on the cord, and two half hitches.",
      "Tie a sinker to the bottom cord directly below each float the same way, with the line around the bark wrap in both directions.",
      "Tie a loop of line 30 cm long to each end of the top cord and each end of the bottom cord, to fasten the net to its lines."
    ],
    "checks": [
      "A float every metre on the top cord and a sinker below each one, 13 of each on the {net.length} m net.",
      "Laid in knee-deep water, the net stands upright with the floats at the surface and the sinkers on the bottom."
    ],
    "safety": [],
    "estimate": {
      "hours": 2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
