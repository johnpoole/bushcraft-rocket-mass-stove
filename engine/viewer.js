// The Instructions page for any project. The page loads the engine, the project's catalog,
// its procedure index (window.PROCEDURE_IDS) and its project file (window.PROJECT), then
// this file. It loads each procedure file from beside the page and renders the list or,
// with #id in the address, one procedure. With #schedule, and engine/schedule.js loaded,
// it runs the project's top plan on the project's calendar.
(function () {
  'use strict';
  const app = document.getElementById('app');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const KIND_NAMES = { plan: 'Plan', task: 'Task', make: 'Make a tool', gather: 'Gather', skill: 'Skill' };

  function fail(e) {
    app.innerHTML = `<div class="err">The instructions did not load: ${esc(e.message)}</div>`;
    console.error(e);
  }

  function mount() {
    const P = window.PROJECT, L = window.ProcLib, C = window.Catalog;
    if (!P) throw new Error('project.js did not load: window.PROJECT is missing');
    if (!L) throw new Error('engine/lib.js did not load: window.ProcLib is missing');
    if (!C) throw new Error('the project catalog did not load: window.Catalog is missing');
    if (!window.PROCEDURE_IDS) throw new Error('the procedure index did not load: window.PROCEDURE_IDS is missing');
    if (!window.ProcLoad) throw new Error('engine/load.js did not load: window.ProcLoad is missing');
    const W = P.labels;
    const money = (x) => `${P.currency || '$'}${Math.round(x)}`;

    return window.ProcLoad.procedures(window.PROCEDURE_IDS).then(() => {
      const reg = L.byId(window.PROCEDURES);
      const params = P.params ? P.params() : {};
      const T = (t) => esc(L.render(t, params));
      const problems = [...reg.values()].flatMap((p) => L.validate(p, reg, C)).concat(L.validateCatalog(reg, C));
      const link = (id) => reg.get(id) ? `<a href="#${esc(id)}">${esc(reg.get(id).title)}</a>` : `<code>${esc(id)}</code>`;
      const toolName = (t) => {
        const x = C.TOOLS[t];
        if (!x) return esc(t);
        if (x.source === 'kit') return `${T(x.name)} <span class="src">(${esc(W.kit)})</span>`;
        if (x.source === 'bought') return `${T(x.name)} <span class="src">(bought, about ${money(x.cost)})</span>`;
        return `${T(x.name)} <span class="src">(made: ${link(x.source)})</span>`;
      };
      const matName = (m, withQty = true) => {
        const x = C.MATERIALS[m.id];
        const q = withQty ? `${+m.qty.toFixed(2)}${x.unit === 'count' ? ' ×' : ' ' + esc(x.unit)} ` : '';
        const src = x.source === 'site' ? esc(W.site)
          : x.source === 'bought' ? `bought, about ${money(x.cost)} ${x.unit === 'count' ? 'each' : 'per ' + esc(x.unit)}`
          : link(x.source);
        return `${q}${T(x.name.charAt(0).toLowerCase() + x.name.slice(1))} <span class="src">(${src})</span>`;
      };
      const ul = (items, empty = 'None') => items.length ? `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>` : `<p class="src">${empty}</p>`;

      function treeText(id) {
        return L.trace(id, reg).filter((e) => e.type === 'enter')
          .map((e) => `${'   '.repeat(e.depth)}${e.depth ? '└─ ' : ''}${reg.get(e.id).title}`).join('\n');
      }

      function renderList() {
        document.title = P.pageTitle;
        const groups = ['plan', 'task', 'make', 'gather', 'skill'];
        const Sc = P.schedule;
        app.innerHTML = `
          <h1>${esc(P.heading)}</h1>
          ${Sc && window.ProcSchedule ? `<p><a href="#schedule">${esc(Sc.linkText)}</a> · <a href="#${esc(P.root)}">${esc(Sc.planLinkText)}</a></p>` : ''}
          <p class="sub">${T(P.intro)}</p>
          ${problems.length ? `<div class="err">Problems in the instructions:\n${esc(problems.join('\n'))}</div>` : ''}
          <div class="list">${groups.map((k) => {
            const ps = [...reg.values()].filter((p) => p.kind === k);
            return ps.length ? `<div class="group"><h2>${KIND_NAMES[k]}${k === 'skill' ? 's' : k === 'plan' ? 's' : ''}</h2><ul>${ps.map((p) => `<li>${link(p.id)} <span class="src">— ${T(p.purpose)}</span></li>`).join('')}</ul></div>` : '';
          }).join('')}</div>
          <h2>${esc(W.kitHeading)}</h2>
          <p class="sub">${esc(W.kitIntro)}</p>
          ${ul(C.KIT.map((t) => T(C.TOOLS[t].name)))}`;
      }

      function renderOne(p) {
        document.title = p.title;
        const n = L.needs(p.id, reg, C);
        const by = L.usedBy(p.id, reg);
        const total = L.hours(p.id, reg, C);
        const r = p.requires;
        const steps = p.steps.map((s) => L.isCall(s)
          ? `<li><span class="call">${link(s.call)}</span>${s.times > 1 ? ` <span class="note">× ${s.times}</span>` : ''}${s.note ? ` <span class="note">— ${T(s.note)}</span>` : ''}</li>`
          : `<li>${T(s)}</li>`).join('');
        const hasCalls = p.steps.some(L.isCall);
        const fromSite = n.inputs.filter((m) => C.MATERIALS[m.id].source !== 'bought');
        const bought = [...n.boughtTools.map(toolName), ...n.boughtMaterials.map((m) => matName(m))];
        app.innerHTML = `
          <p><a href="#">All instructions</a></p>
          <div class="head"><span class="chip">${KIND_NAMES[p.kind]}</span><span class="id">${esc(p.id)}</span></div>
          <h1>${T(p.title)}</h1>
          <p class="sub">${T(p.purpose)}</p>
          ${by.length ? `<p class="src">Called by: ${by.map(link).join(', ')}</p>` : ''}

          <h2>Needs for this instruction</h2>
          <div class="grid">
            <div class="box"><h3>Tools</h3>${ul(r.tools.map(toolName), 'Bare hands')}</div>
            <div class="box"><h3>Materials</h3>${ul(r.materials.map((m) => matName(m)))}</div>
            <div class="box"><h3>Skills</h3>${ul(r.skills.map(link))}</div>
          </div>
          ${p.produces.tools.length || p.produces.materials.length ? `<h3>Produces</h3>${ul([...p.produces.tools.map(toolName), ...p.produces.materials.map((m) => matName(m))])}` : ''}

          ${hasCalls ? `
          <h2>Everything needed, including what it calls</h2>
          <div class="grid">
            <div class="box"><h3>${esc(W.carried)}</h3>${ul(n.carried.map(toolName), esc(W.carriedNone))}</div>
            ${bought.length ? `<div class="box"><h3>Bought</h3>${ul(bought)}<p class="src">About ${money(n.cost)} in all.</p></div>` : ''}
            <div class="box"><h3>Must already be made</h3>${ul(n.toMake.map(toolName))}</div>
            <div class="box"><h3>Made along the way</h3>${ul(n.made.map(toolName))}</div>
            <div class="box"><h3>Skills</h3>${ul(n.skills.map(link))}</div>
            <div class="box"><h3>${esc(W.fromSite)}</h3>${ul(fromSite.map((m) => matName(m)), esc(W.fromSiteNone))}</div>
          </div>` : ''}

          ${p.preconditions.length ? `<h2>Before you start</h2>${ul(p.preconditions.map(T))}` : ''}
          <h2>Steps</h2>
          <ol class="steps">${steps}</ol>
          ${p.checks.length ? `<h2>Done when</h2>${ul(p.checks.map(T))}` : ''}
          ${p.safety.length ? `<h2>Safety</h2><ul class="safety">${p.safety.map((s) => `<li>${T(s)}</li>`).join('')}</ul>` : ''}
          <h2>Time</h2>
          <p>About ${+p.estimate.hours.toFixed(1)} hours for this instruction's own steps${hasCalls ? `, about ${+total.toFixed(1)} hours including everything it calls` : ''}.${p.estimate.note ? ` ${T(p.estimate.note)}` : ''}${p.estimate.waitDays ? ` Then wait about ${p.estimate.waitDays} days before what follows can use it.` : ''}${p.repeat === 'daily' ? ' Done every day.' : ''} These are estimates.</p>
          ${hasCalls ? `<h2>Call tree</h2><div class="tree">${esc(treeText(p.id))}</div>` : ''}`;
      }

      function renderSchedule() {
        const Sc = P.schedule, Sch = window.ProcSchedule;
        document.title = Sc.pageTitle;
        const r = Sch.run(P.root, reg, C, L, P.calendar);
        const fmt = (d) => d === null ? '<strong>not done</strong>' : `${r.dateOf(d)} (day ${d})`;
        const milestones = (Sc.milestones || []).filter((id) => reg.get(id)).map((id) => {
          const due = r.jobs.filter((j) => j.id === id || j.parents.includes(id)).reduce((t, j) => Math.min(t, j.window.to), Infinity);
          return `<tr><td>${link(id)}</td><td>${fmt(r.finish(id))}</td><td>${due === Infinity ? '–' : `${r.dateOf(due)} (day ${due})`}</td></tr>`;
        }).join('');
        const hasLight = r.days.some((d) => d.daylight !== null);
        const weeks = [];
        for (let i = 0; i < r.days.length; i += 7) {
          const w = r.days.slice(i, i + 7);
          const sum = (f) => w.reduce((t, d) => t + f(d), 0);
          const jobs = new Map();
          w.forEach((d) => d.did.forEach((x) => jobs.set(x.id, (jobs.get(x.id) || 0) + x.hours)));
          const top = [...jobs].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id]) => esc(reg.get(id).title)).join(', ');
          weeks.push(`<tr><td>${w[0].date}</td>${hasLight ? `<td>${(sum((d) => d.daylight) / w.length).toFixed(1)}</td>` : ''}<td>${sum((d) => d.work).toFixed(0)}</td><td>${sum((d) => d.routineHours).toFixed(0)}</td><td>${sum((d) => d.buildHours).toFixed(0)}</td><td>${top || '–'}</td></tr>`);
        }
        app.innerHTML = `
          <p><a href="#">All instructions</a></p>
          <h1>${esc(Sc.heading)}</h1>
          <p class="sub">${T(Sc.intro)}</p>
          <div class="grid">
            <div class="box"><h3>Building needed</h3><p><strong>${r.needed.toFixed(0)} h</strong></p></div>
            <div class="box"><h3>Building done by ${r.dateOf(r.days.length - 1)}</h3><p><strong>${r.built.toFixed(0)} h</strong></p></div>
            <div class="box"><h3>Routines over the working day</h3><p><strong>${r.routineOverrun.toFixed(0)} h</strong></p></div>
          </div>
          ${r.unfinished.length ? `<p class="err">The plan does not fit: ${r.unfinished.length} jobs, about ${(r.needed - r.built).toFixed(0)} hours of work, are still undone at the end, and ${r.late.length} jobs finish after their phase ends.${r.routineOverrun > 0 ? ' The daily routines alone take more than the working day on some days.' : ''}</p>` : ''}
          ${milestones ? `<h2>Milestones</h2>
          <div class="box" style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><tr><th align="left">Job</th><th align="left">Finished</th><th align="left">Due</th></tr>${milestones}</table></div>` : ''}
          <h2>Week by week</h2>
          <div class="box" style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums"><tr><th align="left">Week of</th>${hasLight ? '<th align="left">Daylight h</th>' : ''}<th align="left">Work h</th><th align="left">Routines h</th><th align="left">Building h</th><th align="left">Main jobs</th></tr>${weeks.join('')}</table></div>`;
      }

      function route() {
        const id = decodeURIComponent(location.hash.slice(1));
        const p = id && reg.get(id);
        if (id === 'schedule' && P.schedule && window.ProcSchedule) renderSchedule(); else if (p) renderOne(p); else renderList();
        window.scrollTo(0, 0);
      }
      window.addEventListener('hashchange', route);
      route();
    });
  }

  try { mount().catch(fail); } catch (e) { fail(e); }
})();
