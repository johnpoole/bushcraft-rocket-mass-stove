// Smoke and dry a batch of fish
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.smoke-fish",
    "kind": "task",
    "title": "Smoke and dry a batch of fish",
    "purpose": "Hot-smoke and then dry about 12 kg of fish on the rack until it is dry and hard, so it keeps for months.",
    "requires": {
      "tools": [
        "smoke-rack",
        "knife",
        "club"
      ],
      "materials": [
        {
          "id": "fresh-fish",
          "qty": 12
        },
        {
          "id": "green-wood",
          "qty": 3
        },
        {
          "id": "dry-wood",
          "qty": 2
        },
        {
          "id": "birch-bark",
          "qty": 2
        },
        {
          "id": "root-cordage",
          "qty": 1
        }
      ],
      "skills": [
        "skill.clean-fish",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "smoked-fish",
          "qty": 12
        }
      ]
    },
    "preconditions": [
      "About 12 kg of cleaned fish from the checks, about two days of what the net, weir and lines bring in beyond what you eat."
    ],
    "steps": [
      {
        "call": "gather.green-wood"
      },
      "Split every fish open flat, backbone out, and slit the thick flesh every 3 cm down to the skin.",
      "Push two thin green sticks crosswise through the flesh of each fish, just under the skin, so it stays open flat.",
      {
        "call": "task.light-fire",
        "note": "in the fire pit under the rack, or rake open the banked coals if they are still alive"
      },
      "Hot-smoke first: build the fire up with dry wood to a deep bed of coals. Lay the fish skin side down on the lower tier, not touching each other.",
      "Keep the fire hot for about three hours: you can hold your hand at the lower tier for no more than three seconds. The fish is cooked when the thickest flesh is white and flakes right through. Cooking kills tapeworm; fish that is only dried can still carry it.",
      "Then damp the fire with green wood so it smoulders and smokes with little flame. Move the fish to the upper tier.",
      "From now on keep it warm, not hot: you can hold your hand at the upper tier for ten seconds. Add green wood every hour or two through the day so the smoke keeps rolling.",
      "Turn each fish morning and evening.",
      "At night, bank the fire: lay thick green wood on the coals and cover them with ash.",
      "In rain, keep the fire in and the smoke up; in steady rain, move the fish under the tarp.",
      "Test every morning from the third day: take the thickest fish off and bend it.",
      "When it is done, wrap the fish in birch-bark bundles of up to 10 kg, tie them with root cordage, and hang them in the cache."
    ],
    "checks": [
      "The thickest piece is hard right through: a thumbnail pressed into it leaves no dent, and it cracks when bent.",
      "No soft, damp or mouldy spot on any fish.",
      "The batch weighs about a third of what went on: carried in the bark tray, it feels like one third of the load."
    ],
    "safety": [
      "Until the bears den, in October, take the fish down at dusk, wrap them in bark and hoist them into the cache, and put them back in the morning. Never take fish to the shelter.",
      "Never leave an open flame under the rack. Bank the fire whenever you walk away."
    ],
    "estimate": {
      "hours": 3,
      "waitDays": 4,
      "note": "Estimate: three hours of work for 12 kg, then three to five days of smoke and turning."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
