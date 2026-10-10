export default function Timeline() {
  return (
    <section id="timeline">
      <h2 className="h2 bang reveal">Flight <span>Path</span></h2>
      <p className="sub reveal">Key dates to keep on your radar.</p>
      <div className="timeline">
        <div className="ev reveal"><div className="dot">🚀</div><div className="card"><div className="when">09 Oct 2026, 11:59 PM IST</div><h4>Hackathon Launch</h4><p>The hackathon is officially announced and open for all.</p></div></div>
        <div className="ev reveal"><div className="dot right-mark">📝</div><div className="card"><div className="when">30 Oct 2026, 11:59 PM IST</div><h4>Registration Deadline</h4><p>Last day to register your team.</p></div></div>
        <div className="ev reveal"><div className="dot">💡</div><div className="card"><div className="when">10 Nov 2026, 11:59 PM IST</div><h4>Idea Submission Deadline</h4><p>Submit your project proposal and initial idea.</p></div></div>
        <div className="ev reveal"><div className="dot no-mark">📢</div><div className="card"><div className="when">13 Nov 2026, 12:00 PM IST</div><h4>Announcement of Shortlisted Teams</h4><p>Selected teams move on to the final round.</p></div></div>
        <div className="ev reveal"><div className="dot no-mark">💳</div><div className="card"><div className="when">18 Nov 2026, 11:59 PM IST</div><h4>Final Round Payment Deadline</h4><p>Complete the payment process to confirm participation.</p></div></div>
        <div className="ev reveal"><div className="dot no-mark">🏆</div><div className="card"><div className="when">21 Nov 2026, 09:00 AM IST</div><h4>Grand Finale</h4><p>The 24-hour hackathon begins at BMSIT&M campus!</p></div></div>
      </div>
    </section>
  );
}