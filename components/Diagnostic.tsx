import React from 'react';
import { motion } from 'framer-motion';
import { Users, BatteryWarning, Ghost, Wine } from 'lucide-react';

const symptoms = [
  {
    icon: <Users className="w-8 h-8 text-amber-500" />,
    title: "A Solidão do Líder",
    description: "Você está cercado de pessoas, mas sente que ninguém te conhece de verdade. Se você desabar, tudo desmorona."
  },
  {
    icon: <Ghost className="w-8 h-8 text-slate-400" />,
    title: "O Vazio Existencial",
    description: "Você conquistou o que queria (carro, casa, cargo), mas quando deita a cabeça no travesseiro, a pergunta \"é só isso?\" te assombra."
  },
  {
    icon: <BatteryWarning className="w-8 h-8 text-amber-500" />,
    title: "A Vontade de \"Desligar\"",
    description: "Não é que você queira morrer, você só quer que a dor e a pressão parem. O sono não descansa mais a sua mente."
  },
  {
    icon: <Wine className="w-8 h-8 text-slate-400" />,
    title: "A Fuga",
    description: "Bebida, trabalho excessivo ou isolamento viraram seus únicos refúgios para não explodir."
  }
];

export const Diagnostic: React.FC = () => {
  return (
    <section id="diagnostic" className="py-20 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            O SUCESSO LÁ FORA NÃO CALA O <span className="bg-slate-800 px-2 py-1 rounded">BARULHO AÍ DENTRO?</span>
          </h2>
          <p className="text-slate-400">
            Se você é o pilar da sua casa ou empresa, provavelmente está sentindo isso agora:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {symptoms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col items-start hover:border-amber-900/50 transition-colors"
            >
              <div className="mb-4 p-3 bg-slate-900 rounded-full border border-slate-800">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-serif italic text-amber-500/90 font-medium">
            "Você aprendeu a ser forte. Agora precisa aprender a sobreviver."
          </p>
        </motion.div>
      </div>
    </section>
  );
};