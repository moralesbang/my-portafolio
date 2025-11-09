import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Wrench,
} from 'lucide-react';

const iconMap = {
  frontend: Code2,
  backend: Server,
  mobile: Smartphone,
  tools: Wrench,
};

export const Skills = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      category: 'frontend',
      skills: [t.skills.list.react, t.skills.list.typescript, t.skills.list.javascript, t.skills.list.html, t.skills.list.nextjs, t.skills.list.tailwind, t.skills.list.d3]
    },
    {
      category: 'backend',
      skills: [t.skills.list.nodejs]
    },
    {
      category: 'mobile',
      skills: [t.skills.list.reactNative]
    },
    {
      category: 'tools',
      skills: [t.skills.list.git]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, index) => {
              const Icon = iconMap[group.category as keyof typeof iconMap];
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border-2 border-border hover:border-primary/50 rounded-lg p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg">
                      {t.skills.categories[group.category as keyof typeof t.skills.categories]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
