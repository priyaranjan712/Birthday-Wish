
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center border-t border-slate-900 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-3xl font-cursive text-white">Always Your Someone, Gudu</span>
        </div>
        <p className="text-slate-500 text-sm mb-6">
          Created with care for Iti. No matter the distance or the silence, <br /> some paths are meant to cross again.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-slate-400">
          <span className="hover:text-white transition-colors cursor-default">Softly Made</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 self-center" />
          <span className="hover:text-white transition-colors cursor-default">15 January 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 self-center" />
          <span className="hover:text-white transition-colors cursor-default">For You</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-700">
          Built with Modern Software Craftsmanship — Priyaranjan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
