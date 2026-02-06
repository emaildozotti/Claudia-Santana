import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Eu achava que terapia era coisa de gente fraca. A Claudia não veio com papo furado, ela foi direto no ponto. Pela primeira vez em 10 anos, consegui dormir em paz.",
    author: "R.S., Empresário, 42 anos."
  },
  {
    text: "Estava pronto para desistir de tudo. Achava que minha família ficaria melhor sem mim (por causa do seguro). A Claudia me fez ver que minha presença vale mais que meu dinheiro. Hoje estou vivo por causa dela.",
    author: "M.A., Advogado, 38 anos."
  },
  {
    text: "Ela fala a nossa língua. Não tem julgamento, tem parceria. É como conversar com alguém que já foi no inferno e voltou com o mapa.",
    author: "J.C., Engenheiro, 50 anos."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            VIDAS QUE REENCONTRARAM O SENTIDO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-950 p-8 rounded-xl border border-slate-800 relative"
            >
              <Quote className="w-10 h-10 text-slate-700 absolute top-6 left-6 opacity-50" />
              <p className="text-slate-300 italic mb-6 mt-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="border-t border-slate-800 pt-4">
                <p className="text-amber-500 font-semibold text-sm">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};