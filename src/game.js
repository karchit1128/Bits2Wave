function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath() }
// ===== Illustrated game assets =====
const assetPaths = {
    arena: '/play-arena-bg-v1.png',
    arenaMobile: '/play-arena-mobile-v1.png',
    blue: '/play-red-bird-v1.png',
    yellow: '/play-yellow-bird-v1.png',
    red: '/play-black-bird-v1.png',
    gremlin: '/play-green-pig-v2.png',
};

function drawCover(c, image, width, height) {
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = width / height;
    let sourceX = 0, sourceY = 0, sourceWidth = image.naturalWidth, sourceHeight = image.naturalHeight;
    if (imageRatio > canvasRatio) {
        sourceWidth = image.naturalHeight * canvasRatio;
        sourceX = (image.naturalWidth - sourceWidth) / 2;
    } else {
        sourceHeight = image.naturalWidth / canvasRatio;
        sourceY = (image.naturalHeight - sourceHeight) / 2;
    }
    c.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
}

const assets = Object.fromEntries(Object.entries(assetPaths).map(([key, src]) => {
    const image = new Image();
    image.src = src;
    return [key, image];
}));

function drawImageSprite(c, image, x, y, radius, rotation = 0, scale = 2.45) {
    if (!image?.complete || !image.naturalWidth) return false;
    const size = radius * scale;
    c.save();
    c.translate(x, y);
    c.rotate(rotation);
    c.drawImage(image, -size / 2, -size / 2, size, size);
    c.restore();
    return true;
}

function drawBird(c, x, y, r, type, rot = 0) {
    if (drawImageSprite(c, assets[type], x, y, r, rot)) return;
    c.save(); c.translate(x, y); c.rotate(rot); c.fillStyle = type === 'yellow' ? '#ffd51f' : type === 'red' ? '#20242d' : '#ef2029';
    c.strokeStyle = '#101a29'; c.lineWidth = Math.max(2, r * .12); c.beginPath(); c.arc(0, 0, r, 0, Math.PI * 2); c.fill(); c.stroke(); c.restore();
}

function drawPig(c, x, y, r) {
    if (drawImageSprite(c, assets.gremlin, x, y, r, 0, 2.55)) return;
    c.fillStyle = '#68ca20'; c.strokeStyle = '#153b0b'; c.lineWidth = Math.max(2, r * .12); c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); c.stroke();
}

