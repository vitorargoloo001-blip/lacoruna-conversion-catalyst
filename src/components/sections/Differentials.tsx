import { Building2, ArrowUpDown, Car, Sunrise, Waves } from "lucide-react";

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
    <section id="diferenciais" className="relative py-24 sm:py-32 bg-gradient-subtle">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Mais completo do que
              <br />
              <span className="text-gradient">você imagina.</span>
            </h2>
          </div>

          {/* Differentials grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className={`group p-6 sm:p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-card ${
                  index === differentials.length - 1 && differentials.length % 3 === 2
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
