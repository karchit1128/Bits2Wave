export default function NotFound() {
  return (
    <section className="hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <div className="cloud" style={{ width: '180px', height: '50px', top: '18%', animationDuration: '60s' }}></div>
      <div className="cloud" style={{ width: '120px', height: '36px', top: '34%', animationDuration: '45s', animationDelay: '-20s' }}></div>
      
      <h2 className="title bang" style={{ fontSize: 'clamp(80px, 20vw, 250px)', transform: 'none', margin: '0', textShadow: '6px 6px 0 #fff, 12px 12px 0 rgba(0,0,0,.12)' }}>
        4<span className="two">0</span>4
      </h2>
      <p className="tag" style={{ marginTop: '20px' }}>GLITCH DETECTED • <b>PAGE NOT FOUND</b></p>
      
      <div className="cta" style={{ marginTop: '50px' }}>
        <a href="/" className="btn btn-red" style={{ fontSize: '28px', padding: '16px 40px' }}>Return to Base</a>
      </div>
    </section>
  );
}
