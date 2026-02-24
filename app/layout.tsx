import type {Metadata} from 'next';
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
  title: 'BetaDesk - Soluções Multi-Agente para WhatsApp',
  description: 'Gestão profissional de WhatsApp com múltiplos atendentes e IA.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
