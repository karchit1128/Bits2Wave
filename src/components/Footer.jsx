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

          <div className="socials">
            <a href="https://www.instagram.com/bmsit_comsoc?igsi=MW8wNTkwdWVvc244bQ%3D%3D" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/ieeecomsocbmsit/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          <div className="contact-info">
            <a href="mailto:bits2wavehack@gmail.com" className="contact-link">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              bits2wavehack@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-center">
          <h2 className="bang footer-tagline">
            BUILD.<br />
            LAUNCH.<br />
            BREAK.<br />
            REPEAT.
          </h2>
        </div>

        <div className="footer-right">
          <div className="comsoc-text">
            <h3 className="bang">IEEE AP-S / MTT-S</h3>
            <p className="bmsit-text">BMSIT&M</p>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/aps_mtts_bmsit?igsi=NDVqNjhtMWhnd3Y1" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/company/ieee-ap-s-mtt-s-bmsit-student-chapter/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://maps.app.goo.gl/2vUP95H6ChEcfQCQA" target="_blank" rel="noreferrer" className="contact-link">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              BMSIT&amp;M, Bengaluru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}