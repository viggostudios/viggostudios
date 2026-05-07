
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-[#0F0715] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Apresentação <span className="text-violet-500">Estratégica</span></h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça os processos, a cultura e o propósito por trás da Viggo Studios em um tour rápido pela nossa visão.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(109,40,217,0.15)] dark:shadow-[0_0_50px_rgba(109,40,217,0.3)] border-4 border-violet-500/10 dark:border-violet-500/20">
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
    </div>
  );
};

export default VideoSection;
