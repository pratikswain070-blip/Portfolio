import React from 'react';

const Services = () => {
  return (
    <section className="py-section-gap" id="expertise">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="font-label-mono text-label-mono text-secondary block mb-2">// CAPABILITIES</span>
          <h2 className="font-headline-lg text-headline-lg">Expertise & Services</h2>
        </div>
        <div className="hidden md:block w-32 h-px bg-outline-variant mb-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="glass-card p-8 group hover:border-primary transition-all">
          <span className="material-symbols-outlined text-4xl mb-6 text-primary">terminal</span>
          <h3 className="font-headline-md text-headline-md mb-4">Frontend Development</h3>
          <p className="text-secondary mb-6">Building responsive, high-performance web interfaces using modern HTML, CSS3, and JavaScript.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low px-2 py-1 font-label-mono text-[12px]">REACT JS</span>
            <span className="bg-surface-container-low px-2 py-1 font-label-mono text-[12px]">TYPESCRIPT</span>
          </div>
          <div className="mt-6 pt-6 border-t border-outline-variant/30">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[12px] font-label-mono text-secondary">EXPERIENCE</span>
              <span className="text-label-mono text-primary font-bold">Advanced</span>
            </div>
            <ul className="space-y-2 text-[13px] text-secondary">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Interactive UIs</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Type-Safe Code</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-card p-8 group hover:border-primary transition-all">
          <span className="material-symbols-outlined text-4xl mb-6 text-primary">data_object</span>
          <h3 className="font-headline-md text-headline-md mb-4">Software Engineering</h3>
          <p className="text-secondary mb-6">Developing robust core logic, algorithms, and backend scripts using object-oriented principles.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low px-2 py-1 font-label-mono text-[12px]">C++</span>
            <span className="bg-surface-container-low px-2 py-1 font-label-mono text-[12px]">PYTHON</span>
          </div>
          <div className="mt-6 pt-6 border-t border-outline-variant/30">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[12px] font-label-mono text-secondary">EXPERIENCE</span>
              <span className="text-label-mono text-primary font-bold">Intermediate</span>
            </div>
            <ul className="space-y-2 text-[13px] text-secondary">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Data Structures</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Algorithm Design</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-card p-8 group hover:border-primary transition-all">
          <span className="material-symbols-outlined text-4xl mb-6 text-primary">account_tree</span>
          <h3 className="font-headline-md text-headline-md mb-4">Version Control</h3>
          <p className="text-secondary mb-6">Managing complex codebases and collaborating effectively using industry-standard tools.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low px-2 py-1 font-label-mono text-[12px]">GIT</span>
            <span className="bg-surface-container-low px-2 py-1 font-label-mono text-[12px]">GITHUB</span>
          </div>
          <div className="mt-6 pt-6 border-t border-outline-variant/30">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[12px] font-label-mono text-secondary">EXPERIENCE</span>
              <span className="text-label-mono text-primary font-bold">Active</span>
            </div>
            <ul className="space-y-2 text-[13px] text-secondary">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Source Code Mgmt</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>CI/CD Concepts</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
