// Make a hook pole
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.hook-pole",
    "kind": "make",
    "title": "Make a hook pole",
    "purpose": "Make a long pole with a hook at the top, to pull down dead branches and to check branch height over the chimney.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "hook-pole"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a straight dead standing spruce or pine 4–5 cm thick at the butt, with a strong side branch near the top.",
      "Saw it off at the ground and saw the top off 4.5 m from the butt, measured with the stick.",
      "Saw the side branch off 10 cm from the trunk, so the stub points up and out as a hook.",
      "Trim off the other branches flush with the knife.",
      "Cut a deep notch at {chimney.top} m from the butt, the height of the chimney top. When the butt stands on the ground beside the chimney, the tip is more than 2 m above the chimney top and shows the lowest a branch may hang."
    ],
    "checks": [
      "A pole 4.5 m long, measured with the stick, whose hook pulls a wrist-thick dead branch down without breaking."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
