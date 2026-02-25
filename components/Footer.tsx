'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/betadesk-favicon.png"
              alt="BetaDesk Symbol"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold font-display">BetaDesk</span>
        </div>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} BetaDesk. Soluções em WhatsApp Business API.
        </p>
      </div>
    </footer>
  );
}
