import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';
import StatusIndicator from './components/StatusIndicator';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <div className="App">
      {/* Gradient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}></div>
      </div>

      {/* Floating actions */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-3 hidden lg:flex opacity-0 animate-slide-up" style={{animationDelay: '2s'}}>
        <div className="group">
          {/* Add floating action buttons here if needed */}
        </div>
      </div>

      {/* Status indicator */}
      <StatusIndicator />

      {/* Navigation */}
      <Header />

      {/* Main content */}
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <FeaturedWork />
        <About />
        <Process />
      </main>

      {/* Footer */}
      <Footer />

      {/* Go to Top Button */}
      <GoToTop />
    </div>
  );
}

export default App;
