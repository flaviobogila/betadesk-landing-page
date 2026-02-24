'use client';

import { User, Users, MessageSquarePlus, MoreVertical, Search, Smile, Mic, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppMockup() {
  return (
    <div id="mockup" className="mt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 dark:from-blue-900/20 dark:to-green-900/20 blur-[120px] opacity-30 -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-w-5xl mx-auto"
      >
        <div className="bg-[#f0f2f5] dark:bg-[#0b141a] aspect-[16/9] rounded-2xl flex border border-slate-200 dark:border-slate-800 overflow-hidden text-left shadow-inner">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-[#111b21]">
            <div className="h-14 px-4 flex items-center justify-between bg-[#f0f2f5] dark:bg-[#202d33]">
              <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                <User className="w-6 h-6 text-slate-500" />
              </div>
              <div className="flex gap-4 text-slate-500 dark:text-slate-400">
                <Users className="w-5 h-5" />
                <MessageSquarePlus className="w-5 h-5" />
                <MoreVertical className="w-5 h-5" />
              </div>
            </div>
            <div className="p-2 border-b border-slate-100 dark:border-slate-800/50">
              <div className="bg-[#f0f2f5] dark:bg-[#202d33] rounded-lg flex items-center px-3 py-1.5">
                <Search className="w-4 h-4 text-slate-500 mr-3" />
                <span className="text-sm text-slate-400">Pesquisar conversa</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex items-center p-3 bg-[#f0f2f5] dark:bg-[#2a3942] cursor-pointer">
                <div className="w-12 h-12 rounded-full gradient-brand shrink-0 flex items-center justify-center text-white">
                  <span className="font-bold">JD</span>
                </div>
                <div className="ml-3 flex-1 py-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-slate-900 dark:text-slate-100">João Duarte</span>
                    <span className="text-[10px] text-whatsapp font-bold">AGORA</span>
                  </div>
                  <div className="text-xs text-slate-500 truncate">Como funciona a integração?</div>
                </div>
              </div>
            </div>
          </div>
          {/* Chat Area */}
          <div className="flex-1 flex flex-col relative bg-[#efeae2] dark:bg-[#0b141a]">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none dark:opacity-[0.03] bg-[url('https://w0.peakpx.com/wallpaper/580/650/wallpaper-whatsapp-doodle-background-logo-brand.jpg')]"></div>
            <div className="h-14 px-4 flex items-center justify-between bg-[#f0f2f5] dark:bg-[#202d33] z-10 border-l border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold">JD</div>
                <div>
                  <div className="text-sm font-bold dark:text-slate-100">João Duarte</div>
                  <div className="text-[10px] text-whatsapp font-bold uppercase">Online via BetaDesk</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-3 overflow-y-auto z-10 custom-scrollbar">
              <div className="bg-white dark:bg-[#1f2c33] p-3 rounded-lg rounded-tl-none shadow-sm max-w-[70%] self-start text-sm dark:text-slate-200">
                <p>Olá! Vi que vocês têm integração com CRMs.</p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="self-center bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-200 dark:border-blue-800 flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3 h-3" /> BETA DESK AI: SUGESTÃO DISPONÍVEL
              </motion.div>
            </div>
            <div className="h-16 px-4 bg-[#f0f2f5] dark:bg-[#202d33] flex items-center gap-4 z-10 border-l border-slate-200 dark:border-slate-700">
              <Smile className="text-slate-500 w-6 h-6" />
              <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-xl px-4 py-2 text-sm text-slate-400">
                Escreva uma mensagem...
              </div>
              <Mic className="text-slate-500 w-6 h-6" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
