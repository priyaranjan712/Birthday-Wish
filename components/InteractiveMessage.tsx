
import React, { useState, useEffect } from 'react';
import { generatePersonalizedGreeting } from '../services/geminiService';
import { AIGreetingResponse } from '../types';

const InteractiveMessage: React.FC = () => {
  const [greeting, setGreeting] = useState<AIGreetingResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [prefetched, setPrefetched] = useState(false);

  // Pre-fetch the greeting as soon as the component mounts
  useEffect(() => {
    const prefetch = async () => {
      try {
        const data = await generatePersonalizedGreeting('Iti', 'Gudu');
        setGreeting(data);
        setPrefetched(true);
      } catch (error) {
        console.error("Silent prefetch failed", error);
      }
    };
    prefetch();
  }, []);

  const handleUnlock = async () => {
    if (revealed) return;
    
    // If it's already prefetched, reveal instantly
    if (prefetched && greeting) {
      setRevealed(true);
      return;
    }

    // Fallback if user clicks before prefetch finishes
    setLoading(true);
    try {
      const data = await generatePersonalizedGreeting('Iti', 'Gudu');
      setGreeting(data);
      setRevealed(true);
    } catch (error) {
      console.error("Failed to generate message", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="message-section" className="py-24 px-4 bg-violet-950/10">
      <div className="max-w-3xl mx-auto text-center">
        {!revealed ? (
          <div className="glass-card p-12 py-24 relative group overflow-hidden border-violet-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-3xl md:text-4xl font-serif mb-6 relative text-white">A Humble Note</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto relative font-light">
              Click below to see the words I've kept for you.
            </p>
            <button
              onClick={handleUnlock}
              disabled={loading}
              className={`relative px-14 py-5 rounded-full bg-white text-gray-950 font-black tracking-[0.1em] transition-all duration-500 transform ${
                loading ? 'opacity-70 scale-95' : 'hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(192,132,252,0.4)] active:scale-95'
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-gray-900" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Opening...
                </span>
              ) : 'READ THE LETTER'}
            </button>
            {prefetched && <div className="mt-6 text-[10px] text-violet-400/50 uppercase tracking-[0.4em] font-bold animate-pulse">Ready for you</div>}
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="mb-20">
               <span className="font-cursive text-6xl text-violet-400 opacity-40 block mb-6">
                 &ldquo;
               </span>
               <p className="text-2xl md:text-5xl font-serif italic text-white leading-tight max-w-2xl mx-auto mb-4 drop-shadow-sm">
                 {greeting?.poem}
               </p>
               <span className="font-cursive text-6xl text-violet-400 opacity-40 block transform rotate-180">
                 &ldquo;
               </span>
            </div>

            <div className="glass-card p-12 md:p-20 text-left mb-16 relative overflow-hidden border-violet-500/10 shadow-2xl bg-white/[0.01]">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                 <svg className="w-48 h-48" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
               </div>
               <p className="text-slate-200 font-serif text-xl md:text-2xl leading-[1.8] whitespace-pre-wrap mb-14 selection:bg-violet-500/30">
                 {greeting?.message}
               </p>
               <div className="border-t border-white/5 pt-10">
                 <p className="font-light text-slate-400 italic mb-2 text-lg">With heartfelt wishes,</p>
                 <p className="font-cursive text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">
                   Gudu
                 </p>
               </div>
            </div>

            <div className="py-12">
               <h3 className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-rose-200 animate-pulse">
                 {greeting?.wish}
               </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; export default InteractiveMessage;