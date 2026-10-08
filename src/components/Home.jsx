import { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import GameSection from './GameSection';
import About from './About';
import Tracks from './Tracks';
import Prizes from './Prizes';
import Timeline from './Timeline';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }), { threshold: .15 });
    
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  // Handle instant jump to hash on initial page load without smooth sliding
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) {
          const originalBehavior = document.documentElement.style.scrollBehavior;
          document.documentElement.style.scrollBehavior = 'auto'; // Force instant jump
          el.scrollIntoView();
          document.documentElement.style.scrollBehavior = originalBehavior; // Restore smooth scrolling
        }
      }, 50);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <GameSection />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
