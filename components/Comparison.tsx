'use client';

import { X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Comparison() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight"
                    >
                        A evolução do seu WhatsApp
                    </motion.h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Por que empresas que levam o atendimento a sério estão abandonando o WhatsApp Web?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch relative">
                    {/* Connector Arrow for desktop */}
                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white shadow-xl z-10 border-4 border-white dark:border-slate-900">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    {/* WhatsApp Web - The Problems */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 font-bold">
                                <X className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">WhatsApp Web</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                'Sem multiusuário real (limite de aparelhos)',
                                'Zero métricas de atendimento e performance',
                                'Sem controle de quem atende o quê',
                                'Sem filas ou roteamento automático',
                                'Operação dependente de um celular ligado',
                                'Risco constante de banimento manual'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 opacity-60">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* BetaDesk - The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden"
                    >
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20"></div>

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center font-bold">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Com o BetaDesk</h3>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            {[
                                'Multiatendimento real em um só número',
                                'Dashboard completo com KPIs e SLAs',
                                'Roteamento automático por departamento',
                                'Chamadas de voz integradas',
                                'Controle total da equipe e permissões',
                                'Histórico centralizado e imutável',
                                'Conexão estável via API Oficial Cloud'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 transition-transform hover:translate-x-1 duration-200">
                                    <div className="w-5 h-5 bg-whatsapp-light/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-whatsapp-light" />
                                    </div>
                                    <span className="font-semibold text-blue-50">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 relative z-10 text-center">
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                                A escolha das empresas que crescem
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
