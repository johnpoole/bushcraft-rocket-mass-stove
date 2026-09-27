// Build the stove, stage two: the bench
(function (root) {
  'use strict';
  const procedure = {
    "id": "plan.stove-stage-two",
    "kind": "plan",
    "title": "Build the stove, stage two: the bench",
    "purpose": "Build the heat-storing bench over the stage-one duct, about {volume.stage2} m³, in a way that dries in one to three weeks: a stone core in thin lifts with clay only as mortar, faced and topped with clay blocks dried ahead of time. Built as plain cob it would hold about 250 litres of water and take five to seven weeks to dry; this way it holds about 60–80 litres.",
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
      "Stage one is built and has had its first firing (stove.first-firing); the stove draws well.",
      "The clay has proved good: stage-one walls have dried without cracks wider than a hairline.",
      "About 200 clay blocks are made and dry, from about ten batches of stove.make-blocks, each passing the break test.",
      "The shelter does not yet freeze overnight while it is fired every evening."
    ],
    "steps": [
      "Go on only if the clay is good. If the stage-one walls cracked badly, keep sleeping on the hot-stone bed instead.",
      {
        "call": "dig.clay",
        "times": 2,
        "note": "about 0.17 m³ for mortar, light clay, slip and plaster"
      },
      {
        "call": "gather.sand",
        "times": 3,
        "note": "about 0.25 m³"
      },
      {
        "call": "gather.grass-fibre",
        "times": 3,
        "note": "for light clay, plaster, and covering wet sections at night"
      },
      {
        "call": "gather.stones",
        "times": 2,
        "note": "about 0.3 m³ of fist- to loaf-sized stones for the core"
      },
      {
        "call": "gather.flat-stones",
        "note": "for the two plugs at the top of the bend boxes"
      },
      {
        "call": "gather.birch-bark",
        "note": "for tinder and the drying test"
      },
      {
        "call": "stove.bench-lifts"
      },
      {
        "call": "stove.bench-dry"
      }
    ],
    "checks": [
      "The bench is {bench.height} cm high with {stove.benchCover} cm of mass over the channel, and both bend plugs lift out from the bench top.",
      "A piece of bark left on the bench overnight is dry underneath in the morning.",
      "After an evening firing, the bench top is still warm to the hand the next morning."
    ],
    "safety": [
      "Ventilate while it dries: steam that condenses on the tarp drips into the sleeping bag."
    ],
    "estimate": {
      "hours": 0,
      "note": "Estimate: about 80 hours of work in the steps it calls, over two to four weeks including drying."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
