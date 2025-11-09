import { useTranslation } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="gradient-text">{t.about.title}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.about.description}
                </p>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <span>{t.about.location}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="h-5 w-5 mt-1 text-accent" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.about.passion}
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-display font-semibold text-lg mb-3">{t.hobbies.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {t.hobbies.list.map((hobby: string) => (
                      <span
                        key={hobby}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-lg mb-3">{t.languages.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.languages.spanish}</span>
                      <span className="text-sm font-medium">{t.languages.native}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.languages.english}</span>
                      <span className="text-sm font-medium">{t.languages.fluent}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
