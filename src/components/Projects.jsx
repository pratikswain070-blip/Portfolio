import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  return (
    <section className="py-section-gap" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="font-label-mono text-label-mono text-secondary block mb-2">// RECENT WORK</span>
          <h2 className="font-headline-lg text-headline-lg">Selected Projects</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
          {['ALL', 'REACT', 'PYTHON', 'SYSTEMS'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-label-mono text-label-mono pb-1 transition-colors whitespace-nowrap ${
                filter === cat ? 'border-b-2 border-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Clean 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Project 1 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant mb-6 flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="Cyberguard Academy Dashboard" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/cyberguard-ui.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href="https://github.com/pratikswain070-blip/HTML-CSS-JS-Sprint-1-sem2-Case-Study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface px-6 py-3 font-label-mono text-label-mono hover:bg-primary hover:text-on-primary transition-colors"
                >
                  VIEW REPOSITORY
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="font-headline-md text-headline-md mb-2">Cyberguard Academy</h3>
            <p className="text-secondary mb-4 flex-grow">An interactive cybersecurity educational platform built as a comprehensive frontend case study.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                <p className="text-[10px] font-label-mono text-secondary uppercase">Stack</p>
                <p className="font-bold text-sm mt-1">HTML5, CSS3, JS</p>
              </div>
              <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                <p className="text-[10px] font-label-mono text-secondary uppercase">Role</p>
                <p className="font-bold text-sm mt-1">Frontend Developer</p>
              </div>
            </div>
            <div>
              <span className="font-label-mono text-label-mono border border-outline px-3 py-1 inline-block">2026</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant mb-6 flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="InsightBio App" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/insight-bio-ui.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href="https://github.com/pratikswain070-blip/InsightBio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface px-6 py-3 font-label-mono text-label-mono hover:bg-primary hover:text-on-primary transition-colors"
                >
                  VIEW REPOSITORY
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="font-headline-md text-headline-md mb-2">InsightBio</h3>
            <p className="text-secondary mb-4 flex-grow">Biological data analysis and sequence optimization tool.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                <p className="text-[10px] font-label-mono text-secondary uppercase">Event</p>
                <p className="font-bold text-sm mt-1">Hackathon Project</p>
              </div>
            </div>
            <div>
              <span className="font-label-mono text-label-mono border border-outline px-3 py-1 inline-block">2026</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant mb-6 flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="Neil Patel Replica" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/neil-patel-ui.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-149883716733f-a5189f104c69?auto=format&fit=crop&w=800&q=80" }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href="https://github.com/pratikswain070-blip/HTML-CSS-Mini-Project-Neil-Patel-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface px-6 py-3 font-label-mono text-label-mono hover:bg-primary hover:text-on-primary transition-colors"
                >
                  VIEW REPOSITORY
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="font-headline-md text-headline-md mb-2">Neil Patel Replica</h3>
            <p className="text-secondary mb-4 flex-grow">A high-fidelity landing page replica demonstrating advanced CSS styling and semantic HTML structure.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                <p className="text-[10px] font-label-mono text-secondary uppercase">Stack</p>
                <p className="font-bold text-sm mt-1">HTML5, CSS3</p>
              </div>
            </div>
            <div>
              <span className="font-label-mono text-label-mono border border-outline px-3 py-1 inline-block">2026</span>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant mb-6 flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="DSA EduNexus" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/dsa-edunexus-ui.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80" }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href="https://github.com/pratikswain070-blip/DSA-EduNexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface px-6 py-3 font-label-mono text-label-mono hover:bg-primary hover:text-on-primary transition-colors"
                >
                  VIEW REPOSITORY
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="font-headline-md text-headline-md mb-2">DSA EduNexus</h3>
            <p className="text-secondary mb-4 flex-grow">Interactive educational suite to visualize and teach advanced Data Structures and Algorithms.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                <p className="text-[10px] font-label-mono text-secondary uppercase">Stack</p>
                <p className="font-bold text-sm mt-1">HTML5, CSS3, C++, Python</p>
              </div>
              <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                <p className="text-[10px] font-label-mono text-secondary uppercase">Type</p>
                <p className="font-bold text-sm mt-1">Educational Platform</p>
              </div>
            </div>
            <div>
              <span className="font-label-mono text-label-mono border border-outline px-3 py-1 inline-block">2025</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
