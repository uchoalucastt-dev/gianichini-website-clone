import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CasesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      title: "Campanha Prefeito Municipal 2020",
      description: "Estratégia digital que resultou em vitória no primeiro turno",
      category: "Campanha Municipal",
      results: [
        { label: "Engajamento", value: "250%", icon: Users },
        { label: "Alcance", value: "1.2M", icon: TrendingUp },
        { label: "Resultado", value: "Vitória", icon: Award }
      ],
      details: [
        "Desenvolvimento de identidade visual moderna",
        "Estratégia de conteúdo multiplataforma",
        "Gestão de crises em tempo real",
        "Monitoramento e análise de métricas"
      ],
      challenge: "Candidato com baixo conhecimento inicial e forte oposição",
      solution: "Campanha focada em proximidade com o eleitor e propostas concretas",
      outcome: "Vitória no primeiro turno com 52% dos votos válidos"
    },
    {
      title: "Gestão da Comunicação Governamental 2021-2024",
      description: "Modernização da comunicação de uma prefeitura de médio porte",
      category: "Gestão Pública",
      results: [
        { label: "Aprovação", value: "78%", icon: Award },
        { label: "Transparência", value: "95%", icon: TrendingUp },
        { label: "Participação", value: "180%", icon: Users }
      ],
      details: [
        "Implementação de canais digitais oficiais",
        "Criação de boletins informativos semanais",
        "Desenvolvimento de portal da transparência",
        "Capacitação da equipe de comunicação"
      ],
      challenge: "Baixa confiança da população na gestão anterior",
      solution: "Estratégia de transparência total e comunicação direta",
      outcome: "Maior índice de aprovação da história do município"
    },
    {
      title: "Campanha Estadual - Assembleia Legislativa 2022",
      description: "Posicionamento de candidato novato em disputa acirrada",
      category: "Campanha Estadual",
      results: [
        { label: "Crescimento", value: "300%", icon: TrendingUp },
        { label: "Votos", value: "45K", icon: Users },
        { label: "Posição", value: "3º lugar", icon: Award }
      ],
      details: [
        "Estratégia de diferenciação temática",
        "Campanha digital inovadora",
        "Parcerias estratégicas locais",
        "Eventos de mobilização regional"
      ],
      challenge: "Candidato sem experiência política prévia",
      solution: "Foco em competência técnica e propostas inovadoras",
      outcome: "Eleito deputado estadual com votação expressiva"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCaseData = cases[currentCase];

  return (
    <section id="cases" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Cases de Sucesso
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns projetos que transformaram a comunicação política e geraram resultados excepcionais
          </p>
        </div>

        {/* Case Showcase */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-6 lg:p-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-accent border-accent">
                      {currentCaseData.category}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {currentCase + 1} de {cases.length}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl text-primary mb-3">
                    {currentCaseData.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {currentCaseData.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-0 pb-0">
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {currentCaseData.results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-muted rounded-lg">
                        <result.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="text-xl font-bold text-primary">{result.value}</div>
                        <div className="text-sm text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Principais Ações:</h4>
                      <ul className="space-y-1">
                        {currentCaseData.details.map((detail, index) => (
                          <li key={index} className="flex items-center text-sm text-foreground/80">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>

              {/* Details Side */}
              <div className="bg-muted p-6 lg:p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      Desafio
                    </h4>
                    <p className="text-foreground/80 text-sm">{currentCaseData.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      Solução
                    </h4>
                    <p className="text-foreground/80 text-sm">{currentCaseData.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      Resultado
                    </h4>
                    <p className="text-foreground/80 text-sm">{currentCaseData.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevCase}
              className="flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>
            
            <div className="flex space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCase ? 'bg-accent' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextCase}
              className="flex items-center"
            >
              Próximo
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;