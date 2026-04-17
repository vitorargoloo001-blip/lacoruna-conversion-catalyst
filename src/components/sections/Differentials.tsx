import { Building2, ArrowUpDown, Car, Sunrise, Waves } from "lucide-react";
import differentialsBg from "@/assets/differentials-bg.jpg";

const differentials = [
  {
    icon: Building2,
    title: "Torre única",
    description: "Mais privacidade, mais exclusividade, mais valorização.",
  },
  {
    icon: ArrowUpDown,
    title: "Elevador",
    description: "Conforto e acessibilidade no seu dia a dia.",
  },
  {
    icon: Car,
    title: "Vaga coberta",
    description: "Proteção e comodidade para seu veículo.",
  },
  {
    icon: Sunrise,
    title: "Varanda",
    description: "Mais ventilação, iluminação e qualidade de vida.",
  },
  {
    icon: Waves,
    title: "Lazer completo",
    description: "Piscina, salão de festas, churrasqueira, quadra e playground.",
  },
];

const Differentials = () => {
  return (
    <section
      id="diferenciais"
      className="relative py-14 sm:py-24 lg:py-32 text-primary-foreground bg-cover bg-center"
      style={{ backgroundImage: `url(${differentialsBg})` }}
    >
      {/* Navy overlay 90% */}
      <div className="absolute inset-0 bg-primary/90" aria-hidden="true" />
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-accent/50 bg-accent/10 text-accent rounded-sm">
              Diferenciais
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              Mais completo do que
              <br />
              <span className="text-accent italic font-medium">você imagina.</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6" />
          </div>

          {/* Differentials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className={`group p-6 sm:p-8 bg-primary-foreground/[0.04] border border-primary-foreground/20 rounded-sm transition-all duration-300 hover:border-accent/60 hover:bg-primary-foreground/[0.07] ${
                  index === differentials.length - 1 && differentials.length % 3 === 2
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent/10">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold font-body mb-2 text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 font-body" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
