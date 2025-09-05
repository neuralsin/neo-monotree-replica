import { Language } from '@/lib/i18n';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

interface IndexProps {
  language: Language;
  onBookDemo: () => void;
}

const Index = ({ language, onBookDemo }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection language={language} onBookDemo={onBookDemo} />
      <FeaturesSection language={language} />
      <ProductShowcase language={language} />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
