import { useEffect, useLayoutEffect } from 'react';
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

  // Scroll to hash section immediately after DOM mutations, before paint
  useLayoutEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  // Consume pending scroll target set by Navbar when coming from PS page (SPA nav)
  useEffect(() => {
    const target = window.__pendingScrollTarget;
    if (target) {
      window.__pendingScrollTarget = null;
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
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
      <div className="wood-section-divider" aria-hidden="true">
        <img src="/wood-section-divider-v1.png" alt="" />
      </div>
      <Timeline />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
