import { useTranslation } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  );
};
