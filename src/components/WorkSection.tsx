import { Briefcase, Users, Megaphone, BookOpen, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import speakingEvent from '@/assets/speaking-event.jpg';
import consultation from '@/assets/consultation.jpg';

const WorkSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Consultoria Estratégica",
      description: "Desenvolvimento de planos de comunicação personalizados para campanhas eleitorais e gestão pública",
      features: [
        "Análise de cenário político",
        "Estratégia de posicionamento",
        "Planejamento de comunicação",
        "Gestão de crises"
      ],
      image: consultation
    },
    {
      icon: Megaphone,
      title: "Palestras e Treinamentos",
      description: "Compartilhando conhecimento em eventos, workshops e capacitações para equipes",
      features: [
        "Marketing político digital",
        "Comunicação eficaz",
        "Gestão de redes sociais",
        "Oratória e debate"
      ],
      image: speakingEvent
    },
    {
      icon: Target,
      title: "Estratégias Digitais",
      description: "Implementação de campanhas digitais modernas e eficazes para maior engajamento",
      features: [
        "Gestão de redes sociais",
        "Criação de conteúdo",
        "Campanhas pagas",
        "Análise de métricas"
      ]
    }
  ];

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
    <section id="trabalho" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Meu Trabalho
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os serviços e soluções que ofereço para transformar sua comunicação política
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                {service.image ? (
                  <div className="mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                )}
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-xl p-8 lg:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Como Posso Te Ajudar?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Cada projeto é único e merece uma estratégia personalizada. 
                Vamos conversar sobre como posso contribuir para o sucesso da sua comunicação política.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection('contato')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
              >
                Solicitar Consultoria
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('cases')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
              >
                Ver Cases de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;