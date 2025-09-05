import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { GlassButton } from '@/components/ui/glass-button';

interface AboutProps {
  language: Language;
}

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=300&h=300&fit=crop&crop=face',
    bio: 'Passionate about transforming workplace culture through technology.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Leading the technical vision to build scalable HR solutions.',
  },
  {
    name: 'Emma Wilson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Designing user experiences that put people first.',
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Customer Success',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Ensuring our clients achieve their workplace transformation goals.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'People First',
    description: 'We believe that putting people at the center of everything leads to better outcomes for everyone.',
    color: 'from-pink-500 to-red-600',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously innovate to solve real workplace challenges with cutting-edge technology.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We strive to make a positive impact on workplace culture around the world.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from product quality to customer service.',
    color: 'from-green-500 to-emerald-600',
  },
];

const milestones = [
  { year: '2019', event: 'Monotree founded in Copenhagen', description: 'Started with a vision to transform HR' },
  { year: '2020', event: 'First client onboarded', description: 'Madklubben became our first success story' },
  { year: '2021', event: 'Platform expansion', description: 'Added social features and mobile optimization' },
  { year: '2022', event: '1000+ employees milestone', description: 'Reached our first thousand active users' },
  { year: '2023', event: 'International expansion', description: 'Expanded to Sweden and Norway' },
  { year: '2024', event: '3000+ active users', description: 'Continuing rapid growth across Europe' },
];

const About = ({ language }: AboutProps) => {
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-20 left-0 w-1/3 h-1/3 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
                {t('nav.about')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're on a mission to transform workplace culture by putting people first. 
                Founded in Copenhagen, we've grown into a leading platform that helps organizations 
                build stronger, more connected communities.
              </p>
              <GlassButton variant="demo" size="lg">
                {t('common.contact')}
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
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass rounded-3xl p-8 border border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                  <Target className="w-full h-full text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold gradient-text">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To transform traditional HR approaches into dynamic people and culture strategies 
                that engage, inspire, and retain top talent. We believe that when organizations 
                put people first, everyone wins – employees feel valued, teams become more collaborative, 
                and businesses achieve better results.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-4">
                  <Lightbulb className="w-full h-full text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold gradient-text">
                  Our Vision
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in workplace culture transformation, creating a world where 
                every employee feels connected, valued, and empowered to do their best work. 
                We envision workplaces that are not just productive, but also fulfilling and 
                inspiring for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover-lift hover-glow border border-primary/20 text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold gradient-text mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our mission to transform workplace culture
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 glass rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold gradient-text mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The people behind Monotree's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover-lift hover-glow border border-primary/20 text-center"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-primary/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold gradient-text mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your workplace culture? Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton variant="demo" size="lg">
              {t('nav.book-demo')}
            </GlassButton>
            <GlassButton variant="hero" size="lg">
              View Careers
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;