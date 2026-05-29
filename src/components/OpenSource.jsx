import React from 'react';

const OpenSource = () => {
  return (
    <section className="py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        
        {/* Repositories */}
        <div className="glass-card p-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-4xl">database</span>
            <h3 className="font-headline-md text-headline-md">Open Source</h3>
          </div>
          <ul className="space-y-6">
            <li className="pb-6 border-b border-outline-variant group">
              <div className="flex justify-between mb-2">
                <a href="https://github.com/pratikswain070-blip/React-JS-Mini-Project" target="_blank" rel="noopener noreferrer" className="font-label-mono text-label-mono text-primary group-hover:underline">React-JS-Mini-Project</a>
                <span className="font-label-mono text-label-mono text-secondary">Owner</span>
              </div>
              <p className="text-body-md text-secondary text-sm">A collection of modular React.js UI utilities and components.</p>
            </li>
            <li className="pb-6 border-b border-outline-variant group">
              <div className="flex justify-between mb-2">
                <a href="https://github.com/pratikswain070-blip/Morse-Code-Translator" target="_blank" rel="noopener noreferrer" className="font-label-mono text-label-mono text-primary group-hover:underline">Morse-Code-Translator</a>
                <span className="font-label-mono text-label-mono text-secondary">Owner</span>
              </div>
              <p className="text-body-md text-secondary text-sm">Interactive dual-way visual and audio Morse code encoder/decoder.</p>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-outline-variant/30">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[12px] font-label-mono text-secondary">GITHUB METRICS</span>
              <span className="text-label-mono text-primary font-bold">22 Repositories</span>
            </div>
            <ul className="space-y-2 text-[13px] text-secondary">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Frequent Contributor</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Clean Documentation</li>
            </ul>
          </div>
        </div>

        {/* Commit Log */}
        <div className="flex flex-col justify-center p-10">
          <span className="font-label-mono text-label-mono text-secondary block mb-4">// COMMIT LOG</span>
          <h2 className="font-headline-lg text-headline-lg mb-6">Continuous Improvement</h2>
          <p className="text-body-lg text-secondary mb-8">
            My philosophy is built on consistent, incremental progress. Whether it's shipping features or refactoring legacy debt, the focus is always on code quality and scalability.
          </p>
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="space-y-2">
                <p className="text-[10px] font-label-mono text-secondary uppercase tracking-widest">Activity</p>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
                </div>
                <p className="text-[12px] font-label-mono text-secondary">500+ Commits in 2026</p>
              </div>
              <div className="space-y-1 border-l border-outline-variant/30 pl-4">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-label-mono text-secondary">Certificates</span>
                  <span className="text-label-mono font-bold">12+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-label-mono text-secondary">Active Repos</span>
                  <span className="text-label-mono font-bold">22</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpenSource;
