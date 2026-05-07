import React, { useEffect, useRef, useState } from 'react';
import davidImg from './img/david.png';
import lucasImg from './img/lucas.jpg';

const Arrow = () => <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>;

const Logo = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center gap-3">
    <img src="/logo.svg" alt="Viggo Studios" className={compact ? 'h-9 w-9' : 'h-11 w-11'} />
    <div className="leading-none">
      <div className="text-violet-500 font-bold tracking-tight text-xl">VIGGO</div>
      <div className="text-white/85 font-bold tracking-tight text-lg -mt-1">STUDIOS</div>
    </div>
  </div>
);

const navLinks = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Serviços', '#servicos'],
  ['Mentes Criativas', '#mentes'],
  ['Instagram', '#social'],
  ['Briefing', '#briefing'],
];

const Navbar = () => (
  <header className="fixed left-0 right-0 top-0 z-50 px-4 py-5">
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/5 bg-black/20 px-4 py-3 backdrop-blur-xl">
      <a href="#inicio" aria-label="Viggo Studios"><Logo compact /></a>
      <div className="hidden items-center gap-9 text-xs font-bold md:flex">
        {navLinks.map(([label, href], i) => (
          <a key={label} href={href} className={`transition hover:text-violet-400 ${i === 0 ? 'text-violet-500' : 'text-white/80'}`}>{label}</a>
        ))}
      </div>
      <a href="https://wa.me/31998171242" target="_blank" rel="noreferrer" className="group rounded-2xl bg-violet-600 px-6 py-3 text-xs font-bold text-white shadow-[0_0_35px_rgba(124,58,237,.35)] transition hover:bg-violet-500">
        Vamos conversar <Arrow />
      </a>
    </nav>
  </header>
);

const Hero = ():JSX.Element => (
  <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#030108] pt-28 text-white">
    <div className="absolute inset-0">
      <img
        src="/assets/hero-studio-right.png"
        alt="Studio futurista Viggo"
        className="absolute top-10 bottom-0 right-[-12%] h-full w-[88%] translate-y-10 object-cover object-[66%_58%] opacity-95 md:right-[-7%] md:w-[78%] lg:right-[-5%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#030108]" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-[radial-gradient(circle_at_18%_48%,rgba(124,58,237,.22),transparent_35%)]" />
    </div>

    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center px-6 pb-24 pt-20 md:grid-cols-[.92fr_1.08fr] md:pt-28">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[.35em] text-violet-500">Design. Estratégia. Resultados.</p>
        <h1 className="max-w-3xl text-5xl font-bold uppercase leading-[1.04] tracking-tight md:text-7xl">
          Transformamos ideias em <span className="text-violet-500">experiências</span> que marcam.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/72">Design estratégico e soluções audiovisuais que elevam marcas, conectam pessoas e geram resultados reais.</p>
        <div className="mt-8 flex flex-wrap gap-5">
          <a href="https://wa.me/31998171242" target="_blank" rel="noreferrer" className="group rounded-2xl bg-violet-600 px-8 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(124,58,237,.35)] transition hover:bg-violet-500">Vamos conversar <Arrow /></a>
          <a href="#briefing" className="group rounded-2xl border border-violet-500/40 bg-black/25 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-violet-400 hover:bg-violet-500/10">Novo briefing <Arrow /></a>
        </div>
      </div>
      <div className="hidden md:block" />
    </div>
  </section>
);

const expertise = [
  ['▧', 'Design Gráfico'],
  ['▣', 'Edição de Vídeo'],
  ['◉', 'Captação'],
  ['▦', 'Cobertura de Eventos'],
  ['◎', 'Fotografia'],
  ['↗', 'Estratégia Digital'],
];

