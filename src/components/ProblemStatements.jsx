import { useEffect, useLayoutEffect, useState } from 'react';
import { hardwarePS, softwarePS } from '../data/psData';
import Navbar from './Navbar';
import Footer from './Footer';
import './ProblemStatements.css';

const atlasX = ['0%', '25%', '50%', '75%', '100%'];
const atlasY = ['0%', '33.333%', '66.667%', '100%'];

export default function ProblemStatements() {
  const initialTrack = new URLSearchParams(window.location.search).get('track') === 'hardware' ? 'hardware' : 'software';
  const [activeTrack, setActiveTrack] = useState(initialTrack);
  const [selectedPS, setSelectedPS] = useState(null);

  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPS ? 'hidden' : '';
    const close = (event) => event.key === 'Escape' && setSelectedPS(null);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [selectedPS]);

  const handleToggle = (track) => {
    setActiveTrack(track);
    setSelectedPS(null);
    window.history.replaceState({}, '', `/problem-statements?track=${track}`);
  };

  const activeData = activeTrack === 'hardware' ? hardwarePS : softwarePS;
  const label = activeTrack === 'hardware' ? 'Hardware' : 'Software';

  return (
    <main className="ps-page">
      <Navbar />
      <header className="ps-hero">
        <p className="ps-eyebrow">Problem Statements</p>
        <h1><span>{label}</span> Domain</h1>
        <div className="ps-stats" aria-label="Page highlights">
          <span><i>✦</i><b>{activeData.length}</b> Problem Statements</span>
          <span><i>▦</i>Build Real Solutions</span>
          <span><i>●</i>Create Real Impact</span>
        </div>
        
        <div className="track-toggle" data-active={activeTrack} role="tablist" aria-label="Problem statement track">
          <button role="tab" aria-selected={activeTrack === 'hardware'} className={activeTrack === 'hardware' ? 'active' : ''} onClick={() => handleToggle('hardware')}>Hardware</button>
          <button role="tab" aria-selected={activeTrack === 'software'} className={activeTrack === 'software' ? 'active' : ''} onClick={() => handleToggle('software')}>Software</button>
        </div>
      </header>

      <section className="ps-content" aria-label={`${label} problem statements`}>
        <div className="ps-grid">
          {activeData.map((ps, index) => (
            <button
              type="button"
              key={ps.id}
              className={`ps-card ${index % 2 ? 'ps-card-dark' : 'ps-card-light'}`}
              onClick={() => setSelectedPS(ps)}
              style={{
                '--delay': `${Math.min(index, 15) * 35}ms`,
              }}
            >
              <span className="ps-card-number">
                {ps.track === 'HARDWARE' ? 'HW-' : ps.track === 'SOFTWARE' ? 'SW-' : ps.track === 'HYBRID' ? 'HY-' : ''}{ps.id.replace('PS', '')}
              </span>
              <span className="ps-feather" aria-hidden="true">⌁</span>
              <span className="ps-card-clouds" aria-hidden="true" />
              <span className="ps-card-scenery" aria-hidden="true"><i /><i /><i /></span>
              <span
                className={`ps-card-art art-${index}`}
                aria-hidden="true"
                style={{
                  backgroundPosition: `${atlasX[index % 5]} ${atlasY[Math.floor((index % 20) / 5)]}`,
                }}
              />
              <span className="ps-card-copy">
                <strong>{ps.title}</strong>
                <span className="ps-card-desc">{ps.description}</span>
              </span>
              <span className="ps-open" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
        <p className="ps-endnote">Pick a challenge. Build something that matters.</p>
      </section>

      <Footer />

      {selectedPS && (
        <div className="ps-modal-overlay" onMouseDown={() => setSelectedPS(null)} role="presentation">
          <article className="ps-modal" role="dialog" aria-modal="true" aria-labelledby="ps-modal-title" onMouseDown={event => event.stopPropagation()}>
            <button className="ps-modal-close" onClick={() => setSelectedPS(null)} aria-label="Close problem statement">×</button>
            <div className="ps-modal-kicker"><span>{selectedPS.track === 'HARDWARE' ? 'HW-' : selectedPS.track === 'SOFTWARE' ? 'SW-' : selectedPS.track === 'HYBRID' ? 'HY-' : ''}{selectedPS.id.replace('PS', '')}</span><span>{selectedPS.track}</span></div>
            <h2 id="ps-modal-title">{selectedPS.title}</h2>
            <div className="ps-modal-scene" aria-hidden="true">
              <img src="/modal-scene-reference-v3.png" alt="" />
            </div>
            <div className="ps-modal-section">
              <span className="ps-modal-section-icon ps-target-icon" aria-hidden="true">◎</span>
              <div><h3>The challenge</h3><p>{selectedPS.description}</p></div>
            </div>
            <div className="ps-modal-section">
              <span className="ps-modal-section-icon ps-document-icon" aria-hidden="true">▤</span>
              <div><h3>Mission details</h3><p>{selectedPS.details}</p></div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
