// The first days
(function (root) {
  'use strict';
  const procedure = {
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "safety": [],
    "estimate": {
      "hours": 0
    },
    "id": "plan.first-days",
    "kind": "plan",
    "window": {
      "from": 0,
      "to": 5
    },
    "title": "The first days",
    "purpose": "Make the tools, choose the site, get the net fishing and get a roof overhead.",
    "steps": [
      {
        "call": "plan.make-tools"
      },
      {
        "call": "shelter.choose-site"
      },
      {
        "call": "fish.set-gill-net"
      },
      {
        "call": "gather.moss",
        "note": "spread it to dry now: the roof needs it in about a week"
      },
      {
        "call": "shelter.frame"
      },
      {
        "call": "routine.camp-start-day",
        "note": "from the day the net is in"
      }
    ],
    "checks": [
      "The net is fishing, the roof is covered, and the camp tools are made."
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
