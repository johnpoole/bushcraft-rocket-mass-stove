// Find clay for the stove
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.find-clay",
    "kind": "task",
    "title": "Find clay for the stove",
    "purpose": "Find workable clay within easy carrying distance before committing to the stove. The east arm is mostly bare granite, and the whole stove depends on it.",
    "requires": {
      "tools": [
        "digging-stick",
        "knife",
        "pot",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.clay-test"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "In the first days, walk the creek banks and low, wet ground within about 200 m of the shelter. Clay shows as grey, blue-grey or tan subsoil in cut banks and under the roots of fallen trees.",
      "At each likely spot, dig a test hole with the digging stick through the moss and topsoil until the soil changes colour, usually 20–50 cm down.",
      "Test a handful from each hole with the snake, rub and shake tests. Keep going until one passes.",
      "At the best spot, dig a hole 50 cm across to see how deep the clay runs. Measure its depth with the measuring stick.",
      "Make the three fire-test patties (0, 1 and 2 parts sand to 1 part clay) and fire them in the evening fire. The one that comes out whole sets the sand in every mix.",
      "Mark the spot with a blazed stake and pace the distance back to the shelter.",
      "If you find no clay that passes: do not build the stove. Pick another site, or plan on an open fire under a raised smoke hole."
    ],
    "checks": [
      "A clay deposit that passes the snake test, at least 30 cm deep, within about 200 m of the shelter.",
      "A fired patty that came out without cracks, and its sand-to-clay ratio remembered."
    ],
    "safety": [
      "Do not dig under an overhanging bank: undercut banks collapse."
    ],
    "estimate": {
      "hours": 4,
      "note": "Estimate. Longer if the first places you look have none."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
