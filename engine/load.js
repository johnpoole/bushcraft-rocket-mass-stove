// Loads procedure files into the page. Each file pushes its procedure onto window.PROCEDURES.
(function (root) {
  'use strict';

  function procedures(ids, base = '') {
    return Promise.all(ids.map((id) => new Promise((ok, no) => {
      const s = document.createElement('script');
      s.src = `${base}${id}.js`;
      s.onload = ok;
      s.onerror = () => no(new Error(`${base}${id}.js did not load`));
      document.body.appendChild(s);
    })));
  }

  root.ProcLoad = { procedures };
})(this);
