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
    <section id="plantas" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Plantas e Tipologias
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
              Plantas inteligentes,
              <br />
              <span className="text-gradient">espaços bem distribuídos.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Com metragens de aproximadamente 42m², o La Coruña oferece dois tipos de planta com excelente aproveitamento interno.
            </p>

            {/* Features list */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {features.map((feature) => (
                <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  {feature}
                </span>
              ))}
            </div>

            <p className="text-base text-muted-foreground mt-6 max-w-xl mx-auto">
              Um projeto pensado para caber no seu orçamento e na sua vida.
            </p>
          </div>

          {/* Floor plans grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-card border transition-all duration-500 hover:shadow-card ${
                  plan.featured 
                    ? "border-primary/50 shadow-glow/30" 
                    : "border-border/50 hover:border-primary/40"
                }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-bold rounded-full">
                    Destaque
                  </div>
                )}

                {/* Plan ID badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-glow/50">
                  {plan.id}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <Home className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold font-heading mb-2">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.type}</p>

                {/* Areas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.areas.map((area, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium"
                    >
                      <Maximize className="w-3 h-3 text-primary" />
                      {area}
                    </span>
                  ))}
                </div>

                {/* Highlight tag */}
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {plan.highlight}
                </span>

                {/* Floor plan image */}
                <div className="mt-4 rounded-lg bg-white aspect-square overflow-hidden">
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
