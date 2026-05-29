import React from 'react';
import LogoLoop from './LogoLoop';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiTypescript, SiCplusplus, SiPython, SiGit, SiGithub, SiVisualstudiocode } from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5" },
  { node: <SiCss className="text-[#1572B6]" />, title: "CSS3" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
  { node: <SiReact className="text-[#61DAFB]" />, title: "React JS" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
  { node: <SiCplusplus className="text-[#00599C]" />, title: "C++" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git" },
  { node: <SiGithub className="text-on-surface" />, title: "GitHub" },
  { node: <SiVisualstudiocode className="text-[#007ACC]" />, title: "VS Code" },
  { node: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Google_Chrome_Developer_Tools_logo.svg/512px-Google_Chrome_Developer_Tools_logo.svg.png" alt="DevTools" className="w-10 h-10 object-contain" />, title: "DevTools" },
  { node: <img src="https://mintlify.s3-us-west-1.amazonaws.com/cursor/images/logo/cursor-mark.svg" alt="Cursor" className="w-10 h-10 object-contain rounded" />, title: "Cursor" },
  { node: <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_8px_rgba(var(--color-primary),0.8)]">rocket_launch</span>, title: "Antigravity" },
];

const Skills = () => {
  return (
    <section className="py-stack-gap border-y border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-gutter">
        <div className="md:col-span-3">
          <h3 className="font-headline-md text-headline-md mb-2">The Tech Stack</h3>
          <p className="text-secondary text-sm">Proficiency by domain.</p>
        </div>
        
        {/* Skills Bars */}
        <div className="md:col-span-5 grid grid-cols-1 gap-8">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-label-mono text-secondary uppercase mb-2">Web Fundamentals</p>
              <div className="flex gap-2 mb-1">
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
              </div>
              <p className="text-sm font-medium">HTML, CSS3, JavaScript</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-label-mono text-secondary uppercase mb-2">Modern Frameworks</p>
              <div className="flex gap-2 mb-1">
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-outline-variant h-1 flex-1"></span>
              </div>
              <p className="text-sm font-medium">React JS, TypeScript</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-label-mono text-secondary uppercase mb-2">Core Languages & Tools</p>
              <div className="flex gap-2 mb-1">
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-primary h-1 flex-1"></span>
                <span className="bg-outline-variant h-1 flex-1"></span>
              </div>
              <p className="text-sm font-medium">C++, Python, Git, GitHub</p>
            </div>
          </div>
        </div>
        
        {/* Graphic */}
        <div className="md:col-span-4 flex justify-center items-center mt-8 md:mt-0 w-full">
          <div className="glass-card w-full aspect-square max-w-[500px] flex items-center justify-center overflow-hidden border border-outline-variant rounded-xl shadow-sm hover:border-primary transition-colors">
            <img 
              src="/tech_stack.png" 
              alt="Tech Stack Graphic" 
              className="w-full h-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>

      </div>

      {/* Horizontal Logo Loop */}
      <div className="mt-8 w-full relative overflow-hidden">
        <div style={{ height: '80px' }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={64}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
