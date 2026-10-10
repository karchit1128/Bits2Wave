export default function Contact() {
  return (
    <section id="contact">
      <h2 className="h2 bang reveal">Organised <span>By</span></h2>
      <div className="orgs reveal">
        <div className="org">
          <img src="/bmsit.png" alt="BMS Institute of Technology & Management" />
        </div>
        <div className="org">
          <img src="/iic.png" alt="Institution's Innovation Council" />
        </div>
        <div className="org">
          <img src="/ieee.png" alt="IEEE Bangalore Section" />
        </div>
        <div className="org">
          <img src="/ieee-aps.png" alt="IEEE AP-S / MTT-S BMSIT Chapter" />
        </div>
        <div className="org">
          <img src="/comsoc-org.png" alt="IEEE ComSoc BMSIT&M Chapter" />
        </div>
        <div className="org">
          <img src="/ieee-student-branch.png" alt="IEEE Student Branch BMSIT&M" />
        </div>
      </div>
      <div className="contacts reveal">
        <a className="contact" href="tel:+918431413296"><b>Tarun Patil</b>📞 Contact</a>
        <a className="contact" href="tel:+918340104407"><b>Rishav Kumar</b>📞 Contact</a>
      </div>
    </section>
  );
}