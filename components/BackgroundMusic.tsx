
import React, { useState, useRef, useEffect } from 'react';
import myMusic from "../components/assets/music/zaroor.mp3";

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => console.debug("Interaction needed for playback."));
        
        ['click', 'scroll', 'touchstart', 'keydown'].forEach(event => 
          document.removeEventListener(event, handleFirstInteraction)
        );
      }
    };

    ['click', 'scroll', 'touchstart', 'keydown'].forEach(event => 
      document.addEventListener(event, handleFirstInteraction)
    );

    return () => {
      ['click', 'scroll', 'touchstart', 'keydown'].forEach(event => 
        document.removeEventListener(event, handleFirstInteraction)
      );
    };
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Activation failed:", err));
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-4 px-6 py-3.5 rounded-full glass-card transition-all duration-1000 shadow-2xl border backdrop-blur-2xl group ${
          isPlaying 
            ? 'border-violet-500/40 bg-violet-500/10' 
            : 'border-white/10 hover:border-rose-500/40 bg-white/5'
        }`}
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-3.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-[3px] bg-violet-300 rounded-full animate-bounce"
                  style={{ 
                    animationDuration: `${0.6 + i * 0.15}s`,
                    height: `${40 + Math.random() * 60}%` 
                  }}
                />
              ))}
            </div>
          ) : (
            <svg className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
        
        <div className="flex flex-col items-start leading-none text-left">
          <span className={`text-[9px] font-black uppercase tracking-[0.4em] mb-1 ${isPlaying ? 'text-violet-300' : 'text-slate-500'}`}>
            Experience
          </span>
          <span className={`text-[12px] font-bold tracking-widest ${isPlaying ? 'text-white' : 'text-slate-400'}`}>
            {isPlaying ? 'ON' : 'OFF'}
          </span>
        </div>
      </button>

      <audio
        ref={audioRef}
        src={myMusic}
        loop
        preload="auto"
      />
    </div>
  );
}; export default BackgroundMusic;