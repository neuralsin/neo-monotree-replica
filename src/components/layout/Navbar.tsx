import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';
import { cn } from '@/lib/utils';
import { Language, languages, useTranslation } from '@/lib/i18n';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBookDemo: () => void;
}

export const Navbar = ({ language, onLanguageChange, onBookDemo }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation(language);

  const navigation = [
    { name: t('nav.product'), href: '/product' },
    { name: t('nav.why-us'), href: '/why-us' },
    { name: t('nav.cases'), href: '/cases' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.blog'), href: '/blog' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-display font-bold gradient-text">
              Monotree
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-300 hover:text-primary relative',
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <GlassButton
                variant="ghost"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{languages[language]}</span>
                <ChevronDown className="w-3 h-3" />
              </GlassButton>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 glass rounded-xl border border-primary/20 shadow-lg z-50">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        onLanguageChange(code as Language);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        'w-full px-4 py-2 text-left text-sm transition-colors hover:bg-primary/10 first:rounded-t-xl last:rounded-b-xl',
                        language === code ? 'text-primary bg-primary/5' : 'text-foreground'
                      )}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Demo Button */}
            <GlassButton
              variant="demo"
              onClick={onBookDemo}
              className="animate-glow"
            >
              {t('nav.book-demo')}
            </GlassButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <GlassButton
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </GlassButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass border-t border-primary/20 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'block text-base font-medium transition-colors',
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-primary/20">
                <GlassButton
                  variant="demo"
                  onClick={() => {
                    onBookDemo();
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  {t('nav.book-demo')}
                </GlassButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};