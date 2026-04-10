import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Flame, 
  Puzzle, 
  PartyPopper, 
  Car,
  Building2,
  ArrowUpDown,
  TreePine
} from "lucide-react";
import piscina from "@/assets/piscina.jpg";
import churrasqueira from "@/assets/churrasqueira.jpg";

const amenities = [
  { icon: Waves, name: "Piscina" },
  { icon: PartyPopper, name: "Salão de Festas" },
  { icon: Flame, name: "Churrasqueira" },
  { icon: Puzzle, name: "Playground" },
  { icon: Car, name: "Vaga Coberta" },
  { icon: ArrowUpDown, name: "Elevador" },
  { icon: Building2, name: "Torre Única" },
  { icon: TreePine, name: "Área Verde" },
];

const Amenities = () => {
  return (
    <section id="lazer" className="relative py-24 sm:py-32 bg-gradient-subtle">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Lazer Completo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
              Tudo que sua família precisa,
              <br />
              <span className="text-gradient">em um só lugar.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Áreas de lazer pensadas para toda a família, com piscina, churrasqueira e espaços completos de convivência.
            </p>
          </div>

          {/* Amenities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-card text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold font-heading group-hover:text-primary transition-colors">
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Highlight card */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-primary text-primary-foreground text-center">
            <Building2 className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <p className="text-xl sm:text-2xl font-bold font-heading">
              Torre única com apenas 52 unidades
            </p>
            <p className="text-lg mt-2 opacity-90">
              Mais exclusividade e tranquilidade para o seu dia a dia
            </p>
          </div>

          {/* Images */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border border-border/50 aspect-video overflow-hidden">
              <img 
                src={piscina} 
                alt="Piscina do La Coruña - Área de lazer com piscina"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={576}
              />
            </div>
            <div className="rounded-2xl bg-card border border-border/50 aspect-video overflow-hidden">
              <img 
                src={churrasqueira} 
                alt="Churrasqueira do La Coruña - Espaço gourmet"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={576}
              />
            </div>
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

export default Amenities;
