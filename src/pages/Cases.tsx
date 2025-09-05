import { ExternalLink, MapPin, Users, Building } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { GlassButton } from '@/components/ui/glass-button';

interface CasesProps {
  language: Language;
}

const caseStudies = [
  {
    id: 1,
    company: 'Madklubben Restaurant Group',
    industry: 'Food & Hospitality',
    country: 'Denmark',
    employees: '1500+',
    departments: '46',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    quote: "Monotree helped create a community across our restaurants. It's great to collaborate with Monotree; it's dynamic, and we brainstorm about features, possibilities, and the industry as a whole.",
    results: [
      { metric: '85%', label: 'Employee Engagement' },
      { metric: '92%', label: 'Daily Active Users' },
      { metric: '40%', label: 'Reduced Turnover' },
    ],
    challenge: 'Connecting 1500+ employees across 46 restaurant locations with consistent communication and training.',
    solution: 'Implemented Monotree\'s comprehensive platform for unified communication, training, and social interaction.',
    outcome: 'Created a thriving community that spans all locations, improving collaboration and employee satisfaction.',
  },
  {
    id: 2,
    company: 'Copenhagen Coffee Lab',
    industry: 'Hospitality',
    country: 'Denmark',
    employees: '800+',
    departments: '28',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
    quote: "We launched our app in the autumn of 2021 and I honestly cannot understand how we could run our business beforehand. Communication has not only become easier, but it has also been strengthened.",
    results: [
      { metric: '95%', label: 'Communication Effectiveness' },
      { metric: '78%', label: 'Training Completion Rate' },
      { metric: '60%', label: 'Faster Onboarding' },
    ],
    challenge: 'Streamlining communication and training across multiple coffee shop locations.',
    solution: 'Deployed Monotree for centralized communication, digital training materials, and real-time updates.',
    outcome: 'Revolutionized internal operations with seamless communication and accelerated training processes.',
  },
  {
    id: 3,
    company: 'Nordic Tech Solutions',
    industry: 'Technology',
    country: 'Sweden',
    employees: '2000+',
    departments: '15',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    quote: "The engagement levels we've seen since implementing Monotree have been incredible. Our team feels more connected than ever before, even with remote work.",
    results: [
      { metric: '88%', label: 'Remote Engagement' },
      { metric: '45%', label: 'Improved Collaboration' },
      { metric: '70%', label: 'Faster Decision Making' },
    ],
    challenge: 'Maintaining team cohesion and culture in a hybrid work environment across multiple countries.',
    solution: 'Utilized Monotree\'s social features, communication tools, and culture-building capabilities.',
    outcome: 'Achieved higher engagement rates than pre-pandemic levels while supporting flexible work arrangements.',
  },
  {
    id: 4,
    company: 'Gasoline Grill',
    industry: 'Food Service',
    country: 'Denmark',
    employees: '300+',
    departments: '12',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
    quote: "Monotree transformed how we manage our teams. The platform made it simple to keep everyone aligned and motivated.",
    results: [
      { metric: '90%', label: 'Staff Retention' },
      { metric: '75%', label: 'Training Efficiency' },
      { metric: '50%', label: 'Management Time Saved' },
    ],
    challenge: 'Managing high-volume operations while maintaining consistent quality and staff engagement.',
    solution: 'Implemented Monotree for operational checklists, team communication, and performance tracking.',
    outcome: 'Streamlined operations while building a stronger, more engaged workforce across all locations.',
  },
];

const Cases = ({ language }: CasesProps) => {
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('nav.cases')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how leading organizations are transforming their workplace culture with Monotree
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>3000+ Employees Engaged</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span>100+ Departments</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>5+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className="glass rounded-3xl p-8 md:p-12 border border-primary/20">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Company Info */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-bold gradient-text">
                      {caseStudy.company}
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Industry</div>
                        <div className="font-semibold text-foreground">{caseStudy.industry}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Country</div>
                        <div className="font-semibold text-foreground">{caseStudy.country}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Employees</div>
                        <div className="font-semibold text-foreground">{caseStudy.employees}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Departments</div>
                        <div className="font-semibold text-foreground">{caseStudy.departments}</div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                    "{caseStudy.quote}"
                  </blockquote>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center glass rounded-xl p-4 border border-primary/30">
                        <div className="text-2xl font-bold gradient-text">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.outcome}</p>
                    </div>
                  </div>

                  <GlassButton variant="outline" className="group">
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </GlassButton>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/30">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.company}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join these industry leaders and transform your workplace culture with Monotree
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton variant="demo" size="lg">
              {t('nav.book-demo')}
            </GlassButton>
            <GlassButton variant="hero" size="lg">
              View More Cases
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;