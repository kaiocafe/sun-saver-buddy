import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calculator, Zap, DollarSign, Leaf, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface FormData {
  consumption: number;
  tariff: number;
  state: string;
}

interface Results {
  monthlyGeneration: number;
  monthlySavings: number;
  annualSavings: number;
  co2Avoided: number;
  paybackYears: number;
  totalSavings25Years: number;
}

const Simulator = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [results, setResults] = useState<Results | null>(null);

  const calculateSavings = (data: FormData) => {
    // Simplified calculation - in production, use real irradiance data by state
    const irradiance = 5.5; // Average daily sun hours in Brazil
    const systemEfficiency = 0.8;
    const losses = 0.15;
    
    // Estimate system size based on consumption
    const monthlyGeneration = data.consumption;
    const systemSize = data.consumption / (irradiance * 30 * systemEfficiency);
    
    // Financial calculations
    const monthlySavings = monthlyGeneration * data.tariff;
    const annualSavings = monthlySavings * 12;
    const systemCost = systemSize * 4500; // R$ per kWp
    const paybackYears = systemCost / annualSavings;
    const totalSavings25Years = (annualSavings * 25) - systemCost;
    
    // Environmental calculations
    const co2Avoided = (monthlyGeneration * 12 * 0.084); // kg CO2 per kWh
    
    setResults({
      monthlyGeneration,
      monthlySavings,
      annualSavings,
      co2Avoided,
      paybackYears,
      totalSavings25Years
    });
  };

  const onSubmit = (data: FormData) => {
    calculateSavings(data);
  };

  const chartData = results ? [
    { name: 'Sem Solar', value: results.monthlySavings },
    { name: 'Com Solar', value: results.monthlySavings * 0.05 }
  ] : [];

  const pieData = results ? [
    { name: 'Economia', value: 95 },
    { name: 'Custo Restante', value: 5 }
  ] : [];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--muted))'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Simulador</span> de Economia
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha os dados abaixo e descubra quanto você pode economizar
            </p>
          </div>

          {/* Form */}
          <Card className="max-w-2xl mx-auto mb-12 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Dados de Consumo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="consumption">Consumo médio mensal (kWh)</Label>
                  <Input
                    id="consumption"
                    type="number"
                    placeholder="Ex: 300"
                    {...register("consumption", { required: true, min: 1 })}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="tariff">Tarifa de energia (R$/kWh)</Label>
                  <Input
                    id="tariff"
                    type="number"
                    step="0.01"
                    placeholder="Ex: 0.75"
                    {...register("tariff", { required: true, min: 0.01 })}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Ex: São Paulo"
                    {...register("state", { required: true })}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Zap className="mr-2 h-5 w-5" />
                  Calcular Economia
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <div className="animate-fade-in space-y-8">
              {/* Results Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover shadow-medium border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <DollarSign className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">Economia Mensal</h3>
                    <p className="text-3xl font-bold text-primary">
                      R$ {results.monthlySavings.toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      R$ {results.annualSavings.toFixed(2)}/ano
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover shadow-medium border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Leaf className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">CO₂ Evitado</h3>
                    <p className="text-3xl font-bold text-primary">
                      {results.co2Avoided.toFixed(0)} kg
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      por ano
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover shadow-medium border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Clock className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">Payback</h3>
                    <p className="text-3xl font-bold text-primary">
                      {results.paybackYears.toFixed(1)} anos
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      tempo de retorno
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Comparação de Custos Mensais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Percentual de Economia</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={100}
                          fill="hsl(var(--primary))"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" onClick={() => setResults(null)}>
                  <Calculator className="mr-2 h-5 w-5" />
                  Refazer Simulação
                </Button>
                <Button size="lg" variant="secondary">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Relatório (PDF)
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Simulator;
