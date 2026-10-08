export default function Prizes() {
  return (
    <section id="prizes" className="pad">
      <div className="wrap text-center">
        <h2 className="h2 bang reveal in">Prize <span>Pool</span></h2>
        <div className="pool bang reveal in" style={{marginBottom: "60px"}}>₹60,000</div>
        
        <div className="prize-tracks-grid">
          {/* Hardware Track */}
          <div className="prize-track reveal in">
            <h3 className="bang" style={{fontSize: '32px', color: 'var(--navy)', marginBottom: '30px'}}>Hardware Track</h3>
            <div className="podium mini-podium">
              <div className="pod p2"><div className="medal">🥈</div><h4>2nd</h4><p>₹ 10K</p></div>
              <div className="pod p1"><div className="medal">🏆</div><h4>1st</h4><p>₹ 15K</p></div>
            </div>
          </div>
          
          {/* Software Track */}
          <div className="prize-track reveal in" style={{transitionDelay: "0.1s"}}>
            <h3 className="bang" style={{fontSize: '32px', color: 'var(--navy)', marginBottom: '30px'}}>Software Track</h3>
            <div className="podium mini-podium">
              <div className="pod p2"><div className="medal">🥈</div><h4>2nd</h4><p>₹ 10K</p></div>
              <div className="pod p1"><div className="medal">🏆</div><h4>1st</h4><p>₹ 15K</p></div>
            </div>
          </div>

          {/* Open Innovation Track */}
          <div className="prize-track reveal in" style={{transitionDelay: "0.2s"}}>
            <h3 className="bang" style={{fontSize: '32px', color: 'var(--navy)', marginBottom: '30px'}}>Innovation Track</h3>
            <div className="podium mini-podium">
              <div className="pod p2"><div className="medal">🥈</div><h4>2nd</h4><p>₹ 4K</p></div>
              <div className="pod p1"><div className="medal">🏆</div><h4>1st</h4><p>₹ 6K</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}