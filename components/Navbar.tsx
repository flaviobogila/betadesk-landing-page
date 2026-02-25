'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { useContactForm } from '@/context/ContactContext';

export function Navbar() {
  const { openContactForm } = useContactForm();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              {/* Símbolo para Light Theme */}
              <Image
                src="/betadesk-favicon.png"
                alt="BetaDesk Symbol"
                fill
                className="object-contain dark:hidden"
                priority
              />
              {/* Símbolo para Dark Theme */}
              <Image
                src="/betadesk-favicon.png"
                alt="BetaDesk Symbol"
                fill
                className="object-contain hidden dark:block"
                priority
              />
            </div>
            <span className="text-2xl font-bold tracking-tight font-display">
              Beta<span className="text-blue-600 dark:text-blue-400">Desk</span>
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Funcionalidades</a>
            <a href="#mockup" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Demonstração</a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Preços</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openContactForm}
              className="gradient-brand text-white px-5 py-2 rounded-full font-semibold hover-gradient transition shadow-lg shadow-blue-200 dark:shadow-none inline-block"
            >
              Teste Grátis
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
