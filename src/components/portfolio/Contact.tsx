import { useTranslation } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'moralesbang.dev@gmail.com',
    href: 'mailto:moralesbang.dev@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+57 350 582 4901',
    href: 'tel:+573505824901'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Medellín, Colombia',
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/juanmorales' // Update with actual GitHub
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/juan-morales' // Update with actual LinkedIn
  }
];

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {t.contact.email}
                  </h3>
                  <div className="space-y-4">
                    {contactLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <motion.div
                          key={link.label}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3"
                        >
                          <Icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              {link.label}
                            </div>
                            {link.href ? (
                              <a
                                href={link.href}
                                className="text-foreground hover:text-primary transition-colors"
                              >
                                {link.value}
                              </a>
                            ) : (
                              <span className="text-foreground">{link.value}</span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    {t.contact.social}
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Button
                          key={link.label}
                          variant="outline"
                          className="w-full justify-start gap-3"
                          asChild
                        >
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="h-4 w-4" />
                            {link.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="w-full gradient-primary hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a href="mailto:moralesbang.dev@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        {t.contact.sendMessage}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