export function initGame(cv) {
    const ctx = cv.getContext('2d');
    let W, H, ground, sc, anchor, ready, projs, queue, blocks, grem, score, state, parts, timer;
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
        sc = Math.min(1, W / 750); ground = H * .84;
        anchor = { x: Math.max(76, W * .2), y: ground - 105 * sc };
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
        b.used = true; burst(b.x, b.y, b.type === 'yellow' ? '#ffd51f' : '#ef2535', 10);
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
    if (resetBtn) resetBtn.onclick = build;

    function supported(y, x1, x2, self) { if (y >= ground - 1) return true; return blocks.some(b => b !== self && !b.mv && Math.abs(b.y - y) < 2 && b.x < x2 && b.x + b.w > x1) }
    function overlap(a, b) { return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y }
    function knock(b, vx, vy) { if (b.mv) return; b.mv = true; b.vx = vx; b.vy = vy; b.va = (Math.random() - .5) * (b.stone ? .06 : .15); score += 50; ui() }
    function crash(u) { if (u.st === 'pop') return; u.st = 'pop'; score += 500; ui(); for (let i = 0; i < 16; i++)parts.push({ x: u.x, y: u.y, vx: (Math.random() - .5) * 8, vy: (Math.random() - .8) * 8, l: 45, c: i % 3 ? '#75d523' : '#d9ff42', sq: false }) }

    function step() {
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
            ctx.fillStyle = '#a9aba6'; ctx.strokeStyle = '#3b4650'; ctx.lineWidth = Math.max(2, 2.2 * sc); rr(ctx, -w / 2, -h / 2, w, h, 3 * sc); ctx.fill(); ctx.stroke();
            ctx.fillStyle = 'rgba(255,255,255,.24)'; ctx.fillRect(-w / 2 + 3 * sc, -h / 2 + 3 * sc, Math.max(2, w - 6 * sc), 3 * sc);
            ctx.strokeStyle = 'rgba(70,75,75,.5)'; ctx.lineWidth = Math.max(1, sc); ctx.beginPath(); ctx.moveTo(-w * .18, -h * .28); ctx.lineTo(w * .08, -h * .04); ctx.lineTo(-w * .05, h * .2); ctx.stroke();
        }
        else {
            ctx.fillStyle = '#a95c22'; ctx.strokeStyle = '#572b12'; ctx.lineWidth = Math.max(2, 2.4 * sc); rr(ctx, -w / 2, -h / 2, w, h, 3 * sc); ctx.fill(); ctx.stroke();
            ctx.fillStyle = '#d58a3b'; ctx.fillRect(-w / 2 + 3 * sc, -h / 2 + 3 * sc, Math.max(2, w - 6 * sc), 3 * sc);
            ctx.strokeStyle = 'rgba(86,40,15,.55)'; ctx.lineWidth = Math.max(1, sc); ctx.beginPath();
            if (h > w) { ctx.moveTo(-w * .2, -h * .35); ctx.bezierCurveTo(w * .22, -h * .1, -w * .16, h * .12, w * .18, h * .34); }
            else { ctx.moveTo(-w * .38, 0); ctx.bezierCurveTo(-w * .12, -h * .18, w * .1, h * .15, w * .38, -h * .05); }
            ctx.stroke();
        }
        ctx.restore()
    }
    function fork(side) {
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#4e2a13'; ctx.lineWidth = 17 * sc; ctx.beginPath(); ctx.moveTo(anchor.x, ground - 48 * sc); ctx.lineTo(anchor.x + side * 18 * sc, anchor.y); ctx.stroke();
        ctx.strokeStyle = '#a85a24'; ctx.lineWidth = 11 * sc; ctx.beginPath(); ctx.moveTo(anchor.x, ground - 48 * sc); ctx.lineTo(anchor.x + side * 18 * sc, anchor.y); ctx.stroke();
        ctx.strokeStyle = '#d9893b'; ctx.lineWidth = 3 * sc; ctx.beginPath(); ctx.moveTo(anchor.x + side * 2 * sc, ground - 52 * sc); ctx.lineTo(anchor.x + side * 17 * sc, anchor.y + 2 * sc); ctx.stroke();
        ctx.strokeStyle = '#b71c1c'; ctx.lineWidth = 7 * sc; ctx.beginPath(); ctx.moveTo(anchor.x + side * 15 * sc, anchor.y + 12 * sc); ctx.lineTo(anchor.x + side * 18 * sc, anchor.y); ctx.stroke();
    }
    function draw() {
        ctx.clearRect(0, 0, W, H);
        const arena = W / H < 1.35 ? assets.arenaMobile : assets.arena;
        if (arena.complete && arena.naturalWidth) drawCover(ctx, arena, W, H);
        else { const sky = ctx.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#55c2f5'); sky.addColorStop(.84, '#dff5ff'); sky.addColorStop(.85, '#8ccf32'); sky.addColorStop(1, '#754123'); ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H); }
        if (ready && ready.st === 'drag') {
            const k = .2 + .05 * (1 - sc); let x = ready.x, y = ready.y, vx = (anchor.x - ready.x) * k, vy = (anchor.y - ready.y) * k; ctx.fillStyle = 'rgba(255,255,255,.85)';
            for (let i = 0; i < 40; i++) { for (let j = 0; j < 2; j++) { vy += g; x += vx; y += vy } if (y > ground) break; ctx.beginPath(); ctx.arc(x, y, 3 - i * .05, 0, 7); ctx.fill() }
        }
        // waiting bots
        queue.forEach((tp, i) => { const r = (tp === 'red' ? 17 : 14) * sc; drawBird(ctx, anchor.x - 58 * sc - i * 42 * sc, ground - r * 1.05, r, tp, 0) });
        ctx.strokeStyle = '#4e2a13'; ctx.lineWidth = 19 * sc; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(anchor.x, ground); ctx.lineTo(anchor.x, ground - 50 * sc); ctx.stroke();
        ctx.strokeStyle = '#9b501f'; ctx.lineWidth = 12 * sc; ctx.beginPath(); ctx.moveTo(anchor.x, ground); ctx.lineTo(anchor.x, ground - 50 * sc); ctx.stroke();
        fork(1);
        if (ready) { ctx.strokeStyle = '#c62828'; ctx.lineWidth = 5 * sc; ctx.beginPath(); ctx.moveTo(anchor.x + 16 * sc, anchor.y); ctx.lineTo(ready.x, ready.y); ctx.stroke() }
        for (const k of blocks) rack(k);
        for (const u of grem) if (u.st !== 'pop') drawPig(ctx, u.x, u.y, u.r);
        for (const b of projs) if (b.st === 'fly') drawBird(ctx, b.x, b.y, b.r, b.type, Math.atan2(b.vy, b.vx) * .35);
        if (ready) drawBird(ctx, ready.x, ready.y, ready.r, ready.type, 0);
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
        if (resetBtn) resetBtn.onclick = null;
    }
}
