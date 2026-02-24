'use client';

import { Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppMockup } from './WhatsAppMockup';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-xs font-bold mb-6 border border-blue-100 dark:border-blue-800"
        >
          <Sparkles className="w-4 h-4" />
          Potencializado por Gemini AI
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-display"
        >
          Um único número, <br />
          <span className="gradient-text">dezenas de atendentes.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          Transforme o seu WhatsApp num canal de atendimento profissional e organizado. Gestão multi-agente com o poder da Inteligência Artificial.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#pricing" className="gradient-brand text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover-gradient transition shadow-xl">
            Ver Planos e Preços <ChevronDown className="w-5 h-5" />
          </a>
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition">
            Ver demonstração
          </button>
        </motion.div>
        
        <WhatsAppMockup />
      </div>
    </section>
  );
}
