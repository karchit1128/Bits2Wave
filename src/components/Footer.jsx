export default function Footer() {
  return (
    <footer>
      <div className="footer-content wrap">
        <div className="footer-left">
          <div className="comsoc-brand">
            <img src="/comsoc.png" alt="IEEE ComSoc" className="comsoc-logo" />
            <div className="comsoc-text">
              <h3 className="bang">IEEE COMSOC</h3>
              <p className="bmsit-text">BMSIT&amp;M</p>
            </div>
          </div>
          
          <p className="comsoc-desc">
            Advancing global communications and networking<br />
            technology for the betterment of humanity<br />
            through innovation and community.
          </p>
        </div>
        
        <div className="footer-center" style={{textAlign: 'center', margin: '0 auto'}}>
          <h2 className="bang" style={{fontSize: '56px', lineHeight: '1', letterSpacing: '4px'}}>
            BUILD.<br/>
            HACK.<br/>
            WIN.
          </h2>
          <p className="bmsit-text" style={{fontFamily: 'monospace', color: '#64b5f6', letterSpacing: '2px', marginTop: '20px', fontWeight: 'bold'}}>
            RIDE THE WAVE OF INNOVATION.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="contact-info" style={{alignItems: 'flex-end'}}>
            <p style={{justifyContent: 'flex-end', margin: 0}}>
              <a href="https://maps.app.goo.gl/2vUP95H6ChEcfQCQA" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <span className="icon" style={{color: '#e91e63'}}>📍</span> BMSIT&amp;M, Bengaluru
              </a>
            </p>
            <p style={{justifyContent: 'flex-end'}}>
              <a href="mailto:bits2wavehack@gmail.com" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <span className="icon" style={{color: '#d1c4e9'}}>✉️</span> bits2wavehack@gmail.com
              </a>
            </p>
          </div>
          
          <div className="socials" style={{justifyContent: 'flex-end'}}>
            <a href="https://www.instagram.com/bmsit_comsoc?igsi=MW8wNTkwdWVvc244bQ%3D%3D" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/ieeecomsocbmsit/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}