// Make a club
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.club",
    "kind": "make",
    "title": "Make a club",
    "purpose": "Make a wooden club for driving stakes, wedges and the axe, since there is no hammer.",
    "requires": {
      "tools": [
        "saw",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "club"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Saw a 50 cm length of green hardwood, birch if you can find it, about 8–10 cm thick.",
      "Carve the last 25 cm at one end down to a handle about 4 cm thick, leaving the other end full thickness as the head."
    ],
    "checks": [
      "The head does not split after twenty hard blows on a stake."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
