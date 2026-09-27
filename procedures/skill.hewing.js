// Hew a log flat with the axe
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.hewing",
    "kind": "skill",
    "title": "Hew a log flat with the axe",
    "purpose": "Cut a flat face along a log with the kit axe, so logs stack tight on each other and on the plinth.",
    "requires": {
      "tools": [
        "axe",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Lay the log on two short cross-logs so it sits off the ground. Drive a stake on each side of it at both ends, or chop a shallow notch in each cross-log, so it cannot roll.",
      "Mark the flat: rub a length of root cordage with charcoal from the fire, pull it tight along the log over the face you will hew, lift it in the middle and let it snap back. It leaves a straight black line. Snap a second line parallel to it, as far apart as the flat must be wide.",
      "Stand on the ground beside the log, on the side away from the face you are hewing, feet apart and well back from the line of the swing.",
      "Score: chop a row of cuts across the face every 10–15 cm, each down to the depth of the lines and no deeper.",
      "Juggle: from one end, chop along the lines to split off the wood between each pair of scores. Let the chunks break away; do not pry them.",
      "Smooth the face with light, flat strokes along the log, taking off the high spots between the scores.",
      "Lay a straight pole along the face. Where you can see light under it, hew again.",
      "Roll the log over, hold it again, and hew the opposite face the same way, parallel to the first."
    ],
    "checks": [],
    "safety": [
      "Hew the far side of the log, never the side your legs are on.",
      "Stop when your strokes get sloppy. Hewing is where tired axe work goes into a shin."
    ],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
