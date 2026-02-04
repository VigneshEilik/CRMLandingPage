import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PreviousProductsSection from '@/components/PreviousProductsSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FixedLogo from '@/components/FixedLogo';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 grid-pattern" />

      <FixedLogo />
      <HeroSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PreviousProductsSection />
      <PartnersSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
