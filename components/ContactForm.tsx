'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageSquare, Building2, User, Mail, Phone, Briefcase, Sparkles } from 'lucide-react';
import { useContactForm } from '@/context/ContactContext';

export function ContactForm() {
    const { isOpen, closeContactForm } = useContactForm();
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp'),
            company: formData.get('company'),
            segment: formData.get('segment'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar sua solicitação. Tente novamente.');
            }

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                closeContactForm();
            }, 5000);
        } catch (err: any) {
            setError(err.message || 'Ocorreu um erro inesperado.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <React.Fragment>
                    {/* Overlay for mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeContactForm}
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 md:hidden"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl z-[60] border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="gradient-brand p-6 text-white flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Fale conosco</h3>
                                    <p className="text-xs text-blue-100">Inicie seu atendimento agora</p>
                                </div>
                            </div>
                            <button
                                onClick={closeContactForm}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 flex-1 overflow-y-auto max-h-[60vh] custom-scrollbar">
                            {submitted ? (
                                <div className="py-12 text-center space-y-4">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold">Você está na lista!</h4>
                                    <p className="text-slate-500 dark:text-slate-400">Recebemos seu interesse. Em breve um de nossos consultores entrará em contato com você via WhatsApp para alinhar os próximos passos.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Waitlist Alert */}
                                    <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 p-4 rounded-2xl flex items-start gap-3">
                                        <div className="bg-blue-500 text-white p-1 rounded-lg shrink-0 mt-0.5">
                                            <Sparkles className="w-4 h-4" />
                                        </div>
                                        <div className="text-xs text-blue-800 dark:text-blue-300 leading-tight">
                                            <strong className="block mb-1">Fase de Lançamento</strong>
                                            Estamos preparando o BetaDesk! Ao se cadastrar, você entra em nossa <strong>lista de espera prioritária</strong> e será o primeiro a saber quando liberarmos o acesso.
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 p-3 rounded-xl text-xs text-red-600 dark:text-red-400">
                                            {error}
                                        </div>
                                    )}

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <User className="w-3 h-3" /> Nome Completo
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Ex: João Silva"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Mail className="w-3 h-3" /> E-mail
                                            </label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="joao@empresa.com"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Phone className="w-3 h-3" /> WhatsApp
                                            </label>
                                            <input
                                                required
                                                name="whatsapp"
                                                type="tel"
                                                placeholder="(11) 99999-9999"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Building2 className="w-3 h-3" /> Nome da Empresa
                                        </label>
                                        <input
                                            required
                                            name="company"
                                            type="text"
                                            placeholder="Ex: BetaDesk Inc."
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Briefcase className="w-3 h-3" /> Ramo de Atuação
                                        </label>
                                        <select
                                            required
                                            name="segment"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-700 dark:text-slate-200"
                                        >
                                            <option value="">Selecione um segmento</option>
                                            <option value="varejo">Varejo</option>
                                            <option value="tecnologia">Tecnologia / SaaS</option>
                                            <option value="saude">Saúde / Medicina</option>
                                            <option value="educacao">Educação</option>
                                            <option value="imobiliario">Imobiliário</option>
                                            <option value="servicos">Serviços</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <MessageSquare className="w-3 h-3" /> Mensagem (Opcional)
                                        </label>
                                        <textarea
                                            name="message"
                                            placeholder="Conte-nos um pouco sobre seu desafio..."
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-4 gradient-brand text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Entrar na Lista Prioritária <Send className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-center">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                                🔒 Seus dados estão seguros conosco
                            </p>
                        </div>
                    </motion.div>
                </React.Fragment>
            )}
        </AnimatePresence>
    );
}
