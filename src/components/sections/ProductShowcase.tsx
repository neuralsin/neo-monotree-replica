import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, GraduationCap, Heart, Clipboard } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';
import { Language, useTranslation } from '@/lib/i18n';
import analyticsImage from '@/assets/analytics-abstract.jpg';

interface ProductShowcaseProps {
  language: Language;
}

const products = [
  {
    id: 'communication',
    icon: Users,
    title: 'Communication & Social',
    description: 'Chats, Social walls, Events',
    features: ['Real-time messaging', 'Team collaboration', 'Event planning'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Information & Training',
    description: 'Onboarding, Courses, Handbooks, News',
    features: ['Interactive courses', 'Digital handbooks', 'Company news'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'wellbeing',
    icon: Heart,
    title: 'Well-being & Retention',
    description: 'Satisfaction Surveys, Development Surveys',
    features: ['Employee feedback', 'Wellness tracking', 'Retention insights'],
    color: 'from-pink-500 to-red-600',
  },
  {
    id: 'operations',
    icon: Clipboard,
    title: 'Daily Operations',
    description: 'To-do Lists, Forms',
    features: ['Task management', 'Custom forms', 'Workflow automation'],
    color: 'from-green-500 to-teal-600',
  },
];

export const ProductShowcase = ({ language }: ProductShowcaseProps) => {
  const { t } = useTranslation(language);
  const [activeProduct, setActiveProduct] = useState(0);

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[activeProduct];
  const Icon = currentProduct.icon;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/10 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Showcase */}
          <div className="space-y-8">
            {/* Product Navigation */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-display font-bold gradient-text">
                Product Features
              </h2>
              <div className="flex space-x-2">
                <GlassButton
                  variant="ghost"
                  size="icon"
                  onClick={prevProduct}
                >
                  <ChevronLeft className="w-4 h-4" />
                </GlassButton>
                <GlassButton
                  variant="ghost"
                  size="icon"
                  onClick={nextProduct}
                >
                  <ChevronRight className="w-4 h-4" />
                </GlassButton>
              </div>
            </div>

            {/* Active Product */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover-glow">
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentProduct.color} p-4 flex-shrink-0`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {currentProduct.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentProduct.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {currentProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <GlassButton
                    variant="outline"
                    className="mt-4"
                  >
                    {t('common.learn-more')}
                  </GlassButton>
                </div>
              </div>
            </div>

            {/* Product Indicators */}
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProduct 
                      ? 'bg-gradient-primary shadow-lg' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl animate-glow" />
            <div className="relative glass rounded-3xl p-8 border border-primary/30">
              <img
                src={analyticsImage}
                alt="Product showcase"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-4 right-4 glass rounded-xl p-3 border border-primary/30">
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text">
                    {activeProduct === 0 ? '95%' : activeProduct === 1 ? '87%' : activeProduct === 2 ? '92%' : '89%'}
                  </div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass rounded-xl p-3 border border-primary/30">
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text">
                    {activeProduct === 0 ? '1.2k' : activeProduct === 1 ? '856' : activeProduct === 2 ? '743' : '2.1k'}
                  </div>
                  <div className="text-xs text-muted-foreground">Daily Actions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};