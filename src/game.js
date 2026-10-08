// ===== Character drawing =====
const COL = { blue: ['#1e88e5', '#0d47a1'], yellow: ['#fbc02d', '#c49000'], red: ['#e53935', '#8e1414'] };
function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath() }
function drawBot(c, x, y, r, type, rot, t) {
    const [f, dk] = COL[type]; c.save(); c.translate(x, y); c.rotate(rot || 0);
    // antenna
    c.strokeStyle = dk; c.lineWidth = r * .14; c.beginPath(); c.moveTo(0, -r * .9); c.lineTo(r * .15, -r * 1.45); c.stroke();
    c.fillStyle = (Math.floor((t || 0) / 20) % 2) ? '#ff1744' : '#fff'; c.beginPath(); c.arc(r * .15, -r * 1.5, r * .2, 0, 7); c.fill();
    // side ears / bolts
    c.fillStyle = dk; rr(c, -r * 1.12, -r * .3, r * .24, r * .6, r * .08); c.fill(); rr(c, r * .88, -r * .3, r * .24, r * .6, r * .08); c.fill();
    // body
    c.fillStyle = f; c.strokeStyle = '#0b1f3a'; c.lineWidth = Math.max(1.5, r * .1); rr(c, -r, -r * .95, r * 2, r * 1.85, r * .45); c.fill(); c.stroke();
    // screen face
    c.fillStyle = '#10213b'; rr(c, -r * .7, -r * .6, r * 1.4, r * .85, r * .22); c.fill();
    // LED eyes (determined slanted bars)
    c.fillStyle = '#00e5ff'; c.shadowColor = '#00e5ff'; c.shadowBlur = r * .5;
    c.save(); c.translate(-r * .32, -r * .2); c.rotate(.25); c.fillRect(-r * .18, -r * .1, r * .36, r * .2); c.restore();
    c.save(); c.translate(r * .32, -r * .2); c.rotate(-.25); c.fillRect(-r * .18, -r * .1, r * .36, r * .2); c.restore();
    c.shadowBlur = 0;
    // grille
    c.fillStyle = dk; for (let i = -1; i <= 1; i++)c.fillRect(i * r * .3 - r * .1, r * .42, r * .2, r * .22);
    c.restore()
}
const GP = ["..1..1..", "..1111..", ".111111.", "11211211", "11111111", "11333311", ".111111.", ".1.11.1."];
function drawGremlin(c, x, y, r, t) {
    const px = r * 2 / 8, ox = x - r, oy = y - r, gl = Math.random() < .08;
    if (gl) { c.globalAlpha = .6; paint(c, ox + px * .6, oy, px, '#00e5ff', false); c.globalAlpha = 1 }
    paint(c, ox, oy, px, null, gl)
}
function paint(c, ox, oy, px, mono, gl) {
    const pal = { 1: '#7b1fa2', 2: '#76ff03', 3: '#fff' };
    GP.forEach((row, j) => {
        const sh = gl && Math.random() < .35 ? (Math.random() - .5) * px * 2.5 : 0;
        [...row].forEach((ch, i) => { if (ch === '.') return; c.fillStyle = mono || pal[ch]; c.fillRect(ox + i * px + sh, oy + j * px, px + .5, px + .5) })
    })
}

export function initCast() {
    let animFrames = [];
    document.querySelectorAll('.who canvas').forEach(cv => {
        const c = cv.getContext('2d'), tp = cv.dataset.bot; let t = 0;
        function a() {
            c.clearRect(0, 0, 128, 128); 
            if (tp === 'gremlin') drawGremlin(c, 64, 64, 40, t); 
            else drawBot(c, 64, 72, 38, tp, Math.sin(t / 30) * .08, t); 
            t++; 
            animFrames.push(requestAnimationFrame(a));
        }
        a();
    });
    return () => animFrames.forEach(cancelAnimationFrame);
}

