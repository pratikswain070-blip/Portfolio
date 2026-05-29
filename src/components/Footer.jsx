import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant">
      <div className="w-full py-stack-gap px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto gap-4">
        
        <div className="font-display text-body-lg font-black text-primary uppercase">
          Pratik Swain
        </div>
        
        <div className="flex gap-8">
          <a 
            className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" 
            href="https://github.com/pratikswain070-blip"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" 
            href="https://www.linkedin.com/in/pratik-swain-074210385"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" 
            href="#projects"
          >
            Portfolio
          </a>
          <a 
            className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" 
            href="#certificates"
          >
            Certificates
          </a>
        </div>
        
        <p className="font-label-mono text-[12px] text-secondary uppercase">
          © 2026 DEVSYSTEMS ARCHITECT. BUILT WITH PRECISION.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
