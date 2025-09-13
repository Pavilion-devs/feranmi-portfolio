import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      id="contact"
      className="relative border-white/10 border-t pt-24 pb-24"
    >
      <div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-4xl lg:text-5xl text-white mb-6 opacity-0 animate-slide-up font-geist tracking-tight font-light"
              style={{ animationDelay: "5.2s" }}
            >
              Let's create something amazing together
            </h2>
            <p
              className="text-xl text-gray-400 mb-8 opacity-0 animate-slide-up font-geist"
              style={{ animationDelay: "5.4s" }}
            >
              Ready to bring your vision to life? I'd love to hear about your
              project and explore how we can work together.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-slide-up"
              style={{ animationDelay: "5.6s" }}
            >
              <a
                href="mailto:feranmia51@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-geist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                feranmia51@gmail.com
              </a>
            </div>

            <div
              className="flex items-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "5.8s" }}
            >
              <a
                href="https://x.com/k_honsu?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-gray-300"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/oluwaferanmi-adeyemi-618843257/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-gray-300"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/K-Honsu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-gray-300"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "6s" }}
          >
            <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8">
              <h3 className="text-2xl text-white mb-6 font-geist tracking-tight font-light">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <button
                    onClick={() => scrollToSection("work")}
                    className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
                  >
                    Work
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
                  >
                    Process
                  </button>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://docs.google.com/document/d/1CBgs-EG9dQkeaVb5vDWw9_T-2qEhSoy-cXfVRAl4Fxc/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
                  >
                    Resume
                  </a>
                  <a
                    href="https://github.com/K-Honsu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oluwaferanmi-adeyemi-618843257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in border-white/10 border-t mt-16 pt-8 items-center justify-between"
          style={{ animationDelay: "6.2s" }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-white/10 border-white/20 border rounded-xl pt-2 pr-3 pb-2 pl-3">
              <span className="block text-lg font-semibold tracking-tight font-geist">
                EA
              </span>
            </div>
            <span className="text-sm text-gray-500 font-geist">
              © 2025 Emmanuel Adeyemi. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-gray-500 font-geist">
            Designed in Passion, built with love
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
