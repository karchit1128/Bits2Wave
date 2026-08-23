// ---- mobile nav ----
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// ---- countdown ----
// Set to a target date
const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 21);

function updateCountdown(){
  const now = new Date();
  let diff = TARGET_DATE - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  
  const dEl = document.getElementById('cd-days');
  if (dEl) {
    dEl.textContent = String(days).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ---- scroll animations (Intersection Observer) ----
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section, .rule-card, .ghost-card, .level').forEach(el => {
  el.classList.add('fade-in-element');
  observer.observe(el);
});


// ---- Background Animation Engine ----
(function() {
  const CELL_SIZE = 42;
  const pacman = document.getElementById('pacman');
  const baseGhosts = document.querySelectorAll('.ghost');
  const bgAnimation = document.getElementById('bg-animation');
  const dotsContainer = document.getElementById('dots-container');
  const gridHoverBox = document.getElementById('grid-hover-box');
  const activeDots = {};
  if (!pacman || baseGhosts.length === 0) return;

  // Grid hover logic (Wave of physical blocks)
  const liftedBoxes = {}; 
  const liftContainer = document.createElement('div');
  liftContainer.style.position = 'absolute';
  liftContainer.style.inset = '0';
  liftContainer.style.pointerEvents = 'none';
  liftContainer.style.zIndex = '0';
  document.querySelector('.content-wrap').appendChild(liftContainer);

  let lastCol = -1, lastRow = -1;

  document.addEventListener('mousemove', (e) => {
    const contentWrap = document.querySelector('.content-wrap');
    if (!contentWrap) return;
    
    const rect = contentWrap.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY;
    const offsetLeft = rect.left + window.scrollX;
    
    const x = e.pageX - offsetLeft;
    const y = e.pageY - offsetTop;
    
    const col = Math.floor(x / CELL_SIZE);
    const row = Math.floor(y / CELL_SIZE);
    
    if (col === lastCol && row === lastRow) return;
    lastCol = col;
    lastRow = row;
    
    const key = `${col},${row}`;
    if (liftedBoxes[key]) {
       clearTimeout(liftedBoxes[key].timer);
       liftedBoxes[key].el.classList.add('lifted');
    } else {
       const box = document.createElement('div');
       box.className = 'grid-lift-box';
       box.style.left = `${col * CELL_SIZE}px`;
       box.style.top = `${row * CELL_SIZE}px`;
       liftContainer.appendChild(box);
       
       // Force reflow to trigger animation
       box.offsetHeight; 
       box.classList.add('lifted');
       
       liftedBoxes[key] = { el: box };
    }
    
    liftedBoxes[key].timer = setTimeout(() => {
       if (liftedBoxes[key]) {
         liftedBoxes[key].el.classList.remove('lifted');
         setTimeout(() => {
           if (liftedBoxes[key] && !liftedBoxes[key].el.classList.contains('lifted')) {
              liftedBoxes[key].el.remove();
              delete liftedBoxes[key];
           }
         }, 300);
       }
    }, 400);
  });

  // Clone ghosts to have more on screen (16 ghosts total)
  const ghosts = Array.from(baseGhosts);
  for (let i = 0; i < 3; i++) {
    baseGhosts.forEach(bg => {
      const clone = bg.cloneNode(true);
      clone.removeAttribute('id');
      bg.parentElement.appendChild(clone);
      ghosts.push(clone);
    });
  }

  // State
  let pacPos = { col: 0, row: 0 };
  let pacTarget = { col: 0, row: 0 };
  let pacRot = 0;
  let pacFlip = 1;
  let ghostStates = [];
  
  ghosts.forEach((el, index) => {
    ghostStates.push({
      el, col: 0, row: 0, visible: false, hideUntil: 0, index
    });
  });

  function getBounds() {
    const w = window.innerWidth;
    const h = document.body.scrollHeight;
    const cols = Math.floor(w / CELL_SIZE);
    const rows = Math.floor(h / CELL_SIZE);
    const startRow = Math.floor(window.scrollY / CELL_SIZE);
    const endRow = startRow + Math.floor(window.innerHeight / CELL_SIZE);
    // Actually, we want ghosts to spawn ANYWHERE on the document, so:
    return { cols, startRow: 0, endRow: rows };
  }

  function spawnGhost(g) {
    const b = getBounds();
    const GRID_SIZE = 4; // 4x4 grid = 16 sectors
    const sectorX = g.index % GRID_SIZE;
    const sectorY = Math.floor(g.index / GRID_SIZE);
    
    const sectorCols = Math.floor(b.cols / GRID_SIZE);
    const totalRows = b.endRow - b.startRow;
    const sectorRows = Math.floor(totalRows / GRID_SIZE);
    
    g.col = (sectorX * sectorCols) + Math.floor(Math.random() * sectorCols);
    g.row = b.startRow + (sectorY * sectorRows) + Math.floor(Math.random() * sectorRows);
    
    g.visible = true;
    g.el.style.transform = `translate(${g.col * CELL_SIZE}px, ${g.row * CELL_SIZE}px)`;
    const inner = g.el.querySelector('.ghost-inner');
    if(inner) {
      inner.style.transform = 'scale(1)';
      inner.style.opacity = '1';
    }
  }

  function hideGhost(g) {
    g.visible = false;
    g.hideUntil = Date.now() + 2000 + Math.random() * 3000;
    const inner = g.el.querySelector('.ghost-inner');
    if(inner) {
      inner.style.transform = 'scale(0)';
      inner.style.opacity = '0';
    }
  }

  // Initialize
  const initialBounds = getBounds();
  pacPos.col = Math.floor(initialBounds.cols / 2);
  pacPos.row = initialBounds.startRow + Math.floor((initialBounds.endRow - initialBounds.startRow) / 2);
  pacTarget = { ...pacPos };
  pacman.style.transform = `translate(${pacPos.col * CELL_SIZE}px, ${pacPos.row * CELL_SIZE}px)`;

  ghostStates.forEach(g => {
    hideGhost(g);
    g.hideUntil = Date.now() + Math.random() * 2000; // stagger spawns
  });

  function dist(a, b) {
    return Math.abs(a.col - b.col) + Math.abs(a.row - b.row);
  }

  let lastMoveTime = 0;
  function update(time) {
    const b = getBounds();
    const now = Date.now();

    // 1. Check respawn timers
    ghostStates.forEach(g => {
      if (!g.visible) {
        if (now > g.hideUntil) {
          spawnGhost(g);
        }
      }
    });

    // 2. Pac-Man movement (every 200ms)
    if (now - lastMoveTime > 200) {
      lastMoveTime = now;
      
      // Keep Pac-Man in bounds roughly
      if (pacPos.row < b.startRow) { pacTarget.row = b.startRow; pacTarget.col = pacPos.col; }
      else if (pacPos.row > b.endRow) { pacTarget.row = b.endRow; pacTarget.col = pacPos.col; }
      else {
        // Always try to target the closest visible ghost
        const visibleGhosts = ghostStates.filter(g => g.visible);
        if (visibleGhosts.length > 0) {
          let closest = visibleGhosts[0];
          let minDist = dist(pacPos, closest);
          for (let i = 1; i < visibleGhosts.length; i++) {
            let d = dist(pacPos, visibleGhosts[i]);
            if (d < minDist) {
              minDist = d;
              closest = visibleGhosts[i];
            }
          }
          pacTarget.col = closest.col;
          pacTarget.row = closest.row;
        } else {
          // Wander aimlessly if no ghosts are visible and we reached the last target
          if (pacPos.col === pacTarget.col && pacPos.row === pacTarget.row) {
            pacTarget.col = pacPos.col + (Math.random() > 0.5 ? 1 : -1);
            pacTarget.row = pacPos.row + (Math.random() > 0.5 ? 1 : -1);
          }
        }

        // Move one step towards target
        if (pacPos.col < pacTarget.col) { pacPos.col++; pacRot = 0; pacFlip = 1; }
        else if (pacPos.col > pacTarget.col) { pacPos.col--; pacRot = 0; pacFlip = -1; }
        else if (pacPos.row < pacTarget.row) { pacPos.row++; pacRot = 90; pacFlip = 1; }
        else if (pacPos.row > pacTarget.row) { pacPos.row--; pacRot = -90; pacFlip = 1; }

        // Clamp to grid
        pacPos.col = Math.max(0, Math.min(b.cols - 1, pacPos.col));

        // Generate dots trail if chasing a ghost
        const idealPath = new Set();
        if (visibleGhosts.length > 0) {
          let cC = pacPos.col;
          let cR = pacPos.row;
          while(cC !== pacTarget.col) {
            cC += (pacTarget.col > cC ? 1 : -1);
            idealPath.add(`${cC},${cR}`);
          }
          while(cR !== pacTarget.row) {
            cR += (pacTarget.row > cR ? 1 : -1);
            idealPath.add(`${cC},${cR}`);
          }
        }

        // Add dots for new path coords
        idealPath.forEach(key => {
          if (!activeDots[key]) {
            const [c, r] = key.split(',').map(Number);
            const dot = document.createElement('div');
            dot.className = 'pac-dot';
            dot.style.position = 'absolute';
            dot.style.width = '6px';
            dot.style.height = '6px';
            dot.style.backgroundColor = '#ffb8ae'; // classic pac-man dot color
            dot.style.borderRadius = '50%';
            dot.style.left = `${c * CELL_SIZE + 21}px`;
            dot.style.top = `${r * CELL_SIZE + 21}px`;
            dot.style.transform = 'translate(-50%, -50%)';
            dotsContainer.appendChild(dot);
            activeDots[key] = dot;
          }
        });

        // Remove dots that are NOT in ideal path
        Object.keys(activeDots).forEach(key => {
          if (!idealPath.has(key)) {
            activeDots[key].remove();
            delete activeDots[key];
          }
        });
      }

      pacman.style.transform = `translate(${pacPos.col * CELL_SIZE}px, ${pacPos.row * CELL_SIZE}px) rotate(${pacRot}deg) scaleX(${pacFlip})`;

      // 3. Check collisions/chase and update emotions
      ghostStates.forEach(g => {
        if (g.visible) {
          const d = dist(pacPos, g);
          if (d < 3) {
            hideGhost(g);
          } else {
            // Update emotions based on distance
            const def = g.el.querySelector('.emotion-default');
            const ner = g.el.querySelector('.emotion-nervous');
            const sca = g.el.querySelector('.emotion-scared');
            
            if (def && ner && sca) {
              if (d > 8) {
                def.style.display = 'block';
                ner.style.display = 'none';
                sca.style.display = 'none';
              } else if (d > 5) {
                def.style.display = 'none';
                ner.style.display = 'block';
                sca.style.display = 'none';
              } else {
                def.style.display = 'none';
                ner.style.display = 'none';
                sca.style.display = 'block';
              }
            }
          }
        }
      });
    }

    // 4. Update eyes to watch Pac-Man
    ghostStates.forEach(g => {
      if (g.visible) {
        const dx = pacPos.col - g.col;
        const dy = pacPos.row - g.row;
        const angle = Math.atan2(dy, dx);
        const maxMove = 4;
        const pupilX = Math.cos(angle) * maxMove;
        const pupilY = Math.sin(angle) * maxMove;
        
        const pupils = g.el.querySelectorAll('.pupil');
        pupils.forEach(p => {
          p.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
      }
    });
    
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
})();
