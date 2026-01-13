
import React, { useEffect } from 'react';
import FloatingStars from './components/FloatingStars';
import Hero from './components/Hero';
import MemoryGallery from './components/MemoryGallery';
import InteractiveMessage from './components/InteractiveMessage';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import CallRequest from './components/CallRequest';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen selection:bg-violet-500/30 bg-[#050510] text-slate-100">
      <FloatingStars />
      <BackgroundMusic />

      <main className="relative z-10">
        <Hero />

        <div className="space-y-32 pb-32">
          <MemoryGallery />

          <div className="max-w-4xl mx-auto px-4">
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden border-violet-500/10 shadow-[0_0_50px_-20px_rgba(167,139,250,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-rose-500/10 pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-serif mb-8 relative text-white">For the year ahead <br />🌸🌸🌸</h2>
              <p className="text-slate-300 text-lg md:text-xl mb-0 italic leading-relaxed relative font-light">
                "I didn’t get the chance to wish you at the start of the year — sorry about that.
                <b>Happy New Year, Iti.</b>
                I truly hope this year brings you peace, good moments,
                and a lot of quiet happiness."
              </p>
            </div>
          </div>

          <InteractiveMessage />

          <CallRequest />
        </div>
      </main>

      <Footer />
    </div>
  );
}; export default App;