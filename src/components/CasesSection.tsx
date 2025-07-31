import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CasesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      title: "Prefeitura de São João do Vale - Comunicação Digital",
      description: "Implementação completa de estratégia digital que aumentou aprovação em 45%",
      category: "Gestão Municipal",
      results: [
        { label: "Aprovação", value: "+45%", icon: Users },
        { label: "Engajamento", value: "380%", icon: TrendingUp },
        { label: "Transparência", value: "98%", icon: Award }
      ],
      details: [
        "Criação de portal da transparência moderno",
        "Implementação de redes sociais oficiais",
        "Treinamento de equipe de comunicação",
        "Sistema de ouvidoria digital"
      ],
      challenge: "Baixa aprovação da gestão e falta de transparência",
      solution: "Estratégia 360° de comunicação digital e transparência",
      outcome: "Maior índice de aprovação da história do município em 18 meses"
    },
    {
      title: "Prefeitura de Vila Nova - Curso de Comunicação",
      description: "Capacitação completa da equipe resultou em comunicação mais eficaz",
      category: "Treinamento",
      results: [
        { label: "Equipe Treinada", value: "25", icon: Award },
        { label: "Melhoria", value: "60%", icon: TrendingUp },
        { label: "Satisfação", value: "95%", icon: Users }
      ],
      details: [
        "Curso de 8 semanas para toda equipe",
        "Workshop de gestão de crises",
        "Implementação de novos processos",
        "Acompanhamento pós-treinamento"
      ],
      challenge: "Equipe sem conhecimento técnico em comunicação digital",
      solution: "Programa de capacitação intensiva e mentoria",
      outcome: "Equipe autônoma e comunicação 60% mais eficaz"
    },
    {
      title: "Prefeitura de Santa Clara - Mentoria Executiva",
      description: "Acompanhamento do prefeito resultou em gestão mais transparente",
      category: "Mentoria Premium",
      results: [
        { label: "ROI", value: "650%", icon: TrendingUp },
        { label: "Aprovação", value: "82%", icon: Users },
        { label: "Reeleição", value: "1º Turno", icon: Award }
      ],
      details: [
        "6 meses de mentoria individual",
        "Reestruturação da comunicação",
        "Treinamento de porta-vozes",
        "Monitoramento de resultados"
      ],
      challenge: "Prefeito com dificuldades de comunicação pública",
      solution: "Mentoria individual focada em liderança e comunicação",
      outcome: "Reeleição no primeiro turno com 67% dos votos"
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
            Resultados Comprovados
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossas soluções transformaram a comunicação de prefeituras em todo o país
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