import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Car, Layers, Home } from "lucide-react";
import logoHero from "@/assets/logo-hero.png";

const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Deep navy gradient base — exatamente como referência */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, hsl(217 38% 16%) 0%, hsl(217 35% 20%) 50%, hsl(217 32% 24%) 100%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(30 40% 90%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 40% 90%) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Soft radial light behind building */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[75%] h-[95%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 50%, hsl(30 65% 70% / 0.22) 0%, hsl(217 30% 35% / 0.10) 38%, transparent 72%)",
        }}
      />

      <div className="container relative z-10 px-6 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — Text content */}
          <div className="text-left text-primary-foreground">
            {/* Logo */}
            <div className="opacity-0 animate-fade-up mb-8 lg:mb-10">
              <img
                src={logoHero}
                alt="La Coruña Edifício Residencial"
                className="h-44 sm:h-48 lg:h-56 w-auto"
              />
            </div>

            {/* Selo laranja outline */}
            <div className="opacity-0 animate-fade-up delay-100 mb-6 lg:mb-8">
              <span className="inline-block px-4 py-2 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase border border-accent rounded-md bg-transparent text-accent">
                Lançamento Jardim Celeste — São Bernardo do Campo
              </span>
            </div>

            {/* Headline */}
            <h1
              className="opacity-0 animate-fade-up delay-200 font-heading mb-6 lg:mb-8 text-primary-foreground"
              style={{ lineHeight: 1.0, letterSpacing: "0.01em" }}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl mb-2 font-light italic opacity-95">
                Os 2 dormitórios mais
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-accent font-semibold tracking-wide leading-none">
                COMPLETOS
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 italic font-light">
                de <span className="text-accent not-italic font-medium">São Bernardo.</span>
              </span>
            </h1>

            {/* Descrição (replicada da referência) */}
            <div
              className="opacity-0 animate-fade-up delay-300 text-base sm:text-lg text-primary-foreground/90 font-body max-w-xl mb-3"
              style={{ lineHeight: 1.55 }}
            >
              <p>Torre única • Elevador • Varanda • Vaga coberta • Lazer completo,</p>
              <p>Condições especiais pelo Minha Casa Minha Vida.</p>
            </div>

            <p className="opacity-0 animate-fade-up delay-300 text-sm sm:text-base text-primary-foreground/75 font-body max-w-xl mb-6 italic" style={{ lineHeight: 1.55 }}>
              Oportunidade de conquistar seu primeiro apartamento em uma das regiões que mais cresce em SBC.
            </p>

            {/* Tags genéricas */}
            <div className="opacity-0 animate-fade-up delay-300 flex flex-wrap items-center gap-2 mb-8">
              {[
                { icon: Building2, text: "Plantas" },
                { icon: Layers, text: "Lazer" },
                { icon: Car, text: "Vagas" },
                { icon: Home, text: "Benefícios" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-transparent text-primary-foreground/85 text-xs font-medium rounded-md border border-primary-foreground/25"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary-foreground/75" />
                  {item.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row gap-3">
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

          {/* RIGHT — Building image, sem moldura */}
          <div className="opacity-0 animate-fade-up delay-300 relative">
            <img
              src={fachada}
              alt="Fachada do La Coruña - Edifício residencial em São Bernardo do Campo"
              className="block w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none lg:w-auto max-h-[60vh] lg:max-h-[88vh] mx-auto object-contain"
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
