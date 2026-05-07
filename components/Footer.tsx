
import React from 'react';
import { Link } from 'react-router-dom';

const LogoIcon = () => (
  <img
  src="/logo.svg"
  alt="Viggo Studios Logo"
  className="w-4 md:w-6 h-auto"
/>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#050208] pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-violet-600 dark:text-violet-500">
              <LogoIcon />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-white uppercase">
              VIGGO<span className="text-violet-500">STUDIOS</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-sm mb-8 leading-relaxed font-normal">
              Transformando sua presença digital com criatividade, estratégia e alto desempenho audiovisual. Sua marca merece o padrão Viggo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/viggostudios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-300/50 dark:bg-white/5 rounded-lg flex items-center justify-center text-slate-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white transition-all duration-300">
                <img src="/assets/instagram-button-icon.svg" alt="Instagram" className="instagram-button-icon" />
              </a>
              <a href="https://www.linkedin.com/company/viggostudios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-300/50 dark:bg-white/5 rounded-lg flex items-center justify-center text-slate-700 dark:text-gray-300 hover:bg-violet-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-[10px] border-l-2 border-violet-600 pl-4">Menu</h3>
            <ul className="space-y-4 text-slate-600 dark:text-gray-400 text-xs font-medium uppercase tracking-widest">
              <li><Link to="/" className="hover:text-violet-500 transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-violet-500 transition-colors">Serviços</Link></li>
              <li><Link to="/portfolio" className="hover:text-violet-500 transition-colors">Portfólio</Link></li>
              <li><Link to="/briefing" className="hover:text-violet-500 transition-colors">Briefing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-[10px] border-l-2 border-violet-600 pl-4">Suporte</h3>
            <ul className="space-y-4 text-slate-600 dark:text-gray-400 text-xs font-normal">
              <li>contato@viggostudios.com</li>
              <li>(31) 9 9817-1242</li>
              <li>Atendimento Global</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Viggo Studios.</p>
          <p>Powered by <span className="text-violet-500">Viggo Digital</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
