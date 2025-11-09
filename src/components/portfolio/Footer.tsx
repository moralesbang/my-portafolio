import { useTranslation } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Juan Morales. {t.footer.rights}.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t.footer.madeWith} <Heart className="h-3 w-3 text-accent fill-accent" /> {t.footer.and} React
          </p>
        </div>
      </div>
    </footer>
  );
};