export function initGame(cv) {
    const ctx = cv.getContext('2d');
    let W, H, ground, sc, anchor, ready, projs, queue, blocks, grem, score, state, parts, timer, T = 0;
    const g = .35, scoreEl = document.getElementById('score'), shotsEl = document.getElementById('shots'), msg = document.getElementById('msg'), msgText = document.getElementById('msgText');

    let animFrame;

    function resize() { 
        const r = cv.parentElement.getBoundingClientRect(), dpr = window.devicePixelRatio || 1; 
        W = r.width; H = r.height; 
        cv.width = W * dpr; cv.height = H * dpr; 
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
        build() 
    }
    
    function bot(type) { return { x: anchor.x, y: anchor.y, vx: 0, vy: 0, r: (type === 'red' ? 19 : 15) * sc, type, st: 'ready', idle: 0, used: false, main: true } }
    function build() {
        clearTimeout(timer); timer = null;
        sc = Math.min(1, W / 750); ground = H - 40;
        anchor = { x: 70 + 100 * sc, y: ground - 115 * sc };
        queue = ['blue', 'yellow', 'red']; ready = bot(queue.shift()); projs = [];
        blocks = []; grem = []; parts = []; score = 0; state = 'play';
        const x0 = W - 320 * sc, P = 18 * sc, L = 150 * sc, B = 16 * sc;
        const add = (x, y, w, h, stone) => blocks.push({ x, y, w, h, vx: 0, vy: 0, a: 0, va: 0, mv: false, stone });
        add(x0, ground - 90 * sc, P, 90 * sc); add(x0 + L - P, ground - 90 * sc, P, 90 * sc); add(x0, ground - 90 * sc - B, L, B);
        const b2 = ground - 90 * sc - B;
        add(x0 + 20 * sc, b2 - 70 * sc, P, 70 * sc); add(x0 + L - 20 * sc - P, b2 - 70 * sc, P, 70 * sc); add(x0 + 10 * sc, b2 - 70 * sc - B, L - 20 * sc, B);
        add(x0 + L + 40 * sc, ground - 60 * sc, 50 * sc, 60 * sc, true); add(x0 + L + 30 * sc, ground - 60 * sc - B, 70 * sc, B, true);
        const gm = (x, y) => grem.push({ x, y, r: 16 * sc, vy: 0, st: 'idle' });
        gm(x0 + L / 2, ground - 16 * sc); gm(x0 + L / 2, b2 - 16 * sc); gm(x0 + L / 2, b2 - 70 * sc - B - 16 * sc); gm(x0 + L + 65 * sc, ground - 60 * sc - B - 16 * sc);
        ui(); msg.classList.remove('show');
    }
    function ui() { scoreEl.textContent = score; shotsEl.textContent = queue.length + (ready ? 1 : 0) }
    function pos(e) { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top } }
    function burst(x, y, c, n) { for (let i = 0; i < n; i++)parts.push({ x, y, vx: (Math.random() - .5) * 7, vy: (Math.random() - .8) * 7, l: 40, c }) }
    function power(b) {
        b.used = true; burst(b.x, b.y, '#00e5ff', 10);
        if (b.type === 'blue') { for (const k of [-1, 1]) projs.push({ ...b, vy: b.vy + k * 3, main: false, r: b.r * .85 }); b.r *= .85 }
        else if (b.type === 'yellow') { b.vx *= 2; b.vy *= 1.6 }
        else { b.vx *= .3; b.vy = 14 * sc + 4 }
    }
    
    const onPointerDown = e => {
        const p = pos(e);
        if (ready && ready.st === 'ready' && Math.hypot(p.x - ready.x, p.y - ready.y) < 50) { ready.st = 'drag'; cv.setPointerCapture(e.pointerId); return }
        const f = projs.find(b => b.st === 'fly' && b.main && !b.used); if (f) power(f)
    };
    const onPointerMove = e => {
        if (!ready || ready.st !== 'drag') return; const p = pos(e); let dx = p.x - anchor.x, dy = p.y - anchor.y, dd = Math.hypot(dx, dy), max = 85 * sc + 10; if (dd > max) { dx *= max / dd; dy *= max / dd } ready.x = anchor.x + dx; ready.y = anchor.y + dy
    };
    const onPointerUp = () => {
        if (!ready || ready.st !== 'drag') return; const k = .2 + .05 * (1 - sc); ready.vx = (anchor.x - ready.x) * k; ready.vy = (anchor.y - ready.y) * k;
        if (Math.hypot(ready.vx, ready.vy) < 2) { ready.x = anchor.x; ready.y = anchor.y; ready.st = 'ready'; return }
        ready.st = 'fly'; projs.push(ready); ready = null; ui()
    };
    
    cv.addEventListener('pointerdown', onPointerDown);
    cv.addEventListener('pointermove', onPointerMove);
    cv.addEventListener('pointerup', onPointerUp);
    
    const resetBtn = document.getElementById('reset');
    if(resetBtn) resetBtn.onclick = build;

    function supported(y, x1, x2, self) { if (y >= ground - 1) return true; return blocks.some(b => b !== self && !b.mv && Math.abs(b.y - y) < 2 && b.x < x2 && b.x + b.w > x1) }
    function overlap(a, b) { return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y }
    function knock(b, vx, vy) { if (b.mv) return; b.mv = true; b.vx = vx; b.vy = vy; b.va = (Math.random() - .5) * (b.stone ? .06 : .15); score += 50; ui() }
    function crash(u) { if (u.st === 'pop') return; u.st = 'pop'; score += 500; ui(); for (let i = 0; i < 16; i++)parts.push({ x: u.x, y: u.y, vx: (Math.random() - .5) * 8, vy: (Math.random() - .8) * 8, l: 45, c: i % 3 ? '#7b1fa2' : '#76ff03', sq: true }) }

    function step() {
        T++;
        for (const b of projs) {
            if (b.st !== 'fly') continue;
            const heavy = b.type === 'red';
            b.vy += g; b.x += b.vx; b.y += b.vy;
            if (b.y + b.r > ground) { b.y = ground - b.r; b.vy *= heavy ? -.15 : -.4; b.vx *= heavy ? .7 : .85 }
            for (const k of blocks) {
                const cx = Math.max(k.x, Math.min(b.x, k.x + k.w)), cy = Math.max(k.y, Math.min(b.y, k.y + k.h)), dx = b.x - cx, dy = b.y - cy, dd = Math.hypot(dx, dy);
                if (dd < b.r && dd > 0) {
                    const m = k.stone ? (heavy ? .7 : .12) : (heavy ? 1 : .6); knock(k, b.vx * m, b.vy * .3 - 1);
                    const nx = dx / dd, ny = dy / dd; b.x = cx + nx * b.r; b.y = cy + ny * b.r;
                    const smash = heavy && Math.hypot(b.vx, b.vy) > 5;
                    if (Math.abs(nx) > Math.abs(ny)) b.vx *= smash ? .75 : -.3; else b.vy *= smash ? .6 : -.3
                }
            }
            for (const u of grem) if (u.st !== 'pop' && Math.hypot(b.x - u.x, b.y - u.y) < b.r + u.r) crash(u);
            const sp = Math.hypot(b.vx, b.vy); b.idle = (sp < .6 && b.y > ground - b.r - 2) ? b.idle + 1 : 0;
            if (b.x > W + 60 || b.x < -60 || b.idle > 40) b.st = 'done'
        }
        for (const k of blocks) {
            if (!k.mv) { if (!supported(k.y + k.h, k.x, k.x + k.w, k)) knock(k, 0, 0); continue }
            k.vy += g; k.x += k.vx; k.y += k.vy; k.a += k.va;
            if (k.y + k.h > ground) { k.y = ground - k.h; k.vy *= -.2; k.vx *= .8; k.va *= .6 }
            for (const o of blocks) if (o !== k && !o.mv && overlap(k, o) && Math.hypot(k.vx, k.vy) > 1.5) knock(o, k.vx * .5, 0);
            for (const u of grem) if (u.st !== 'pop' && Math.hypot(k.vx, k.vy) > 1 && u.x > k.x - u.r && u.x < k.x + k.w + u.r && u.y > k.y - u.r && u.y < k.y + k.h + u.r) crash(u)
        }
        for (const u of grem) {
            if (u.st === 'pop') continue;
            if (u.st === 'idle' && !supported(u.y + u.r, u.x - u.r * .5, u.x + u.r * .5)) u.st = 'fall';
            if (u.st === 'fall') { u.vy += g; u.y += u.vy; if (u.y + u.r > ground) crash(u) }
        }
        for (const p of parts) { p.vy += .2; p.x += p.vx; p.y += p.vy; p.l-- }
        parts = parts.filter(p => p.l > 0);
        if (state === 'play' && grem.every(u => u.st === 'pop')) { state = 'win'; show('ALL GLITCHES CRASHED! SHIP IT 🚀') }
        if (state === 'play' && !ready && projs.length && projs.every(b => b.st === 'done') && !timer)
            timer = setTimeout(() => {
                timer = null; if (state !== 'play') return;
                if (queue.length) { ready = bot(queue.shift()); projs = []; ui() } else { state = 'lose'; show('GLITCHES SURVIVED. RESET & RETRY!') }
            }, 700);
    }
    function show(t) { msgText.textContent = t; msg.classList.add('show') }

    function rack(k) {
        ctx.save(); ctx.translate(k.x + k.w / 2, k.y + k.h / 2); ctx.rotate(k.a); const w = k.w, h = k.h;
        if (k.stone) {
            ctx.fillStyle = '#9e9e9e'; ctx.strokeStyle = '#5f5f5f'; ctx.lineWidth = 2; ctx.fillRect(-w / 2, -h / 2, w, h); ctx.strokeRect(-w / 2, -h / 2, w, h);
            ctx.fillStyle = '#7d7d7d'; for (let i = 0; i < 5; i++)ctx.fillRect(-w / 2 + ((i * 37) % w), -h / 2 + ((i * 23) % h), 3, 3)
        }
        else {
            ctx.fillStyle = '#455a64'; ctx.strokeStyle = '#1c2a31'; ctx.lineWidth = 2; ctx.fillRect(-w / 2, -h / 2, w, h); ctx.strokeRect(-w / 2, -h / 2, w, h);
            if (h > w) { for (let y = -h / 2 + 8; y < h / 2 - 4; y += 12) { ctx.fillStyle = ((y * 7 + T) >> 4) % 3 ? '#00e676' : '#ff9100'; ctx.fillRect(-2, y, 4, 4) } }
            else { ctx.fillStyle = '#90a4ae'; for (let x = -w / 2 + 6; x < w / 2 - 2; x += 18) { ctx.beginPath(); ctx.arc(x, 0, 1.8, 0, 7); ctx.fill() } }
        }
        ctx.restore()
    }
    function fork(side) { ctx.strokeStyle = '#8d5a2b'; ctx.lineWidth = 12 * sc; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(anchor.x, ground - 50 * sc); ctx.lineTo(anchor.x + side * 16 * sc, anchor.y); ctx.stroke() }
    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#a5d6a7'; ctx.beginPath(); ctx.ellipse(W * .3, ground + 30, W * .4, 80, 0, Math.PI, 0); ctx.fill();
        ctx.fillStyle = '#81c784'; ctx.beginPath(); ctx.ellipse(W * .8, ground + 40, W * .35, 100, 0, Math.PI, 0); ctx.fill();
        ctx.fillStyle = '#4caf50'; ctx.fillRect(0, ground, W, H - ground); ctx.fillStyle = '#8d6e63'; ctx.fillRect(0, ground + 14, W, H);
        if (ready && ready.st === 'drag') {
            const k = .2 + .05 * (1 - sc); let x = ready.x, y = ready.y, vx = (anchor.x - ready.x) * k, vy = (anchor.y - ready.y) * k; ctx.fillStyle = 'rgba(255,255,255,.85)';
            for (let i = 0; i < 40; i++) { for (let j = 0; j < 2; j++) { vy += g; x += vx; y += vy } if (y > ground) break; ctx.beginPath(); ctx.arc(x, y, 3 - i * .05, 0, 7); ctx.fill() }
        }
        // waiting bots
        queue.forEach((tp, i) => { const r = (tp === 'red' ? 17 : 13) * sc; drawBot(ctx, anchor.x - 55 * sc - i * 38 * sc, ground - r * .95, r, tp, 0, T) });
        ctx.strokeStyle = '#8d5a2b'; ctx.lineWidth = 14 * sc; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(anchor.x, ground); ctx.lineTo(anchor.x, ground - 50 * sc); ctx.stroke();
        fork(1);
        if (ready) { ctx.strokeStyle = '#c62828'; ctx.lineWidth = 5 * sc; ctx.beginPath(); ctx.moveTo(anchor.x + 16 * sc, anchor.y); ctx.lineTo(ready.x, ready.y); ctx.stroke() }
        for (const k of blocks) rack(k);
        for (const u of grem) if (u.st !== 'pop') drawGremlin(ctx, u.x, u.y, u.r, T);
        for (const b of projs) if (b.st === 'fly') drawBot(ctx, b.x, b.y, b.r, b.type, Math.atan2(b.vy, b.vx) * .35, T);
        if (ready) drawBot(ctx, ready.x, ready.y, ready.r, ready.type, 0, T);
        if (ready) { ctx.strokeStyle = '#c62828'; ctx.lineWidth = 5 * sc; ctx.beginPath(); ctx.moveTo(ready.x, ready.y); ctx.lineTo(anchor.x - 16 * sc, anchor.y); ctx.stroke() }
        fork(-1);
        for (const p of parts) { ctx.globalAlpha = p.l / 45; ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.sq ? 5 : 4, p.sq ? 5 : 4) } ctx.globalAlpha = 1;
    }
    function loop() { step(); draw(); animFrame = requestAnimationFrame(loop) }
    
    window.addEventListener('resize', resize); 
    
    // start
    resize(); 
    loop();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animFrame);
        clearTimeout(timer);
        cv.removeEventListener('pointerdown', onPointerDown);
        cv.removeEventListener('pointermove', onPointerMove);
        cv.removeEventListener('pointerup', onPointerUp);
        if(resetBtn) resetBtn.onclick = null;
    }
}
