// Use a saw safely
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.saw",
    "kind": "skill",
    "title": "Use a saw safely",
    "purpose": "Cross-cut poles and logs with the saw from the kit without binding the blade or cutting your hand.",
    "requires": {
      "tools": [
        "saw"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Hold the wood still: kneel on it, or lean it against a log so it cannot roll.",
      "Keep your holding hand at least 15 cm from the cut and above the line of the blade.",
      "Start with three or four light pull strokes to set the cut, then use the whole length of the blade in long, even strokes. Let the saw do the work; do not push down.",
      "Support the wood so the cut opens as you go: cut where the wood overhangs its support, not between two supports, where the cut closes and pinches the blade.",
      "If the blade pinches, stop, lift the free end to open the cut, and finish from the other side.",
      "Fold or cover the blade whenever you put the saw down."
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
