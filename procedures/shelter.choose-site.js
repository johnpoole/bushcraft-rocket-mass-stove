// Choose the shelter site
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.choose-site",
    "kind": "task",
    "title": "Choose the shelter site",
    "purpose": "Find three healthy trees in the right place near a creek with good clay, on ground deep enough to dig, before committing days of work to it.",
    "requires": {
      "tools": [
        "digging-stick",
        "measuring-stick",
        "pot",
        "knife",
        "hook-pole",
        "axe"
      ],
      "materials": [
        {
          "id": "water",
          "qty": 5
        }
      ],
      "skills": [
        "skill.clay-test"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The measuring stick and digging stick are made."
    ],
    "steps": [
      {
        "call": "make.hook-pole"
      },
      "Walk the shore to the creeks that run into the lake. For each, walk up both banks for about 200 m.",
      "Dig a test hole in the bank every 20 m or so, where the bank is low and firm: scrape off the moss and topsoil and dig down with the digging stick 50 cm, or until you reach rock.",
      "Test the soil from below the topsoil in each hole with the clay test: roll it, bend it, rub it, and set a shake test in the pot at the best hole.",
      {
        "call": "task.light-fire",
        "note": "for the fire test on the best clay, and to cook"
      },
      "Make the fire test patties from the best clay and fire them.",
      "Follow the best clay along the bank with more holes until you know how far it runs. You need a layer at least 20 cm thick running at least 3 m along the bank, which is enough for the stove.",
      "Check the shore near the creek mouth for coarse sand, and for dense stones and flat slabs on dry ground above the high-water line.",
      "Near that creek, look for three healthy trees standing roughly in a right angle, about 25 m back from the lake: two along a line facing the lake to the south, and one north of the western one.",
      "Measure between the trunk centres with the stick. East to west along the south: {shelter.treeSpacingX} m. South to north on the west: {shelter.treeSpacingZ} m. Corner to corner, south-east to north-west: {shelter.treeDiagonal} m. Each may be up to 30 cm longer but not shorter, or the stove and bench will not fit.",
      "Check each tree: green needles to the top, no fungus or rot at the base, a trunk at least 30 cm thick that rings when knocked with the back of the axe, and no lean toward where the shelter will stand.",
      "Look up from each corner and from 10 m out on each side. There must be no dead limbs over the shelter. Stand the hook pole on end where the chimney will stand, just west of the middle of the west side: no branch may hang lower than its tip, which is more than 2 m above the {chimney.top} m chimney top.",
      "Pace from the corner to the water, with your pace first counted over 10 m measured with the stick. The site should be about 25 m back from the water and at least 2 m above it, above the line of old drift wood and ice-scoured rock.",
      "Check the ground is level: lay a straight pole across the floor space, set the pot on it half full of water, and look at the water line against the side of the pot. Turn the pole and do it again the other way. The floor may fall no more than 10 cm from north to south, and should not fall toward the back.",
      "Check the soil depth: at the fourth corner, where the post will stand, dig a hole 60 cm deep. Do the same at the middle of the back side and where the door will be. Each must reach 60 cm without striking rock, for 50 cm post holes and the stove base and drain.",
      "Pour a pot of water into the hole at the fourth corner. It must soak away within an hour. If it stands, the ground is too wet; move on.",
      "Check for young spruce and willow within 100 m, for the snare line, and look for bear sign. Fresh bear sign, a trail or a berry patch at the site means move on.",
      "Once a site passes, fill the test holes on the bank you will not dig, and drive a peeled stick at the fourth corner to mark it."
    ],
    "checks": [
      "A clay layer at least 20 cm thick and 3 m long whose snake bends into a ring without cracking and whose fired patty comes out whole.",
      "Trunk spacings measured within 30 cm over the design sizes and not under them.",
      "Test holes 60 cm deep at the post corner, the back and the door with no rock in them, and the water gone from the corner hole within an hour.",
      "No dead limbs over the site, and no branch below the tip of the hook pole where the chimney will stand.",
      "Water in the pot level within 10 cm across the floor space."
    ],
    "safety": [
      "Never dig into the foot of an undercut bank. It can collapse on you.",
      "Look up before you stand under any tree for long. A dead branch can drop without wind.",
      "Make noise as you walk the creek banks, so a bear hears you coming."
    ],
    "estimate": {
      "hours": 7,
      "note": "A day; longer if the first creek has no clay."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
