import React from 'react';

const GoToTop = () => {
  const scrollToTop = () => {
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 opacity-0 animate-fade-in" style={{animationDelay: '6.4s'}}>
      <button 
        onClick={scrollToTop}
        className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/10" 
        aria-label="Go to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300">
          <path d="M12 19V6m-7 7l7-7 7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default GoToTop;
