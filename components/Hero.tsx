
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-[110px]" />
      
      <div className="z-10 text-center max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-6 tracking-[0.3em] animate-pulse">
          JANUARY 14, 2026
        </span>
        
        <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
          Happy Birthday, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-rose-300 italic">Iti</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto leading-relaxed">
          Through the quiet moments and the distance, your light remains constant in my heart. Today is a celebration of you.
        </p>
        
        <button 
          onClick={() => {
            const el = document.getElementById('message-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-violet-500/10"
        >
          <span>A Journey for You</span>
          <svg className="w-5 h-5 transition-all group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce cursor-pointer opacity-30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;