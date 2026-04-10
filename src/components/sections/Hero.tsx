import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Car, Layers, Home } from "lucide-react";
const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden py-20 lg:py-0">
      {/* Soft blue radial gradient behind building */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 70% 70% at 65% 50%, #DCE8FF 0%, transparent 70%),
          linear-gradient(180deg, hsl(var(--background)) 0%, #EDF2FC 40%, #E9F1FF 60%, hsl(var(--background)) 100%)
        `
      }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
                Lançamento Jardim Celeste — São Bernardo do Campo
              </span>
            </div>

            {/* Main heading */}
            <h1 className="opacity-0 animate-fade-up delay-100 font-heading tracking-wide mb-5" style={{ lineHeight: 1.05 }}>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">Os 2 dormitórios mais</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient-accent">COMPLETOS</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">de <span className="text-gradient-accent">São Bernardo.</span></span>
            </h1>

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-up delay-200 text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto lg:mx-0 mb-3" style={{ lineHeight: 1.5 }}>
              Torre única • Elevador • Varanda • Vaga coberta • Lazer completo.
              <br />
              <span className="text-foreground font-medium">Condições especiais pelo Minha Casa Minha Vida.</span>
            </p>

            {/* Strategic complement */}
            <p className="opacity-0 animate-fade-up delay-200 text-sm text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
              A oportunidade de conquistar seu primeiro apartamento em uma das regiões que mais cresce em SBC.
            </p>

            {/* Highlight badges */}
            <div className="opacity-0 animate-fade-up delay-200 flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              {[
                { icon: Building2, text: "Torre Única" },
                { icon: Car, text: "Vaga Coberta" },
                { icon: Layers, text: "Lazer Completo" },
                { icon: Home, text: "Minha Casa Minha Vida" },
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                  <item.icon className="w-3 h-3" />
                  {item.text}
                </span>
              ))}
            </div>

            {/* Location badge */}
            <div className="opacity-0 animate-fade-up delay-200 flex items-center justify-center lg:justify-start gap-2 mb-6 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-xs">Rua Jorge Cândido Marin x Rua Japão — Jd. Celeste, São Bernardo do Campo - SP</span>
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">
                  Quero condições especiais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#plantas">
                  Ver plantas
                </a>
              </Button>
            </div>

          </div>

          {/* Facade Image */}
          <div className="opacity-0 animate-fade-up delay-200 relative">
            <div className="relative">
              <img 
                src={fachada} 
                alt="Fachada do La Coruña - Edifício residencial moderno em São Bernardo do Campo"
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-auto max-h-[50vh] lg:max-h-[78vh] mx-auto object-contain"
                style={{
                  filter: 'contrast(1.08) saturate(1.12) brightness(1.02)',
                }}
                fetchPriority="high"
                width={1024}
                height={1408}
              />
              {/* Subtle edge blend - not white, matches blue gradient bg */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                  linear-gradient(to right, #E9F1FF 0%, transparent 8%),
                  linear-gradient(to left, #E9F1FF 0%, transparent 8%),
                  linear-gradient(to bottom, transparent 0%, transparent 85%, #E9F1FFcc 100%)
                `
              }} />
              {/* Architectural ground shadow */}
              <div className="absolute bottom-0 left-[10%] right-[10%] h-8 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, hsl(221 40% 30% / 0.15) 0%, transparent 70%)',
                filter: 'blur(6px)',
              }} />
              {/* Warm glow on lower portion */}
              <div className="absolute bottom-[5%] left-[20%] right-[20%] h-[20%] pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center bottom, hsl(30 60% 70% / 0.08) 0%, transparent 70%)',
              }} />
              {/* Subtle vignette */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 50%, hsl(221 40% 48% / 0.04) 100%)',
              }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
