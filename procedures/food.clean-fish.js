// Clean the catch at the water
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.clean-fish",
    "kind": "gather",
    "title": "Clean the catch at the water",
    "purpose": "Kill, gut and wash the catch at the water, away from camp, so blood and guts draw no bears to the shelter.",
    "requires": {
      "tools": [
        "knife",
        "club"
      ],
      "materials": [],
      "skills": [
        "skill.clean-fish"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "fresh-fish",
          "qty": 2
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "In open water, carry the catch to the cleaning rock: a flat rock at the water about {cleaning.toShelter} m from the shelter and well along the shore from the weir, so guts do not foul it. In winter, clean the fish on the ice beside the hole it came from.",
      "Kill any fish still alive.",
      "Bleed, gut and rinse each fish. Keep the livers, roe and hearts in the pot.",
      "Keep a few belly strips and eyes as bait for the lines.",
      "Split the fish you will smoke; leave whole the fish you will eat today.",
      "Throw the guts and heads you will not boil out into deep water, not onto the shore. In winter, drop them down a hole you do not fish.",
      "Wash the rock and your hands."
    ],
    "checks": [
      "Every fish gutted, gills out, blood line scraped and rinsed.",
      "Nothing left on the rock or the shore."
    ],
    "safety": [
      "Bears feed hard until they den in October. Never clean fish or leave waste near the shelter.",
      "Cut away from the hand holding the fish; slime makes the knife slip."
    ],
    "estimate": {
      "hours": 0.3,
      "note": "Planning figure: about 2 kg of whole fish per check. Some checks bring nothing, some bring 10 kg."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
