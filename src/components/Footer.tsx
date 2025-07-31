import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickLinks = [
    { label: "Meu Trabalho", href: "#trabalho" },
    { label: "Quem Sou", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Conteúdos", href: "#conteudos" },
    { label: "Contato", href: "#contato" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Antônio Gianichini</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Especialista em Comunicação e Marketing Político com mais de 15 anos de experiência 
                transformando a comunicação de candidatos e gestores públicos.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">
                    antonio@gianichini.com.br
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">
                    +55 (11) 99999-9999
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-glow flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">
                    São Paulo - SP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Antônio Gianichini. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </button>
              <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;