import React from 'react';

const FeaturedWork = () => {
  const projects = [
    {
      title: "MarginPlus",
      type: "Mobile Application and Web Application",
      image: "https://res.cloudinary.com/dnl3yjnre/image/upload/v1757783290/Screenshot_2025-09-13_at_2.08.03_PM_wnbriv.png",
      alt: "Aurora Financial App"
    },
    {
      title: "HepKids Dashboard",
      type: "Web Platform",
      image: "https://res.cloudinary.com/dnl3yjnre/image/upload/v1757784110/Screenshot_2025-09-13_at_2.21.43_PM_fumccb.png",
      alt: "Nexus Dashboard"
    },
    {
      title: "Sembe",
      type: "Mobile Application",
      image: "https://res.cloudinary.com/dnl3yjnre/image/upload/v1757784354/Screenshot_2025-09-13_at_2.25.32_PM_l4fnjg.png",
      alt: "Sembe"
    },
    {
      title: "Hostless CloudSpace",
      type: "Collaboration",
      image: "https://res.cloudinary.com/dnl3yjnre/image/upload/v1757783193/Screenshot_2025-09-13_at_2.02.01_PM_awyrkn.png",
      alt: "Hostless Workspace"
    }
  ];

  return (
    <section className="pt-24 pb-24">
      <div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl text-white opacity-0 animate-slide-up font-geist tracking-tight font-light" style={{animationDelay: '3s'}}>Selected Work</h2>
          </div>
          <button className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-4 py-2 text-xs font-medium hover:bg-white/15 transition-all duration-300 opacity-0 animate-fade-in font-geist" style={{animationDelay: '3.2s'}}>
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-scale-in" 
              style={{animationDelay: `${3.4 + index * 0.2}s`}}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
                  src={project.image} 
                  alt={project.alt}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute left-2 right-2 bottom-2">
                  <div className="flex bg-white/10 border-white/10 border rounded-xl mx-2 my-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl items-center justify-between">
                    <span className="text-sm font-medium text-white font-geist">{project.title}</span>
                    <span className="text-[10px] tracking-wider text-gray-300 uppercase font-geist">{project.type}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
