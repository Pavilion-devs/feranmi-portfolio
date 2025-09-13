import React, { useEffect, useState } from 'react';

const StatusIndicator = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Show indicator after initial animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
  const translateY = scrollY > 100 ? -scrollY * 0.1 : 0;
  const scale = Math.max(0.9, 1 - scrollProgress * 0.1);
  const glowIntensity = Math.sin(scrollProgress * Math.PI) * 0.3;

  return (
    <div 
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block transition-all duration-700 ease-out rounded-full shadow-2xl backdrop-blur-3xl cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(calc(-50% + ${translateY}px)) scale(${scale})`,
        filter: `drop-shadow(0 0 ${20 + glowIntensity * 20}px rgba(34, 197, 94, ${0.3 + glowIntensity}))`
      }}
      onClick={scrollToContact}
    >
      <div className="inline-flex gap-3 hover:shadow-green-500/20 transition-all duration-500 group cursor-pointer relative overflow-hidden bg-black/20 border-white/30 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-2xl backdrop-blur-3xl items-center" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)'}}>
        {/* Glass effect overlay */}
        <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-white/20 via-transparent to-black/20 rounded-full"></div>
        <div className="absolute inset-[1px] opacity-30 bg-gradient-to-br from-white/10 to-transparent rounded-full shadow backdrop-blur-none"></div>
        
        {/* Content layer */}
        <div className="relative flex items-center gap-3">
          {/* Animated status dot with enhanced glow */}
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-lg animate-pulse-glow"></span>
          </div>
          
          {/* Text with gradient */}
          <span className="text-sm font-semibold bg-gradient-to-r from-green-400 via-white to-gray-300 bg-clip-text text-transparent whitespace-nowrap tracking-wide font-geist">
            Available for projects
          </span>
          
          {/* Subtle arrow indicator */}
          <div className="transform transition-transform duration-300 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Subtle connecting line */}
      <div className="absolute top-1/2 -left-8 w-6 h-px bg-gradient-to-l from-white/30 to-transparent transform -translate-y-1/2"></div>
    </div>
  );
};

export default StatusIndicator;
