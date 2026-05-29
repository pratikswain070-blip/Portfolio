import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import Journey from './components/Journey';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      setScrollProgress(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <SplashCursor
        RAINBOW_MODE={true}
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.5}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={6000}
        CURL={10}
        COLOR_UPDATE_SPEED={5}
      />
      <div className="fixed top-0 left-0 w-full h-1 bg-surface-container-high z-50">
        <div 
          className="h-full bg-primary transition-all duration-300" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="max-w-container-max mx-auto px-gutter">
        <Hero />
        <Services />
        <Skills />
        <Journey />
        <Projects />
        <Certificates />
        <OpenSource />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
