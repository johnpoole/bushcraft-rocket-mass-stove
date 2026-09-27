// Prepare the stove site and base
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.base",
    "kind": "task",
    "title": "Prepare the stove site and base",
    "purpose": "Lay a drained, insulated base under the stove core and a bed of dry stone along the bench route, so the tunnel floor is level with the shelter floor and heat stays out of the ground.",
    "requires": {
      "tools": [
        "digging-stick",
        "bark-tray",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "stones",
          "qty": 0.4
        },
        {
          "id": "light-clay",
          "qty": 0.06
        }
      ],
      "skills": [
        "skill.tread-mix"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The shelter roof is on.",
      "The dry stone pile is stocked, and clay and grass fibre are at the mixing place."
    ],
    "steps": [
      "Mark the stove corner: the back-east corner, the one farthest from the three trees. The dome square starts {bench.backGap} cm out from the back wall and {bench.backGap} cm out from the east wall.",
      "Scrape off topsoil and leaf litter down to mineral soil over the whole stove and bench footprint and for 1 m in front of where the feed tube will be. Carry the spoil out in the bark tray.",
      "Under the stove core, dig a pit about 70 cm wide along the back wall and 80 cm out from it, as deep as {base.stone} cm of stone plus {base.lightClay} cm of light clay. Measure the depth below the shelter floor with the measuring stick.",
      "From the lowest corner of the pit, dig a drain trench {base.drainDepth} cm deep and 20 cm wide, out under the east wall between two plinth stones and on downhill until its floor comes out on the slope, at least 1 m beyond the wall.",
      "Fill the drain with the smallest stones from the dry pile, walnut- to fist-sized, and lay the turf you scraped off upside down over them before backfilling, so soil does not wash into the gaps.",
      "Lay {base.stone} cm of dry stones in the pit, largest first, packed tight, the top roughly level.",
      {
        "call": "gather.light-clay"
      },
      "Pack {base.lightClay} cm of light clay over the stones, pressing it down with your palms, so its top is level with the shelter floor. Check with a straight stick laid across the pit to the floor on each side.",
      "Along the whole bench route, lay {base.stone} cm of dry stone on the floor: {bench.width} cm wide along the back wall from the core to the west wall, and 60 cm wide along the west wall to 10 cm short of the front wall. Keep it {bench.backGap} cm off the logs.",
      "Tread the stone layer firm and fill the biggest gaps with small stones."
    ],
    "checks": [
      "The light clay top is level with the shelter floor to within 1 cm across the whole pit.",
      "A potful of water poured on the stones before the light clay went in drained away within a minute.",
      "The bench stone layer is {base.stone} cm deep, measured at both ends and at each corner.",
      "Bare mineral soil for 1 m in front of the feed tube position."
    ],
    "safety": [
      "Lift stones with your legs, back straight. Roll the big ones."
    ],
    "estimate": {
      "hours": 8,
      "waitDays": 1,
      "note": "Estimate: about 0.25 m³ dug and 0.4 m³ of stone placed. Let the light clay firm for a day."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
