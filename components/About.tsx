import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            EU JÁ ESTIVE ONDE VOCÊ ESTÁ.
          </h2>
          <blockquote className="border-l-4 border-amber-600 pl-4 mb-8 italic text-slate-400 text-lg">
            "Minha autoridade não vem apenas do diploma na parede, mas das cicatrizes que carrego."
          </blockquote>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Olá, sou Claudia.
            </p>
            <p>
              Muitos profissionais estudaram a dor nos livros. Eu a conheci pessoalmente. Atravessei o deserto da depressão profunda e das tentativas de desistência.
            </p>
            <p>
              Sei o que é sentir que a sua existência é um fardo para os outros. Sei o que é o "silêncio barulhento" da madrugada. Mas também sei o caminho de volta.
            </p>
            <p className="font-medium text-slate-200">
              Hoje, dedico minha vida a ser o farol para quem, assim como eu no passado, perdeu o chão. Minha missão não é te consertar — você não está quebrado, está ferido. Minha missão é te ajudar a ficar de pé novamente.
            </p>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="https://i.imgur.com/JoIk6Vt.jpeg"
              alt="Claudia - Terapeuta"
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};