import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';

const testimonials = [
  {
    id: 1,
    quote: "Monotree helped create a community across our restaurants. It's great to collaborate with Monotree; it's dynamic, and we brainstorm about features, possibilities, and the industry as a whole.",
    author: "Sarah Johnson",
    position: "HR Director",
    company: "Madklubben",
    country: "Denmark",
    industry: "Food",
    employees: "1500+",
    departments: "46",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "We launched our app in the autumn of 2021 and I honestly cannot understand how we could run our business beforehand. Communication has not only become easier, but it has also been strengthened.",
    author: "Michael Chen",
    position: "Operations Manager",
    company: "Copenhagen Coffee Lab",
    country: "Denmark",
    industry: "Hospitality",
    employees: "800+",
    departments: "28",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "The engagement levels we've seen since implementing Monotree have been incredible. Our team feels more connected than ever before.",
    author: "Emma Wilson",
    position: "People & Culture Lead",
    company: "Nordic Group",
    country: "Sweden",
    industry: "Tech",
    employees: "2000+",
    departments: "15",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading organizations worldwide
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div className="relative">
          <div className="glass rounded-3xl p-8 md:p-12 border border-primary/20 max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-center text-foreground mb-8 font-medium">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.position}
                  </div>
                  <div className="text-primary font-medium">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">Country</div>
                  <div className="font-semibold text-foreground">{currentTestimonial.country}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Industry</div>
                  <div className="font-semibold text-foreground">{currentTestimonial.industry}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                  <div className="font-semibold text-foreground">{currentTestimonial.employees}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Departments</div>
                  <div className="font-semibold text-foreground">{currentTestimonial.departments}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <GlassButton
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </GlassButton>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-gradient-primary shadow-lg' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <GlassButton
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </GlassButton>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16">
          <p className="text-center text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex items-center justify-center space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-2xl font-bold">Madklubben</div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-2xl font-bold">Gasoline Grill</div>
            <div className="text-2xl font-bold">DSB</div>
            <div className="text-2xl font-bold">COFOCO</div>
          </div>
        </div>
      </div>
    </section>
  );
};