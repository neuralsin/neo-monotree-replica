import { MessageCircle, BookOpen, Heart, CheckSquare } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface FeaturesSectionProps {
  language: Language;
}

const features = [
  {
    icon: MessageCircle,
    key: 'communication',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: BookOpen,
    key: 'information',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Heart,
    key: 'wellbeing',
    gradient: 'from-pink-500 to-red-600',
  },
  {
    icon: CheckSquare,
    key: 'operations',
    gradient: 'from-green-500 to-teal-600',
  },
];

export const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const { t } = useTranslation(language);

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything your organization needs to build a thriving workplace culture
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group glass rounded-2xl p-6 hover-lift hover-glow transition-all duration-500 border border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`features.${feature.key}.desc`)}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Additional Features List */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Instant Value</h3>
            <p className="text-muted-foreground text-sm">
              No extra setup or training needed. It works immediately with the content you've already uploaded.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Smart & Secure</h3>
            <p className="text-muted-foreground text-sm">
              Delivers tailored responses based on each user's departments and groups - with strict content access controls.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Deep Understanding</h3>
            <p className="text-muted-foreground text-sm">
              Reads all handbook and course content including PDFs, Word documents, Excel files - and even understands uploaded videos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};