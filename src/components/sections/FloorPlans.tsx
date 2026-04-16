import { Home, Maximize, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import plantaFinal0304 from "@/assets/planta-final-03-04.png";
import plantaFinal0102 from "@/assets/planta-final-01-02.png";

const floorPlans = [
  {
    id: "03/04",
    title: "Finais 03 e 04",
    type: "2 dormitórios com varanda",
    areas: ["42,415 m²"],
    highlight: "2 Dormitórios",
    image: plantaFinal0304,
  },
  {
    id: "01/02",
    title: "Finais 01 e 02",
    type: "2 dormitórios com varanda",
    areas: ["42,565 m²"],
    highlight: "2 Dormitórios",
    featured: true,
    image: plantaFinal0102,
  },
];

const features = [
  "2 dormitórios",
  "Sala integrada",
  "Cozinha funcional",
  "Banheiro bem distribuído",
  "Varanda",
];

const FloorPlans = () => {
  return (
    <section id="plantas" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-primary/40 bg-primary/5 text-primary rounded-sm">
              Plantas e Tipologias
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              Plantas inteligentes,
              <br />
              <span className="text-accent italic font-medium">espaços bem distribuídos.</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Com metragens de aproximadamente 42m², o La Coruña oferece dois tipos de planta com excelente aproveitamento interno.
            </p>

            {/* Features list */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {features.map((feature) => (
                <span key={feature} className="inline-flex items-center px-3 py-1.5 bg-primary/5 text-primary text-xs font-medium tracking-wider uppercase border border-primary/20 rounded-sm">
                  {feature}
                </span>
              ))}
            </div>

            <p className="text-base text-muted-foreground mt-6 max-w-xl mx-auto italic font-heading">
              Um projeto pensado para caber no seu orçamento e na sua vida.
            </p>
          </div>

          {/* Floor plans grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-card rounded-sm border transition-all duration-500 ${
                  plan.featured 
                    ? "border-accent/60 shadow-elegant" 
                    : "border-border hover:border-primary/40"
                }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-[10px] font-bold tracking-widest uppercase rounded-sm">
                    Destaque
                  </div>
                )}

                {/* Plan ID badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-sm bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {plan.id}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading text-primary mb-1" style={{ letterSpacing: '0.02em' }}>{plan.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{plan.type}</p>

                <div className="w-10 h-px bg-accent/60 mb-4" />

                {/* Areas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.areas.map((area, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary border border-border rounded-sm text-sm font-medium font-body"
                    >
                      <Maximize className="w-3 h-3 text-accent" />
                      {area}
                    </span>
                  ))}
                </div>

                {/* Highlight tag */}
                <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase rounded-sm">
                  {plan.highlight}
                </span>

                {/* Floor plan image */}
                <div className="mt-4 rounded-sm bg-white aspect-square overflow-hidden border border-border">
                  <img 
                    src={plan.image} 
                    alt={`Planta 3D do apartamento ${plan.id} - ${plan.type}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                Ver planta ampliada
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
