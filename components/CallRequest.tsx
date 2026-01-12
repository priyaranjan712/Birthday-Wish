
import React, { useState } from 'react';
import emailjs from "emailjs-com";   //emailjs import

// -------------email sending function----------------
const sendEmail = (choice: 'yes' | 'no') => {
  const timeIST = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  emailjs.send(
    "service_hhttvtr",      // 🔁 YOUR EmailJS service ID
    "template_67wgx4e",     // 🔁 YOUR template ID
    {
      response: choice.toUpperCase(),
      time: timeIST,
    },
    "66lYwMRciiumrDleL"     // 🔁 YOUR public key
  ).catch((err) => {
    console.error("Email failed:", err);
  });
};


// ------------------------------------------

const CallRequest: React.FC = () => {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleChoice = (choice: 'yes' | 'no') => {
    setResponse(choice);
    sendEmail(choice); // 🔥 THIS sends email instantly
    console.log(`Iti chose: ${choice}`);
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden border-violet-500/10 shadow-[0_0_80px_-20px_rgba(167,139,250,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-rose-500/5 pointer-events-none" />
        
        {!response ? (
          <div className="relative z-10 animate-fadeIn">
            <div className="w-20 h-20 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-violet-500/20 shadow-inner transition-transform hover:scale-110 duration-700">
              <svg className="w-10 h-10 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white tracking-tight">One Humble Request?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed font-light">
              I've missed the sound of your voice more than words can say. If you're comfortable and miss me (even 0.0001%) too, could we have a short phone call today? 
              <br/><span className="text-xs uppercase tracking-[0.4em] mt-6 block text-violet-400/60 font-bold">No pressure, just a heartbeat away.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button
                onClick={() => handleChoice('yes')}
                className="group relative px-12 py-5 bg-white text-gray-950 font-black tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] active:scale-95 w-full sm:w-auto uppercase text-xs"
              >
                Yes, I'd like that
              </button>
              
              <button
                onClick={() => handleChoice('no')}
                className="px-12 py-5 border border-white/10 text-slate-400 font-bold rounded-full transition-all duration-500 hover:bg-white/5 hover:text-white hover:border-white/20 active:scale-95 w-full sm:w-auto uppercase text-xs tracking-widest"
              >
                Maybe some other time
              </button>
            </div>
          </div>
        ) : (
          <div className="relative z-10 animate-fadeIn py-16">
            {response === 'yes' ? (
              <div className="space-y-8">
                <div className="text-6xl mb-8 animate-bounce">✨</div>
                <h3 className="text-3xl md:text-4xl font-serif text-white">That makes me so happy.</h3>
                <p className="text-slate-400 text-lg max-w-md mx-auto font-light">
                  I'll wait for your signal or reach out when you're ready. I truly appreciate you giving me this chance.
                </p>
                <div className="text-violet-300 font-cursive text-5xl pt-8">See you soon, Iti.</div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-6xl mb-8 animate-pulse">🌿</div>
                <h3 className="text-3xl md:text-4xl font-serif text-white">I completely understand.</h3>
                <p className="text-slate-400 text-lg max-w-md mx-auto font-light">
                  Your comfort is more important to me than anything else. I'm just glad I could share this day with you digitally. 
                </p>
                <div className="text-rose-300 font-cursive text-5xl pt-8">Always here for you.</div>
              </div>
            )}
            <div className="mt-16 text-[10px] text-slate-600 uppercase tracking-[0.5em] font-black">
              RESPONSE RECORDED WITH WARMTH
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; export default CallRequest;