import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Flame, 
  Puzzle, 
  PartyPopper, 
  Car,
  ArrowUpDown,
} from "lucide-react";
import piscina from "@/assets/piscina.jpg";
import churrasqueira from "@/assets/churrasqueira.jpg";

const amenities = [
  { icon: Waves, name: "Piscina" },
  { icon: PartyPopper, name: "Salão de Festas" },
  { icon: Flame, name: "Churrasqueira" },
  { icon: Puzzle, name: "Playground" },
];

const Amenities = () => {
  return (
    <section id="lazer" className="relative py-20 sm:py-24 bg-[hsl(221_40%_48%/0.06)]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Lazer Completo
            </span>
            <h2 className="text-3xl sm:text-[42px] md:text-5xl font-bold font-heading leading-tight mb-4">
              O lazer que sua família
              <br />
              <span className="text-gradient">merece ter em casa.</span>
            </h2>
          </div>

          {/* Hero image full width */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src={piscina} 
              alt="Piscina do La Coruña - Área de lazer completa"
              className="w-full h-[300px] sm:h-[400px] object-cover"
              loading="lazy"
              width={1200}
              height={400}
            />
          </div>

          {/* Amenities grid - reduced to 4 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 mb-12">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <amenity.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold font-heading group-hover:text-primary transition-colors">
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Second image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src={churrasqueira} 
              alt="Churrasqueira do La Coruña - Espaço gourmet"
              className="w-full h-[300px] sm:h-[400px] object-cover"
              loading="lazy"
              width={1200}
              height={400}
            />
          </div>

          {/* CTA */}
          <div className="text-center">
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
