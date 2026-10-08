export default function Navbar() {
  const toggleMenu = () => document.querySelector('nav ul')?.classList.toggle('open');
  const closeMenu = () => document.querySelector('nav ul')?.classList.remove('open');

  return (
    <nav>
      <a href="#top" className="logo bang">BITS<span>2</span>WAVE</a>
      <button className="menu" onClick={toggleMenu}>☰</button>
      <ul>
        <li><a href="#play" onClick={closeMenu}>Play</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#tracks" onClick={closeMenu}>Tracks</a></li>
        <li>
          <a href="/problem-statements?track=hardware" onClick={(e) => {
            e.preventDefault();
            closeMenu();
            window.history.pushState({}, '', '/problem-statements?track=hardware');
            window.dispatchEvent(new Event('popstate'));
          }}>Problems</a>
        </li>
        <li><a href="#prizes" onClick={closeMenu}>Prizes</a></li>
        <li><a href="#timeline" onClick={closeMenu}>Timeline</a></li>
        <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}