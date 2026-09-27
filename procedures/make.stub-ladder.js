// Make a stub ladder
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.stub-ladder",
    "kind": "make",
    "title": "Make a stub ladder",
    "purpose": "Make a climbing pole with branch stubs as rungs, to reach the cache pole without a ladder.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.felling",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [
        "stub-ladder"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a dead standing spruce about 12 cm thick with branches all the way up, 6 m tall or more.",
      "Fell it and cut it off at 5.5 m.",
      "Cut every branch off with the axe 15 cm out from the trunk, so the stubs are steps. Keep stubs on both sides, about every 30 cm.",
      "Test each stub with your full weight while standing near the ground. Knock off any that crack and cut a notch step there with the axe instead."
    ],
    "checks": [
      "A pole 5.5 m long with a sound step at least every 40 cm, each holding your weight."
    ],
    "safety": [
      "Dead stubs can snap. Stand on them close to the trunk, not out at the tips."
    ],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
