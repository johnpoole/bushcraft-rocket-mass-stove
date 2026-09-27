// Builds a project's catalog from a base list and optional parts, each { TOOLS, MATERIALS }.
// A part may not redefine anything already defined.
(function (root) {
  'use strict';

  function assemble(base, parts = {}) {
    const TOOLS = { ...base.TOOLS }, MATERIALS = { ...base.MATERIALS };
    for (const [part, add] of Object.entries(parts)) {
      if (!add) throw new Error(`catalog part "${part}" did not load`);
      for (const [kind, into] of [['TOOLS', TOOLS], ['MATERIALS', MATERIALS]]) {
        for (const [id, v] of Object.entries(add[kind] || {})) {
          if (into[id]) throw new Error(`catalog part "${part}" redefines ${kind === 'TOOLS' ? 'tool' : 'material'} "${id}"`);
          into[id] = v;
        }
      }
    }
    return { KIT: [...base.KIT], TOOLS, MATERIALS, PARTS: Object.keys(parts) };
  }

  const api = { assemble };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProcCatalog = api;
})(this);
