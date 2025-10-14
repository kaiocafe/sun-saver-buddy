import { Link } from "react-router-dom";
import { DollarSign, Leaf, TrendingUp, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSolar from "@/assets/hero-solar.jpg";

const Index = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Economia Mensal",
      description: "Reduza sua conta de luz em até 95% com energia solar"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Ajude o planeta reduzindo emissões de CO₂"
    },
    {
      icon: TrendingUp,
      title: "Retorno Rápido",
      description: "Investimento com retorno em 3 a 7 anos"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Economize com
                <span className="text-gradient block">Energia Solar</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Descubra quanto você pode economizar e ajudar o planeta com um sistema de energia solar.
              </p>
              <Link to="/simulador">
                <Button size="lg" className="text-lg px-8 group">
                  Simular Agora
                  <Calculator className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroSolar} 
                alt="Painéis solares instalados em residência moderna" 
                className="relative rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Por que Escolher <span className="text-gradient">Energia Solar?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Benefícios que fazem a diferença para você e para o planeta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover border-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-solar mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Começar a Economizar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Use nossa calculadora gratuita e descubra o potencial de economia da sua residência ou empresa
          </p>
          <Link to="/simulador">
            <Button size="lg" variant="secondary" className="text-lg px-8 group">
              Calcular Minha Economia
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
