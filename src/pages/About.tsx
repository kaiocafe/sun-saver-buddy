import { Target, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const steps = [
    {
      icon: Target,
      title: "Insira seu Consumo",
      description: "Informe seu consumo médio mensal de energia elétrica"
    },
    {
      icon: Lightbulb,
      title: "Veja sua Economia",
      description: "Visualize quanto você pode economizar mensalmente e anualmente"
    },
    {
      icon: Users,
      title: "Descubra o Retorno",
      description: "Entenda em quanto tempo seu investimento se paga"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold mb-4">
              Sobre o <span className="text-gradient">Projeto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entenda como funciona nosso simulador e como ele pode ajudá-lo a tomar a melhor decisão
            </p>
          </div>

          {/* Mission */}
          <section className="mb-20">
            <Card className="shadow-medium border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Democratizar o acesso à informação sobre energia solar, permitindo que pessoas e empresas 
                  possam calcular rapidamente o potencial de economia e impacto ambiental positivo da adoção 
                  de sistemas fotovoltaicos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Através de cálculos baseados em dados reais de irradiância solar e tarifas de energia, 
                  oferecemos uma ferramenta confiável e acessível para sua tomada de decisão.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* How it Works */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Como <span className="text-gradient">Funciona</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Três passos simples para descobrir seu potencial de economia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="card-hover shadow-medium animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-solar mb-6">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">{index + 1}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <Card className="gradient-solar text-white shadow-strong">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Benefícios Ambientais</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Redução de CO₂</h3>
                    <p className="opacity-90">
                      Cada kWh gerado por energia solar evita aproximadamente 84g de emissões de CO₂ 
                      na atmosfera, contribuindo diretamente para o combate às mudanças climáticas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Energia Limpa e Renovável</h3>
                    <p className="opacity-90">
                      A energia solar é infinitamente renovável e não gera poluição durante sua operação, 
                      representando uma das formas mais limpas de geração de eletricidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link to="/simulador">
              <Button size="lg" className="text-lg px-8 group">
                Começar Simulação
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
