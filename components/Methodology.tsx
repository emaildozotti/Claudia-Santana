import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Anchor, Clock } from 'lucide-react';

const pillars = [
  {
    icon: <Ear className="w-10 h-10 text-slate-200" />,
    title: "A Escuta \"De Igual para Igual\"",
    description: "Uma conversa franca, direta e bruta. Aqui você pode tirar a armadura, falar sobre seus medos mais sombrios e ter seus sentimentos validados, nunca julgados."
  },
  {
    icon: <Anchor className="w-10 h-10 text-amber-500" />,
    title: "O Princípio da Rocha Firme (Base Cristã)",
    description: "Reconstruímos sua identidade não no que você tem (dinheiro/status), mas em quem você é. Uma reconexão espiritual para quem perdeu a fé na própria vida."
  },
  {
    icon: <Clock className="w-10 h-10 text-slate-200" />,
    title: "A Estratégia do \"Só por Hoje\"",
    description: "Não vamos tentar resolver a vida inteira em um dia. Vamos criar táticas de sobrevivência para vencer as próximas 24 horas."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto bg-slate-900/40 p-8 md:p-16 rounded-3xl border border-slate-800/50 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 leading-tight">
            RESILIÊNCIA RADICAL: UM MÉTODO FORJADO NA GUERRA, <span className="text-amber-500">NÃO APENAS NOS LIVROS</span>
          </h2>
          <p className="text-slate-400">
            Não sou a terapeuta que vai te olhar com pena ou te pedir para "pensar positivo". Minha abordagem une a técnica psicológica com a potência da fé e da experiênca real de sobrevivência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-950/50 p-8 rounded-xl border border-slate-800 relative overflow-hidden group hover:bg-slate-900 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-600">
                {index + 1}
              </div>
              <div className="mb-6 relative z-10">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 relative z-10">
                {pillar.title}
              </h3>
              <p className="text-slate-400 leading-relaxed relative z-10 text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};