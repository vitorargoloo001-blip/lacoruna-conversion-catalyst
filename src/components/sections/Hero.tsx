import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Car, Layers, Home } from "lucide-react";
const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-2 mb-8 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
                Lançamento Jardim Celeste — São Bernardo do Campo
              </span>
            </div>

            {/* Main heading */}
            <h1 className="opacity-0 animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
              O 2 dormitórios mais{" "}
              <span className="text-gradient">COMPLETO</span>
              <br />
              de <span className="text-gradient">São Bernardo.</span>
            </h1>

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-up delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
              Torre única • Elevador • Varanda • Vaga coberta • Lazer completo.
              <br />
              <span className="text-foreground font-medium">Condições especiais pelo Minha Casa Minha Vida.</span>
            </p>

            {/* Strategic complement */}
            <p className="opacity-0 animate-fade-up delay-200 text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              A oportunidade de conquistar seu primeiro apartamento em uma das regiões que mais cresce em SBC.
            </p>

            {/* Highlight badges */}
            <div className="opacity-0 animate-fade-up delay-200 flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              {[
                { icon: Building2, text: "Torre Única" },
                { icon: Car, text: "Vaga Coberta" },
                { icon: Layers, text: "Lazer Completo" },
                { icon: Home, text: "Minha Casa Minha Vida" },
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  <item.icon className="w-3.5 h-3.5" />
                  {item.text}
                </span>
              ))}
            </div>

            {/* Location badge */}
            <div className="opacity-0 animate-fade-up delay-200 flex items-center justify-center lg:justify-start gap-2 mb-10 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Rua Jorge Cândido Marin x Rua Japão — Jd. Celeste, São Bernardo do Campo - SP</span>
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
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
