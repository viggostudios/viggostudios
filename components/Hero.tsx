
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LogoIcon = () => (
  <img
  src="/logo.svg"
  alt="Viggo Studios Logo"
  className="w-32 md:w-44 mx-auto
drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]
hover:scale-130
transition-all duration-500"
/>
);

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        // Velocidade base: 1.0. Aumenta 0.003x por pixel de scroll.
        // Limite máximo de 4x para não distorcer demais.
        const newPlaybackRate = Math.min(4, Math.max(1, 1 + scrollY * 0.003));
        videoRef.current.playbackRate = newPlaybackRate;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Video Container */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        {/* Overlay Gradients para garantir legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-[#0F0715]/90 dark:via-[#0F0715]/70 dark:to-[#0F0715] z-10 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-violet-500/10 dark:bg-violet-900/20 z-10 mix-blend-overlay"></div>
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 opacity-40 dark:opacity-60 grayscale-[0.3] brightness-75 transition-opacity duration-1000"
        >
          <source 
            src="https://cdn.coverr.co/videos/webm/1344.webm" 
            type="video/webm" 
          />
          <img 
            src="https://images.unsplash.com/photo-1492691523567-6170c240561e?q=80&w=2070&auto=format&fit=crop" 
            alt="Studio Background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 lg:px-16 text-center relative z-20 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-block px-5 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-12 backdrop-blur-lg animate-fade-up">
          <h2 className="text-violet-600 dark:text-violet-400 text-xs md:text-sm font-bold uppercase tracking-[0.5em] leading-none">
            Excelência em mídias digitais
          </h2>
        </div>

        {/* Featured Logo */}
        <div className="text-violet-600 dark:text-violet-500 animate-fade-up [animation-delay:200ms] mb-12 flex justify-center">
          <LogoIcon />
        </div>
        
        <div className="overflow-hidden-animate mb-12 flex justify-center">
          <p className="max-w-2xl text-slate-700 dark:text-gray-200 text-lg md:text-2xl font-normal leading-relaxed animate-text-reveal [animation-delay:400ms]">
            A <span className="text-violet-600 dark:text-white font-bold border-b-2 border-violet-500/30 uppercase">Viggo Studios</span> transforma marcas através de design, audiovisual e inteligência técnica. Criamos ativos digitais de alto valor.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up [animation-delay:600ms]">
          <Link
            to="/briefing"
            className="group relative w-full sm:w-auto px-12 py-5 bg-violet-600 text-white font-bold rounded-2xl transition-all duration-500 overflow-hidden shadow-lg uppercase tracking-widest"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Iniciar projeto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-12 py-5 bg-white/20 dark:bg-[#150a1d]/40 backdrop-blur-md border border-slate-300 dark:border-violet-500/30 hover:border-violet-500 text-slate-900 dark:text-white font-medium rounded-2xl transition-all duration-300 hover:bg-violet-500/10 uppercase tracking-widest"
          >
            Ver trabalhos
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl animate-fade-up [animation-delay:800ms] w-full">
          {[
            { value: '100+', label: 'Projetos' },
            { value: '50+', label: 'Clientes Satisfeitos' },
            { value: '10k+', label: 'Horas Edição' },
            { value: '100%', label: 'Satisfação' }
          ].map((stat, i) => (
            <div key={i} className={`purple-glass p-6 rounded-2xl border border-slate-200 dark:border-white/10 group transition-all ${i % 2 === 0 ? 'animate-float' : 'animate-float [animation-delay:1.5s]'}`}>
              <span className="block text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1 group-hover:scale-105 transition-transform duration-500 inline-block">{stat.value}</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
