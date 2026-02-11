
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const LogoIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30L50 80L80 30H65L50 55L35 30H20Z" fill="currentColor" />
    <path d="M10 30L45 88L50 80L20 30H10Z" fill="currentColor" opacity="0.6" />
    <path d="M90 30L55 88L50 80L80 30H90Z" fill="currentColor" opacity="0.6" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Briefing', href: '/briefing' },
    { name: 'Criadores', href: '/criadores' },
  ];

  return (
    <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-500 rounded-2xl md:rounded-full border shadow-lg ${
      scrolled || isOpen 
        ? 'bg-white/80 dark:bg-[#0F0715]/80 border-slate-200 dark:border-white/10 backdrop-blur-xl py-1 md:py-2' 
        : 'bg-white/40 dark:bg-white/5 border-transparent backdrop-blur-md py-2 md:py-4'
    }`}>
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Brand - Left Aligned */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-violet-600 dark:text-violet-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <LogoIcon />
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase flex items-center leading-none">
              VIGGO<span className="text-violet-500 group-hover:text-violet-400 transition-colors ml-1">STUDIOS</span>
            </h1>
          </Link>
          
          {/* Navigation & Actions - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 rounded-full ${
                    location.pathname === link.href 
                      ? 'text-violet-500 bg-violet-500/10' 
                      : 'text-slate-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-white hover:bg-violet-500/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10 mx-2"></div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-white transition-all duration-300"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <a
              href="https://wa.me/31998171242"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-10 bg-violet-600 hover:bg-violet-700 text-white px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md shadow-violet-600/20 hover:shadow-violet-600/40"
            >
              Contato
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-300 hover:text-violet-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-[110%] left-0 w-full transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <div className="px-4 py-6 space-y-2 bg-white/95 dark:bg-[#0F0715]/95 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-6 py-4 text-sm font-medium uppercase tracking-widest rounded-2xl transition-colors ${
                location.pathname === link.href 
                  ? 'bg-violet-600 text-white' 
                  : 'text-slate-600 dark:text-gray-300 bg-slate-50 dark:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/31998171242"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-6 bg-green-600 text-white block px-4 py-5 text-center font-bold rounded-2xl shadow-xl uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
