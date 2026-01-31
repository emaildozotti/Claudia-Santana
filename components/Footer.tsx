import React from 'react';
import { Button } from './Button';
import { Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-20 px-6 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto text-center">

        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-100 mb-6 leading-tight">
            NÃO TOME UMA DECISÃO PERMANENTE <br className="hidden md:block" />
            PARA UM PROBLEMA PASSAGEIRO.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Dê a si mesmo a chance de viver apenas o dia de hoje. Estou aqui estendendo a minha mão. Segure.
          </p>

          <div className="flex justify-center">
            <Button
              className="w-full md:w-auto text-xl py-6 px-10 shadow-amber-900/30"
              onClick={() => window.open('https://wa.me/5511991395413?text=Olá Claudia, vi seu site e gostaria de agendar uma conversa.', '_blank')}
            >
              🆘 FALAR COM A CLAUDIA NO WHATSAPP
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <div className="flex items-center gap-2">
            <Lock className="w-3 h-3" />
            <span>Site Seguro & Confidencial</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Resiliência Radical.
          </div>
        </div>
      </div>
    </footer>
  );
};