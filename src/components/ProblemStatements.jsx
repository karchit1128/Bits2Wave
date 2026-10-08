import { useState, useEffect, useLayoutEffect } from 'react';
import { hardwarePS, softwarePS } from '../data/psData';
import './ProblemStatements.css';

export default function ProblemStatements() {
  const [activeTrack, setActiveTrack] = useState('hardware');
  const [selectedPS, setSelectedPS] = useState(null);

  // Instantly jump to top before browser paints
  useLayoutEffect(() => {
    const original = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Wait a tick before restoring smooth scroll to prevent CSS batching
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = original;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Read query parameter on mount to set initial track
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const track = params.get('track');
    
    if (track === 'software') {
      setActiveTrack('software');
    } else if (track === 'hardware') {
      setActiveTrack('hardware');
    } else {
      // If the track is missing or invalid, default to hardware and fix the URL
      setActiveTrack('hardware');
      window.history.replaceState({}, '', '/problem-statements?track=hardware');
    }
  }, []);

  const handleToggle = (track) => {
    setActiveTrack(track);
    // Update URL without reloading
    window.history.replaceState({}, '', `/problem-statements?track=${track}`);
  };

  const goHome = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/#tracks');
    window.dispatchEvent(new Event('popstate'));
  };

  const activeData = activeTrack === 'hardware' ? hardwarePS : softwarePS;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPS) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPS]);

  return (
    <div className="ps-page">
      <nav className="ps-nav">
        <a href="/" onClick={goHome} className="logo bang">BITS<span>2</span>WAVE</a>
        <a href="/" onClick={goHome} className="back-btn btn btn-white">← Back to Base</a>
      </nav>

      <header className="ps-header">
        <h1 className="h2 bang reveal in">Problem <span>Statements</span></h1>
        <p className="sub reveal in">Choose your domain and find the challenge you want to tackle.</p>
        
        <div className="track-toggle reveal in">
          <button 
            className={`toggle-btn ${activeTrack === 'hardware' ? 'active' : ''}`}
            onClick={() => handleToggle('hardware')}
          >
            ⚙️ Hardware
          </button>
          <button 
            className={`toggle-btn ${activeTrack === 'software' ? 'active' : ''}`}
            onClick={() => handleToggle('software')}
          >
            💻 Software
          </button>
        </div>
      </header>

      <div className="ps-grid">
        {activeData.map((ps) => (
          <div key={ps.id} className="ps-card reveal in" onClick={() => setSelectedPS(ps)}>
            <div className="ps-card-header">
              <span className="ps-badge">{ps.id}</span>
              <span className="ps-track-tag">{ps.track}</span>
            </div>
            <h3 className="ps-title">{ps.title}</h3>
            <p className="ps-desc">{ps.description}</p>
            <div className="ps-card-footer">
              CLICK FOR FULL PS &raquo;
            </div>
          </div>
        ))}
      </div>

      {selectedPS && (
        <div className="ps-modal-overlay" onClick={() => setSelectedPS(null)}>
          <div className="ps-modal" onClick={e => e.stopPropagation()}>
            <button className="ps-modal-close" onClick={() => setSelectedPS(null)}>✕</button>
            <div className="ps-modal-header">
              <span className="ps-badge">{selectedPS.id}</span>
              <span className="ps-track-tag">{selectedPS.track}</span>
            </div>
            <h2 className="ps-modal-title">{selectedPS.title}</h2>
            <div className="ps-modal-content">
              <h4>Objective:</h4>
              <p>{selectedPS.description}</p>
              <h4>Mission Details:</h4>
              <p>{selectedPS.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
