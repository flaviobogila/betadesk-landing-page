import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'BetaDesk | Plataforma Profissional de WhatsApp para Equipes',
  description: 'Substitua o WhatsApp Web pela API Oficial. Atendimento multicanal, chatbots inteligentes e gestão completa para sua equipe escalar vendas no WhatsApp.',
  keywords: ['WhatsApp Business API', 'Chatbot WhatsApp', 'Atendimento Multi-agente', 'CRM WhatsApp', 'Vendas WhatsApp', 'BetaDesk'],
  authors: [{ name: 'BetaDesk Team' }],
  openGraph: {
    title: 'BetaDesk | Gestão Profissional de WhatsApp',
    description: 'Transforme seu WhatsApp em uma máquina de vendas com a API Oficial.',
    url: 'https://betadesk.com.br', // Recomendado atualizar com a URL real depois
    siteName: 'BetaDesk',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetaDesk | WhatsApp Profissional',
    description: 'A estrutura completa para seu time de atendimento e vendas no WhatsApp.',
  },
};

import { ContactProvider } from '@/context/ContactContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300" suppressHydrationWarning>
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}
