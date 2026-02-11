
import React from 'react';

const serviceIcons = [
  {
    title: 'Design Gráfico',
    description: 'Identidades visuais impactantes e artes publicitárias que comunicam valor real.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Edição de Vídeo',
    description: 'Post-produção de elite para Reels e YouTube com retenção máxima de público.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Captação',
    description: 'Direção cinematográfica e captação 4K para comerciais e institucionais de peso.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Cobertura de Eventos',
    description: 'Presença técnica e entrega ultra-rápida de conteúdo para grandes eventos sociais.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM5 19a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM11 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zM11 19a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zM17 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM17 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zM17 19a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
      </svg>
    ),
  },
  {
    title: 'Fotografia',
    description: 'Ensaios corporativos e retratos profissionais com tratamento de elite.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Estratégia Digital',
    description: 'Planejamento agressivo de conteúdo focado em conversão e autoridade viral.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const pricingCategories = [
  {
    title: 'Design Gráfico',
    emoji: '🎨',
    summary: 'Identidades visuais e materiais digitais que comunicam autoridade.',
    note: 'Solicite um orçamento para pacotes personalizados.',
    items: [
      'Post para redes sociais (arte estática)',
      'Carrossel (até 5 páginas)',
      'Identidade visual básica',
      'Identidade visual completa (branding)',
      'Apresentação institucional profissional',
    ]
  },
  {
    title: 'Edição de Vídeo',
    emoji: '🎬',
    summary: 'Pós-produção de alto nível com foco em retenção e dinamismo.',
    items: [
      'Vídeo curto (Reels / Shorts / TikTok)',
      'Vídeo institucional cinematográfico',
      'VSL / Vídeo de vendas estratégico',
      'Motion design e animação 2D',
      'Legendas dinâmicas e sound design',
    ]
  },
  {
    title: 'Captação de Vídeo',
    emoji: '📹',
    summary: 'Direção e gravação em 4K para comerciais e conteúdo de autoridade.',
    note: 'Consulte taxas de deslocamento para gravações externas.',
    items: [
      'Captação simples (estúdio ou externa)',
      'Captação com direção de cena',
      'Gravação de curso online / infoproduto',
      'Comerciais para marcas e serviços',
    ]
  },
  {
    title: 'Fotografia',
    emoji: '📸',
    summary: 'Retratos e ensaios corporativos com tratamento estético de elite.',
    items: [
      'Ensaio profissional de branding',
      'Fotos para redes sociais e site',
      'Fotografia corporativa e equipe',
      'Tratamento de imagem avançado',
    ]
  },
  {
    title: 'Cobertura de Eventos',
    emoji: '📅',
    summary: 'Registro completo e entrega ágil para eventos sociais e corporativos.',
    items: [
      'Cobertura fotográfica profissional',
      'Cobertura em vídeo (highlights)',
      'Aftermovie dinâmico do evento',
      'Transmissão ao vivo (Live Stream)',
    ]
  },
  {
    title: 'Estratégia & Gestão',
    emoji: '📈',
    summary: 'Planejamento agressivo para crescimento e autoridade digital.',
    items: [
      'Social Media (Gestão de Redes)',
      'Planejamento de conteúdo mensal',
      'Estratégia de lançamento de produtos',
      'Consultoria de marca e posicionamento',
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-[#0a050d] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- EXPERTISES SECTION --- */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white transition-colors uppercase tracking-tight">Expertises <span className="text-violet-500">Premium</span></h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-32">
          {serviceIcons.map((service, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="p-5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm animate-fade-up opacity-0 [animation-fill-mode:forwards]"
            >
              <div className="w-10 h-10 bg-violet-500/10 dark:bg-violet-600/20 rounded-lg flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 leading-tight uppercase tracking-tight">{service.title}</h3>
              <p className="text-[10px] md:text-xs text-slate-600 dark:text-gray-400 leading-tight font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- PRESENTATION SECTION --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white uppercase tracking-tight">Apresentação <span className="text-violet-500">Estratégica</span></h2>
            <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
              Conheça os processos, a cultura e o propósito por trás da Viggo Studios em um tour rápido pela nossa visão.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(109,40,217,0.15)] dark:shadow-[0_0_50px_rgba(109,40,217,0.3)] border-4 border-violet-500/10 dark:border-violet-500/20 group">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Viggo Studios Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* --- PRICING SECTION (REVISED) --- */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white transition-colors uppercase tracking-tight">Soluções <span className="text-violet-500">Sob Medida</span></h2>
          <p className="text-slate-600 dark:text-gray-400 text-[10px] font-normal uppercase tracking-widest">Passe o mouse para ver os detalhes de cada serviço.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="relative overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 group h-[180px]"
            >
              {/* Main Content (Title + Summary) */}
              <div className="relative z-10 h-full flex flex-col transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">{cat.title}</h3>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-gray-300 font-medium leading-tight">
                  {cat.summary}
                </p>
                <div className="mt-auto flex items-center gap-2 text-violet-500 text-[9px] font-bold uppercase tracking-widest">
                  Ver detalhes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              {/* Detailed Content (Revealed on Hover) */}
              <div className="absolute inset-0 z-20 p-5 bg-violet-600 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-white text-xs font-bold uppercase tracking-tight mb-2 border-b border-white/20 pb-1">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[9px] text-violet-50 font-medium leading-none">
                      <svg className="w-2 h-2 mt-0.5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {cat.note && (
                  <p className="mt-2 text-[7px] text-violet-200 italic font-medium uppercase tracking-wider">
                    * {cat.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-violet-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-violet-600/20">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight">Precisa de um pacote exclusivo?</h4>
            <p className="text-violet-100 text-sm font-normal">Nós montamos propostas personalizadas de acordo com o seu volume de demanda.</p>
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
