'use client';

import { Split, Cpu, Database } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Split />,
    title: 'Roteamento Inteligente',
    description: 'Encaminhe o cliente automaticamente para o setor correto sem intervenção humana.',
    color: 'hover:border-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: <Cpu />,
    title: 'Chatbot Studio',
    description: 'Crie árvores de decisão complexas com arrastar e soltar. Atendimento 24/7.',
    color: 'hover:border-whatsapp',
    bg: 'bg-green-50 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400'
  },
  {
    icon: <Database />,
    title: 'Integração CRM',
    description: 'Sincronize dados dos clientes diretamente com Salesforce, HubSpot e outros.',
    color: 'hover:border-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 font-display"
          >
            A ponte entre você e seu cliente
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400">Funcionalidades desenhadas para quem busca eficiência máxima.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${feature.color} transition-all`}
            >
              <div className={`w-12 h-12 ${feature.bg} ${feature.text} rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
