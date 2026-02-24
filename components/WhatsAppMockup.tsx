'use client';

import { User, Users, MessageSquarePlus, MoreVertical, Search, Smile, Mic, Sparkles, Check, CheckCheck, Fish, ChevronDown, Tag, PenLine, SquarePlus, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const MOCK_CHATS = [
  {
    id: 1,
    name: 'Marcos Silva',
    initial: 'MS',
    prefix: 'Você:',
    lastMsg: 'Seja bem-vindo à BetaDesk, como posso ajudar...',
    time: '01/02/26',
    online: true,
    unread: 0,
    hasGroup: true,
    hasDraft: true,
    tagColor: '#a855f7' // Purple
  },
  {
    id: 2,
    name: 'Isis Valverde',
    initial: 'IV',
    prefix: 'Isis:',
    lastMsg: 'Áudio',
    time: '03/10/25',
    online: false,
    unread: 1,
    hasAudio: true,
    tagColor: '#a855f7'
  },
  {
    id: 3,
    name: 'Cristiano Ronaldo',
    initial: 'CR',
    prefix: 'Cristiano:',
    lastMsg: 'Olá, bom dia!',
    time: '23/06/25',
    online: false,
    unread: 2,
    tagColor: '#eab308' // Yellow
  },
  {
    id: 4,
    name: 'Anderson Silva',
    initial: 'AS',
    prefix: 'Anderson:',
    lastMsg: 'Aguardando retorno',
    time: '17/06/25',
    online: false,
    unread: 3,
    tagColor: null
  },
  {
    id: 5,
    name: 'Taylor Swift',
    initial: 'TS',
    prefix: 'Taylor:',
    lastMsg: 'Entendido.',
    time: '07/07/25',
    online: false,
    unread: 4,
    tagColor: null
  },
  { id: 6, name: 'Juliana G.', initial: 'JG', prefix: 'Juliana:', lastMsg: 'Obrigada!', time: 'Ontem', online: false, unread: 1, tagColor: null },
  { id: 7, name: 'Roberto M.', initial: 'RM', prefix: 'Você:', lastMsg: 'Ok.', time: '22/02', online: false, unread: 0, tagColor: null },
  { id: 8, name: 'Fernanda L.', initial: 'FL', prefix: 'Fernanda:', lastMsg: 'Qual o valor?', time: '21/02', online: true, unread: 0, tagColor: null },
];

const SIMULATION_STEPS = [
  { type: 'incoming', text: 'Olá! Vi que vocês têm integração com CRMs.', delay: 2000 },
  { type: 'ai-typing', text: 'BETA DESK AI está processando...', delay: 1000 },
  { type: 'ai', text: 'Olá Marcos! Sim, integramos com Salesforce, HubSpot e RD Station em poucos cliques. Gostaria de ver como configurar?', delay: 3000 },
  { type: 'incoming', text: 'Sim, por favor! É difícil de configurar?', delay: 2500 },
  { type: 'agent-typing', text: 'Atendente está digitando...', delay: 1500 },
  { type: 'agent', text: 'Não é nada difícil, Marcos. Vou te enviar o tutorial rápido agora mesmo.', delay: 3000 },
];

const FILTERS = [
  { label: 'Tudo', active: true },
  { label: 'Em atendimento', active: false },
  { label: 'Na fila', active: false },
  { label: 'Time', active: false, hasDropdown: true },
  { label: 'Etiqueta', active: false, hasDropdown: true },
];

export function WhatsAppMockup() {
  const [messages, setMessages] = useState<{ type: string; text: string; id: number }[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [typing, setTyping] = useState<string | null>(null);

  useEffect(() => {
    if (currentStep >= SIMULATION_STEPS.length) {
      const timer = setTimeout(() => {
        setMessages([]);
        setCurrentStep(0);
      }, 5000);
      return () => clearTimeout(timer);
    }

    const step = SIMULATION_STEPS[currentStep];
    const timer = setTimeout(() => {
      if (step.type.includes('typing')) {
        setTyping(step.type);
        setCurrentStep(prev => prev + 1);
      } else {
        setTyping(null);
        setMessages(prev => [...prev, { ...step, id: Date.now() }]);
        setCurrentStep(prev => prev + 1);
      }
    }, step.delay);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div id="mockup" className="mt-16 relative">
      {/* Scrollbar CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 dark:from-blue-900/20 dark:to-green-900/20 blur-[120px] opacity-30 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-w-5xl mx-auto"
      >
        <div className="bg-[#f0f2f5] dark:bg-[#111b21] aspect-[16/9] rounded-2xl flex border border-slate-200 dark:border-slate-800 overflow-hidden text-left shadow-inner">
          {/* Sidebar */}
          <div className="w-[38%] border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-[#111b21]">
            {/* Sidebar Header */}
            <div className="h-14 px-4 flex items-center justify-between bg-white dark:bg-[#111b21]">
              <div className="flex items-center gap-2">
                {/* <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Fish className="w-5 h-5 fill-current" />
                </div> */}
                <span className="font-bold text-lg dark:text-slate-100">BetaDesk</span>
              </div>
              <div className="flex gap-4 text-slate-500 dark:text-slate-400">
                <SquarePlus className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
                <MoreVertical className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
              </div>
            </div>

            {/* Search */}
            <div className="px-3 pb-2 pt-1">
              <div className="bg-[#f0f2f5] dark:bg-[#202d33] rounded-xl flex items-center px-3 py-2">
                <Search className="w-4 h-4 text-slate-500 mr-3" />
                <span className="text-xs text-slate-400 truncate">Pesquisar ou começar uma nova conversa</span>
              </div>
            </div>

            {/* Filters */}
            <div className="px-3 py-2 flex gap-2 overflow-x-auto no-scrollbar">
              {FILTERS.map((filter, i) => (
                <div
                  key={i}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap flex items-center gap-1 cursor-pointer transition-colors shadow-sm ${filter.active
                    ? 'bg-blue-600/20 text-blue-500 border border-blue-600/30'
                    : 'bg-white dark:bg-[#202d33] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                >
                  {filter.label}
                  {filter.hasDropdown && <ChevronDown className="w-2.5 h-2.5" />}
                </div>
              ))}
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar mt-2">
              {MOCK_CHATS.map((chat) => (
                <div key={chat.id} className={`flex items-start p-3 cursor-pointer border-b border-slate-50 dark:border-slate-800/10 hover:bg-[#f5f6f6] dark:hover:bg-[#202d33] transition-colors ${chat.id === 1 ? 'bg-[#f0f2f5] dark:bg-[#202d33]' : ''}`}>
                  <div className="relative shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white relative shadow-sm ${chat.id % 2 === 0 ? 'bg-indigo-500' : 'gradient-brand'}`}>
                      <span className="font-bold text-sm tracking-tighter">{chat.initial}</span>
                    </div>
                    {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#202d33] rounded-full"></div>}
                  </div>

                  <div className="ml-3 flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-semibold text-[13px] text-slate-900 dark:text-slate-100 truncate">{chat.name}</span>
                        {chat.hasGroup && <Users className="w-3 h-3 text-blue-400 shrink-0" />}
                      </div>
                      <span className="text-[10px] text-slate-500 shrink-0">{chat.time}</span>
                    </div>

                    <div className="flex justify-between items-center mt-0.5 gap-2">
                      <div className="text-[11px] text-slate-500 truncate min-w-0 flex items-center gap-1">
                        {chat.prefix && <span className="text-slate-400 font-medium shrink-0">{chat.prefix}</span>}
                        {chat.hasDraft && <PenLine className="w-3 h-3 text-slate-400 shrink-0" />}
                        {chat.hasAudio && <Mic className="w-2.5 h-2.5 text-slate-400 shrink-0" />}
                        <span className="truncate">{chat.lastMsg}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {chat.tagColor && <Tag className="w-3 h-3" style={{ color: chat.tagColor }} fill="currentColor" />}
                        <div className={`w-4.5 h-4.5 min-w-[18px] rounded-full flex items-center justify-center text-[9px] font-bold ${chat.unread > 0
                          ? 'bg-whatsapp text-white'
                          : 'bg-whatsapp text-white opacity-40'
                          }`}>
                          {chat.unread}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Chat Area */}
          <div className="flex-1 flex flex-col relative bg-[#efeae2] dark:bg-[#0b141a]">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none dark:opacity-[0.03] bg-[url('https://w0.peakpx.com/wallpaper/580/650/wallpaper-whatsapp-doodle-background-logo-brand.jpg')]"></div>
            <div className="h-14 px-4 flex items-center justify-between bg-[#f0f2f5] dark:bg-[#202d33] z-10 border-l border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold">MS</div>
                <div>
                  <div className="text-sm font-bold dark:text-slate-100">Marcos Silva</div>
                  <div className="text-[10px] text-whatsapp font-bold uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-whatsapp rounded-full animate-pulse"></span>
                    Online via BetaDesk
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-slate-500 dark:text-slate-400">
                <Phone className="w-5 h-5 cursor-pointer hover:text-green-500 transition-colors" />
                <MoreVertical className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
              </div>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-3 overflow-y-auto z-10 custom-scrollbar">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`max-w-[75%] p-3 rounded-lg text-sm shadow-sm relative ${msg.type === 'incoming'
                      ? 'bg-white dark:bg-[#1f2c33] self-start rounded-tl-none dark:text-slate-200'
                      : 'bg-[#dcf8c6] dark:bg-[#005c4b] self-end rounded-tr-none dark:text-slate-100'
                      }`}
                  >
                    {msg.type === 'ai' && (
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-whatsapp dark:text-whatsapp-light mb-1 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" /> BetaDesk AI
                      </div>
                    )}
                    <p>{msg.text}</p>
                    <div className="flex justify-end items-center gap-1 mt-1">
                      <span className="text-[9px] opacity-70">10:45</span>
                      {msg.type !== 'incoming' && <CheckCheck className="w-3 h-3 text-blue-400" />}
                    </div>
                  </motion.div>
                ))}

                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`max-w-[70%] p-2 rounded-lg text-xs self-${typing.startsWith('ai') ? 'end' : 'start'} flex items-center gap-2 ${typing.startsWith('ai')
                      ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300'
                      : 'bg-white dark:bg-[#1f2c33] dark:text-slate-300'
                      }`}
                  >
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                    {typing.startsWith('ai') ? 'AI sugerindo resposta...' : 'Atendente digitando...'}
                  </motion.div>
                )}
              </AnimatePresence>
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
