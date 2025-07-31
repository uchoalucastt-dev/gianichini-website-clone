import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import antonioProfile from '@/assets/antonio-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-hero text-primary-foreground relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-glow blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme a Comunicação da Sua Prefeitura
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-glow">
                Cursos e Mentorias Especializadas para Gestão Pública
              </div>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0">
                Capacite sua equipe com estratégias comprovadas de comunicação política e digital. 
                Mais de 50 prefeituras já transformaram sua comunicação conosco.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('cursos')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 h-auto"
              >
                Ver Cursos e Mentorias
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 h-auto"
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-8 lg:pt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary-glow">50+</div>
                <div className="text-sm text-primary-foreground/80">Prefeituras Atendidas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary-glow">500+</div>
                <div className="text-sm text-primary-foreground/80">Servidores Capacitados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary-glow">95%</div>
                <div className="text-sm text-primary-foreground/80">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-accent p-1">
                <img 
                  src={antonioProfile} 
                  alt="Antônio Gianichini" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;