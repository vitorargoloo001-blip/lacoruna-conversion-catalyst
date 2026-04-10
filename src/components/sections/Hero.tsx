import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Car, Layers, Home, AlertTriangle } from "lucide-react";
const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
                Lançamento Jardim Celeste — São Bernardo do Campo
              </span>
            </div>

            {/* Main heading */}
            <h1 className="opacity-0 animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold font-heading leading-[1.1] mb-6">
              Os 2 dormitórios mais{" "}
              <span className="text-gradient">COMPLETO</span>
              <br />
              de <span className="text-gradient">São Bernardo.</span>
            </h1>

            {/* Bullet points - emotional */}
            <div className="opacity-0 animate-fade-up delay-200 space-y-2 mb-6 max-w-lg mx-auto lg:mx-0">
              {[
                "Torre única com elevador",
                "Vaga coberta garantida",
                "Lazer completo para sua família",
                "Condições exclusivas de lançamento",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-base sm:text-lg text-foreground">
                  <span className="text-primary font-bold">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Urgency trigger */}
            <div className="opacity-0 animate-fade-up delay-200 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 text-accent border border-accent/30 text-sm font-bold rounded-full">
                <AlertTriangle className="w-4 h-4" />
                Unidades limitadas
              </span>
            </div>

            {/* Strategic complement */}
            <p className="opacity-0 animate-fade-up delay-200 text-lg sm:text-xl text-foreground font-semibold max-w-2xl mx-auto lg:mx-0 mb-4">
              💰 Saia do aluguel pagando parcelas a partir de R$ 600.
            </p>

            {/* Location badge */}
            <div className="opacity-0 animate-fade-up delay-300 flex items-center justify-center lg:justify-start gap-2 mb-8 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Rua Jorge Cândido Marin x Rua Japão — Jd. Celeste, SBC</span>
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#contato">
                  Quero condições especiais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#plantas">
                  Ver plantas
                </a>
              </Button>
            </div>

          </div>

          {/* Facade Image */}
          <div className="opacity-0 animate-fade-up delay-200 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={fachada} 
                alt="Fachada do La Coruña - Edifício residencial moderno em São Bernardo do Campo"
                className="w-full h-auto object-cover"
                fetchPriority="high"
                width={1024}
                height={1408}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
