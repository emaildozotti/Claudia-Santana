import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Image with heavy overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Atmosphere"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center md:text-left md:max-w-6xl md:grid md:grid-cols-12 md:gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100 tracking-tight"
          >
            VOCÊ SEGURA O MUNDO DE TODOS, MAS <span className="text-amber-500">QUEM SEGURA O SEU</span> QUANDO VOCÊ ESTÁ PRESTES A QUEBRAR?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            A exaustão que você sente não é fraqueza, é o peso de carregar tudo sozinho por tempo demais. Eu fui ao fundo do poço e voltei, e estou aqui para ser a rocha firme que você precisa agora. Sem julgamentos, sem frases motivacionais. Apenas a verdade que cura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center md:items-start space-y-3"
          >
            <Button
              fullWidth
              className="md:w-auto shadow-amber-900/20"
              onClick={() => document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' })}
            >
              👉 QUERO UMA CONVERSA BLINDADA
            </Button>
            <span className="text-xs text-slate-500 font-medium tracking-wide">
              Primeira sessão de acolhimento estratégico
            </span>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="md:col-span-5 relative h-full min-h-[300px] md:min-h-[400px] mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative transition-all duration-700"
          >
            <img
              src="https://i.imgur.com/uwj7CKC.jpeg"
              alt="Claudia - Terapeuta"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};