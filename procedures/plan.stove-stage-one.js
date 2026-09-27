// Build the stove, stage one
(function (root) {
  'use strict';
  const procedure = {
    "id": "plan.stove-stage-one",
    "kind": "plan",
    "title": "Build the stove, stage one",
    "purpose": "Build a working rocket stove in the first week or two: base, burn tunnel, feed tube, insulated riser, dome and cooktop, a stone duct along the bench route and a stone-and-cob chimney. It is about {volume.stage1} m³ of clay, sand and stone in the core and chimney. It cooks and warms the shelter while it burns but stores little heat; sleep on the hot-stone bough bed until stage two.",
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
      "The shelter frame is up and the roof is covered (shelter.roof-cover), so rain stays off the clay while it dries.",
      "The west wall has an opening at floor level where the duct will pass out to the chimney, with no log closer than {bench.backGap} cm to the duct.",
      "The camp tools are made (plan.make-tools)."
    ],
    "steps": [
      {
        "call": "make.size-gauge"
      },
      {
        "call": "make.ash-rake",
        "note": "needed for the first firing and for cleaning out"
      },
      {
        "call": "stove.find-clay",
        "note": "in the first days; no clay, no stove"
      },
      {
        "call": "make.root-cordage",
        "note": "for tying the formers and the riser basket"
      },
      {
        "call": "gather.birch-bark",
        "times": 2,
        "note": "for wrapping the formers and the riser insulation"
      },
      {
        "call": "dig.clay",
        "times": 4,
        "note": "about 0.33 m³ of clay for all of stage one"
      },
      {
        "call": "gather.sand",
        "times": 6,
        "note": "about 0.55 m³"
      },
      {
        "call": "gather.grass-fibre",
        "times": 4,
        "note": "for cob, light clay, plaster and the formers"
      },
      {
        "call": "gather.withies",
        "note": "for the riser basket"
      },
      {
        "call": "gather.stones",
        "times": 3,
        "note": "about 0.7 m³ for the base, drain, duct and chimney"
      },
      {
        "call": "gather.flat-stones",
        "times": 4,
        "note": "about 36 slabs"
      },
      {
        "call": "stove.test-burner",
        "note": "before you commit a week to the real stove"
      },
      {
        "call": "gather.fired-bricks",
        "note": "start early: the tiles need about three days to dry before firing"
      },
      {
        "call": "stove.base"
      },
      {
        "call": "gather.stove-formers"
      },
      {
        "call": "stove.tunnel"
      },
      {
        "call": "gather.riser-basket",
        "note": "weave it while the tunnel firms; it dries by the fire for two days"
      },
      {
        "call": "stove.riser"
      },
      {
        "call": "stove.dome"
      },
      {
        "call": "stove.duct"
      },
      {
        "call": "stove.chimney"
      },
      {
        "call": "stove.seal"
      }
    ],
    "checks": [
      "The base, tunnel, riser, dome, duct, chimney and seal each pass their own checks.",
      "Every opening from the feed tube to the chimney top was checked with the {stove.size} cm size gauge before it was closed.",
      "The stove is ready for its drying and first firing (stove.first-firing)."
    ],
    "safety": [
      "Only dry-land stones anywhere near the heat. Stones from the lake, creeks or wet ground can burst when heated.",
      "No wood anywhere in the flue or the chimney."
    ],
    "estimate": {
      "hours": 0,
      "note": "Estimate: about 110 hours of work in the steps it calls, spread over one to two weeks with drying waits."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
