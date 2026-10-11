// Simple password screen shared by every page. Load it first in <head> with a plain
// <script src="…/gate.js"></script> tag. The right password is remembered on the device,
// so a phone that has unlocked once keeps working with no signal.
// This only keeps casual visitors out: the files themselves are still public on GitHub.
(function () {
  'use strict';

  // SHA-256 of SALT + password. To change the password, run:
  //   node gate.js "new password"
  // and paste the printed hash here.
  const SALT = 'bushcraft-rocket-mass-stove:';
  const HASH = '__HASH__';
  const KEY = 'bushcraft-gate';

  if (typeof module !== 'undefined' && module.exports) {
    const hash = (pw) => require('node:crypto').createHash('sha256').update(SALT + pw).digest('hex');
    module.exports = { SALT, HASH, KEY, hash };
    if (require.main === module) console.log(hash(process.argv[2] || ''));
    return;
  }

  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  if (read() === HASH) return;

  const root = document.documentElement;
  root.classList.add('gate-locked');
  const style = document.createElement('style');
  // visibility, not display, so maps and canvases behind the screen still get their size.
  style.textContent = `
    html.gate-locked body>*:not(#gate){visibility:hidden!important}
    #gate{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;
      padding:16px;background:#151a19;color:#dce3df;font:16px/1.4 system-ui,sans-serif}
    #gate form{display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px}
    #gate input,#gate button{font:inherit;padding:10px 12px;border-radius:6px;border:1px solid #2d3634}
    #gate input{background:#1c2221;color:inherit}
    #gate button{background:#d4531c;color:#fff;border-color:#d4531c}
    #gate p{margin:0;min-height:1.4em;color:#e08a6a}`;
  root.appendChild(style);

  async function digest(pw) {
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(SALT + pw));
    return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  function show() {
    const box = document.createElement('div');
    box.id = 'gate';
    box.innerHTML = '<form><label for="gate-pw">Password</label>' +
      '<input id="gate-pw" type="password" autocomplete="current-password" autofocus>' +
      '<button type="submit">Open</button><p role="alert"></p></form>';
    document.body.appendChild(box);
    const input = box.querySelector('input');
    box.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      if (await digest(input.value) !== HASH) {
        box.querySelector('p').textContent = 'Wrong password.';
        input.select();
        return;
      }
      try { localStorage.setItem(KEY, HASH); } catch (err) { /* still opens for this visit */ }
      box.remove();
      root.classList.remove('gate-locked');
      window.dispatchEvent(new Event('resize'));
    });
    input.focus();
  }

  if (document.body) show();
  else document.addEventListener('DOMContentLoaded', show);
})();
