import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(open => !open);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKey = event => event.key === 'Escape' && closeMenu();
    const handleResize = () => window.innerWidth > 820 && closeMenu();
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProblems = (e) => {
    e.preventDefault();
    closeMenu();
    window.history.pushState({}, '', '/problem-statements?track=hardware');
    window.dispatchEvent(new Event('popstate'));
  };

  const handleResults = (e) => {
    e.preventDefault();
    closeMenu();
    window.history.pushState({}, '', '/results');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <nav ref={navRef} className={menuOpen ? 'menu-open' : ''}>
      <a href="/#top" className="logo bang">BITS<span>2</span>WAVE</a>
      <button
        className={`menu ${menuOpen ? 'open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <div className="hamburger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul className={menuOpen ? 'open' : ''}>
        <li><a href="/#play" onClick={closeMenu}>Play</a></li>
        <li><a href="/#about" onClick={closeMenu}>About</a></li>
        <li><a href="/#tracks" onClick={closeMenu}>Tracks</a></li>
        <li><a href="/problem-statements?track=hardware" onClick={handleProblems}>Problems</a></li>
        <li><a href="/results" onClick={handleResults}>Results</a></li>
        <li><a href="/#prizes" onClick={closeMenu}>Prizes</a></li>
        <li><a href="/#timeline" onClick={closeMenu}>Timeline</a></li>
        <li><a href="/#faq" onClick={closeMenu}>FAQ</a></li>
        <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
        <li><a className="nav-register" href="https://unstop.com/p/bits2wave-bms-institute-of-technology-and-management-bmsitm-bangalore-1761893" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Register</a></li>
      </ul>
    </nav>
  );
}
