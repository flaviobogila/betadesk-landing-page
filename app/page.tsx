import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'BetaDesk',
            'operatingSystem': 'Web',
            'applicationCategory': 'BusinessApplication',
            'description': 'Plataforma profissional de atendimento via WhatsApp API.',
            'offers': {
              '@type': 'Offer',
              'price': '149.00',
              'priceCurrency': 'BRL',
            },
          }),
        }}
      />
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <Pricing />
      <Footer />
      <ContactForm />
    </main>
  );
}
