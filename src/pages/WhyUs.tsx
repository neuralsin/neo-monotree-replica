import { Zap, Shield, Brain, Users, TrendingUp, Award } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { GlassButton } from '@/components/ui/glass-button';

interface WhyUsProps {
  language: Language;
}

const advantages = [
  {
    icon: Zap,
    title: 'Instant Value',
    description: 'No extra setup or training needed. It works immediately with the content you\'ve already uploaded.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Smart & Secure',
    description: 'Delivers tailored responses based on each user\'s departments and groups - with strict content access controls.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Brain,
    title: 'Deep Understanding',
    description: 'Reads all handbook and course content including PDFs, Word documents, Excel files - and even understands uploaded videos.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'People-First Approach',
    description: 'Transform HR into people and culture focus, making every employee feel valued and connected to your organization.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Our clients see 75.2% average daily activity and 4.2 average daily app opens, with 4.9/5 user satisfaction.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Trusted by 1500+ employees across 46 departments in leading organizations throughout Europe.',
    color: 'from-amber-500 to-yellow-600',
  },
];

const stats = [
  { number: '4.9', label: 'Average User Rating', suffix: '/5' },
  { number: '75.2', label: 'Daily Activity Rate', suffix: '%' },
  { number: '1500+', label: 'Active Employees', suffix: '' },
  { number: '46', label: 'Departments', suffix: '+' },
];

const WhyUs = ({ language }: WhyUsProps) => {
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-20 left-0 w-1/3 h-1/3 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('nav.why-us')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Monotree stands out as the premier solution for modern workplace culture and employee engagement
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-primary/20">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">
              Why Organizations Choose Monotree
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built the most comprehensive and user-friendly platform for modern workplace management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover-lift hover-glow border border-primary/20 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold gradient-text">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Monotree, we believe that putting people first is the key to organizational success. 
                  Our mission is to transform traditional HR approaches into dynamic people and culture strategies 
                  that engage, inspire, and retain top talent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We've designed our platform to be fast, user-friendly, and engaging, ensuring that every 
                  interaction adds value to both employees and organizations. With our comprehensive suite 
                  of tools, we're not just improving workplace efficiency – we're building stronger, 
                  more connected communities.
                </p>
                <GlassButton variant="demo" size="lg">
                  {t('common.learn-more')}
                </GlassButton>
              </div>

              <div className="relative">
                <div className="aspect-square glass rounded-3xl p-8 border border-primary/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-8 animate-float">
                    <Users className="w-full h-full text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Ready to Put People First?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the organizations that have already transformed their workplace culture with Monotree
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

export default WhyUs;