import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Eu achava que precisava carregar o mundo nas costas e que pedir ajuda era sinal de fracasso. A Claudia me ensinou que ser forte é saber quando parar. Hoje sou um pai e um profissional muito mais presente.",
    author: "R.S., Executivo, 45 anos."
  },
  {
    text: "Cheguei exausta de tentar ser perfeita em tudo: no trabalho, em casa e como mãe. O acolhimento da Claudia foi o único lugar onde pude tirar a máscara e finalmente respirar. Ela salvou minha saúde mental.",
    author: "L.M., Médica e Mãe, 38 anos."
  },
  {
    text: "Eu me sentia perdido e pressionado por todo lado. Não conseguia falar com meus pais. Com a Claudia, senti que alguém finalmente falava a minha língua sem me julgar. Hoje sei quem eu sou.",
    author: "G.B., Estudante, 17 anos."
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