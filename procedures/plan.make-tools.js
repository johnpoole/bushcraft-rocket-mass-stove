// Make the camp tools
(function (root) {
  'use strict';
  const procedure = {
    "id": "plan.make-tools",
    "kind": "plan",
    "title": "Make the camp tools",
    "purpose": "Make the tools that every other job relies on, in the first days, before they are needed.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "You have your gear."
    ],
    "steps": [
      {
        "call": "make.measuring-stick"
      },
      {
        "call": "make.club"
      },
      {
        "call": "make.root-cordage"
      },
      {
        "call": "make.bark-tray"
      }
    ],
    "checks": [
      "A measuring stick, a club, root cordage and a bark tray, each passing its own check."
    ],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
