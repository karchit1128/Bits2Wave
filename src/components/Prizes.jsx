const prizeTracks = [
  { name: 'Hardware', tone: 'red', first: '₹15,000', second: '₹10,000' },
  { name: 'Software', tone: 'blue', first: '₹15,000', second: '₹10,000' },
  { name: 'Open Innovation', tone: 'gold', first: '₹6,000', second: '₹4,000' },
];

function TrophyIcon({ silver = false }) {
  return (
    <svg className={`prize-trophy${silver ? ' is-silver' : ''}`} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 8h28v12c0 11-6 18-14 18S18 31 18 20V8Z" />
      <path d="M18 13H8v7c0 8 5 13 13 13M46 13h10v7c0 8-5 13-13 13M32 38v10M23 55h18M27 48h10v7H27z" />
      <path className="trophy-shine" d="M24 13v8c0 6 3 10 8 12" />
    </svg>
  );
}

export default function Prizes() {
  return (
    <section id="prizes">
      <h2 className="h2 bang reveal">Prize <span>Pool</span></h2>
      <p className="prize-sub reveal">A total of ₹60,000 up for grabs across three tracks!</p>

      <div className="prize-total-board reveal">
        <span className="prize-total-icon"><TrophyIcon /></span>
        <div>
          <strong>₹60,000</strong>
          <small>Total Prize Pool</small>
        </div>
      </div>

      <div className="prize-cards">
        {prizeTracks.map((track, index) => (
          <article className={`prize-card prize-card-${track.tone} reveal`} key={track.name} style={{ transitionDelay: `${index * 0.1}s` }}>
            <h3>{track.name}</h3>
            <div className="prize-board">
              <div className="prize-award">
                <span className="prize-cup"><TrophyIcon /></span>
                <strong>{track.first}</strong>
                <small>1st Place</small>
              </div>
              <div className="prize-award">
                <span className="prize-cup"><TrophyIcon silver /></span>
                <strong>{track.second}</strong>
                <small>2nd Place</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
