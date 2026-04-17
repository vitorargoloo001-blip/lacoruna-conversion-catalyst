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
} from "lucide-react";
import piscina from "@/assets/piscina.jpg";
import churrasqueira from "@/assets/churrasqueira.jpg";

const amenities = [
  { icon: Waves, name: "Piscina" },
  { icon: PartyPopper, name: "Salão de Festas" },
  { icon: Flame, name: "Churrasqueira" },
  { icon: Puzzle, name: "Playground" },
  { icon: Car, name: "Estacionamento organizado" },
  { icon: ArrowUpDown, name: "Quadra" },
];

const Amenities = () => {
  return (
    <section id="lazer" className="relative py-14 sm:py-24 lg:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-primary/40 bg-primary/5 text-primary rounded-sm">
              Lazer Completo
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              Lazer completo para
              <br />
              <span className="text-accent italic font-medium">todas as fases da vida.</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O La Coruña oferece uma estrutura pensada para reunir família e amigos sem sair de casa.
            </p>
          </div>

          {/* Amenities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 bg-secondary/40 border border-border rounded-sm transition-all duration-300 hover:border-accent/60 hover:bg-secondary/60 text-center"
              >
                <div className="w-12 h-12 mx-auto border border-primary/30 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-accent group-hover:bg-accent/5">
                  <amenity.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold font-body text-foreground">
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Highlight quote */}
          <div className="mt-16 mb-12 max-w-3xl mx-auto text-center">
            <div className="w-12 h-px bg-accent/60 mx-auto mb-6" />
            <Building2 className="w-8 h-8 mx-auto mb-4 text-accent" />
            <p className="text-2xl sm:text-3xl font-heading italic text-primary" style={{ lineHeight: 1.3 }}>
              "Um espaço onde sua rotina se transforma em qualidade de vida."
            </p>
            <div className="w-12 h-px bg-accent/60 mx-auto mt-6" />
          </div>

          {/* Images */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="rounded-sm border border-border aspect-video overflow-hidden">
              <img 
                src={piscina} 
                alt="Piscina do La Coruña - Área de lazer com piscina"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={576}
              />
            </div>
            <div className="rounded-sm border border-border aspect-video overflow-hidden">
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
