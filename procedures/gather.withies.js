// Cut withies
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.withies",
    "kind": "gather",
    "title": "Cut withies",
    "purpose": "Cut long, bendy willow shoots for weaving the riser former.",
    "requires": {
      "tools": [
        "knife",
        "saw",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "withies",
          "qty": 60
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Find willow or alder thickets on the creek banks and woodland edges.",
      "Cut 10 straight shoots finger-thick at the butt and at least 1.2 m long, for uprights.",
      "Cut 50 thinner shoots, pencil-thick and as long as you can find, for weaving.",
      "Take a few from each bush and move on.",
      "Strip the leaves by pulling each shoot through your closed hand, and bundle them."
    ],
    "checks": [
      "60 shoots: 10 uprights at least 1.2 m long, and 50 weavers that bend round a finger without cracking."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
