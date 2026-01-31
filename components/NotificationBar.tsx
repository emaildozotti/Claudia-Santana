import React from 'react';
import { Lock } from 'lucide-react';

export const NotificationBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50 py-3 px-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs md:text-sm font-medium text-slate-300 tracking-wide uppercase">
        <Lock className="w-3 h-3 md:w-4 md:h-4 text-amber-500" />
        <span className="text-center">Sigilo Absoluto Garantido. Atendimento 100% Online para todo o Brasil.</span>
      </div>
    </div>
  );
};