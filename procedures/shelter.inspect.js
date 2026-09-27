// Inspect the shelter
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.inspect",
    "kind": "task",
    "title": "Inspect the shelter",
    "purpose": "Catch the slow dangers early: dead branches, lashings working loose or biting into the trees, the tarp near the chimney, and branches low over the chimney top.",
    "requires": {
      "tools": [
        "hook-pole",
        "saw",
        "knife",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "root-cordage",
          "qty": 5
        },
        {
          "id": "chinking-moss",
          "qty": 0.1
        }
      ],
      "skills": [
        "skill.saw",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The frame is up. Do this after every storm or strong wind, after heavy snow, and at least once a week."
    ],
    "steps": [
      {
        "call": "make.root-cordage",
        "note": "keep it soaking for repairs"
      },
      {
        "call": "gather.chinking-moss"
      },
      "Walk round the shelter 10 m out and look up into the three trees. Pull down any dead branch over the shelter with the hook pole, standing to the side, never below it.",
      "Stand the hook pole on end beside the chimney. Saw off any branch that hangs below its tip, lashing the saw to the top of the pole if you cannot reach.",
      "Check every lashing round the trees: the bark must not bulge at the edges, and a hand must still slip under it. Loosen and re-pad any that are biting. Retie any that have slipped, and replace any cord that has cracked.",
      "Check the beam and plate still sit in the saddles of their props and posts, and that every post and prop is still firm when pushed.",
      "Repack moss where the log ends meet the props and trunks, loosely, so the trees can sway.",
      "Check the tarp: no part of it within 30 cm of the chimney, and no holes. Cover any spark hole with a sheet of birch bark over it, held down with the roof soil.",
      "Hold a cord tight from end to end under a rafter at mid-span. If it sags more than 2 cm, clear the snow off the roof and set a prop under the beam or plate.",
      "Look over the chimney for cracks and mark any you find with a stick, to seal with clay as the stove instructions say.",
      "Check the air inlet and the vent are clear.",
      "Once a year, before the second season or when the trees start to grow in spring, loosen every lashing round a living tree and re-pad it."
    ],
    "checks": [
      "No dead branch over the shelter, and none below the tip of the hook pole over the chimney.",
      "A hand slips under every lashing round a tree, and no bark bulges beside it.",
      "The tarp is whole and at least 30 cm from the chimney.",
      "Rafters sag no more than 2 cm at mid-span.",
      "Air inlet and vent open."
    ],
    "safety": [
      "Do not work under the trees in a strong wind. Wait for it to drop.",
      "Stand to the side of any branch you pull down, and look up before you step under the trees again."
    ],
    "estimate": {
      "hours": 1,
      "note": "About an hour, more after a big storm."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
