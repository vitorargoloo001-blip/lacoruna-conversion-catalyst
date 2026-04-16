import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Car, Layers, Home } from "lucide-react";
import logoHero from "@/assets/logo-hero.png";

const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Deep navy gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, hsl(217 35% 14%) 0%, hsl(217 32% 18%) 45%, hsl(217 30% 22%) 100%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(30 40% 90%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 40% 90%) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Soft radial light behind building (right side) */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[75%] h-[95%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 50%, hsl(30 65% 70% / 0.22) 0%, hsl(217 30% 35% / 0.10) 38%, transparent 72%)",
        }}
      />

      <div className="container relative z-10 px-6 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — Text content */}
          <div className="text-center lg:text-left text-primary-foreground">
            {/* Logo */}
            <div className="opacity-0 animate-fade-up mb-6 lg:mb-8">
              <img
                src={logoHero}
                alt="La Coruña Edifício Residencial"
                className="h-40 sm:h-44 lg:h-52 w-auto mx-auto lg:mx-0"
              />
            </div>

            {/* Top badge — orange outline */}
            <div className="opacity-0 animate-fade-up delay-100 mb-6 lg:mb-8">
              <span className="inline-block px-4 py-2 text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase border border-accent rounded-md bg-transparent text-accent">
                Lançamento Jardim Celeste — São Bernardo do Campo
              </span>
            </div>

            {/* Headline */}
            <h1
              className="opacity-0 animate-fade-up delay-200 font-heading mb-6 lg:mb-8 text-primary-foreground"
              style={{ lineHeight: 1.05, letterSpacing: "0.01em" }}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 font-light italic opacity-95">
                Os 2 dormitórios mais
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent font-semibold tracking-wide">
                COMPLETOS
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 italic font-light">
                de <span className="text-accent not-italic font-medium">São Bernardo.</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="opacity-0 animate-fade-up delay-300 text-base sm:text-lg text-primary-foreground/85 font-body max-w-xl mx-auto lg:mx-0 mb-6"
              style={{ lineHeight: 1.55 }}
            >
              Torre única • Elevador • Varanda • Vaga coberta • Lazer completo.
              <br />
              <span className="text-primary-foreground font-medium">
                Condições especiais pelo Minha Casa Minha Vida.
              </span>
            </p>

            {/* Tags */}
            <div className="opacity-0 animate-fade-up delay-300 flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {[
                { icon: Building2, text: "Torre Única" },
                { icon: Car, text: "Vaga Coberta" },
                { icon: Layers, text: "Lazer Completo" },
                { icon: Home, text: "Minha Casa Minha Vida" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-transparent text-primary-foreground/90 text-xs font-medium rounded-md border border-primary-foreground/20"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary-foreground/80" />
                  {item.text}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:brightness-110 border-0 shadow-none"
              >
                <a href="#contato">
                  Quero condições especiais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-none"
              >
                <a href="#plantas">Ver plantas</a>
              </Button>
            </div>
          </div>

          {/* RIGHT — Building image, no frame */}
          <div className="opacity-0 animate-fade-up delay-300 relative">
            <img
              src={fachada}
              alt="Fachada do La Coruña - Edifício residencial em São Bernardo do Campo"
              className="block w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none lg:w-auto max-h-[60vh] lg:max-h-[82vh] mx-auto object-contain"
              style={{
                filter: "contrast(1.12) saturate(1.18) brightness(1.05)",
              }}
              fetchPriority="high"
              width={1024}
              height={1408}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
