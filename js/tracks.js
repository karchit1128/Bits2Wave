import { problemStatements } from './psData.js';

export function initTracksComponent() {
  const ghostGrid = document.querySelector('.ghost-grid');
  const tracksSection = document.getElementById('tracks');
  if (!ghostGrid || !tracksSection) return;

  // Insert Filter Controls & PS Container before ghostGrid
  const psSectionHTML = `
    <!-- PS FILTER CONTROL BAR -->
    <div class="ps-filter-bar" style="margin-top: 30px; margin-bottom: 25px; display: flex; flex-wrap: wrap; gap: 15px; align-items: center; justify-content: space-between;">
      <div class="ps-tabs" style="display: flex; flex-wrap: wrap; gap: 10px;">
        <button class="ps-tab-btn active" data-filter="all">ALL TRACKS (${problemStatements.length})</button>
        <button class="ps-tab-btn" data-filter="software">SOFTWARE (${problemStatements.filter(p=>p.track==='software').length})</button>
        <button class="ps-tab-btn" data-filter="hardware">HARDWARE (${problemStatements.filter(p=>p.track==='hardware').length})</button>
      </div>
      <div class="ps-search-box" style="position: relative; flex: 1; max-width: 320px;">
        <input type="text" id="psSearchInput" placeholder="🔍 SEARCH PROBLEM STATEMENTS..." style="width: 100%; padding: 10px 14px; background: var(--panel); border: 2px solid var(--maze); color: var(--yellow); font-family: 'Space Mono', monospace; font-size: 12px; outline: none;">
      </div>
    </div>

    <!-- PROBLEM STATEMENTS GRID CONTAINER -->
    <div class="ps-card-grid" id="psCardGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
    </div>

    <!-- RETRO PS DETAIL MODAL -->
    <div class="ps-modal-overlay" id="psModalOverlay" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(4px); z-index: 99999; align-items: center; justify-content: center; padding: 20px;">
      <div class="ps-modal-content" style="background: var(--panel); border: 4px solid var(--yellow); max-width: 680px; width: 100%; max-height: 85vh; overflow-y: auto; padding: 25px; position: relative; box-shadow: 0 0 35px var(--yellow);">
        <button class="ps-modal-close" id="psModalClose" style="position: absolute; top: 15px; right: 15px; background: var(--pink); border: none; color: white; width: 34px; height: 34px; font-family: 'Press Start 2P', monospace; cursor: pointer; font-size: 14px;">✕</button>
        <div class="ps-modal-header" style="margin-bottom: 20px; padding-right: 40px;">
          <span class="ps-modal-badge" id="modalBadge" style="display: inline-block; font-family: 'Press Start 2P', monospace; font-size: 10px; padding: 4px 8px; background: rgba(255,212,0,0.2); color: var(--yellow); border: 1px solid var(--yellow); margin-bottom: 10px;">PS ID</span>
          <h2 id="modalTitle" style="font-family: 'Press Start 2P', monospace; font-size: 15px; color: var(--white); margin: 0; line-height: 1.6;">Title</h2>
        </div>
        <div class="ps-modal-body" style="font-family: 'Space Mono', monospace; font-size: 13px; color: var(--dim); line-height: 1.6;">
          <div style="margin-bottom: 12px;"><strong style="color: var(--cyan);">CATEGORY:</strong> <span id="modalCategory" style="color: var(--white);"></span></div>
          <div style="margin-bottom: 12px;"><strong style="color: var(--pink);">DIFFICULTY:</strong> <span id="modalDifficulty" style="color: var(--white);"></span></div>
          <div style="margin-bottom: 15px;"><strong style="color: var(--yellow);">OVERVIEW:</strong> <p id="modalOverview" style="margin-top: 5px; color: var(--white); font-size: 13px;"></p></div>
          <div style="margin-bottom: 15px;"><strong style="color: var(--cyan);">FULL DETAILS:</strong> <p id="modalFullDetails" style="margin-top: 5px; color: #d0d0d0; line-height: 1.7;"></p></div>
          <div id="modalHardwareBox" style="display: none; background: rgba(0,255,255,0.08); border-left: 3px solid var(--cyan); padding: 12px; margin-top: 15px;">
            <strong style="color: var(--cyan);">HARDWARE REQUIRED:</strong>
            <p id="modalHardware" style="margin: 5px 0 0; color: var(--white);"></p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append PS HTML container into tracks wrapper
  const wrap = tracksSection.querySelector('.wrap');
  if (wrap && !document.getElementById('psCardGrid')) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = psSectionHTML;
    wrap.insertBefore(tempDiv, wrap.querySelector('.page-nav-bar') || null);
  }

  const psGrid = document.getElementById('psCardGrid');
  const searchInput = document.getElementById('psSearchInput');
  const filterBtns = document.querySelectorAll('.ps-tab-btn');
  const modalOverlay = document.getElementById('psModalOverlay');
  const modalClose = document.getElementById('psModalClose');

  let currentFilter = 'all';

  function renderCards() {
    if (!psGrid) return;
    const query = (searchInput ? searchInput.value : '').toLowerCase();

    const filtered = problemStatements.filter(ps => {
      const matchTrack = currentFilter === 'all' || ps.track === currentFilter;
      const matchSearch = ps.title.toLowerCase().includes(query) ||
                          ps.id.toLowerCase().includes(query) ||
                          ps.category.toLowerCase().includes(query) ||
                          ps.overview.toLowerCase().includes(query);
      return matchTrack && matchSearch;
    });

    if (filtered.length === 0) {
      psGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--dim); padding: 30px; font-family: 'Space Mono', monospace;">NO PROBLEM STATEMENTS FOUND.</div>`;
      return;
    }

    psGrid.innerHTML = filtered.map(ps => {
      const diffColor = ps.difficulty === 'HARD' ? 'var(--pink)' : (ps.difficulty === 'MEDIUM' ? 'var(--yellow)' : 'var(--cyan)');
      const trackGlow = ps.track === 'hardware' ? 'rgba(53,230,255,.3)' : 'rgba(255,77,141,.3)';

      return `
        <div class="ps-card" data-id="${ps.id}" style="background: var(--panel); border: 2px solid var(--maze); padding: 18px; cursor: pointer; transition: all 0.2s ease; position: relative;" onmouseover="this.style.borderColor='var(--yellow)'; this.style.boxShadow='0 0 15px ${trackGlow}'" onmouseout="this.style.borderColor='var(--maze)'; this.style.boxShadow='none'">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-family: 'Press Start 2P', monospace; font-size: 10px; color: var(--yellow);">${ps.id}</span>
            <span style="font-family: 'Press Start 2P', monospace; font-size: 8px; color: ${diffColor}; padding: 2px 6px; border: 1px solid ${diffColor};">${ps.difficulty}</span>
          </div>
          <h4 style="font-family: 'Press Start 2P', monospace; font-size: 11px; color: var(--white); margin: 0 0 10px; line-height: 1.5; height: 34px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${ps.title}</h4>
          <span style="font-size: 10px; color: var(--cyan); display: block; margin-bottom: 8px; font-family: 'Space Mono', monospace;">● ${ps.category}</span>
          <p style="font-size: 11px; color: var(--dim); margin: 0; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${ps.overview}</p>
          <div style="margin-top: 12px; font-family: 'Press Start 2P', monospace; font-size: 8px; color: var(--yellow); text-align: right;">CLICK FOR FULL PS &raquo;</div>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.ps-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = card.getAttribute('data-id');
        const ps = problemStatements.find(p => p.id === id);
        if (ps) openModal(ps);
      });
    });
  }

  function openModal(ps) {
    if (!modalOverlay) return;
    document.getElementById('modalBadge').textContent = `${ps.id} — ${ps.track.toUpperCase()} TRACK`;
    document.getElementById('modalTitle').textContent = ps.title;
    document.getElementById('modalCategory').textContent = ps.category;
    document.getElementById('modalDifficulty').textContent = ps.difficulty;
    document.getElementById('modalOverview').textContent = ps.overview;
    document.getElementById('modalFullDetails').textContent = ps.fullDetails;

    const hwBox = document.getElementById('modalHardwareBox');
    if (ps.hardwareReq) {
      document.getElementById('modalHardware').textContent = ps.hardwareReq;
      hwBox.style.display = 'block';
    } else {
      hwBox.style.display = 'none';
    }

    modalOverlay.style.display = 'flex';
  }

  // Filter Buttons Event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderCards();
    });
  });

  // Search Event
  if (searchInput) {
    searchInput.addEventListener('input', renderCards);
  }

  // Close Modal Events
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.style.display = 'none';
    });
  }

  // Initial Render
  renderCards();
}