const solutionCards = [
  ['🎨', 'Design Gráfico', 'Identidade visual e artes digitais com aparência premium.', ['Logo', 'Posts', 'Carrosséis', 'Brandbook']],
  ['🎬', 'Edição de Vídeo', 'Vídeos dinâmicos para prender atenção e vender melhor.', ['Reels', 'Shorts', 'Motion', 'Legendas']],
  ['📹', 'Captação de Vídeo', 'Gravações profissionais para marcas, eventos e empresas.', ['Comercial', 'Institucional', 'Making of', 'Conteúdo']],
  ['📸', 'Fotografia', 'Fotos profissionais para fortalecer sua imagem.', ['Retratos', 'Produtos', 'Eventos', 'Tratamento']],
  ['🏢', 'Cobertura de Eventos', 'Registro completo com entrega ágil para redes sociais.', ['Foto', 'Vídeo', 'Aftermovie', 'Cortes']],
  ['📈', 'Estratégia & Gestão', 'Planejamento para posicionar, crescer e gerar autoridade.', ['Calendário', 'Campanhas', 'Conteúdo', 'Gestão']],
];

const Services = () => (
  <section id="servicos" className="bg-[#030108] px-6 py-24 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="expertise-title mb-14 text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[.42em] text-violet-400/80">O que dominamos</p>
        <h2 className="text-4xl font-bold uppercase leading-tight md:text-5xl">Expertises <span className="text-violet-500">Premium</span></h2>
        <div className="expertise-title-line mx-auto mt-5 h-1 w-14 rounded-full bg-violet-600" />
      </div>

      <div className="expertise-grid grid gap-5 md:grid-cols-3 lg:grid-cols-6">
        {expertise.map(([icon, title], index) => (
          <article key={title} className="expertise-card group flex min-h-[138px] flex-col items-center justify-center text-center" style={{ animationDelay: `${index * 90}ms` }}>
            <div className="expertise-card-glow" />
            <div className="expertise-icon mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-xl text-violet-300">{icon}</div>
            <h3 className="text-sm font-bold uppercase leading-tight tracking-[.08em]">{title}</h3>
          </article>
        ))}
      </div>

      <div className="mb-12 mt-28 text-center">
        <h2 className="text-4xl font-bold uppercase leading-tight md:text-5xl">Soluções <span className="text-violet-500">sob medida</span></h2>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[.25em] text-white/40">Serviços claros, diretos e prontos para sua marca crescer.</p>
      </div>

      <div className="solution-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutionCards.map(([icon, title, desc, items], index) => (
          <article key={title as string} className="expertise-card solution-premium-card group min-h-[280px]" style={{ animationDelay: `${(index + 6) * 90}ms` }}>
            <div className="expertise-card-glow" />
            <div className="expertise-icon mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-2xl text-violet-300">{icon}</div>
            <h3 className="mb-3 text-lg font-bold uppercase leading-tight">{title}</h3>
            <p className="text-sm leading-relaxed text-white/68">{desc}</p>
            <div className="solution-details mt-6 flex flex-wrap gap-2">
              {(items as string[]).map((item) => (
                <span key={item} className="rounded-full border border-violet-400/20 bg-white/[.055] px-4 py-2 text-[11px] font-bold uppercase tracking-[.08em] text-white/70 transition group-hover:border-violet-400/45 group-hover:text-violet-100">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const creators = [
  {
    name: 'David Kaio',
    role: 'Co-fundador • Direção Criativa',
    image: davidImg,
    headline: 'Visual premium para marcas que querem ser percebidas como grandes.',
    intro:
      'David lidera a direção visual da Viggo Studios, conectando design, audiovisual e acabamento técnico para transformar ideias em ativos digitais de alto impacto.',
    bullets: ['Direção de arte com estética forte', 'Captação, edição e finalização audiovisual', 'Identidade visual com percepção premium'],
    highlights: ['2019 no audiovisual', 'Design estratégico', 'Direção visual'],
    specialties: ['Direção criativa', 'Audiovisual', 'Branding', 'Motion design', 'Captação', 'Pós-produção'],
  },
  {
    name: 'Lucas Sampaio',
    role: 'Co-fundador • Estratégia',
    image: lucasImg,
    headline: 'Estratégia, gestão e conteúdo para transformar presença em crescimento.',
    intro:
      'Lucas conecta visão de negócio com execução criativa, estruturando processos, posicionamento e conteúdo para que cada projeto tenha clareza, consistência e direção.',
    bullets: ['Posicionamento digital com foco em autoridade', 'Gestão de fluxo e execução criativa', 'Estratégias pensadas para performance'],
    highlights: ['Gestão de fluxo', 'Posicionamento', 'Performance'],
    specialties: ['Estratégia digital', 'Gestão de projetos', 'Branding estratégico', 'Comunicação', 'Performance', 'Marketing sensorial'],
  },
];

const CreatorCard = ({ creator, index }: { creator: typeof creators[number]; index: number }) => {
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="apple-creator-card reveal-up"
      style={{ animationDelay: `${index * 160}ms` }}
    >
      <div className="apple-card-light" />
      <div className="apple-card-border" />

      <div className="apple-creator-header">
        <div className="apple-avatar-wrap">
          <div className="apple-avatar-ring" />
          <img src={creator.image} alt={creator.name} className="apple-avatar" />
        </div>

        <div className="apple-identity-block">
          <div className="apple-kicker"><i /> Sobre</div>
          <h3>{creator.name}</h3>
          <span>{creator.role}</span>
        </div>
      </div>

      <div className="apple-creator-content">
        <h4>{creator.headline}</h4>
        <p>{creator.intro}</p>

        <div className="apple-highlight-grid">
          {creator.highlights.map((item) => (
            <div key={item} className="apple-highlight-pill">{item}</div>
          ))}
        </div>

        <ul className="apple-bullet-list">
          {creator.bullets.map((item) => (
            <li key={item}><span>✓</span>{item}</li>
          ))}
        </ul>

        <div className="apple-tags">
          {creator.specialties.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
};

const Creators = () => (
  <section id="mentes" className="apple-creators-section">
    <div className="apple-creators-bg" />
    <div className="apple-creators-orb apple-creators-orb-one" />
    <div className="apple-creators-orb apple-creators-orb-two" />

    <div className="apple-creators-container">
      <div className="apple-creators-heading reveal-up">
        <p>Mentes criativas</p>
        <h2>Dois olhares. <span>Uma direção.</span></h2>
        <small>
          A Viggo Studios une direção visual e estratégia para criar projetos com estética, clareza e presença digital real.
        </small>
      </div>

      <div className="apple-creators-grid">
        {creators.map((creator, index) => <CreatorCard key={creator.name} creator={creator} index={index} />)}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section id="social" className="relative overflow-hidden border-t border-white/10 bg-[#030108] px-6 py-24 text-white md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[url('/assets/social-networks-bg.png')] bg-cover bg-center opacity-70" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(225,48,108,.16),transparent_34%),radial-gradient(circle_at_80%_60%,rgba(66,133,244,.14),transparent_30%),linear-gradient(180deg,rgba(3,1,8,.25),rgba(3,1,8,.92))]" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.38em] text-violet-300">Conecte-se com a Viggo</p>
        <h2 className="text-4xl font-bold uppercase leading-tight md:text-6xl">
          Acompanhe nosso <span className="text-violet-400">universo criativo</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
          Siga nosso Instagram para ver bastidores e projetos. Depois, deixe sua avaliação no Google e ajude a Viggo Studios a alcançar mais marcas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="group relative overflow-hidden rounded-[2rem] border border-white/[.10] bg-white/[.045] p-8 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-pink-400/45 hover:bg-pink-500/[.06] md:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-pink-500/20 blur-3xl transition group-hover:bg-pink-500/35" />
          <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="relative z-10">
            <div className="instagram-top-frame mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-300/25 bg-white/10 shadow-[0_0_36px_rgba(225,48,108,.28)]">
              <img src="/assets/instagram-button-icon.svg" alt="Instagram" className="instagram-top-icon" />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.35em] text-white/45">Instagram oficial</p>
            <h3 className="mb-4 text-3xl font-bold uppercase leading-tight md:text-4xl">Siga a Viggo Studios</h3>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/68 md:text-base">
              Acompanhe nossos bastidores, conteúdos criativos, identidade visual, vídeo, motion e projetos que estão saindo do papel.
            </p>
            <a
              href="https://www.instagram.com/viggostudios"
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(225,48,108,.28)] transition hover:scale-[1.03]"
            >
              <img src="/assets/instagram-button-icon.svg" alt="" className="instagram-button-icon mr-3" /> Acessar Instagram <span className="ml-3 transition group-hover/btn:translate-x-1">→</span>
            </a>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-[2rem] border border-white/[.10] bg-white/[.045] p-8 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-blue-500/[.055] md:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/18 blur-3xl transition group-hover:bg-blue-500/30" />
          <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-emerald-500/12 blur-3xl" />
          <div className="relative z-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-300/20 bg-white shadow-[0_0_36px_rgba(66,133,244,.20)]">
              <img src="/assets/google-logo.svg" alt="Google" className="h-10 w-10 object-contain" />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.35em] text-white/45">Avaliações Google</p>
            <h3 className="mb-4 text-3xl font-bold uppercase leading-tight md:text-4xl">Sua opinião fortalece nossa marca</h3>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/68 md:text-base">
              Já trabalhou com a gente? Deixe uma avaliação rápida no Google e ajude outras marcas a conhecerem a Viggo Studios.
            </p>
            <a
              href="https://g.page/r/CXEEvrcgiVSyEBI/review"
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center rounded-2xl bg-white px-7 py-4 text-sm font-bold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Avaliar no Google <span className="ml-3 transition group-hover/btn:translate-x-1">→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const WHATSAPP_NUMBER = '5531998171242';

const Briefing = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getValue = (field: string) => String(formData.get(field) || '').trim();

    const message = [
      'Olá, Viggo Studios! Tenho um novo briefing:',
      '',
      `Nome: ${getValue('nome') || 'Não informado'}`,
      `Email: ${getValue('email') || 'Não informado'}`,
      `Tipo de projeto: ${getValue('tipoProjeto') || 'Não informado'}`,
      `Objetivo: ${getValue('objetivo') || 'Não informado'}`,
      `Referência 1: ${getValue('referencia1') || 'Não informado'}`,
      `Referência 2: ${getValue('referencia2') || 'Não informado'}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="briefing" className="bg-[#030108] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold uppercase md:text-5xl">Novo <span className="text-violet-500">Briefing</span></h2>
          <p className="mt-4 text-xs uppercase tracking-[.28em] text-white/55">Transformamos sua visão em realidade técnica.</p>
        </div>

        <form className="rounded-3xl border border-violet-500/25 bg-white/[.025] p-8 md:p-12" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/70">Nome completo
              <input name="nome" required className="mt-3 w-full rounded-xl border border-violet-500/30 bg-violet-950/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400" placeholder="Seu nome ou marca" />
            </label>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/70">Email
              <input name="email" type="email" required className="mt-3 w-full rounded-xl border border-violet-500/30 bg-violet-950/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400" placeholder="email@exemplo.com" />
            </label>
          </div>
          <label className="mt-6 block text-[10px] font-bold uppercase tracking-widest text-white/70">Tipo de projeto
            <input name="tipoProjeto" required className="mt-3 w-full rounded-xl border border-violet-500/30 bg-violet-950/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400" placeholder="Ex: Identidade Visual, Edição de Vídeo..." />
          </label>
          <label className="mt-6 block text-[10px] font-bold uppercase tracking-widest text-white/70">Objetivo
            <textarea name="objetivo" required className="mt-3 h-32 w-full resize-none rounded-xl border border-violet-500/30 bg-violet-950/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400" placeholder="Descreva o que deseja alcançar..." />
          </label>
          <div className="my-8 h-px bg-white/10" />
          <label className="block text-[10px] font-bold uppercase tracking-widest text-white/70">Referências (URLs - opcional)
            <input name="referencia1" className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400" placeholder="Link de referência 1" />
            <input name="referencia2" className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-violet-400" placeholder="Link de referência 2" />
          </label>
          <button type="submit" className="mt-8 w-full rounded-2xl bg-violet-600 px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-violet-500">Enviar briefing</button>
        </form>
      </div>
    </section>
  );
};

const AnimatedStat = ({ value, label, suffix = '', prefix = '' }: { value: number; label: string; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const played = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || played.current) return;
      played.current = true;

      const duration = 2300;
      const start = performance.now();
      const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = easeOutExpo(progress);
        setCount(Math.round(value * eased));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(value);
          setComplete(true);
        }
      };
      requestAnimationFrame(step);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`cinematic-stat group ${complete ? 'is-complete' : ''}`}>
      <div className="cinematic-stat-glow" />
      <div className="cinematic-stat-scan" />
      <div className="stat-number text-violet-500 transition duration-500 group-hover:text-violet-200" aria-label={`${prefix}${count}${suffix}`}>
        {prefix}{count}{suffix}
      </div>
      <div className="relative z-10 mt-3 text-center text-sm leading-snug text-white/60 transition group-hover:text-white/85">{label}</div>
    </div>
  );
};

const About = () => (
  <section id="sobre" className="relative overflow-hidden border-t border-white/10 bg-[#030108] px-6 py-28 text-white md:py-36">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,.18),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(124,58,237,.12),transparent_34%)]" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

    <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1.25fr] md:items-center">
      <div className="relative z-10 reveal-up">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.38em] text-violet-500">Sobre nós</p>
        <h2 className="mb-7 text-5xl font-bold uppercase leading-[.98] tracking-tight md:text-6xl">
          Criatividade com<br />propósito.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-white/68">
          A Viggo Studios nasceu para ajudar marcas a se destacarem em um mundo cada vez mais visual e competitivo. Aqui, cada projeto é pensado para gerar impacto, conexão e resultados.
        </p>
        <a href="#mentes" className="group mt-10 inline-flex items-center rounded-2xl border border-white/12 bg-white/[.03] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:shadow-[0_0_35px_rgba(124,58,237,.18)]">
          Conheça nossa história <span className="ml-3 transition group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div className="cinematic-stats-wrap relative z-10 grid grid-cols-2 gap-4 rounded-[2.25rem] border border-white/[.07] bg-white/[.025] p-4 shadow-[0_40px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:grid-cols-4 md:p-5 reveal-up [animation-delay:160ms]">
        <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-white/[.06] via-transparent to-violet-500/[.07]" />
        <div className="pointer-events-none absolute -inset-px rounded-[2.25rem] opacity-70 [background:linear-gradient(120deg,transparent_0%,rgba(139,92,246,.28)_45%,transparent_70%)] cinematic-panel-sweep" />
        <AnimatedStat value={120} label="Projetos entregues" prefix="+" />
        <AnimatedStat value={80} label="Clientes atendidos" prefix="+" />
        <AnimatedStat value={100} label="Satisfação" suffix="%" />
        <AnimatedStat value={15} label="Anos de experiência" prefix="+" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
      <Logo compact />
      <p className="text-xs uppercase tracking-[.25em] text-white/35">Excelência em mídias digitais</p>
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/viggostudios" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-pink-400/40 hover:bg-pink-500/10" aria-label="Instagram da Viggo Studios">
          <img src="/assets/instagram-button-icon.svg" alt="Instagram" className="h-6 w-6 object-contain" />
        </a>
        <a href="https://wa.me/31998171242" target="_blank" rel="noreferrer" className="text-sm font-bold text-violet-400">Contato →</a>
      </div>
    </div>
  </footer>
);

const MobileDock = () => (
  <nav className="mobile-dock md:hidden" aria-label="Navegação mobile">
    <a href="#inicio"><span>⌂</span>Início</a>
    <a href="#sobre"><span>✦</span>Sobre</a>
    <a href="#servicos"><span>▧</span>Serviços</a>
    <a href="#mentes"><span>◉</span>Mentes</a>
    <a href="#social"><img src="/assets/instagram-button-icon.svg" alt="" className="h-4 w-4" />Social</a>
    <a href="#briefing"><span>→</span>Briefing</a>
  </nav>
);

const App: React.FC = () => (
  <main className="min-h-screen bg-[#030108] font-[Poppins]">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Creators />
    <SocialProof />
    <Briefing />
    <Footer />
    <MobileDock />
  </main>
);

export default App;
