import { useState } from 'react';
import { X } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Language, useTranslation } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const BookDemoModal = ({ isOpen, onClose, language }: BookDemoModalProps) => {
  const { t } = useTranslation(language);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Demo booked successfully!",
      description: "We'll contact you within a couple of hours.",
    });
    
    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', source: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md glass rounded-2xl p-6 shadow-2xl animate-fade-in border border-primary/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-display font-bold gradient-text mb-2">
            {t('demo.title')}
          </h2>
          <p className="text-muted-foreground text-sm">
            {t('demo.subtitle')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              {t('demo.name')} *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 glass border-primary/20 focus:border-primary bg-muted/50"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              {t('demo.email')} *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 glass border-primary/20 focus:border-primary bg-muted/50"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              {t('demo.phone')}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 glass border-primary/20 focus:border-primary bg-muted/50"
            />
          </div>

          <div>
            <Label htmlFor="source" className="text-sm font-medium text-foreground">
              {t('demo.source')} *
            </Label>
            <Textarea
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 glass border-primary/20 focus:border-primary bg-muted/50 resize-none"
            />
          </div>

          <GlassButton
            type="submit"
            variant="demo"
            className="w-full mt-6"
          >
            {t('demo.submit')}
          </GlassButton>
        </form>

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground mt-4 text-center">
          {t('demo.privacy')}
        </p>
      </div>
    </div>
  );
};