import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 opacity-0 animate-fade-in my-4 backdrop-blur-3xl"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="relative max-w-7xl lg:px-8 ring-1 ring-white/10 bg-white/10 border-white/20 border rounded-2xl mr-auto ml-auto pr-6 pl-6 shadow-lg backdrop-blur-lg">
        <div className="flex h-20 items-center justify-between">
          <button
            className="group"
            onClick={() => scrollToSection("heroSection")}
          >
            <div className="flex items-center gap-2">
              <div className="group-hover:bg-white/20 transition-colors bg-white/15 border-white/30 border rounded-xl pt-2 pr-3 pb-2 pl-3 backdrop-blur-md">
                <span className="block text-lg font-semibold tracking-tight font-geist">
                  EA
                </span>
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist"
            >
              Process
            </button>
            <a
              href="https://docs.google.com/document/d/1CBgs-EG9dQkeaVb5vDWw9_T-2qEhSoy-cXfVRAl4Fxc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition-colors font-geist text-left"
            >
              Resume
            </a>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-5 py-2.5 text-sm font-semibold hover:bg-white transition-all duration-200 hover:scale-105 backdrop-blur-md shadow-lg font-geist"
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
              className="w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            Let's connect
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden rounded-xl bg-white/15 border border-white/30 p-2.5 text-white hover:bg-white/20 backdrop-blur-md"
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
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/20 rounded-b-2xl shadow-lg ring-1 ring-white/10`}
        >
          <div className="px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("work")}
              className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist w-full text-left"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist w-full text-left"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("journal")}
              className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist w-full text-left"
            >
              Journal
            </button>
            <div className="pt-4 border-t border-white/20">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/90 text-black px-6 py-3 text-base font-semibold backdrop-blur-md shadow-lg font-geist w-full"
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
                  className="w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Let's connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
