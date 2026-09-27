// Lay clay blocks
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.lay-blocks",
    "kind": "skill",
    "title": "Lay clay blocks",
    "purpose": "Lay dry clay blocks in clay mortar so the joints hold.",
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
    "steps": [
      "Dip each dry block in water for a moment before you lay it. A dry block sucks the water out of the mortar, and the joint crumbles.",
      "Butter the bed and the end of each block with about 1 cm of mortar.",
      "Press it into place, tap it level with the heel of your hand, and scrape off what squeezes out.",
      "Stagger the joints from one course to the next, as in a brick wall, so no joint runs straight up.",
      "Build the face up with the lifts behind it, one course of blocks for each lift or two."
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
