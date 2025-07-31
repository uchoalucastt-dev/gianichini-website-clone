import { BookOpen, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CoursesSection = () => {
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

  const courses = [
    {
      title: "Comunicação Digital para Prefeituras",
      description: "Curso completo para modernizar a comunicação da sua gestão municipal",
      duration: "8 semanas",
      format: "Online + Mentorias",
      price: "R$ 2.497",
      originalPrice: "R$ 3.497",
      features: [
        "16 aulas gravadas em alta definição",
        "4 sessões de mentoria ao vivo",
        "Material de apoio exclusivo",
        "Acesso por 12 meses",
        "Certificado de conclusão",
        "Grupo VIP no WhatsApp"
      ],
      highlights: ["Mais Vendido", "Satisfação 98%"],
      testimonial: "Transformou completamente nossa comunicação municipal",
      testimonialAuthor: "Prefeito João Silva"
    },
    {
      title: "Gestão de Crise em Comunicação Pública",
      description: "Aprenda a gerenciar crises de comunicação e proteger a imagem da gestão",
      duration: "4 semanas",
      format: "Intensivo Online",
      price: "R$ 1.497",
      originalPrice: "R$ 1.997",
      features: [
        "8 aulas práticas",
        "2 workshops ao vivo",
        "Simulações de crise",
        "Manual de crise personalizado",
        "Suporte direto por 30 dias",
        "Cases reais estudados"
      ],
      highlights: ["Novo Lançamento"],
      testimonial: "Nos salvou durante uma crise real",
      testimonialAuthor: "Secretária Maria Santos"
    },
    {
      title: "Mentoria Executiva Para Gestores",
      description: "Acompanhamento personalizado para prefeitos e secretários",
      duration: "3 meses",
      format: "1:1 + Grupo",
      price: "R$ 4.997",
      originalPrice: "R$ 6.997",
      features: [
        "6 sessões individuais",
        "Análise completa da comunicação atual",
        "Plano estratégico personalizado",
        "Acompanhamento de implementação",
        "Relatórios mensais de progresso",
        "Acesso direto via WhatsApp"
      ],
      highlights: ["Premium", "Vagas Limitadas"],
      testimonial: "Investimento que se pagou em 30 dias",
      testimonialAuthor: "Prefeito Carlos Lima"
    }
  ];

  return (
    <section id="cursos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Cursos e Mentorias
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capacite sua equipe e transforme a comunicação da sua prefeitura com nossos programas especializados
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 ${
                index === 0 ? 'border-2 border-accent' : ''
              }`}
            >
              {/* Highlights Badges */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                {course.highlights.map((highlight, hIndex) => (
                  <Badge 
                    key={hIndex}
                    variant="secondary"
                    className={`
                      text-xs font-semibold
                      ${highlight === 'Mais Vendido' ? 'bg-accent text-white' : ''}
                      ${highlight === 'Satisfação 98%' ? 'bg-green-500 text-white' : ''}
                      ${highlight === 'Novo Lançamento' ? 'bg-purple-500 text-white' : ''}
                      ${highlight === 'Premium' ? 'bg-gradient-primary text-white' : ''}
                      ${highlight === 'Vagas Limitadas' ? 'bg-red-500 text-white' : ''}
                    `}
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              <CardHeader className="pb-4">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.format}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>

                {/* Pricing */}
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    ou 12x de R$ {Math.round(parseInt(course.price.replace('R$ ', '').replace('.', '')) / 12)},00
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">O que você vai receber:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 italic mb-1">
                    "{course.testimonial}"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    - {course.testimonialAuthor}
                  </p>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full font-semibold ${
                    index === 0 
                      ? 'bg-gradient-primary hover:opacity-90' 
                      : 'bg-gradient-accent hover:opacity-90'
                  }`}
                  size="lg"
                  onClick={() => scrollToSection('contato')}
                >
                  Quero Este Curso
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-xl p-8 lg:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <Award className="h-12 w-12 mx-auto mb-4 text-primary-glow" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Garantia de 30 Dias ou Seu Dinheiro de Volta
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Estamos tão confiantes na qualidade dos nossos cursos que oferecemos 
              garantia total. Se não ficar satisfeito, devolvemos 100% do seu investimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection('contato')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
              >
                Falar com Consultor
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('cases')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
              >
                Ver Resultados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;