import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Location = () => {
  const [showMap, setShowMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="localizacao" className="relative py-14 sm:py-24 lg:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-primary/40 bg-primary/5 text-primary rounded-sm">
              Localização Privilegiada
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              No coração do Jardim Celeste,
              <br />
              <span className="text-accent italic font-medium">São Bernardo do Campo.</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Localizado na Rua Jorge Cândido Marin com Rua Japão, o La Coruña está em uma região estratégica, com fácil acesso a comércios, escolas, transporte e serviços.
            </p>
            <p className="text-base text-foreground font-medium font-heading italic mt-4 max-w-xl mx-auto">
              Uma localização que facilita o seu dia a dia e valoriza seu investimento.
            </p>
          </div>

          {/* Address card */}
          <div className="bg-background border border-primary/20 rounded-sm p-8 sm:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-14 h-14 border-2 border-accent flex items-center justify-center">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-heading text-primary mb-2" style={{ letterSpacing: '0.02em' }}>
                  Rua Jorge Cândido Marin x Rua Japão
                </h3>
                <p className="text-base text-muted-foreground">
                  Jardim Celeste, São Bernardo do Campo - SP
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps embed - lazy loaded */}
          <div 
            ref={mapContainerRef}
            className="mt-12 rounded-sm border border-border overflow-hidden w-full h-[300px] md:h-auto md:aspect-video"
          >
            {showMap ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.55!3d-23.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJardim%20Celeste%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1706300000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização La Coruña - Jardim Celeste, São Bernardo do Campo"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted/50">
                <MapPin className="w-12 h-12 text-muted-foreground animate-pulse" />
              </div>
            )}
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

export default Location;
