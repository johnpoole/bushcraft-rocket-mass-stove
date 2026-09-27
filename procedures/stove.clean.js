// Clean out the stove
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.clean",
    "kind": "task",
    "title": "Clean out the stove",
    "purpose": "Keep the stove drawing by raking out ash from the tunnel, the bottom of the dome, the duct bends and the chimney foot.",
    "requires": {
      "tools": [
        "ash-rake",
        "bark-tray",
        "knife"
      ],
      "materials": [
        {
          "id": "slip",
          "qty": 2
        }
      ],
      "skills": [
        "skill.plaster",
        "skill.read-draw"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The stove is cold: no fire for at least 12 hours."
    ],
    "steps": [
      {
        "call": "gather.slip",
        "note": "to reseal the plugs"
      },
      "Every few days: rake the ash out of the burn tunnel through the feed tube into the bark tray.",
      "Every month or two: cut the seal on the dome cleanout plug with the knife, lift it, and rake out the fine ash that settles at the bottom of the dome. Put the plug back and seal it with slip.",
      "Once a year, or at once if it draws weakly: lift the stones over the two bends and the plug at the foot of the chimney. Rake out the ash and soot as far along each run as the rake reaches, and push a long, flexible willow shoot along the rest to loosen it, then rake again.",
      "At the same time, check the chimney for cracks and seal them with slip.",
      "Carry the ash out when it is cold, spread it on bare mineral soil and wet it.",
      "If the stove starts to smoke back or pull weakly, clean everything before you change anything else."
    ],
    "checks": [
      "The rake reaches the far end of the tunnel and comes back clean.",
      "At the next firing, the stove draws strongly and no smoke comes from any resealed plug."
    ],
    "safety": [
      "Only clean a cold stove. Ash can hold live coals for a day; wet it before it goes near anything that burns."
    ],
    "estimate": {
      "hours": 0.5,
      "note": "Estimate: a quarter hour for the tunnel, half an hour for the dome, about two hours for the bends and chimney."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
