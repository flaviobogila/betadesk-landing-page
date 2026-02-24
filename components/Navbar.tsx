'use client';

import { LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="gradient-brand p-1.5 rounded-lg shadow-md">
              <LayoutDashboard className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-display">
              Beta<span className="text-blue-600 dark:text-blue-400">Desk</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Funcionalidades</a>
            <a href="#mockup" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Demonstração</a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Preços</a>
          </nav>
          <div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="gradient-brand text-white px-5 py-2 rounded-full font-semibold hover-gradient transition shadow-lg shadow-blue-200 dark:shadow-none inline-block"
            >
              Teste Grátis
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
