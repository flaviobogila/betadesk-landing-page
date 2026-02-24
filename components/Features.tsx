'use client';

import React from 'react';
import { Users, Split, MessageSquare, BarChart3, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Users />,
    title: 'Atendimento Multiusuário Real',
    description: 'Vários atendentes no mesmo número com distribuição por fila, histórico compartilhado e suporte a chamadas de voz e vídeo.',
    color: 'hover:border-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: <Split />,
    title: 'Roteamento Inteligente',
    description: 'Direcione automaticamente para Comercial, Suporte ou Financeiro baseado em palavras-chave ou fluxos.',
    color: 'hover:border-whatsapp',
    bg: 'bg-green-50 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400'
  },
  {
    icon: <MessageSquare />,
    title: 'Chatbot Integrado',
    description: 'Menu automático, captura de informações e qualificação de leads 24h com transferência humana.',
    color: 'hover:border-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400'
  },
  {
    icon: <BarChart3 />,
    title: 'Controle e Gestão',
    description: 'Dashboard em tempo real com conversas ativas, tempo médio de resposta (SLA) e performance por atendente.',
    color: 'hover:border-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400'
  },
  {
    icon: <ShieldCheck />,
    title: 'Controle de Permissões',
    description: 'Níveis de acesso personalizados para Admin, Gerente e Atendente, garantindo segurança total.',
    color: 'hover:border-red-500',
    bg: 'bg-red-50 dark:bg-red-900/30',
    text: 'text-red-600 dark:text-red-400'
  },
  {
    icon: <FileText />,
    title: 'Suporte Completo a Mídia',
    description: 'Envie e receba imagens, vídeos, PDFs, áudios e documentos de forma organizada em uma só tela.',
    color: 'hover:border-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/30',
    text: 'text-cyan-600 dark:text-cyan-400'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight"
          >
            Tudo que o WhatsApp Web não entrega
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Funcionalidades desenhadas para quem busca eficiência máxima e profissionalismo absoluto.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${feature.color} transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${feature.bg} ${feature.text} rounded-xl flex items-center justify-center mb-6 [&>svg]:w-6 [&>svg]:h-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
