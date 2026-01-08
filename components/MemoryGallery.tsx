
import React from 'react';
import { MEMORIES } from '../constants';

const MemoryGallery: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">The Things We Know</h2>
        <p className="text-slate-400 max-w-xl mx-auto font-light">
          Every conversation we had, every secret we shared—they are the stars that guide me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEMORIES.map((memory) => (
          <div 
            key={memory.id}
            className="glass-card p-8 group hover:border-violet-500/40 transition-all duration-700 hover:-translate-y-2 hover:bg-violet-500/5"
          >
            <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{memory.icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-violet-200 transition-colors">
              {memory.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
              {memory.description}
            </p>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400/60">
              {memory.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;