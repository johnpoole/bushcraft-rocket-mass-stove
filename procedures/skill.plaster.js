// Plaster and fill cracks
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.plaster",
    "kind": "skill",
    "title": "Plaster and fill cracks",
    "purpose": "Put a sealing skin of clay plaster on a clay surface, and fill cracks with slip, so no smoke leaks.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Brush off loose dust and wet the surface with a little water so the plaster sticks.",
      "Take a handful of plaster, press it on with your palm, and spread it 1–2 cm thick, working upward.",
      "Smooth it with a wet hand while it is still soft.",
      "For a crack: open it a little with the knife tip, wet it, press slip or plaster into it with your finger, and smooth it over.",
      "Hairline cracks in drying clay are normal. Fill them as they appear, and again after the next firing if they reopen.",
      "Leave a thin bead only round anything that must lift out, such as the cleanout plugs and bend stones."
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
