// Handle a gill net
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.gill-net",
    "kind": "skill",
    "title": "Handle a gill net",
    "purpose": "Pick fish from the gill net, clear it, dry it and mend it without tearing the mesh.",
    "requires": {
      "tools": [
        "gill-net",
        "fishing-kit",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Fish swim into the mesh and stick behind the gill covers. Take each one out head first: push the strands back over the gill covers one at a time, then slide the fish forward out of the mesh the way it came in.",
      "If a fish is rolled up in the mesh, find the strand around its head first and unroll the fish from there. Do not pull on the body; that tightens every strand around it.",
      "Cut a strand only as a last resort, and cut the fewest you can. Mend every cut the same day.",
      "Pick out leaves, sticks and weed as you go. A net fouled with weed stands out in the water and fish see it.",
      "Every third day in open water, and whenever it is fouled, bring the whole net ashore, hang it on the net poles along its top cord and let it dry. A net left wet for weeks rots.",
      "To mend: carve a flat stick 15 cm long and 2 cm wide with a notch in each end as a shuttle, and wind fishing line on it. Tie the line to a sound knot next to the hole, and knot new strands across the hole, one mesh at a time, the same size as the mesh around it, with a sheet bend at each corner.",
      "In frost, the net freezes stiff within a minute of leaving the water. Pull it through the hole, pick the fish at once with bare fingers warmed in your armpits between fish, and feed it back before it stiffens. If it freezes, thaw it in the shelter before you pick it; frozen mesh snaps."
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
