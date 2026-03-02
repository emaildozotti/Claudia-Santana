import React from 'react';
import { motion } from 'framer-motion';

export const VideoBlock: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-slate-100 mb-10 tracking-tight"
        >
          UM RECADO IMPORTANTE PARA VOCÊ
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-sm mx-auto shadow-2xl rounded-2xl overflow-hidden aspect-[9/16] border border-slate-800"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/LUlKltyNo-M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
