// Site menu shared by every page. Load it with a plain <script src="…/nav.js"> tag;
// links are resolved from this file's own location, so it works from any folder.
(function () {
  'use strict';

  const PAGES = [
    ['', 'Home'],
    ['build-guide.html', 'Build guide'],
    ['rocket-mass-stove-section.html', 'Section drawing'],
    ['simulator/', 'Simulator'],
    ['shelter/', 'Shelter'],
    ['survival-plan.html', 'Season plan'],
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PAGES };
    return;
  }

  const me = document.currentScript;
  if (!me || !me.src) throw new Error('nav.js: load it with a plain <script src> tag so it can find the other pages');
  const base = new URL('.', me.src);
  const path = (u) => u.pathname.replace(/index\.html$/, '');

  function insert() {
    const style = document.createElement('style');
    style.textContent = `
      nav.site{display:flex;flex-wrap:wrap;gap:4px 18px;align-items:center;padding:10px 16px;
        border-bottom:1px solid var(--line);background:var(--panel);
        font:600 1rem "Barlow Condensed","Arial Narrow",sans-serif;letter-spacing:.03em}
      nav.site a{color:var(--ink);text-decoration:none;padding:2px 0;border-bottom:2px solid transparent}
      nav.site a:hover{border-bottom-color:var(--line)}
      nav.site a[aria-current="page"]{color:var(--ember);border-bottom-color:var(--ember)}`;
    document.head.appendChild(style);

    const nav = document.createElement('nav');
    nav.className = 'site';
    nav.setAttribute('aria-label', 'Site');
    const here = path(new URL(location.href));
    for (const [href, name] of PAGES) {
      const url = new URL(href, base);
      const a = document.createElement('a');
      a.href = url.href;
      a.textContent = name;
      if (path(url) === here) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    }
    document.body.prepend(nav);
  }

  if (document.body) insert();
  else document.addEventListener('DOMContentLoaded', insert);
})();
