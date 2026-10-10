export default function Tracks() {
  return (
    <section id="tracks">
      <h2 className="h2 bang reveal">Pick Your <span>Track</span></h2>
      <p className="sub reveal">Three tracks, one goal: launch something that leaves an impact.</p>
      <div className="tracks">
        <a href="/problem-statements?track=hardware" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/problem-statements?track=hardware'); window.dispatchEvent(new Event('popstate')); }} className="track track-hardware reveal">
          <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></div>
          <h3>Hardware</h3>
          <p>IoT, embedded systems, RF, antennas and microwave builds. If it has wires, it belongs here.</p>
          <span className="track-arrow" aria-hidden="true">→</span>
        </a>
        <a href="/problem-statements?track=software" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/problem-statements?track=software'); window.dispatchEvent(new Event('popstate')); }} className="track track-software reveal">
          <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 4l-4 16" /></svg></div>
          <h3>Software</h3>
          <p>Web, mobile, AI/ML, networking and communication systems. Code that solves real problems.</p>
          <span className="track-arrow" aria-hidden="true">→</span>
        </a>
        <div className="track track-innovation reveal">
          <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg></div>
          <h3>Open Innovation</h3>
          <p>No boundaries. Bring your boldest idea, from any domain, and make it fly.</p>
        </div>
      </div>
    </section>
  );
}
