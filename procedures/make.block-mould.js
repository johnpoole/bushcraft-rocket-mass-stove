// Make a block mould
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.block-mould",
    "kind": "make",
    "title": "Make a block mould",
    "purpose": "Make a bottomless wooden mould with two cells, to press clay blocks two at a time.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "knife",
        "club",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "root-cordage",
          "qty": 4
        }
      ],
      "skills": [
        "skill.saw",
        "skill.axe",
        "skill.knife",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [
        "block-mould"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      {
        "call": "make.root-cordage",
        "note": "if you have less than 4 m soaked"
      },
      "Saw a 70 cm bolt from a straight-grained dead spruce about 20 cm thick, with no knots if you can find one.",
      "Split it in half along its length: set the axe on the end, and drive it in with the club.",
      "Split boards about 3 cm thick off each half the same way, and trim them flat with the axe and knife to about 2 cm thick.",
      "Cut two long sides 60 cm long and 8 cm high, long enough that their ends stick out past the cells as handles.",
      "Cut three cross pieces 12 cm long and 8 cm high.",
      "On the inside face of each long side, cut three grooves 1 cm deep across the board, spaced so each cell is 20 cm long inside and the handles stick out at each end.",
      "Set the cross pieces into the grooves between the two sides, so each cell is 20 × 10 cm inside and 8 cm deep.",
      "Lash the two sides together tight around the outside, just beyond each end cross piece, with soaked root cordage.",
      "Cut a straight strike-off stick 30 cm long and shave one edge flat."
    ],
    "checks": [
      "Each cell measures 20 × 10 × 8 cm inside with the measuring stick.",
      "The mould lifts off a test block without tearing its corners."
    ],
    "safety": [
      "Keep your hand off the top of the axe head when driving it with the club."
    ],
    "estimate": {
      "hours": 3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
