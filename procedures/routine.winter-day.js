// A day in winter
(function (root) {
  'use strict';
  const procedure = {
    "id": "routine.winter-day",
    "kind": "task",
    "title": "A day in winter",
    "purpose": "The daily round once the ice holds: ice lines and net at first light, snares and wood in the morning, rest in the afternoon.",
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
      "The ice holes are cut, the net is under the ice, and the snare line is running."
    ],
    "steps": [
      {
        "call": "ice.clear-holes",
        "note": "at first light"
      },
      {
        "call": "fish.check-ice-lines",
        "note": "at first light"
      },
      {
        "call": "fish.check-ice-net",
        "note": "at first light"
      },
      "While the creek still flows under its ice and the weir stakes are in, open the hole over the pen and look in.",
      {
        "call": "snare.check-line",
        "note": "in the morning"
      },
      {
        "call": "gather.dry-wood",
        "note": "the day's dead wood, cut and split"
      },
      {
        "call": "food.forage-grubs",
        "note": "as you split"
      },
      {
        "call": "food.cook-fish",
        "note": "the main meal at midday"
      },
      "Mend gear: the net, snares, mittens.",
      "Afternoon: short work only, and rest. Every hour of hard work costs food.",
      "After a snowfall, pack the paths to the shore, the snare line and the cache.",
      "Evening: fire the stove hard for an hour or two, then let it burn out and sleep on the warm bench.",
      {
        "call": "food.cook-fish",
        "note": "in the evening, on the stove"
      },
      {
        "call": "fish.set-ice-lines",
        "note": "in the evening; burbot feed at night"
      }
    ],
    "checks": [
      "Ice lines, net and snares checked; the day's wood split and stacked.",
      "Fish eaten, cooked right through, and any fish left over frozen in the winter cache."
    ],
    "safety": [
      "Carry the ice pole across your body every time you go on the ice.",
      "Tap out for any break through the ice, a deep cut, or frostbite you cannot treat."
    ],
    "estimate": {
      "hours": 0.25,
      "note": "Per day, beyond the jobs it calls. About 7 hours in all."
    },
    "repeat": "daily"
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
