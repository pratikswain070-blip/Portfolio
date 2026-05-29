import React from 'react';

const Header = ({ isDark, toggleTheme }) => {
  return (
    <nav className="flex justify-between items-center w-full px-gutter py-6 max-w-container-max mx-auto relative z-50">
      <div className="font-display text-headline-md font-bold tracking-tighter text-primary uppercase">
        Pratik Swain
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-label-mono text-label-mono text-primary border-b-2 border-primary pb-1" href="#projects">Projects</a>
        <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#expertise">Expertise</a>
        <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#certificates">Certificates</a>
        <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#insights">Insights</a>
        <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="material-symbols-outlined p-2 rounded-full hover:bg-surface-container-low transition-all"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? 'light_mode' : 'dark_mode'}
        </button>
        <a href="#contact" className="bg-primary text-on-primary px-6 py-2 font-label-mono text-label-mono rounded-lg hover:opacity-90 active:scale-95 transition-all inline-block">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Header;
