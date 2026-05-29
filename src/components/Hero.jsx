import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["a B.Tech CSE Student", "a Full Stack Developer", "a Problem Solver"];

  useEffect(() => {
    let currentWord = words[phraseIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 200);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  // Formatted local time for San Francisco (or user's timezone if preferred, keeping design static for now)
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
      setTime(new Date().toLocaleTimeString('en-US', options) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-stack-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8">
          <div className="inline-block bg-surface-container-low px-3 py-1 mb-6 border border-outline-variant relative max-w-fit">
            <span className="font-label-mono text-label-mono text-primary">AVAILABLE FOR NEW PROJECTS</span>
          </div>
          <h1 className="font-display text-display mb-6">
            Architecting digital systems <br />
            <span className="text-secondary italic typewriter">{typedText}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-10">
            Pratik Swain is a Full Stack Developer specializing in high-performance web applications and fluid user interfaces. Delivering enterprise-grade precision to visionary startups.
          </p>
          <div className="flex gap-4">
            <a className="bg-primary text-on-primary px-8 py-4 font-label-mono text-label-mono flex items-center gap-2 group" href="#projects">
              VIEW CASE STUDIES
              <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="border border-outline px-8 py-4 font-label-mono text-label-mono hover:bg-surface-container-low transition-all" href="/Profile (1)u.pdf" download="Pratik_Swain_Resume.pdf">
              RESUME.PDF
            </a>
          </div>
        </div>
        <div className="md:col-span-4 hidden md:block">
          <div className="aspect-square border border-outline-variant p-2 relative mb-4">
            <div className="w-full h-full bg-surface-container-highest flex items-center justify-center relative overflow-hidden">
              <img 
                alt="Pratik Swain" 
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700" 
                src="/profile.png"
              />
            </div>
          </div>
          <div className="bg-surface/90 backdrop-blur p-4 border border-outline-variant">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="font-label-mono text-[10px] text-secondary uppercase tracking-widest">Based in</p>
                <p className="font-label-mono text-label-mono text-primary">India</p>
              </div>
              <div className="text-right">
                <p className="font-label-mono text-[10px] text-secondary uppercase tracking-widest">Local Time</p>
                <p className="font-label-mono text-label-mono text-primary">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
