import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    question: "O sigilo é garantido mesmo?",
    answer: "Absolutamente. Nossa conversa é um túmulo. Nada do que for dito sai da sessão. O ambiente é seguro para você falar o que jamais falaria para sua família ou sócios."
  },
  {
    question: "Preciso ser religioso para fazer a terapia?",
    answer: "Não. Embora minha base seja a fé cristã e a espiritualidade, o acolhimento é universal. Se você busca sentido, independente da religião, este lugar é para você."
  },
  {
    question: "E se eu não tiver tempo?",
    answer: "O atendimento é online. Você pode fazer do seu escritório, do carro (estacionado) ou de um local reservado. Se você tem tempo para sofrer, você tem 50 minutos para se curar."
  },
  {
    question: "Isso vai resolver meu problema financeiro/casamento?",
    answer: "Eu trato a base: VOCÊ. Quando você está firme, consegue lidar com o caos financeiro ou conjugal. Sem você estar bem, nada em volta funciona."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center mb-12">
          DÚVIDAS FREQUENTES
        </h2>

        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="border border-slate-800 rounded-lg bg-slate-950 overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === i ? 'text-amber-500' : 'text-slate-200 group-hover:text-amber-500/80'}`}>
                  {i + 1}. {q.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-amber-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 flex-shrink-0 group-hover:text-amber-500" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-900/50 pt-4">
                      {q.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};