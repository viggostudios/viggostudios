
import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  content: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'Arena Zion - Lounge', 
    category: 'Infraestrutura', 
    content: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
    description: 'Design de interiores imersivo para arenas de e-sports.'
  },
  { 
    id: 2, 
    title: 'Estação VR High-End', 
    category: 'Tecnologia', 
    content: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000&auto=format&fit=crop',
    description: 'Instalação de hardware e captação de experiência VR.'
  },
  { 
    id: 3, 
    title: 'Lab de Treinamento Pro', 
    category: 'Produção', 
    content: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    description: 'Ambiente preparado para performance máxima.'
  },
  { 
    id: 4, 
    title: 'Main Stage Zion', 
    category: 'Eventos', 
    content: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000&auto=format&fit=crop',
    description: 'Estrutura técnica para eventos de grande porte.'
  },
  { 
    id: 5, 
    title: 'Gaming Setup Elite', 
    category: 'Design', 
    content: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1000&auto=format&fit=crop',
    description: 'Configuração visual e técnica de setups gamers.'
  },
  { 
    id: 6, 
    title: 'Zion Experience Center', 
    category: 'Infraestrutura', 
    content: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
    description: 'Arquitetura e iluminação estratégica para marcas.'
  },
  { 
    id: 7, 
    title: 'Cyber Deck', 
    category: 'Design', 
    content: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    description: 'Iluminação neon e estética futurista.'
  },
  { 
    id: 8, 
    title: 'Arena de Competição', 
    category: 'Infraestrutura', 
    content: 'https://images.unsplash.com/photo-1560253023-3ee5d6447640?q=80&w=1000&auto=format&fit=crop',
    description: 'Sistemas de vídeo e transmissão em tempo real.'
  }
];

// Split items for different rows
const firstRow = portfolioItems.slice(0, 4);
const secondRow = portfolioItems.slice(4, 8);

const MarqueeRow: React.FC<{ items: PortfolioItem[], reverse?: boolean }> = ({ items, reverse }) => {
  // Triple the items to ensure seamless loop
  const displayItems = [...items, ...items, ...items];
  
  return (
    <div className="flex overflow-hidden select-none gap-4 py-2">
      <div className={`flex flex-nowrap gap-4 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {displayItems.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="w-[300px] md:w-[450px] aspect-video relative rounded-[2rem] overflow-hidden group border-2 border-transparent hover:border-violet-500/50 transition-all duration-500 flex-shrink-0 bg-slate-100 dark:bg-white/5"
          >
            <img
              src={item.content}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay removed as requested to show pure visuals without text information */}
            <div className="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-[#0F0715] transition-colors duration-500 overflow-hidden">
      {/* Portfólio Wall Section */}
      <div className="flex flex-col gap-6">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="inline-block px-8 py-4 rounded-3xl purple-glass border border-violet-500/20 animate-fade-up">
           <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base font-medium mb-6">
            Nossos projetos são desenvolvidos com o máximo rigor estético e técnico, focados na excelência do resultado final.
          </p>
          <Link 
            to="/briefing" 
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl transition-all shadow-lg uppercase tracking-widest text-xs"
          >
            Iniciar meu projeto
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
