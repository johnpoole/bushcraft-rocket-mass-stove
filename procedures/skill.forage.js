// Pick wild plants safely
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.forage",
    "kind": "skill",
    "title": "Pick wild plants safely",
    "purpose": "Know the few plants this plan eats, and the poisonous ones that grow beside them.",
    "requires": {
      "tools": [
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Eat only a plant you can name for certain. If you are unsure, leave it.",
      "Blueberries: low shrubs on dry rock and in open pine, blue berries with a five-pointed crown at the end. Late August to first snow.",
      "Lowbush cranberries: a creeping evergreen with small shiny leaves, dark dots under the leaf, and red berries in small clusters. They stay on through winter under the snow.",
      "Crowberries: a low mat with needle-like leaves and shiny black berries one by one along the stems.",
      "Rose hips: red to orange fruits on thorny wild rose bushes, staying on into winter. Eat the flesh; scrape out the hairy seeds, which irritate the gut.",
      "Cattail: tall flat sword-shaped leaves in shallow water, with a brown cigar-shaped head on a separate stalk. The root is the thick white runner in the mud.",
      "Never eat: red or white baneberries, which grow in clusters on a single stalk above a leafy plant in shady woods; any berry on a tall plant with white milky sap; or any root from a plant with finely divided leaves and umbrella-shaped flower heads growing in wet ground. That is water hemlock, and one bite of its root can kill. It grows in the same wet places as cattail.",
      "Eat a new food in a small amount the first day and wait a day before eating more."
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
