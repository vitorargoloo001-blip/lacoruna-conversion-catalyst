import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Car, Layers, Home } from "lucide-react";
import logoHero from "@/assets/logo-hero.png";
import heroFrame from "@/assets/hero-frame.png";

const fachada = "/fachada.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-start pt-8 lg:items-center lg:py-0 w-full max-w-full">
      <div
        className="absolute inset-0"
        style={{
          background: `var(--gradient-hero)`,
        }}
      />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[90%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, hsl(30 60% 70% / 0.18) 0%, hsl(217 30% 35% / 0.08) 35%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(30 30% 90%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 30% 90%) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="container relative z-10 w-full max-w-full px-5 lg:px-6 py-4 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full max-w-full">
          <div className="w-full min-w-0 text-center lg:text-left text-primary-foreground">
            <div className="opacity-0 animate-fade-up mb-5 lg:-mb-1">
              <img src={logoHero} alt="La Coruña Edifício Residencial" className="h-28 sm:h-36 lg:h-48 w-auto mx-auto lg:mx-0" />
            </div>

            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-3 py-1 mb-5 lg:mb-5 text-[12px] lg:text-xs font-medium tracking-widest uppercase border border-accent/50 rounded-sm bg-accent/10 text-accent">
                Lançamento Jd. Celeste — SBC
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-up delay-100 font-heading mb-5 lg:mb-5 text-primary-foreground" style={{ letterSpacing: "0.02em" }}>
              <span className="block text-[22px] sm:text-2xl md:text-3xl lg:text-4xl mb-1 font-light italic opacity-90 leading-[1.2]">Os 2 dormitórios mais</span>
              <span className="block text-[32px] sm:text-5xl md:text-6xl lg:text-7xl text-accent font-semibold leading-[1.05]">COMPLETOS</span>
              <span className="block text-[22px] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2]">
                de <span className="text-accent">São Bernardo.</span>
              </span>
            </h1>

            <div className="opacity-0 animate-fade-up delay-100 hidden lg:block w-24 h-px bg-accent/60 mb-4" />

            <p className="opacity-0 animate-fade-up delay-200 text-[14px] sm:text-base lg:text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto lg:mx-0 mb-3 lg:mb-3" style={{ lineHeight: 1.5 }}>
              Torre única • Elevador • Varanda • Vaga coberta • Lazer completo.
              <br />
              <span className="text-primary-foreground font-medium">Condições especiais pelo Minha Casa Minha Vida.</span>
            </p>

            <p className="opacity-0 animate-fade-up delay-200 text-[13px] sm:text-sm text-primary-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-5 lg:mb-4 leading-relaxed">
              A oportunidade de conquistar seu primeiro apartamento em uma das regiões que mais cresce em SBC.
            </p>

            <div className="opacity-0 animate-fade-up delay-200 grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center lg:justify-start gap-2 mb-5 lg:mb-4 w-full max-w-full">
              {[
                { icon: Building2, text: "Torre Única" },
                { icon: Car, text: "Vaga Coberta" },
                { icon: Layers, text: "Lazer Completo" },
                { icon: Home, text: "Minha Casa Minha Vida" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex min-w-0 items-center justify-center gap-1.5 px-2 py-1 bg-primary-foreground/5 text-primary-foreground/90 text-[12px] lg:text-xs font-medium rounded-sm border border-primary-foreground/20"
                >
                  <item.icon className="w-3 h-3 text-accent shrink-0" />
                  {item.text}
                </span>
              ))}
            </div>

            <div className="opacity-0 animate-fade-up delay-200 flex items-center justify-center lg:justify-start gap-2 mb-6 lg:mb-6 text-primary-foreground/70 px-2 w-full max-w-full">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-[13px] lg:text-xs leading-snug">Rua Jorge Cândido Marin x Rua Japão — Jd. Celeste, SBC - SP</span>
            </div>

            <div className="opacity-0 animate-fade-up delay-300 flex flex-col gap-3 justify-center items-center w-full max-w-full">
              <Button variant="hero" size="lg" asChild className="w-full max-w-full min-h-[50px] px-4 lg:px-8 text-[12px] sm:text-[13px] lg:text-sm rounded-md">
                <a href="#contato" className="flex w-full max-w-full items-center justify-center gap-2 text-center">
                  <span className="block leading-tight">Quero condições especiais</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full max-w-full min-h-[50px] px-4 lg:px-8 text-[12px] sm:text-[13px] lg:text-sm border border-primary-foreground/50 lg:border-2 lg:border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-md"
              >
                <a href="#plantas" className="flex w-full max-w-full items-center justify-center text-center">
                  Ver plantas
                </a>
              </Button>
            </div>
          </div>

          <div className="opacity-0 animate-fade-up delay-200 relative mt-8 lg:mt-0 w-full flex justify-center">
            <div
              className="relative w-full max-w-[90%] md:max-w-[600px] lg:max-w-[680px] mx-auto flex items-center justify-center p-[30px] md:p-[50px] lg:p-[60px]"
              style={{
                backgroundImage: `url(${heroFrame})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <img
                src={fachada}
                alt="Fachada do La Coruña - Edifício residencial moderno em São Bernardo do Campo"
                className="w-[92%] md:w-[88%] lg:w-[85%] h-auto max-h-[48vh] lg:max-h-[68vh] object-contain"
                style={{
                  filter: "contrast(1.08) saturate(1.12) brightness(1.02)",
                }}
                fetchPriority="high"
                width={1024}
                height={1408}
              />
            </div>
          </div>
        </div>

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
