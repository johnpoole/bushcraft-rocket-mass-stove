// Eat a day from the store
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.eat-store",
    "kind": "task",
    "title": "Eat a day from the store",
    "purpose": "Eat half rations of smoked fish and carried food while the lake is neither open nor safe to walk on.",
    "requires": {
      "tools": [
        "pot",
        "knife",
        "stub-ladder"
      ],
      "materials": [
        {
          "id": "smoked-fish",
          "qty": 1
        },
        {
          "id": "water",
          "qty": 3
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The smoked fish is hanging in the cache (food.hang-cache).",
      "The stove or a fire is burning."
    ],
    "steps": [
      "Lean the stub ladder against the tree where the hoist line is tied, climb to the tie 3 m up, untie it and lower the cache ring to the ground.",
      "Take out the day's fish, the smoked fish from about 1 kg of whole fish, about 0.3 kg dried, and about 150 g of the carried food.",
      "Tie the bundle up again and hoist the ring back to {cache.height} m. Climb the ladder, tie the line off 3 m up, and lay the ladder flat on the ground away from the trees.",
      "Break the fish into pieces and soak it in the pot in water for an hour.",
      "Boil it for at least ten minutes into a thick soup, with the flour, lentils or rice from the carried food and any rose hips, grubs or roots you have.",
      "Eat half at midday and half in the evening, broth and all, with the day's pemmican, chocolate or jerky."
    ],
    "checks": [
      "One day's share taken out and the cache back up at {cache.height} m.",
      "Keep a tally of the days eaten, scratched on a stick. The store and the carried food should last six weeks."
    ],
    "safety": [
      "Boil smoked fish before you eat it, in case any piece was not cooked through when it was smoked.",
      "Knock the ice off the ladder stubs before you climb, keep three points on the ladder, and do not climb in wind."
    ],
    "estimate": {
      "hours": 0.75,
      "note": "Estimate. Half rations, about 1,700 calories: about 900 from the fish and 800 from the carried food. The rest comes off your own body fat."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
