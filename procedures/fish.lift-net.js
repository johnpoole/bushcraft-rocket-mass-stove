// Take up the net before freeze-up
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.lift-net",
    "kind": "task",
    "title": "Take up the net before freeze-up",
    "purpose": "Take the gill net out of the lake before the shore ice locks it in, and keep it dry for setting under the ice.",
    "requires": {
      "tools": [
        "gill-net",
        "net-poles",
        "fishing-kit",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.gill-net"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "Do this the first morning ice forms along the shore at the creek mouth, weeks before the net goes under the ice."
    ],
    "steps": [
      "Untie the loop from the shore post and pull the net ashore as for a check.",
      "Untie the net from the loop.",
      "Untie one side of the loop from the other and pull the whole running line in through the ring. The anchor and ring stay on the bottom.",
      "Hang the net on the net poles and pick out every weed and scrap.",
      "Mend every hole with the shuttle.",
      "Carry it to the shelter and hang it on a peg inside to dry fully.",
      "Coil the running line and hang it in the shelter too: it becomes the two lines for the net under the ice."
    ],
    "checks": [
      "The net dry, clean and mended, with every float and sinker on, hanging in the shelter.",
      "The running line coiled beside it."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
