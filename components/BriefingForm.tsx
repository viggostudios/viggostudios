
import React, { useState } from 'react';

const BriefingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    projeto: '',
    objetivo: '',
    referencia1: '',
    referencia2: '',
    referencia3: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Briefing Viggo Studios*%0A%0A*Nome:* ${formData.nome}%0A*Projeto:* ${formData.projeto}%0A*Objetivo:* ${formData.objetivo}%0A*Ref 1:* ${formData.referencia1}%0A*Ref 2:* ${formData.referencia2}%0A*Ref 3:* ${formData.referencia3}`;
    
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(`https://wa.me/31998171242?text=${message}`, '_blank');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-24 bg-white dark:bg-[#0a050d] transition-colors duration-500 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors uppercase">Novo <span className="text-violet-500">Briefing</span></h2>
          <p className="text-slate-600 dark:text-gray-400 font-normal uppercase tracking-widest text-sm">Transformamos sua visão em realidade técnica.</p>
        </div>

        <div className="purple-glass p-8 md:p-12 rounded-3xl border border-violet-500/20 shadow-xl relative bg-slate-50/50 dark:bg-transparent">
          {submitted ? (
            <div className="text-center py-20 flex flex-col items-center justify-center animate-pulse">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white uppercase">Enviado com Sucesso</h3>
              <p className="text-slate-600 dark:text-gray-400 font-normal">Iniciando conexão com a equipe...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-800 dark:text-gray-300 uppercase tracking-widest">Nome Completo</label>
                  <input
                    required
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-slate-200 dark:bg-violet-900/10 border border-slate-300 dark:border-violet-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder-slate-500 font-normal"
                    placeholder="Seu nome ou marca"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-800 dark:text-gray-300 uppercase tracking-widest">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-200 dark:bg-violet-900/10 border border-slate-300 dark:border-violet-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder-slate-500 font-normal"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-800 dark:text-gray-300 uppercase tracking-widest">Tipo de Projeto</label>
                <input
                  required
                  name="projeto"
                  value={formData.projeto}
                  onChange={handleChange}
                  className="w-full bg-slate-200 dark:bg-violet-900/10 border border-slate-300 dark:border-violet-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder-slate-500 font-normal"
                  placeholder="Ex: Identidade Visual, Edição de Vídeo..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-800 dark:text-gray-300 uppercase tracking-widest">Objetivo</label>
                <textarea
                  required
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-200 dark:bg-violet-900/10 border border-slate-300 dark:border-violet-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all resize-none placeholder-slate-500 font-normal"
                  placeholder="Descreva o que deseja alcançar..."
                ></textarea>
              </div>

              <div className="pt-4 border-t border-slate-300 dark:border-white/5">
                <label className="block text-[10px] font-bold text-slate-800 dark:text-gray-300 uppercase tracking-widest mb-4">Referências (URLs - Opcional)</label>
                <div className="space-y-3">
                  <input
                    name="referencia1"
                    value={formData.referencia1}
                    onChange={handleChange}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-violet-500/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-violet-500 outline-none transition-all font-normal"
                    placeholder="Link de referência 1"
                  />
                  <input
                    name="referencia2"
                    value={formData.referencia2}
                    onChange={handleChange}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-violet-500/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-violet-500 outline-none transition-all font-normal"
                    placeholder="Link de referência 2"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl shadow-lg transition-all transform hover:scale-[1.01] uppercase tracking-widest"
              >
                Enviar Briefing
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BriefingForm;
