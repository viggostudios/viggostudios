
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Portfolio from './components/Portfolio';
import Creators from './components/Creators';
import BriefingForm from './components/BriefingForm';
import Footer from './components/Footer';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => {
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0F0715] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
        <div className="overflow-hidden mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase animate-tracking-in-expand">
            VIGGO<span className="text-violet-500">STUDIOS</span>
          </h1>
        </div>
        
        {/* Small Loading Bar */}
        <div className="w-24 md:w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-violet-500 animate-loading-bar shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <div className="animate-in fade-in duration-1000">
    <section id="inicio">
      <Hero />
    </section>
    <section id="servicos">
      <Services />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="briefing">
      <BriefingForm />
    </section>
    <section id="criadores">
      <Creators />
    </section>
  </div>
);

const PageWrapper: React.FC<{ children: React.ReactNode; title: string; subtitle?: string }> = ({ children, title, subtitle }) => (
  <div className="pt-20 min-h-screen bg-white dark:bg-[#0F0715] transition-colors duration-500 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative py-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-violet-800/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="inline-block px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 mb-4 animate-fade-in">
           <span className="text-violet-500 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest">Viggo Studios / {title}</span>
        </div>
        <div className="overflow-hidden-animate mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-slate-900 dark:text-white animate-text-reveal">
            {title.split(' ')[0]} <span className="text-violet-500">{title.split(' ').slice(1).join(' ')}</span>
          </h1>
        </div>
        {subtitle && (
          <div className="overflow-hidden-animate">
            <p className="text-slate-600 dark:text-gray-400 text-xl max-w-2xl leading-relaxed font-semibold animate-text-reveal [animation-delay:200ms]">
              {subtitle}
            </p>
          </div>
        )}
        <div className="mt-8 w-24 h-1 bg-violet-600 rounded-full animate-fade-in [animation-delay:400ms]"></div>
      </div>
    </div>
    <div className="pb-20">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      <Router>
        <ScrollToTop />
        <div className={`relative min-h-screen flex flex-col bg-white dark:bg-[#0F0715] text-slate-900 dark:text-white transition-opacity duration-1000 ${isLoading ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicos" element={
                <PageWrapper title="Nossas Expertises" subtitle="Soluções completas em mídia digital e estratégia visual para elevar sua marca.">
                  <Services />
                </PageWrapper>
              } />
              <Route path="/portfolio" element={
                <PageWrapper title="Nosso Portfólio" subtitle="Explore as produções que estão transformando o mercado digital.">
                  <Portfolio />
                </PageWrapper>
              } />
              <Route path="/briefing" element={
                <PageWrapper title="Novo Projeto" subtitle="O primeiro passo para elevar o nível da sua marca começa aqui.">
                  <BriefingForm />
                </PageWrapper>
              } />
              <Route path="/criadores" element={
                <PageWrapper title="Mentes Criativas" subtitle="A visão estratégica e a paixão audiovisual por trás da Viggo Studios.">
                  <Creators />
                </PageWrapper>
              } />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />

          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-4 bg-violet-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-violet-500 hover:scale-110 active:scale-95 ${
              showScrollTop && !isLoading ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
            }`}
            aria-label="Voltar ao topo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </Router>
    </>
  );
};

export default App;
