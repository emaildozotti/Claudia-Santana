import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VSL: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-10"
        >
          ENTENDA COMO VAMOS QUEBRAR ESSE CICLO
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-slate-900 rounded-xl border border-slate-800 shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden"
        >
          {/* Placeholder Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-50"></div>
          
          <div className="z-10 flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-amber-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
             </div>
             <p className="mt-4 text-slate-400 text-sm font-medium tracking-wider uppercase">Assista ao vídeo</p>
          </div>
          
          <p className="absolute bottom-4 left-4 text-xs text-slate-600 font-mono">[PLACEHOLDER: VIDEO_PLAYER]</p>
        </motion.div>
      </div>
    </section>
  );
};