'use client';

import { Check, X, Sparkles, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-4 tracking-tight font-display"
          >
            Preços transparentes para todos os tamanhos
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Escolha o plano ideal para a sua equipe e comece a escalar as suas vendas no WhatsApp hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Plano Básico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 flex flex-col hover:shadow-xl transition-shadow"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Básico</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Para pequenos negócios e freelancers.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">R$ 149</span>
              <span className="text-slate-500 dark:text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span><strong>1 número</strong> de WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>5 atendentes</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>1.000</strong> conversas mensais</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Sparkles className="text-blue-500 w-5 h-5 shrink-0" />
                <span><strong>20.000</strong> créditos de IA/mês</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Módulo Studio Chatbot</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-2xl border border-slate-300 dark:border-slate-700 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Começar Agora</button>
          </motion.div>

          {/* Plano Profissional (Destaque) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-blue-500 dark:border-blue-400 flex flex-col relative shadow-2xl transform md:-translate-y-4 card-shine"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
              Mais Popular
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Profissional</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Escala real para operações em crescimento.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">R$ 399</span>
              <span className="text-slate-500 dark:text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>5 números</strong> de WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>20 atendentes</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>5.000</strong> conversas/mês</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold">
                <Sparkles className="text-blue-500 w-5 h-5 shrink-0" />
                <span><strong>100.000</strong> créditos de IA/mês</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Suporte a Ligações de Voz</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Módulo Studio Chatbot</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-2xl gradient-brand text-white font-bold hover-gradient transition shadow-lg shadow-blue-200 dark:shadow-none">Escalar Agora</button>
          </motion.div>

          {/* Plano Empresarial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 text-white p-8 rounded-[32px] border border-slate-800 flex flex-col hover:shadow-2xl transition-shadow"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Empresarial</h3>
              <p className="text-slate-400 text-sm">Controle total para grandes corporações.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">R$ 899</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>20 números</strong> de WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Atendentes <strong>Ilimitados</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Até <strong>20.000</strong> conversas/mês</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-400 font-bold">
                <Sparkles className="w-5 h-5 shrink-0" />
                <span><strong>500.000</strong> créditos de IA/mês</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Suporte a Ligações de Voz</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="text-whatsapp w-5 h-5 shrink-0" />
                <span>Módulo Studio Chatbot</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition">Contactar Vendas</button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-2 border-t border-slate-100 dark:border-slate-800 pt-10"
        >
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            Todos os planos incluem Inteligência Artificial integrada para otimizar seu atendimento.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Créditos de IA não utilizados acumulam por 30 dias.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
