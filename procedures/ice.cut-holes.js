// Cut and keep ice holes
(function (root) {
  'use strict';
  const procedure = {
    "id": "ice.cut-holes",
    "kind": "task",
    "title": "Cut and keep ice holes",
    "purpose": "Cut two or three holes through the ice with the axe for lines and jigging, and cover them so they only skin over and can be kept open all winter.",
    "requires": {
      "tools": [
        "axe",
        "ice-pole",
        "slush-ladle",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "spruce-boughs",
          "qty": 3
        },
        {
          "id": "snow",
          "qty": 0.3
        }
      ],
      "skills": [
        "skill.read-ice",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "A small bay holds at least 10 cm of clear ice. Test it as you go out."
    ],
    "steps": [
      {
        "call": "gather.boughs"
      },
      "Walk out testing with the axe every three steps, the ice pole across your body.",
      "Choose the places: one off the rocky point where the bottom drops away, for lake trout; one or two over deeper soft bottom, for burbot. At least 50 m from the creek mouth, and 5 m or more apart.",
      "At each place, chop a ring 60 cm across into the ice, then chop out the middle, working down in a cone that narrows to about 30 cm at the bottom. Ladle out the chips as you go.",
      "When water starts to seep in, chop the last few centimetres out carefully from the edge. The hole floods at once; step back so it does not wet your boots.",
      "Measure the clear ice at the edge of the first hole with the stick. Write it down on the tally stick, and check it again each week.",
      "Drop a baited line to the bottom to find the depth, and knot the line at the surface.",
      "Stand a pole upright in the snow beside each hole to find it in drifting snow.",
      "Cover each hole with boughs and heap snow over them into a mound 30 cm high.",
      "Each morning after, open the holes rather than cut new ones: cutting through half a metre or more of ice costs more food than most catches bring back."
    ],
    "checks": [
      "At least 10 cm of clear ice, measured at the first hole.",
      "Two or three holes, each at least 25 cm across at the bottom.",
      "The next morning, under its mound, each hole has skinned over with no more than 3 cm of ice."
    ],
    "safety": [
      "Stay off anything under 10 cm of clear ice, and off grey or snow-covered ice until you have measured it.",
      "Keep well off the ice near the creek mouth; current keeps it thin."
    ],
    "estimate": {
      "hours": 3,
      "note": "Estimate for three holes in 15–25 cm of ice."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
