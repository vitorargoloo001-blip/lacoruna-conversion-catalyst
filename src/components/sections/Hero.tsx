import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Car, Layers, Home } from "lucide-react";
import logoHero from "@/assets/logo-hero.png";
const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-start pt-6 lg:items-center overflow-hidden lg:py-0">
      {/* Navy profundo institucional */}
      <div className="absolute inset-0" style={{
        background: `var(--gradient-hero)`
      }} />

      {/* Iluminação radial suave atrás da imagem do prédio (lado direito) */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[90%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, hsl(30 60% 70% / 0.18) 0%, hsl(217 30% 35% / 0.08) 35%, transparent 70%)',
        }}
      />

      {/* Grid pattern overlay sutil */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(30 30% 90%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 30% 90%) 1px, transparent 1px)`,
          backgroundSize: '90px 90px'
        }}
      />

      <div className="container relative z-10 px-6 py-4 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left text-primary-foreground">
            {/* Logo */}
            <div className="opacity-0 animate-fade-up -mb-1 lg:-mb-1">
              <img src={logoHero} alt="La Coruña Edifício Residencial" className="h-36 sm:h-40 lg:h-48 w-auto mx-auto lg:mx-0" />
            </div>

            {/* Badge */}
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-1.5 mb-3 lg:mb-5 text-xs font-medium tracking-widest uppercase border border-accent/50 rounded-sm bg-accent/10 text-accent">
                Lançamento Jardim Celeste — São Bernardo do Campo
              </span>
            </div>

            {/* Main heading */}
            <h1 className="opacity-0 animate-fade-up delay-100 font-heading mb-2 lg:mb-5 text-primary-foreground" style={{ lineHeight: 1.1, letterSpacing: '0.02em' }}>
              <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-1 font-light italic opacity-90">Os 2 dormitórios mais</span>
              <span className="block text-[34px] sm:text-5xl md:text-6xl lg:text-7xl text-accent font-semibold leading-none">COMPLETOS</span>
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl">de <span className="text-accent">São Bernardo.</span></span>
            </h1>

            {/* Divisor fino */}
            <div className="opacity-0 animate-fade-up delay-100 hidden lg:block w-24 h-px bg-accent/60 mb-4" />

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-up delay-200 text-sm sm:text-base lg:text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto lg:mx-0 mb-1.5 lg:mb-3" style={{ lineHeight: 1.5 }}>
              Torre única • Elevador • Varanda • Vaga coberta • Lazer completo.
              <br />
              <span className="text-primary-foreground font-medium">Condições especiais pelo Minha Casa Minha Vida.</span>
            </p>

            {/* Strategic complement */}
            <p className="opacity-0 animate-fade-up delay-200 text-xs sm:text-sm text-primary-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-2 lg:mb-4 leading-relaxed">
              A oportunidade de conquistar seu primeiro apartamento em uma das regiões que mais cresce em SBC.
            </p>

            {/* Highlight badges */}
            <div className="opacity-0 animate-fade-up delay-200 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 lg:gap-2 mb-2 lg:mb-4">
              {[
                { icon: Building2, text: "Torre Única" },
                { icon: Car, text: "Vaga Coberta" },
                { icon: Layers, text: "Lazer Completo" },
                { icon: Home, text: "Minha Casa Minha Vida" },
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-foreground/5 text-primary-foreground/90 text-xs font-medium rounded-sm border border-primary-foreground/20">
                  <item.icon className="w-3 h-3 text-accent" />
                  {item.text}
                </span>
              ))}
            </div>

            {/* Location badge */}
            <div className="opacity-0 animate-fade-up delay-200 flex items-center justify-center lg:justify-start gap-2 mb-3 lg:mb-6 text-primary-foreground/70">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-xs">Rua Jorge Cândido Marin x Rua Japão — Jd. Celeste, São Bernardo do Campo - SP</span>
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 lg:gap-3 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto min-h-[48px]">
                <a href="#contato">
                  Quero condições especiais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" asChild className="w-full sm:w-auto min-h-[48px] border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
              {/* Sombra realista sutil apenas na base */}
              <div className="absolute bottom-0 left-[15%] right-[15%] h-6 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, hsl(217 30% 5% / 0.35) 0%, transparent 75%)',
                filter: 'blur(10px)',
              }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
