import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { MessageSquare, Video, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <MessageSquare className="w-6 h-6 text-slate-950" />,
    title: "O Agendamento",
    description: "Toque no botão desta página. Você falará diretamente no meu WhatsApp (ou da minha equipe) para reservar um horário. Sem burocracia."
  },
  {
    id: 2,
    icon: <Video className="w-6 h-6 text-slate-950" />,
    title: "A Conversa Blindada",
    description: "Um encontro online por vídeo, com total privacidade. Você fala, eu escuto. Mapeamos a crise e estancamos a dor imediata."
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-6 h-6 text-slate-950" />,
    title: "A Reconstrução",
    description: "Definimos um plano de acompanhamento. Você terá um suporte contínuo para transformar o \"fim da linha\" em um novo começo."
  }
];

export const Steps: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 border-t border-slate-800 border-b">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            RETOME O COMANDO DA SUA MENTE EM 3 PASSOS
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                  }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-500 mb-2">Passo {step.id}: {step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>

                {/* Icon Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/40 border-4 border-slate-900">
                  {step.icon}
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>
            👉 AGENDAR MEU HORÁRIO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};