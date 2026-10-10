export default function About() {
  return (
    <section id="about">
      <div className="about-overview reveal">
        <div className="about-overview-copy">
          <span className="about-kicker">24-Hour National-Level Hackathon</span>
          <h2 className="about-title bang">What Is <span>Bits2Wave?</span></h2>
          <p>Bits2Wave is an innovation challenge where college students turn an early idea into a working prototype. Teams of 2–4 choose Hardware, Software, or Open Innovation, register through Unstop, and submit a concise idea presentation for evaluation.</p>
          <p>Ideas are judged on innovation, feasibility, and impact. Shortlisted teams advance to the 24-hour on-campus Grand Finale at BMSIT&amp;M on 21–22 November 2026, where they build and pitch their solution. The ₹1,000 team fee applies only to shortlisted finalists.</p>
        </div>
        <div className="about-facts" aria-label="Bits2Wave highlights">
          <div><strong>2–4</strong><span>Students per team</span></div>
          <div><strong>3</strong><span>Innovation tracks</span></div>
          <div><strong>6</strong><span>Slides maximum</span></div>
          <div><strong>24</strong><span>Hours to build</span></div>
        </div>
      </div>

      <h2 className="h2 bang reveal">How It <span>Works</span></h2>
      <p className="sub reveal">Twenty-four hours to turn an idea into something that flies. Here's the loop every great hack goes through.</p>
      <div className="steps">
        <svg className="step-journey" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
          <defs><marker id="journey-arrow" markerWidth="13" markerHeight="13" refX="10" refY="6.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 13 6.5 0 13Z" fill="#ef3340" /></marker></defs>
          <path d="M155 48 C205 5 275 5 322 48" markerEnd="url(#journey-arrow)" />
          <path className="journey-middle" d="M420 48 C458 44 472 57 481 77 C491 99 504 108 527 108" markerEnd="url(#journey-arrow)" />
          <path d="M675 48 C725 5 795 5 842 48" markerEnd="url(#journey-arrow)" />
        </svg>
        <div className="step reveal">
          <div className="n">01</div>
          <div className="step-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="18" r="9" /><circle cx="14" cy="23" r="7" /><circle cx="50" cy="23" r="7" /><path d="M18 51V42c0-9 6-15 14-15s14 6 14 15v9M3 49v-8c0-7 5-12 12-12 4 0 7 2 9 5M61 49v-8c0-7-5-12-12-12-4 0-7 2-9 5" /></svg></div>
          <h3>Build</h3><p>Form a team of 2–4, pick a track, and start hacking the moment the clock starts.</p>
        </div>
        <div className="step reveal">
          <div className="n">02</div>
          <div className="step-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="10" width="35" height="46" rx="5" /><path d="M24 10V6h15v8H24zM22 26h18M22 35h13M22 44h9" /><path className="step-icon-accent" d="m39 44 13-17 6 5-14 17-8 3z" /></svg></div>
          <h3>Launch</h3><p>Ship a working prototype. Hardware, software, or a wild idea in between.</p>
        </div>
        <div className="step reveal">
          <div className="n">03</div>
          <div className="step-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="10" width="48" height="42" rx="5" /><path d="M8 20h48M17 15h1M23 15h1M21 30l-7 6 7 6M43 30l7 6-7 6M36 27l-8 18" /></svg></div>
          <h3>Break</h3><p>Stress-test it. Find what fails, and learn from it faster than anyone else.</p>
        </div>
        <div className="step reveal">
          <div className="n">04</div>
          <div className="step-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="m6 29 51-20-18 48-9-19z" /><path d="m30 38 27-29M30 38l9 19" /></svg></div>
          <h3>Repeat</h3><p>Iterate until it soars, then pitch it to the judges with everything you've got.</p>
        </div>
      </div>
    </section>
  );
}
