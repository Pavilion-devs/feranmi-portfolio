import React, { useEffect, useState } from "react";

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
        rootMargin: "0px",
      }
    );

    const codeContainer = document.getElementById("codeContainer");
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
      {
        text: "// Figma Design System",
        className: "text-sm text-gray-400 font-geist-mono mb-2",
      },
      {
        text: "",
        className: "text-sm leading-relaxed font-geist-mono",
        html: '<span class="text-blue-400">const</span> <span class="text-yellow-300">components</span> <span class="text-white">= {</span>',
      },
      {
        text: '  button: "primary-cta",',
        className:
          "text-sm leading-relaxed font-geist-mono ml-4 text-green-400",
      },
      {
        text: '  card: "glass-container",',
        className:
          "text-sm leading-relaxed font-geist-mono ml-4 text-green-400",
      },
      {
        text: '  typography: "system-fonts"',
        className:
          "text-sm leading-relaxed font-geist-mono ml-4 text-green-400",
      },
      {
        text: "};",
        className: "text-sm leading-relaxed font-geist-mono text-white",
      },
      {
        text: "// Interactive prototypes",
        className: "text-sm leading-relaxed font-geist-mono mt-2 text-gray-500",
      },
      {
        text: "",
        className: "text-sm leading-relaxed font-geist-mono",
        html: '<span class="text-blue-400">function</span> <span class="text-yellow-300">createPrototype()</span> <span class="text-white">{</span>',
      },
      {
        text: "  return userTesting;",
        className: "text-sm leading-relaxed font-geist-mono ml-4",
      },
      {
        text: "}",
        className: "text-sm leading-relaxed font-geist-mono text-white",
      },
    ];

    let currentLine = 0;
    // const typingSpeed = 80; // Reserved for future use
    const lineDelay = 400;

    const typeLine = () => {
      if (currentLine >= codeLinesData.length) return;

      const line = codeLinesData[currentLine];
      setCodeLines((prev) => [...prev, line]);
      currentLine++;
      setTimeout(typeLine, lineDelay);
    };

    setTimeout(typeLine, 1000);
  };

  return (
    <section
      id="process"
      className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d850914-e949-410a-ac08-c604b47ea90f_3840w.jpg)] bg-cover pt-24 pb-24"
    >
      <div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
        {/* Heading with subtle sheen */}
        <div className="relative mb-12 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl"
          ></div>
          <h2 className="relative text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 font-geist tracking-tight font-light">
            My{" "}
            <span className="text-white/80 bg-none font-geist tracking-tight font-light">
              Process
            </span>
          </h2>
        </div>

        {/* Three glass cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Research & Strategy */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent"
            ></div>
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
                            backgroundImage:
                              "radial-gradient(rgba(148,163,184,0.14) 1px, transparent 1px)",
                            backgroundSize: "12px 12px",
                            backgroundPosition: "0 0",
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
                              <div className="text-white/40 text-xs">
                                User Journey
                              </div>
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
                              <div className="text-white/40 text-xs">
                                Personas
                              </div>
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
            <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8">
              <div className="sm:p-5 text-gray-400 pt-4 pr-4 pb-4 pl-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="sr-only font-geist">Phase:</span>
                    <span className="text-slate-300/90 font-geist">
                      Planning & Requirements
                    </span>
                  </div>
                  <span className="text-slate-500 font-geist">·</span>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 text-slate-400"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <span className="text-slate-300/90 font-geist">
                      Week 1-2
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-100 tracking-tight text-lg font-geist">
                  Gathering requirements and defining architecture
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="text-sm">
                    <p className="font-medium text-slate-200/90 font-geist">
                      Requirements & Architecture
                    </p>
                    <p className="text-slate-400 font-geist">
                      Stakeholder interviews, system analysis, and technical
                      planning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover outline */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-indigo-400/30"></div>
          </div>

          {/* Card 2: Design & Prototype */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8 mt-6">
            <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">
              Development & Implementation
            </h3>
            <p className="text-gray-300 leading-relaxed text-base font-geist">
              Writing{" "}
              <span className="font-semibold text-white font-geist">
                clean, scalable code
              </span>{" "}
              using modern frameworks and tools, integrating APIs, and building
              front-end & back-end components.
            </p>
            <div className="mt-4 text-sm text-slate-400 font-geist">
              <ul className="list-disc list-inside space-y-1">
                <li>Front-end: React, Next.js, TailwindCSS</li>
                <li>Back-end: Node.js, Express, GraphQL, REST APIs</li>
                <li>Database: MongoDB, PostgreSQL</li>
                <li>Cloud: AWS, DigitalOcean, Vercel</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Test & Refine */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 lg:p-8 mt-6">
            <h3 className="text-2xl text-white mb-3 font-geist tracking-tight font-light">
              Deployment & Monitoring
            </h3>
            <p className="text-gray-300 leading-relaxed text-base font-geist">
              Deploying applications to{" "}
              <span className="font-semibold text-white font-geist">
                cloud platforms
              </span>{" "}
              and monitoring performance to ensure uptime, scalability, and
              quick incident response.
            </p>
            <div className="mt-4 text-sm text-slate-400 font-geist">
              <ul className="list-disc list-inside space-y-1">
                <li>Cloud: AWS EC2, S3, Lambda, DigitalOcean Droplets</li>
                <li>Monitoring & logging: CloudWatch, Datadog, Sentry</li>
                <li>
                  Scaling & optimization: Load balancers, caching, horizontal
                  scaling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
