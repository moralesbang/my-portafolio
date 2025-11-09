import { useTranslation } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Rocket, Calendar } from 'lucide-react';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.items.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Rocket className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-display mb-1">
                          {project.title}
                        </CardTitle>
                        <div className="text-accent font-semibold">
                          {project.organization}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{project.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
