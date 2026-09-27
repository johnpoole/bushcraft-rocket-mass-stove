// Build the net poles
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.net-poles",
    "kind": "make",
    "title": "Build the net poles",
    "purpose": "Build a crossbar on two tripods at the shore, to dry and mend the gill net.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "poles",
          "qty": 7
        },
        {
          "id": "root-cordage",
          "qty": 7
        }
      ],
      "skills": [
        "skill.saw",
        "skill.axe",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [
        "net-poles"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      {
        "call": "gather.poles",
        "note": "the poles left over are used to set the net"
      },
      {
        "call": "make.root-cordage"
      },
      "Pick a flat spot at the shore above the high-water line, near the creek mouth.",
      "Lay three poles side by side with their tops level. Lash them together 30 cm from the top with a figure-of-eight turn of soaked root cordage, loosely enough to spread them.",
      "Stand them up and spread the feet into a tripod with legs about 1.5 m apart. On bare rock, pile stones around each foot.",
      "Build a second tripod the same way, 3 m from the first.",
      "Lay the seventh pole across the two tripod tops as a crossbar and lash it at each end."
    ],
    "checks": [
      "The crossbar is level and about 2.5 m up, measured with the stick.",
      "Hanging your full weight from the middle of the crossbar moves neither tripod."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
