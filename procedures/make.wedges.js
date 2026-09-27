// Make splitting wedges
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.wedges",
    "kind": "make",
    "title": "Make splitting wedges",
    "purpose": "Make three hardwood wedges for splitting logs lengthwise, since there are no steel wedges.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.axe",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "wedges"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Saw a 60 cm length of green birch, or other hard live wood, about 8 cm thick.",
      "Saw it into three pieces 20 cm long.",
      "Stand each piece on the chopping block and chop one end down from two sides to a blunt edge about 1 cm thick, so it tapers evenly over 15 cm.",
      "Trim the edges and square the top with the knife so the club lands flat."
    ],
    "checks": [
      "Three wedges that go 5 cm into a split in a log under the club without crushing their tips."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
