import React from 'react';

const serviceIcons = [
  {
    title: 'Design Gráfico',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 20h4.5L20 8.5 15.5 4 4 15.5V20z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13.5 6 18 10.5" />
      </svg>
    ),
  },
  {
    title: 'Edição de Vídeo',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 6h16v12H4V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 10.5v3l4-1.5-4-1.5zM7 6v12M17 6v12" />
      </svg>
    ),
  },
  {
    title: 'Captação',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 8h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H4V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17 11l4-2.5v7L17 13M7 11h4" />
      </svg>
    ),
  },
  {
    title: 'Cobertura de Eventos',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 21h8M12 17v4M7 4h10v7a5 5 0 0 1-10 0V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 8H3a3 3 0 0 0 3 3h1M19 8h2a3 3 0 0 1-3 3h-1" />
      </svg>
    ),
  },
  {
    title: 'Fotografia',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 8h4l1.5-2h5L16 8h4v11H4V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      </svg>
    ),
  },
  {
    title: 'Estratégia Digital',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 18 10 12l4 4 6-8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 8h5v5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 21h16" />
      </svg>
    ),
  },
];

const pricingCategories = [
  {
    title: 'Design Gráfico',
    emoji: '🎨',
    summary: 'Design premium para marcas que querem impacto.',
    note: 'Projetos personalizados para sua marca.',
    tags: ['Logo', 'Posts', 'Carrosséis', 'Brandbook'],
    items: [
      'Post para redes sociais (arte estática)',
      'Carrossel (até 5 páginas)',
      'Identidade visual básica',
      'Identidade visual completa (branding)',
      'Apresentação institucional profissional',
    ],
  },
  {
    title: 'Edição de Vídeo',
    emoji: '🎬',
    summary: 'Pós-produção de alto nível com foco em retenção e dinamismo.',
    tags: ['Reels', 'Shorts', 'Motion', 'Legendas'],
    items: [
      'Vídeo curto (Reels / Shorts / TikTok)',
      'Vídeo institucional cinematográfico',
      'VSL / Vídeo de vendas estratégico',
      'Motion design e animação 2D',
      'Legendas dinâmicas e sound design',
    ],
  },
  {
    title: 'Captação de Vídeo',
    emoji: '📹',
    summary: 'Direção e gravação em 4K para comerciais e conteúdo de autoridade.',
    note: 'Consulte taxas de deslocamento para gravações externas.',
    tags: ['Comercial', 'Institucional', 'Making of', 'Conteúdo'],
    items: [
      'Captação simples (estúdio ou externa)',
      'Captação com direção de cena',
      'Gravação de curso online / infoproduto',
      'Comerciais para marcas e serviços',
    ],
  },
  {
    title: 'Fotografia',
    emoji: '📸',
    summary: 'Retratos e ensaios corporativos com tratamento estético de elite.',
    tags: ['Retratos', 'Produtos', 'Eventos', 'Tratamento'],
    items: [
      'Ensaio profissional de branding',
      'Fotos para redes sociais e site',
      'Fotografia corporativa e equipe',
      'Tratamento de imagem avançado',
    ],
  },
  {
    title: 'Cobertura de Eventos',
    emoji: '📅',
    summary: 'Registro completo e entrega ágil para eventos sociais e corporativos.',
    tags: ['Foto', 'Vídeo', 'Aftermovie', 'Cortes'],
    items: [
      'Cobertura fotográfica profissional',
      'Cobertura em vídeo (highlights)',
      'Aftermovie dinâmico do evento',
      'Transmissão ao vivo (Live Stream)',
    ],
  },
  {
    title: 'Estratégia & Gestão',
    emoji: '📈',
    summary: 'Planejamento agressivo para crescimento e autoridade digital.',
    tags: ['Calendário', 'Campanhas', 'Conteúdo', 'Gestão'],
    items: [
      'Social Media (Gestão de Redes)',
      'Planejamento de conteúdo mensal',
      'Estratégia de lançamento de produtos',
      'Consultoria de marca e posicionamento',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-[#09050f] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white transition-colors uppercase tracking-tight">
            Expertises <span className="text-violet-500">Premium</span>
          </h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-32">
          {serviceIcons.map((service, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="p-5 min-h-[150px] rounded-xl bg-white dark:bg-white/[0.08] border border-slate-200 dark:border-violet-300/20 hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm animate-fade-up opacity-0 [animation-fill-mode:forwards] flex flex-col items-center justify-center text-center"
            >
              <div className="w-10 h-10 bg-violet-500/10 dark:bg-violet-600/20 rounded-lg flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 text-slate-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 leading-tight uppercase tracking-tight">
                {service.title}
              </h3>
              {/* Descrição removida para leitura mais rápida e visual premium */}
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white transition-colors uppercase tracking-tight">
            Soluções <span className="text-violet-500">Sob Medida</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-[11px] font-normal uppercase tracking-widest">
            Serviços claros, diretos e prontos para sua marca crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((cat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl p-7 min-h-[270px] bg-white/95 dark:bg-white/[0.075] border border-slate-200 dark:border-violet-300/20 shadow-sm dark:shadow-[0_0_50px_rgba(124,58,237,0.08)] hover:border-violet-500/60 hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_38%)] opacity-80" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-violet-600/15 dark:bg-violet-500/25 border border-violet-400/20 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-violet-900/10">
                  {cat.emoji}
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white uppercase tracking-tight mb-3 leading-none">
                  {cat.title}
                </h3>
                <p className="text-sm md:text-[15px] text-slate-700 dark:text-gray-200 font-medium leading-relaxed max-w-[92%]">
                  {cat.summary}
                </p>

                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-violet-500/35 bg-violet-500/10 text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-violet-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-violet-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-violet-600/20">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight">
              Precisa de um pacote exclusivo?
            </h4>
            <p className="text-violet-100 text-sm font-normal">
              Nós montamos propostas personalizadas de acordo com o seu volume de demanda.
            </p>
          </div>
          <a
            href="https://wa.me/31998171242"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-violet-600 font-bold rounded-full uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors shadow-lg"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;