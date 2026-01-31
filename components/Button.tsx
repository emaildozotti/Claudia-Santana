import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'urgent';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "font-bold rounded-lg transition-all duration-300 flex items-center justify-center py-4 px-8 text-lg shadow-lg hover:shadow-xl active:scale-95";
  
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white border border-amber-500/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
    urgent: "bg-red-800 hover:bg-red-700 text-white border border-red-600/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};