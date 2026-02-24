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
          className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-green-100 dark:border-green-800 shadow-sm"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Baseado na API Oficial do WhatsApp
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight font-display leading-[1.1]"
        >
          A plataforma profissional de <br />
          <span className="gradient-text">WhatsApp para equipes</span> <br />
          que levam atendimento a sério
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Substitua o WhatsApp Web por uma estrutura completa de atendimento.
          Gestão multi-agente, automação e dashboards em um só lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#features" className="gradient-brand text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover-gradient transition shadow-xl shadow-blue-200 dark:shadow-none">
            Explorar Funcionalidades <ChevronDown className="w-5 h-5" />
          </a>
          <a href="#mockup" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition">
            Ver demonstração ao vivo
          </a>
        </motion.div>

        <WhatsAppMockup />
      </div>
    </section>
  );
}
