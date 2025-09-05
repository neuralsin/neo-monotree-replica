import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const { t } = useTranslation(language);

  const footerLinks = {
    product: [
      { name: 'Communication & Social', href: '/product#communication' },
      { name: 'Information & Training', href: '/product#training' },
      { name: 'Well-being & Retention', href: '/product#wellbeing' },
      { name: 'Daily Operations', href: '/product#operations' },
    ],
    company: [
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.cases'), href: '/cases' },
      { name: t('nav.blog'), href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-t from-muted/20 to-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                Monotree
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform HR into people and culture, and streamline your daily operations with your own branded app.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@monotree.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+45 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Copenhagen, Denmark</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/monotree"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors border border-primary/20"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/monotree"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors border border-primary/20"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Monotree. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};