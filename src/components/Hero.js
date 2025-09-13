import React from 'react';

const Hero = () => {
  // Cursor effect state removed
  // const [isInHero, setIsInHero] = useState(false);
  // const [, setCursorPosition] = useState({ x: 0, y: 0 });

  // Cursor invert effect disabled
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (!isInHero) return;
      
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     setCursorPosition({ x, y });
      
  //     // Update CSS custom properties
  //     document.documentElement.style.setProperty('--cursor-x', x + 'px');
  //     document.documentElement.style.setProperty('--cursor-y', y + 'px');
  //   };

  //   const handleMouseEnter = () => {
  //     setIsInHero(true);
  //     document.body.classList.add('cursor-invert-active');
  //     document.body.style.cursor = 'none';
  //   };

  //   const handleMouseLeave = () => {
  //     setIsInHero(false);
  //     document.body.classList.remove('cursor-invert-active');
  //     document.body.style.cursor = 'auto';
  //   };

  //   const heroSection = document.getElementById('heroSection');
  //   if (heroSection) {
  //     heroSection.addEventListener('mouseenter', handleMouseEnter);
  //     heroSection.addEventListener('mouseleave', handleMouseLeave);
  //     heroSection.addEventListener('mousemove', handleMouseMove);
  //   }

  //   return () => {
  //     if (heroSection) {
  //       heroSection.removeEventListener('mouseenter', handleMouseEnter);
  //       heroSection.removeEventListener('mouseleave', handleMouseLeave);
  //       heroSection.removeEventListener('mousemove', handleMouseMove);
  //     }
  //   };
  // }, [isInHero]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="heroSection" className="relative lg:pt-40 lg:pb-28 overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile image */}
          <div className="mb-6 flex justify-center opacity-0 animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="relative parallax-scale" data-parallax="scale" data-scale-start="1" data-scale-end="1.2" style={{transform: 'scale(1)', transition: 'transform 0.1s ease-out'}}>
              <img 
                alt="Feranmi Adeyemi" 
                className="h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full object-cover ring-4 ring-white/20 shadow-2xl transition-all duration-300" 
                src="image.JPG" 
                style={{transform: 'inherit'}}
              />
            </div>
          </div>

          {/* Main heading with letter-by-letter animation */}
          <div className="opacity-0 animate-slide-up" style={{animationDelay: '1s'}}>
            <h1 id="heroHeadline" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-tight">
              <span className="letter-animated animate" style={{marginRight: '0.25rem'}}> </span>
              <span className="letter-animated animate">S</span>
              <span className="letter-animated animate">o</span>
              <span className="letter-animated animate">f</span>
              <span className="letter-animated animate">t</span>
              <span className="letter-animated animate">w</span>
              <span className="letter-animated animate">a</span>
              <span className="letter-animated animate">r</span>
              <span className="letter-animated animate">e</span>
              <span className="letter-animated animate" style={{marginRight: '0.25rem'}}> </span>
              <span className="letter-animated animate">E</span>
              <span className="letter-animated animate">n</span>
              <span className="letter-animated animate">g</span>
              <span className="letter-animated animate">i</span>
              <span className="letter-animated animate">n</span>
              <span className="letter-animated animate">e</span>
              <span className="letter-animated animate">e</span>
              <span className="letter-animated animate">r</span>
              <span className="letter-animated animate" style={{marginRight: '0.25rem'}}> </span>
            </h1>
          </div>
          
          <div className="opacity-0 animate-slide-up" style={{animationDelay: '1.2s'}}>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-geist tracking-tight font-light px-4">
              Crafting digital experiences that feel intuitive, look beautiful, and solve real problems for companies.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 opacity-0 animate-slide-up px-4" style={{animationDelay: '1.4s'}}>
            <button onClick={() => scrollToSection('work')} className="group inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-3.5 text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-geist w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
              </svg>
              View my work
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button onClick={() => scrollToSection('about')} className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-8 py-3.5 text-base font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105 font-geist w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              About me
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto opacity-0 animate-fade-in px-4" style={{animationDelay: '1.6s'}}>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">3+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-geist">Years</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">10+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-geist">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl text-white font-geist tracking-tight font-light">12</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-geist">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
