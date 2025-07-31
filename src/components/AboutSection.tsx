import { Award, Users, Target, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Especialização",
      description: "Pós-graduado em Comunicação Política e Marketing Digital"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Mais de 15 anos atuando em campanhas eleitorais de sucesso"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Estratégias comprovadas com alto índice de aprovação"
    },
    {
      icon: BookOpen,
      title: "Conhecimento",
      description: "Professor e palestrante em universidades e eventos"
    }
  ];

  const companies = [
    "Prefeitura Municipal",
    "Governo do Estado", 
    "Câmara dos Deputados",
    "Senado Federal",
    "Tribunal de Justiça",
    "Assembleia Legislativa"
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Quem Sou Eu
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça minha trajetória e experiência na comunicação política
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 leading-relaxed">
                  Atuo no marketing político há mais de 15 anos, com foco em estratégias digitais e comunicação eleitoral. 
                  Minha paixão é transformar a forma como políticos e gestores se conectam com seus eleitores, 
                  utilizando as ferramentas mais inovadoras do mercado.
                </p>
                
                <p className="text-foreground/90 leading-relaxed">
                  Durante minha carreira, tive o privilégio de trabalhar com diversos candidatos, desde vereadores até 
                  governadores, sempre focando em estratégias personalizadas que respeitam as particularidades de cada 
                  região e eleitorado. Acredito que a comunicação política eficaz vai além das campanhas eleitorais, 
                  sendo fundamental para uma gestão transparente e próxima da população.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  Como professor e palestrante, compartilho conhecimento em universidades e eventos pelo país, 
                  contribuindo para a formação de novos profissionais e para o aperfeiçoamento da comunicação 
                  política brasileira. Meu compromisso é com a ética, transparência e eficácia em todas as estratégias desenvolvidas.
                </p>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-card transition-shadow border-l-4 border-l-accent">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Companies/Institutions */}
          <div className="bg-muted rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">
              Instituições e Órgãos Atendidos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="text-center p-3 bg-background rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-medium text-foreground/80">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;