// Read and test ice
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.read-ice",
    "kind": "skill",
    "title": "Read and test ice",
    "purpose": "Tell safe ice from thin ice, test it with the axe as you go, and get out if it breaks.",
    "requires": {
      "tools": [
        "axe",
        "measuring-stick"
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
      "Clear, black or dark ice is the strongest. Grey ice, white ice and ice under snow are weaker. Count only clear ice toward the thickness.",
      "Stay off ice with less than 10 cm of clear ice. Keep off the ice near the creek mouth and any inflow or outflow, where current keeps it thin, and off ice over springs, which shows as a darker patch or a hollow in the snow.",
      "Go out only on ice you have tested. Carry the long ice pole across your body in both hands: if the ice breaks, it bridges the hole.",
      "Test as you walk: every three steps, strike the ice in front of you hard with the back of the axe. Good ice rings and the axe bounces. If the axe goes through, or water comes up, or the ice cracks away from the blow, go back the way you came.",
      "Measure: at your first stop, and wherever the ice looks different, chop a small hole through and measure the clear ice with the measuring stick. Go on only if it is 10 cm or more.",
      "If you go through: do not try to climb out forward onto ice you have not tested. Turn back toward the way you came, where the ice held you. Put your arms flat on the ice, kick your legs up behind you until you lie flat, and slide and roll away from the hole. Do not stand up until you are on ice you walked on.",
      "Then go straight to the fire or the stove, strip off the wet clothes and get into the sleeping bag. Do not wait to see if you are all right. Any break through the ice is a reason to tap out."
    ],
    "checks": [],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
