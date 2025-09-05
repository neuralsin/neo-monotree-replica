import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { GlassButton } from '@/components/ui/glass-button';
import { Input } from '@/components/ui/input';

interface BlogProps {
  language: Language;
}

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Workplace Culture: 5 Trends to Watch in 2024',
    excerpt: 'Discover the key trends shaping modern workplace culture and how organizations can stay ahead of the curve.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Workplace Culture',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Remote Team Engagement: Lessons from 1000+ Employees',
    excerpt: 'Learn practical strategies for maintaining team engagement and culture in hybrid work environments.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Remote Work',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'The ROI of Employee Wellbeing: Why It Matters More Than Ever',
    excerpt: 'Explore the business case for investing in employee wellbeing and how to measure its impact.',
    author: 'Emma Wilson',
    date: '2024-01-05',
    category: 'Employee Wellbeing',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Digital Transformation in HR: A Complete Guide for 2024',
    excerpt: 'Navigate the digital transformation of HR with our comprehensive guide to modern tools and strategies.',
    author: 'David Rodriguez',
    date: '2023-12-28',
    category: 'Digital HR',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Creating Inclusive Workplaces: Best Practices and Real Results',
    excerpt: 'Learn how leading companies are building more inclusive workplaces and the impact on their success.',
    author: 'Sarah Johnson',
    date: '2023-12-20',
    category: 'Diversity & Inclusion',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'The Science of Employee Retention: Data-Driven Strategies',
    excerpt: 'Discover evidence-based approaches to improving employee retention and reducing turnover costs.',
    author: 'Michael Chen',
    date: '2023-12-15',
    category: 'Employee Retention',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    readTime: '9 min read',
    featured: false,
  },
];

const categories = [
  'All',
  'Workplace Culture',
  'Remote Work', 
  'Employee Wellbeing',
  'Digital HR',
  'Diversity & Inclusion',
  'Employee Retention'
];

const Blog = ({ language }: BlogProps) => {
  const { t } = useTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('nav.blog')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights, trends, and best practices for modern workplace culture and employee engagement
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass border-primary/20 bg-muted/50"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'glass border border-primary/20 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12 border border-primary/20 hover-lift hover-glow">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-xs rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 glass border border-primary/30 text-xs rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <GlassButton variant="demo" className="group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </GlassButton>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/30">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="glass rounded-2xl overflow-hidden hover-lift hover-glow border border-primary/20 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 glass border border-primary/30 text-xs rounded-full">
                      <Tag className="w-3 h-3 inline mr-1" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <GlassButton variant="ghost" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </GlassButton>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest insights on workplace culture and employee engagement delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="glass border-primary/20 bg-muted/50"
            />
            <GlassButton variant="demo">
              Subscribe
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;