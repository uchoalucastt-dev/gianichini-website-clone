import { useState } from 'react';
import { ExternalLink, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ContentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contents = [
    {
      type: "Artigo",
      title: "O Futuro da Comunicação Política Digital",
      description: "Análise sobre as tendências e inovações que estão transformando a forma como políticos se comunicam com seus eleitores.",
      date: "15 de Janeiro, 2024",
      author: "Revista Política & Comunicação",
      badge: "Destaque",
      link: "#"
    },
    {
      type: "Entrevista",
      title: "Estratégias para Campanhas Eleitorais Modernas",
      description: "Participação no programa 'Política em Foco' discutindo as melhores práticas para campanhas eleitorais eficazes.",
      date: "08 de Dezembro, 2023",
      author: "TV Nacional",
      badge: "TV",
      link: "#"
    },
    {
      type: "Palestra",
      title: "Marketing Político na Era das Redes Sociais",
      description: "Apresentação no Congresso Nacional de Comunicação sobre o impacto das redes sociais na política brasileira.",
      date: "22 de Novembro, 2023",
      author: "Congresso Nacional de Comunicação",
      badge: "Evento",
      link: "#"
    },
    {
      type: "Artigo",
      title: "Transparência e Comunicação Governamental",
      description: "Como a transparência pode ser uma ferramenta poderosa para construir confiança entre governo e população.",
      date: "10 de Outubro, 2023",
      author: "Portal Gestão Pública",
      badge: "Análise",
      link: "#"
    },
    {
      type: "Podcast",
      title: "Inovação em Campanhas Políticas",
      description: "Participação no podcast 'Política Digital' falando sobre inovações tecnológicas em campanhas eleitorais.",
      date: "15 de Setembro, 2023",
      author: "Podcast Política Digital",
      badge: "Áudio",
      link: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(contents.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(contents.length / 3)) % Math.ceil(contents.length / 3));
  };

  const visibleContents = contents.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <section id="conteudos" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Conteúdos Gratuitos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos, entrevistas e participações na mídia sobre comunicação política e marketing digital
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleContents.map((content, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={`
                        ${content.badge === 'Destaque' ? 'text-accent border-accent' : ''}
                        ${content.badge === 'TV' ? 'text-purple-600 border-purple-600' : ''}
                        ${content.badge === 'Evento' ? 'text-green-600 border-green-600' : ''}
                        ${content.badge === 'Análise' ? 'text-blue-600 border-blue-600' : ''}
                        ${content.badge === 'Áudio' ? 'text-orange-600 border-orange-600' : ''}
                      `}
                    >
                      {content.badge}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{content.type}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {content.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {content.author}
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 p-1">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          {contents.length > 3 && (
            <div className="flex justify-center items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevSlide}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(contents.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-accent' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextSlide}
                className="flex items-center"
              >
                Próximo
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-xl p-8 lg:p-12 text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Quer Receber Mais Conteúdos?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber artigos exclusivos, análises e tendências sobre comunicação política diretamente no seu e-mail.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
            >
              Quero Receber Conteúdos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;