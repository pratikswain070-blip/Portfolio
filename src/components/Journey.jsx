import React, { useState, useEffect, useRef } from 'react';

const LogoImage = ({ src, alt, fallbackText, fallbackBg }) => {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return (
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${fallbackBg} border-2 border-white dark:border-neutral-800 shadow-sm text-primary select-none shrink-0`}>
        {fallbackText}
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)}
      className="w-12 h-12 rounded-full object-contain p-1 border-2 border-white dark:border-neutral-800 shadow-sm bg-white shrink-0"
    />
  );
};

const TimelineItem = ({ year, title, subtitle, description, logoSrc, fallbackText, fallbackBg, icon, isRight, index, isSectionVisible }) => {
  return (
    <div 
      className={`mb-12 relative flex flex-col md:flex-row items-center justify-between transition-all duration-[1200ms] transform ease-out ${
        isSectionVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-16 scale-[0.98]'
      }`}
      style={{ 
        transitionDelay: isSectionVisible ? `${index * 550 + 200}ms` : '0ms',
        willChange: 'transform, opacity'
      }}
    >
      {/* Timeline Card */}
      <div className={`w-full md:w-[45%] ${isRight ? 'md:order-2 text-left' : 'md:order-1 text-right'} order-2`}>
        <div className="bg-surface-container-lowest dark:bg-black p-6 rounded-xl border border-outline-variant/30 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
          <div className={`flex items-center gap-4 ${isRight ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
            <LogoImage 
              src={logoSrc} 
              alt={subtitle} 
              fallbackText={fallbackText} 
              fallbackBg={fallbackBg} 
            />
            <div className="flex-grow">
              <span className="text-primary dark:text-[#4F46E5] font-bold text-sm">{year}</span>
              <h3 className="font-display text-headline-md font-semibold text-on-surface dark:text-white mt-0.5">{title}</h3>
              <p className="text-on-surface-variant dark:text-[#8d99ae] font-medium text-sm mt-0.5">{subtitle}</p>
            </div>
          </div>
          <p className="font-body-md text-on-surface-variant dark:text-[#edf2f4] mt-4 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* central vertical line point icon */}
      <div 
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary items-center justify-center text-on-primary z-10 shadow-md border-2 border-white dark:border-neutral-800 transition-all duration-500 delay-300 ${
          isSectionVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{
          transitionDelay: isSectionVisible ? `${index * 550 + 100}ms` : '0ms'
        }}
      >
        <span className="material-symbols-outlined text-sm">{icon}</span>
      </div>
      
      <div className={`w-full md:w-[45%] ${isRight ? 'md:order-1' : 'md:order-2'} order-1 hidden md:block`}></div>
    </div>
  );
};

const Journey = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        } else {
          setIsSectionVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -150px 0px" // Delay triggering until the top of the timeline cards wrapper is 150px inside the viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const roadmap = [
    {
      year: "Aug 2025 – Oct 2029",
      title: "B.Tech Computer Science Engineering",
      subtitle: "ITM Group of Institutions",
      description: "Focusing on advanced Software Engineering, Algorithms, and Distributed Computing systems.",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ea/ITM_Group_Logo.png",
      fallbackText: "ITM",
      fallbackBg: "bg-[#edf2f4] dark:bg-[#4F46E5]/15 text-[#4F46E5] dark:text-[#4F46E5]",
      icon: "school",
      isRight: false
    },
    {
      year: "Apr 2023 – Mar 2025",
      title: "High School (12th Grade) — PCM",
      subtitle: "DSP International School, Kamothe",
      description: "Specialized in Physics, Chemistry, and Mathematics (PCM) curriculum under rigorous scientific frameworks.",
      logoSrc: "https://dspinternationalschool.org/images/logo.png",
      fallbackText: "DSP",
      fallbackBg: "bg-[#e1e6eb] dark:bg-[#8d99ae]/20 text-[#8d99ae] dark:text-[#cbd3db]",
      icon: "school",
      isRight: true
    },
    {
      year: "Apr 2010 – Mar 2023",
      title: "Primary & Secondary Education (Upto 10th)",
      subtitle: "DAV Public School, New Panvel",
      description: "Built strong academic foundations in general sciences, mathematics, languages, and technical activities.",
      logoSrc: "https://www.davnewpanvel.com/images/logo.png",
      fallbackText: "DAV",
      fallbackBg: "bg-[#f5ddb8] dark:bg-[#4F46E5]/20 text-[#8a5a1e] dark:text-[#f5ddb8]",
      icon: "school",
      isRight: false
    }
  ];

  return (
    <section 
      className="py-section-py-desktop bg-surface-container-low dark:bg-black/40 transition-colors duration-300 overflow-hidden" 
      id="journey"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <p className="font-label-md text-primary uppercase tracking-widest mb-2 font-semibold">My Story</p>
          <h2 className="font-display text-headline-lg font-bold text-on-surface dark:text-white">Career &amp; Education</h2>
        </div>
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical central divider line - Background Track */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-slate-200 dark:bg-black hidden md:block"></div>
          
          {/* Vertical central divider line - Glowing Active Line drawing top-to-bottom */}
          <div 
            className={`absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-primary dark:bg-[#4F46E5] hidden md:block origin-top transition-transform duration-[2000ms] ease-out transform ${
              isSectionVisible ? 'scale-y-100' : 'scale-y-0'
            }`}
            style={{ willChange: 'transform' }}
          ></div>

          {roadmap.map((item, index) => (
            <TimelineItem 
              key={index} 
              index={index} 
              isSectionVisible={isSectionVisible} 
              {...item} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
