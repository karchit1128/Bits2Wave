import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const d = document.getElementById('d');
    const h = document.getElementById('h');
    const m = document.getElementById('m');
    const s = document.getElementById('s');
    
    let interval;
    if (d && h && m && s) {
      const target = new Date('2026-11-21T09:00:00+05:30').getTime();
      const tick = () => {
        let t = Math.max(0, target - Date.now());
        const f = n => String(n).padStart(2, '0');
        d.textContent = f(Math.floor(t / 864e5));
        h.textContent = f(Math.floor(t / 36e5) % 24);
        m.textContent = f(Math.floor(t / 6e4) % 60);
        s.textContent = f(Math.floor(t / 1e3) % 60);
      };
      tick();
      interval = setInterval(tick, 1000);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="cloud" style={{ width: '180px', height: '50px', top: '18%', animationDuration: '60s' }}></div>
      <div className="cloud" style={{ width: '120px', height: '36px', top: '34%', animationDuration: '45s', animationDelay: '-20s' }}></div>
      <div className="cloud" style={{ width: '220px', height: '60px', top: '60%', animationDuration: '75s', animationDelay: '-40s' }}></div>
      <div className="cloud" style={{ width: '140px', height: '40px', top: '8%', animationDuration: '55s', animationDelay: '-10s' }}></div>

      <img className="org-strip" src="organisers-strip.png" alt="Organizers" onError={(e) => e.target.classList.add('hide')} />
      <h1 style={{ margin: 0 }}>
        <img className="logo-img" src="/bits2wave-logo-v2.png" alt="Bits2Wave" onLoad={() => document.getElementById('logoFallback').classList.add('hide')} onError={(e) => e.target.classList.add('hide')} />
      </h1>
      <div id="logoFallback">
        <div className="binary">1 0 1 1 0 0 1 0 1 0 0 1 0 1 1</div>
        <div className="title bang">BITS<span className="two">2</span>WAVE</div>
        <svg className="wave" viewBox="0 0 400 40">
          <path d="M5 20 Q 30 0 55 20 T 105 20 T 155 20 T 205 20 T 255 20 T 305 20 T 355 20 T 395 20" fill="none" stroke="#1e88e5" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <p className="tag">BUILD • <b>LAUNCH</b> • BREAK • REPEAT</p>
      <div className="meta">
        <div className="pill">⏱ 24-Hour Hackathon</div>
        <div className="pill">👥 Team Size 2–4</div>
        <div className="pill">📍 BMSIT&amp;M Campus, Bengaluru</div>
      </div>
      <div className="date bang">NOV <span>21–22</span></div>
      <div className="cta">
        <a href="https://unstop.com/p/bits2wave-bms-institute-of-technology-and-management-bmsitm-bangalore-1761893" target="_blank" rel="noopener noreferrer" className="btn btn-red">Register Now</a>
        <a href="https://docs.google.com/presentation/d/1RjsviPt6c5m9OovS3157FE_okNv5oQoM/edit?usp=sharing&ouid=109179551643344151191&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          PPT Template
        </a>
      </div>
      <div className="countdown">
        <div className="cd"><b id="d">00</b><small>DAYS</small></div>
        <div className="cd"><b id="h">00</b><small>HOURS</small></div>
        <div className="cd"><b id="m">00</b><small>MINS</small></div>
        <div className="cd"><b id="s">00</b><small>SECS</small></div>
      </div>
    </header>
  );
}
