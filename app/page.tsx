import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <Pricing />
      <Footer />
      <ThemeToggle />
    </main>
  );
}
