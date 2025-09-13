import React from 'react';

const TrustedBy = () => {
  const companies = ['Apple', 'Tesla', 'Stripe', 'Notion', 'Figma', 'Linear'];

  return (
    <section className="border-y opacity-0 animate-fade-in border-white/10 pt-16 pb-16 overflow-hidden" style={{animationDelay: '1.8s'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 font-geist">Trusted by industry leaders</p>
        
        {/* Animated ticker */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center justify-center gap-16 lg:gap-20 mx-8">
                {companies.map((company, index) => (
                  <div key={`${groupIndex}-${index}`} className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist">
                    {company}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
