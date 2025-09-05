import { Users, GraduationCap, Heart, CheckSquare, MessageCircle, BookOpen, FileText, Calendar, BarChart3, UserCheck } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { GlassButton } from '@/components/ui/glass-button';

interface ProductProps {
  language: Language;
}

const productCategories = [
  {
    id: 'communication',
    title: 'Communication & Social',
    icon: MessageCircle,
    color: 'from-blue-500 to-purple-600',
    features: [
      { name: 'Chats', icon: MessageCircle, description: 'Real-time messaging and team communication' },
      { name: 'Social walls', icon: Users, description: 'Company-wide social networking platform' },
      { name: 'Events', icon: Calendar, description: 'Event planning and management tools' },
    ]
  },
  {
    id: 'training',
    title: 'Information & Training',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-600',
    features: [
      { name: 'Onboarding', icon: UserCheck, description: 'Streamlined employee onboarding process' },
      { name: 'Courses', icon: BookOpen, description: 'Interactive learning and development courses' },
      { name: 'Handbooks', icon: FileText, description: 'Digital employee handbooks and policies' },
      { name: 'News', icon: BarChart3, description: 'Company news and announcements' },
    ]
  },
  {
    id: 'wellbeing',
    title: 'Well-being & Retention',
    icon: Heart,
    color: 'from-pink-500 to-red-600',
    features: [
      { name: 'Satisfaction Surveys', icon: Heart, description: 'Employee satisfaction tracking and analysis' },
      { name: 'Development Surveys', icon: BarChart3, description: 'Personal development assessment tools' },
    ]
  },
  {
    id: 'operations',
    title: 'Daily Operations',
    icon: CheckSquare,
    color: 'from-green-500 to-teal-600',
    features: [
      { name: 'To-do Lists', icon: CheckSquare, description: 'Task management and organization' },
      { name: 'Forms', icon: FileText, description: 'Custom forms and data collection' },
    ]
  },
];

const Product = ({ language }: ProductProps) => {
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('nav.product')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            All features your organization needs to build a thriving workplace culture and streamline operations
          </p>
          <GlassButton variant="demo" size="lg">
            {t('nav.book-demo')}
          </GlassButton>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section key={category.id} className="py-20 relative" id={category.id}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`space-y-8 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4`}>
                      <CategoryIcon className="w-full h-full text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold gradient-text">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid gap-6">
                    {category.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={feature.name} className="glass rounded-xl p-6 hover-lift border border-primary/20">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 glass rounded-lg p-3 border border-primary/30">
                              <FeatureIcon className="w-full h-full text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {feature.name}
                              </h3>
                              <p className="text-muted-foreground text-sm">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <GlassButton variant="outline">
                    {t('common.learn-more')}
                  </GlassButton>
                </div>

                {/* Visual */}
                <div className={`relative ${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square glass rounded-3xl p-8 border border-primary/30 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${category.color} p-8 animate-float`}>
                      <CategoryIcon className="w-full h-full text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of organizations already using Monotree to build better workplace culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton variant="demo" size="lg">
              {t('nav.book-demo')}
            </GlassButton>
            <GlassButton variant="hero" size="lg">
              {t('common.contact')}
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;