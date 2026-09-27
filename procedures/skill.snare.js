// Tie and set a snare with snare wire
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.snare",
    "kind": "skill",
    "title": "Tie and set a snare with snare wire",
    "purpose": "Make snares from the wire in the kit and set them where hares run, so each one catches and holds.",
    "requires": {
      "tools": [
        "snare-wire",
        "knife",
        "measuring-stick"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Cut 60 cm of wire. Bend it back and forth at the cut rather than pulling it, so the wire is not kinked along its length.",
      "Make the eye: fold 3 cm of one end back over a twig as thick as a pencil, and twist the end around the wire four times. Slide the twig out: you have a small eye.",
      "Pass the other end through the eye to make a running loop. Bend the wire sharply just past the eye so the loop closes easily but does not open again once pulled.",
      "Hare runs are narrow trails through young spruce and willow, with round droppings, tracks in pairs, and twigs bitten off at a clean slant at knee height. Set on the run itself, never in the open.",
      "Open the loop to 10 cm across, about the width of your palm. Hang it across the run with the bottom of the loop 5–8 cm above the ground or the snow, about the height of four fingers laid flat.",
      "Twist the tail of the wire around a solid anchor: a stick 3–4 cm thick lashed across the run between two trees at 40 cm, a sapling trunk, or a drag stick 1 m long, 5 cm thick, laid beside the run, which the hare pulls into the brush and tangles.",
      "Narrow the run to the loop: push dead twigs into the ground on each side so the only way past is through it. Use dead twigs; fresh cuts smell of you.",
      "Handle snares with hands rubbed in spruce needles, not fresh from cleaning fish.",
      "As snow gets deeper, raise the loop so it stays 5–8 cm above the snow."
    ],
    "checks": [],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
