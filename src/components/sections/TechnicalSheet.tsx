import { Building2, Users, Ruler, Layers, ArrowUpDown, Home, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const technicalData = [
  {
    icon: Home,
    label: "Tipologia",
    value: "2 dormitórios com varanda",
  },
  {
    icon: Building2,
    label: "Torre",
    value: "Torre única",
  },
  {
    icon: Layers,
    label: "Total de unidades",
    value: "52 unidades",
  },
  {
    icon: ArrowUpDown,
    label: "Elevador",
    value: "Sim",
  },
  {
    icon: Ruler,
    label: "Metragens",
    value: "42,415 m² a 42,565 m²",
  },
  {
    icon: Users,
    label: "Programa",
    value: "Minha Casa Minha Vida",
  },
  {
    icon: Calendar,
    label: "Entrega prevista",
    value: "Julho/2028",
  },
  {
    icon: Home,
    label: "Vaga",
    value: "1 vaga coberta por unidade",
  },
];

const TechnicalSheet = () => {
  return (
    <section id="ficha-tecnica" className="relative py-24 sm:py-32 bg-gradient-subtle">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Ficha Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Detalhes do
              <br />
              <span className="text-gradient">empreendimento</span>
            </h2>
          </div>

          {/* Technical data grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalData.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-body mb-1">{item.label}</p>
                <p className="text-lg font-semibold font-body group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* MCMV Highlight */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-primary text-primary-foreground text-center">
            <Home className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <p className="text-xl sm:text-2xl font-bold font-heading">
              Programa Minha Casa Minha Vida
            </p>
            <p className="text-lg mt-2 opacity-90 font-body">
              Aceita FGTS • Parcelas a partir de R$ 600 • A partir de R$ 360.000
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                Quero condições especiais
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSheet;
