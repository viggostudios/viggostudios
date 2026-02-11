
import React from 'react';

const Creators: React.FC = () => {
  const creatorsData = [
    {
      name: "David Kaio",
      role: "Co-fundador",
      image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?q=80&w=800&auto=format&fit=crop",
      about: "Especialista multidisciplinar focado na excelência visual. Com olhar aguçado para estética minimalista e técnica avançada, David lidera a direção de arte da Viggo, unindo design estratégico e criatividade para transformar conceitos em ativos de alto impacto.",
      specialties: ["Direção de Arte", "Design", "Audiovisual", "Modelagem", "Ilustração", "Diagramação", "Vetorização"]
    },
    {
      name: "Lucas Sampaio",
      role: "Co-fundador",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=800&auto=format&fit=crop",
      about: "Estrategista audiovisual e especialista em pós-produção. Lucas foca na inteligência técnica e narrativa, garantindo que cada vídeo não seja apenas bonito, mas uma ferramenta poderosa de conversão e retenção.",
      specialties: ["Edição Pro", "Estratégia", "Audiovisual"]
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-[#0F0715] transition-colors duration-500 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-violet-600/10 rounded-full blur-[120px] -z-10 rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter">Mentes <span className="text-violet-500">Criativas</span></h2>
        <p className="text-slate-600 dark:text-gray-400 mb-20 max-w-3xl mx-auto text-lg font-semibold italic">
          "O projeto <span className="text-violet-600 dark:text-white font-black uppercase not-italic">Viggo Studios</span> foi criado por duas mentes criativas e pensantes, unindo visão estética e inteligência técnica."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
          {creatorsData.map((creator, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Profile Image Circle */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-violet-600 rounded-full scale-110 opacity-10 dark:opacity-20 blur-xl group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-violet-500/20 dark:border-violet-500/30 rounded-full scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-violet-500/20 shadow-[0_0_40px_rgba(109,40,217,0.1)] dark:shadow-[0_0_40px_rgba(109,40,217,0.3)] bg-slate-100 dark:bg-[#1a0b2e]">
                  <img
                    src={creator.image}
                    alt={`${creator.name} - ${creator.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title & Badge */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors uppercase tracking-tight">{creator.name}</h3>
                <div className="inline-block px-6 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                  <span className="text-violet-600 dark:text-violet-400 font-extrabold uppercase tracking-[0.25em] text-[11px]">{creator.role}</span>
                </div>
              </div>

              {/* About Box */}
              <div className="w-full purple-glass p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/5 text-left transition-all duration-300 group-hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[1px] bg-violet-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">Sobre</span>
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-gray-300 leading-relaxed font-normal mb-6">
                  {creator.about}
                </p>
                <div className="flex flex-wrap gap-2">
                  {creator.specialties.map((spec, i) => (
                    <span key={i} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-gray-400 rounded-md border border-transparent dark:border-white/5 whitespace-nowrap">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creators;
