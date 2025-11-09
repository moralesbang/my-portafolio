import { useTranslation } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="gradient-text">{t.education.title}</span>
          </h2>

          <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-display mb-2">
                    {t.education.degree}
                  </CardTitle>
                  <div className="text-lg font-semibold text-accent mb-3">
                    {t.education.institution}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{t.education.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{t.education.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t.education.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
