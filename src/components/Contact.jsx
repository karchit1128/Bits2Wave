export default function Contact() {
  return (
    <section id="contact">
      <h2 className="h2 bang reveal">Organised <span>By</span></h2>
      <img className="org-strip reveal" src="organisers-strip.png" alt="Organisers" onLoad={(e) => document.querySelector('.orgs').classList.add('hide')} onError={(e) => e.target.classList.add('hide')} />
      <div className="orgs reveal">
        <div className="org">BMS Institute of Technology &amp; Management</div>
        <div className="org">Institution's Innovation Council</div>
        <div className="org">IEEE Bangalore Section</div>
        <div className="org">IEEE AP-S / MTT-S BMSIT Chapter</div>
        <div className="org">IEEE ComSoc BMSIT&amp;M Chapter</div>
        <div className="org">IEEE Student Branch BMSIT&amp;M</div>
      </div>
      <div className="contacts reveal">
        <a className="contact" href="tel:+918431413296"><b>Tarun Patil</b>📞 Contact</a>
        <a className="contact" href="tel:+918340104407"><b>Rishav Kumar</b>📞 Contact</a>
      </div>
    </section>
  );
}