import { Building2, Users, Ruler, Layers, ArrowUpDown, Home, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const technicalData = [
  { icon: Home, label: "Tipologia", value: "2 dormitórios com varanda" },
  { icon: Building2, label: "Torre", value: "Torre única" },
  { icon: Layers, label: "Total de unidades", value: "52 unidades" },
  { icon: ArrowUpDown, label: "Elevador", value: "Sim" },
  { icon: Ruler, label: "Metragens", value: "42,415 m² a 42,565 m²" },
  { icon: Users, label: "Programa", value: "Minha Casa Minha Vida" },
  { icon: Calendar, label: "Entrega prevista", value: "Julho/2028" },
  { icon: Home, label: "Vaga", value: "1 vaga coberta por unidade" },
];

const TechnicalSheet = () => {
  return (
    <section id="ficha-tecnica" className="relative py-24 sm:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-primary/40 bg-primary/5 text-primary rounded-sm">
              Ficha Técnica
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              Detalhes do
              <br />
              <span className="text-accent italic font-medium">empreendimento</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6" />
          </div>

          {/* Technical data grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalData.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-sm transition-all duration-300 hover:border-accent/60"
              >
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <p className="text-[10px] text-muted-foreground font-body uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-base font-semibold font-body text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* MCMV Highlight */}
          <div className="mt-12 p-10 sm:p-14 text-center text-primary-foreground rounded-sm" style={{ background: 'var(--gradient-hero)' }}>
            <Home className="w-8 h-8 mx-auto mb-4 text-accent" />
            <p className="text-2xl sm:text-3xl font-heading italic" style={{ letterSpacing: '0.02em' }}>
              Programa Minha Casa Minha Vida
            </p>
            <div className="w-12 h-px bg-accent/60 mx-auto my-5" />
            <p className="text-base sm:text-lg opacity-90 font-body">
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
