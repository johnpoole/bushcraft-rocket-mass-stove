// Sleep warm on hot stones until the bench is done
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.hot-stones",
    "kind": "task",
    "title": "Sleep warm on hot stones until the bench is done",
    "purpose": "Until the bench is built, sleep on a bough bed over the warm stage-one duct and take wrapped hot stones into the sleeping bag.",
    "requires": {
      "tools": [
        "knife",
        "sleeping-bag"
      ],
      "materials": [
        {
          "id": "stones",
          "qty": 0.02
        },
        {
          "id": "spruce-boughs",
          "qty": 3
        },
        {
          "id": "grass-fibre",
          "qty": 3
        },
        {
          "id": "birch-bark",
          "qty": 2
        },
        {
          "id": "root-cordage",
          "qty": 2
        }
      ],
      "skills": [
        "skill.stove-safety"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "Stage one works and has had its first firing."
    ],
    "steps": [
      {
        "call": "gather.stones",
        "note": "or take four loaf-sized stones from the stove pile, all from dry ground"
      },
      {
        "call": "gather.boughs"
      },
      {
        "call": "gather.grass-fibre",
        "note": "long, unchopped grass"
      },
      {
        "call": "gather.birch-bark"
      },
      {
        "call": "make.root-cordage",
        "note": "if you have none soaked"
      },
      "Lay a thick layer of dry grass, about 15 cm, over the stage-one duct along the back wall.",
      "Lay the spruce boughs over it, butt ends down and tucked under, shingled from the foot to the head, about 20 cm deep.",
      "Each evening, set four loaf-sized dry-land stones on the cooktop while the stove burns.",
      "When you let the fire die, lift them off with two sticks. Let them stand until you can hold your palm on one for a second.",
      "Wrap each in a thick bundle of dry grass, fold a sheet of birch bark round it, and tie it with root cordage.",
      "Hold each bundle against the inside of your forearm for a minute: warm is right, painful is too hot, so let it cool longer.",
      "Put them in the sleeping bag, at your feet and at your belly."
    ],
    "checks": [
      "Each bundle is warm but not painful against the forearm for a minute.",
      "No scorch marks on the bark or the sleeping bag in the morning.",
      "The stones are still warm to the hand at dawn."
    ],
    "safety": [
      "Never put a bare hot stone in the sleeping bag: it can burn you in your sleep or melt the bag.",
      "Only dry-land stones: wet stones can burst on the cooktop."
    ],
    "estimate": {
      "hours": 3,
      "note": "Estimate: about 3 hours to make the bed; then about a quarter hour each evening for the stones."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
