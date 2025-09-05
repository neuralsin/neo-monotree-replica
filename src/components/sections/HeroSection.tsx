import { Star } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';
import { Language, useTranslation } from '@/lib/i18n';
import heroImage from '@/assets/hero-collaboration.jpg';
import appMockup from '@/assets/app-mockup.jpg';

interface HeroSectionProps {
  language: Language;
  onBookDemo: () => void;
}

export const HeroSection = ({ language, onBookDemo }: HeroSectionProps) => {
  const { t } = useTranslation(language);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-1/3 h-1/3 bg-gradient-purple opacity-10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                <span className="gradient-text">{t('hero.title')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-2xl text-primary">4.9</span>
                  <span className="text-muted-foreground ml-2">{t('hero.rating')}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">75.2%</div>
                <div className="text-sm text-muted-foreground">{t('hero.activity')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">4.2</div>
                <div className="text-sm text-muted-foreground">{t('hero.opens')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GlassButton
                variant="demo"
                size="lg"
                onClick={onBookDemo}
                className="animate-glow"
              >
                {t('nav.book-demo')}
              </GlassButton>
              <GlassButton
                variant="hero"
                size="lg"
              >
                {t('common.learn-more')}
              </GlassButton>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Hero Image */}
            <div className="relative w-full max-w-lg animate-float">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="People collaboration"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-primary/20"
              />
            </div>

            {/* Floating App Mockup */}
            <div className="absolute -right-8 -bottom-8 w-48 animate-float" style={{ animationDelay: '1s' }}>
              <div className="glass rounded-2xl p-4 shadow-2xl border border-primary/30">
                <img
                  src={appMockup}
                  alt="App mockup"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -left-8 top-12 glass rounded-xl p-4 shadow-xl border border-primary/30 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">82%</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};