import React, { useEffect, useState } from 'react';

const Process = () => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [codeLines, setCodeLines] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCodeVisible) {
            setIsCodeVisible(true);
            startCodeTypingAnimation();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const codeContainer = document.getElementById('codeContainer');
    if (codeContainer) {
      observer.observe(codeContainer);
    }

    return () => {
      if (codeContainer) {
        observer.unobserve(codeContainer);
      }
    };
  }, [isCodeVisible]);

  const startCodeTypingAnimation = () => {
    const codeLinesData = [
      { text: '// Figma Design System', className: 'text-sm text-gray-400 font-geist-mono mb-2' },
      { 
        text: '', 
        className: 'text-sm leading-relaxed font-geist-mono', 
        html: '<span class="text-blue-400">const</span> <span class="text-yellow-300">components</span> <span class="text-white">= {</span>'
      },
      { text: '  button: "primary-cta",', className: 'text-sm leading-relaxed font-geist-mono ml-4 text-green-400' },
      { text: '  card: "glass-container",', className: 'text-sm leading-relaxed font-geist-mono ml-4 text-green-400' },
      { text: '  typography: "system-fonts"', className: 'text-sm leading-relaxed font-geist-mono ml-4 text-green-400' },
      { text: '};', className: 'text-sm leading-relaxed font-geist-mono text-white' },
      { text: '// Interactive prototypes', className: 'text-sm leading-relaxed font-geist-mono mt-2 text-gray-500' },
      { 
        text: '', 
        className: 'text-sm leading-relaxed font-geist-mono', 
        html: '<span class="text-blue-400">function</span> <span class="text-yellow-300">createPrototype()</span> <span class="text-white">{</span>'
      },
      { text: '  return userTesting;', className: 'text-sm leading-relaxed font-geist-mono ml-4' },
      { text: '}', className: 'text-sm leading-relaxed font-geist-mono text-white' }
    ];

    let currentLine = 0;
    // const typingSpeed = 80; // Reserved for future use
    const lineDelay = 400;

    const typeLine = () => {
      if (currentLine >= codeLinesData.length) return;

      const line = codeLinesData[currentLine];
      setCodeLines(prev => [...prev, line]);
      currentLine++;
      setTimeout(typeLine, lineDelay);
    };

    setTimeout(typeLine, 1000);
  };

  return (
    <section id="process" className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d850914-e949-410a-ac08-c604b47ea90f_3840w.jpg)] bg-cover pt-24 pb-24">
      <div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
        {/* Heading with subtle sheen */}
        <div className="relative mb-12 text-center">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl"></div>
          <h2 className="relative text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 font-geist tracking-tight font-light">
            My <span className="text-white/80 bg-none font-geist tracking-tight font-light">Process</span>
          </h2>
        </div>

        {/* Three glass cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Research & Strategy */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent"></div>
            <div className="relative mb-6">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
                <div className="group relative block overflow-hidden ring-1 ring-white/10 transition hover:ring-white/20 bg-gradient-to-b from-[#0C0F17] to-[#0A0D14] rounded-2xl">
                  {/* Illustration */}
                  <div className="relative">
                    <div className="relative mx-3 mt-3 rounded-xl bg-[#0A0E15] ring-1 ring-white/10 overflow-hidden">
                      {/* Outer frame inset glow */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),inset_0_0_60px_rgba(88,101,242,0.06)]"></div>

                      {/* Dotted grid panel */}
                      <div className="m-3 rounded-lg ring-1 ring-white/10 relative overflow-hidden">
                        <div 
                          className="absolute inset-0" 
                          style={{
                            backgroundImage: 'radial-gradient(rgba(148,163,184,0.14) 1px, transparent 1px)',
                            backgroundSize: '12px 12px',
                            backgroundPosition: '0 0'
                          }}
                        ></div>

                        {/* Left window */}
                        <div className="absolute left-3 bottom-4 h-24 w-36 backdrop-blur-[1px] z-10 shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 border-white/15 border rounded-md backdrop-blur-md">
                          {/* top bar */}
                          <div className="h-5 border-b border-white/10 bg-white/[0.03]">
                            <div className="h-full px-2 flex items-center gap-1.5">
                              <div className="h-2 w-8 rounded-sm bg-white/25"></div>
                            </div>
                          </div>
                          {/* user research elements */}
                          <div className="pt-2 pr-2 pb-2 pl-2">
                            <div className="h-16 w-full rounded border border-white/10 relative flex items-center justify-center">
                              <div className="text-white/40 text-xs">User Journey</div>
                            </div>
                          </div>
                        </div>

                        {/* Right window */}
                        <div className="absolute right-4 top-5 h-28 w-44 backdrop-blur-[1px] z-10 shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 border-white/15 border rounded-md backdrop-blur-md">
                          {/* top bar */}
                          <div className="h-5 border-b border-white/10 bg-white/[0.03]">
                            <div className="h-full px-2 flex items-center gap-1.5">
                              <div className="h-2 w-10 rounded-sm bg-white/25"></div>
                            </div>
                          </div>
                          <div className="pt-3 pr-3 pb-3 pl-3">
                            {/* personas chart */}
                            <div className="relative mx-auto h-14 w-14 rounded-full border border-white/25 flex items-center justify-center">
                              <div className="text-white/40 text-xs">Personas</div>
                            </div>
                          </div>
                        </div>

                        {/* Center window (focus) */}
                        <div className="absolute left-1/2 top-7 w-[65%] max-w-[340px] -translate-x-1/2 shadow-[0_0_0_1px_rgba(99,102,241,0.30),0_0_40px_rgba(67,56,202,0.25)] transition-all duration-300 z-20 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_0_1px_rgba(129,140,248,0.45),0_0_60px_rgba(99,102,241,0.35)] bg-[#0B1020]/50 border-indigo-400/50 border rounded-md backdrop-blur-md translate-y-2">
                          {/* header lines */}
                          <div className="h-6 border-b border-indigo-300/30 bg-indigo-300/5">
                            <div className="h-full px-3 flex items-center gap-1.5">
                              <div className="h-1.5 w-16 rounded-sm bg-indigo-300/70"></div>
                              <div className="h-1.5 w-8 rounded-sm bg-indigo-300/40"></div>
                            </div>
                          </div>
                          {/* content lines */}
                          <div className="pt-4 pr-4 pb-4 pl-4 space-y-2">
                            <div className="h-2 w-1/2 rounded bg-white/60"></div>
                            <div className="h-2 w-2/3 rounded bg-white/30"></div>
                            <div className="h-2 w-1/3 rounded bg-white/20"></div>
                          </div>
                        </div>

                        {/* subtle vignette */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

                        {/* aspect spacer (slightly smaller) */}
                        <div className="invisible block pt-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="sm:p-5 text-gray-400 pt-4 pr-4 pb-4 pl-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="sr-only font-geist">Phase:</span>
                  <span className="text-slate-300/90 font-geist">Research & Strategy</span>
                </div>
                <span className="text-slate-500 font-geist">·</span>
                <div className="flex items-center gap-1.5"></div>
                
                <div className="hidden sm:flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-slate-400">
                    <path d="M12 6v6l4 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span className="text-slate-300/90 font-geist">Week 1-2</span>
                </div>
              </div>
              <h3 className="font-semibold text-slate-100 tracking-tight text-lg font-geist">
                Understanding users and business goals
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center ring-1 ring-white/10 text-sm font-medium text-slate-200 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f804111a-fe24-4660-b754-0f3654213f91_320w.jpg)] bg-cover rounded-full px-4 py-4"></div>
                <div className="text-sm">
                  <p className="font-medium text-slate-200/90 font-geist">Jordan Chen</p>
                  <p className="text-slate-400 font-geist">Research, strategy, and user insights</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover outline */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-indigo-400/30"></div>
          </div>

          {/* Card 2: Design & Prototype */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent"></div>
            <div className="relative mb-6">
              {/* Code window mock with typing animation */}
              <div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl">
                <div className="h-8 w-full bg-white/10 flex items-center px-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="pt-4 pr-4 pb-4 pl-4 typing-container" id="codeContainer">
                  {codeLines.map((line, index) => (
                    <div key={index} className={line.className}>
                      {line.html ? (
                        <span dangerouslySetInnerHTML={{ __html: line.html }} />
                      ) : (
                        line.text
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">Design & Prototype</h3>
              <p className="text-gray-300 leading-relaxed text-base font-geist">
                From wireframes to high-fidelity designs, I create <span className="font-semibold text-white font-geist">interactive prototypes</span> that bring ideas to life and enable early user testing.
              </p>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10"></div>
          </div>

          {/* Card 3: Test & Refine */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent"></div>
            <div className="relative mb-6">
              <article className="group relative overflow-hidden transition-shadow hover:shadow-md max-w-[500px] bg-neutral-900 border-neutral-800 border rounded-3xl pt-0 pb-0 shadow-sm">
                <div className="sm:p-8 pr-6 pl-6">
                  {/* Illustration */}
                  <div className="relative h-56 sm:h-64 ring-1 ring-inset ring-white/5 bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-2xl">
                    {/* Main analytics chart */}
                    <div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
                        <span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-geist">USABILITY</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-green-400 font-geist">+94%</span>
                          <span className="h-2 w-12 rounded bg-green-500/20"></span>
                        </div>
                      </div>
                      <div className="p-2">
                        <svg viewBox="0 0 300 90" className="w-full h-20 sm:h-24 text-neutral-700">
                          <defs>
                            <pattern id="dots2" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r="0.5" fill="currentColor" opacity="0.3"></circle>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#dots2)"></rect>
                          {/* Success rate bars */}
                          <rect x="20" y="25" width="3" height="40" fill="#10B981"></rect>
                          <rect x="40" y="20" width="3" height="45" fill="#10B981"></rect>
                          <rect x="60" y="15" width="3" height="50" fill="#10B981"></rect>
                          <rect x="80" y="10" width="3" height="55" fill="#10B981"></rect>
                          <rect x="100" y="12" width="3" height="53" fill="#10B981"></rect>
                          <rect x="120" y="8" width="3" height="57" fill="#10B981"></rect>
                          <rect x="140" y="5" width="3" height="60" fill="#10B981"></rect>
                          <rect x="160" y="3" width="3" height="62" fill="#10B981"></rect>
                          <rect x="180" y="2" width="3" height="63" fill="#10B981"></rect>
                          <rect x="200" y="1" width="3" height="64" fill="#10B981"></rect>
                          <polyline points="22,45 42,40 62,35 82,32 102,35 122,30 142,25 162,22 182,20 202,18" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"></polyline>
                        </svg>
                      </div>
                    </div>

                    {/* Metrics panel */}
                    <div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
                        <span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-geist">METRICS</span>
                      </div>
                      <div className="p-2 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-300 font-geist">Task Success</span>
                          <span className="text-green-400 font-geist">94%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-300 font-geist">Time to Complete</span>
                          <span className="text-green-400 font-geist">-40%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-300 font-geist">User Satisfaction</span>
                          <span className="text-green-400 font-geist">4.8/5</span>
                        </div>
                      </div>
                    </div>

                    {/* A/B test results */}
                    <div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-4 w-[38%] h-[44%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
                        <span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-geist">A/B TEST</span>
                      </div>
                      <div className="p-2">
                        <svg viewBox="0 0 180 70" className="w-full h-14 sm:h-16 text-neutral-700">
                          <rect x="10" y="20" width="2" height="35" fill="#10B981"></rect>
                          <rect x="25" y="15" width="2" height="40" fill="#10B981"></rect>
                          <rect x="40" y="18" width="2" height="37" fill="#10B981"></rect>
                          <rect x="55" y="12" width="2" height="43" fill="#10B981"></rect>
                          <rect x="70" y="10" width="2" height="45" fill="#10B981"></rect>
                          <rect x="85" y="8" width="2" height="47" fill="#10B981"></rect>
                          <rect x="100" y="5" width="2" height="50" fill="#10B981"></rect>
                          <rect x="115" y="3" width="2" height="52" fill="#10B981"></rect>
                          <rect x="130" y="2" width="2" height="53" fill="#10B981"></rect>
                          <polyline points="11,37 26,35 41,36 56,34 71,32 86,30 101,27 116,25 131,24" fill="none" stroke="#10B981" strokeWidth="1" strokeLinecap="round"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="relative">
              <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">Test & Refine</h3>
              <p className="text-gray-300 leading-relaxed text-base font-geist">
                Through continuous <span className="font-semibold text-white font-geist">user testing</span> and data analysis, I iterate and refine designs until they deliver exceptional user experiences and measurable results.
              </p>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
