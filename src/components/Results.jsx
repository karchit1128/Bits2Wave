import { useEffect, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { TEAMS } from '../data/teams';
import './Results.css';

export default function Results() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="results-page">
      <Navbar />
      <header className="results-hero">
        <p className="results-eyebrow">Results</p>
        <h1><span>Shortlisted</span> Teams</h1>
        <div className="results-stats" aria-label="Page highlights">
          <span><i>✦</i><b>{TEAMS.length}</b> Teams</span>
          <span><i>▦</i>Innovative Projects</span>
          <span><i>●</i>Phase 1 Cleared</span>
        </div>
      </header>

      <section className="results-content" aria-label="Shortlisted teams">
        <div className="results-grid">
          {TEAMS.map((team, index) => (
            <div key={team.id} className={`team-card team-card-${team.color}`}>
              <div className="team-card-header">
                <span className="team-id">{team.id}</span>
                <span className="team-symbol" aria-hidden="true">{team.symbol}</span>
                <span className="team-status">{team.status}</span>
              </div>
              <div className="team-card-body">
                <h3 className="team-name">{team.name}</h3>
                <p className="team-project">{team.project}</p>
                <div className="team-leader">
                  <strong>Leader: {team.leader}</strong>
                </div>
                <div className="team-members">
                  <span>Members: {team.members.join(', ')}</span>
                </div>
                <p className="team-tagline">{team.tagline}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="results-endnote">Congratulations to all the shortlisted teams!</p>
      </section>

      <Footer />
    </main>
  );
}
