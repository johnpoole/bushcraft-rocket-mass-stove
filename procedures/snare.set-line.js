// Set the snare line
(function (root) {
  'use strict';
  const procedure = {
    "id": "snare.set-line",
    "kind": "task",
    "title": "Set the snare line",
    "purpose": "Set about {snares.count} snares along a marked trail through young spruce and willow on the hare runs, with a skinning stump by the shelter.",
    "requires": {
      "tools": [
        "snare-wire",
        "knife",
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.snare",
        "skill.saw",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [
        "snare-line"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Walk the young spruce and willow near camp and find the hare runs: narrow trails with round droppings, tracks in pairs, and twigs bitten off at a slant.",
      "Lay out a trail about {snares.lineLength} m long that crosses as many runs as it can, starting near the shelter. Cut a small blaze on a trunk at head height every 5 m with the axe, so you can follow it in snow and poor light.",
      "Make {snares.count} snares from the wire.",
      "Set each snare on a run where it passes through a narrow gap between stems, a few metres off the trail so you do not tread on the run.",
      "Fasten each to a solid anchor or a drag stick, and fence the sides with dead twigs.",
      "Mark each set with a second blaze on the nearest trunk, and count them.",
      "Near the shelter, saw a tree stump flat about 70 cm high, or set a log round upright, as the skinning stump."
    ],
    "checks": [
      "{snares.count} snares set, each loop 10 cm across and 5–8 cm off the ground, measured with the stick.",
      "Walking the trail from the first blaze, you find every set."
    ],
    "safety": [
      "Keep sets away from the paths you walk and where a fox or wolverine would drag a hare onto them.",
      "Check every snare every morning so no animal suffers for long."
    ],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
