(() => {
  const table = document.querySelector('#comparison-table');
  if (!table) return;
  const groups = {
    archive: ['familykeepsake','artkive','keepbox','littlepicasso','artshow','arti','mademory','atelier','scribbly'],
    school: ['artsonia'],
    journal: ['familyalbum','tinybeans','qeepsake']
  };
  const all = Object.values(groups).flat();
  const scroll = document.querySelector('.table-scroll');
  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      const visible = new Set(view === 'all' ? all : view === 'archive' ? groups.archive : ['familykeepsake',...groups.school,...groups.journal]);
      table.querySelectorAll('[data-app]').forEach(cell => { cell.hidden = !visible.has(cell.dataset.app); });
      table.querySelectorAll('[data-column-group]').forEach(header => {
        const count = groups[header.dataset.columnGroup].filter(app => visible.has(app)).length;
        header.hidden = count === 0;
        if (count) header.colSpan = count;
      });
      table.querySelectorAll('.section-fill').forEach(cell => { cell.colSpan = visible.size; });
      const feature = document.createElement('col'); feature.className = 'feature-col';
      const cols = [...visible].map(() => { const col = document.createElement('col'); col.className = 'app-col'; return col; });
      table.querySelector('colgroup').replaceChildren(feature,...cols);
      document.querySelectorAll('[data-view]').forEach(other => {
        const active = other === button; other.classList.toggle('active',active); other.setAttribute('aria-pressed',String(active));
      });
      document.querySelector('#view-status').textContent = `${visible.size} apps · FamilyKeepsake stays in each view · Features can vary by plan, platform and country`;
      scroll.scrollLeft = 0; scroll.scrollTop = 0;
    });
  });
  function showNote() {
    if (!/^#note-\d+$/.test(location.hash)) return;
    const note = document.getElementById(location.hash.slice(1));
    if (note) { note.open = true; note.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}); }
  }
  document.querySelectorAll('a[href^="#note-"]').forEach(link => link.addEventListener('click', () => {
    const note = document.getElementById(link.hash.slice(1)); if (note) note.open = true;
  }));
  addEventListener('hashchange',showNote); if (location.hash) showNote();
})();
