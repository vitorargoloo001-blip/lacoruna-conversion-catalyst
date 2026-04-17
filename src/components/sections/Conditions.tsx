import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const conditions = [
  "Minha Casa Minha Vida",
  "Utilize seu FGTS",
  "Entrada facilitada",
];

const Conditions = () => {
  return (
    <section id="condicoes" className="section-dark relative py-20 sm:py-28 lg:py-32 text-primary-foreground" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container px-5 sm:px-6 max-w-[1180px]">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-accent/50 bg-accent/10 text-accent rounded-sm">
              Condições Especiais
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-4" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              Condições especiais
              <br />
              <span className="text-accent italic font-medium">de lançamento.</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6" />
          </div>

          {/* Conditions list */}
          <div className="max-w-sm mx-auto mb-8">
            <div className="space-y-3">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-primary-foreground/[0.06] border border-primary-foreground/20 rounded-md transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 10px 30px hsl(217 24% 10% / 0.15)' }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-base font-medium text-primary-foreground">{condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-primary-foreground/60 mb-8 tracking-wider uppercase">
            *Condições sujeitas à análise e disponibilidade.
          </p>

          {/* Motivational text */}
          <div className="text-center mb-10">
            <p className="text-xl text-primary-foreground/90 font-heading italic max-w-xl mx-auto" style={{ lineHeight: 1.4 }}>
              "Essa pode ser a sua oportunidade de sair do aluguel e investir no que é seu."
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center w-full max-w-full px-2">
            <Button variant="hero" size="lg" asChild className="w-full max-w-[360px] sm:max-w-[400px] min-h-[50px] px-4 lg:px-8 text-[12px] sm:text-[13px] lg:text-sm rounded-md">
              <a href="#contato" className="flex w-full max-w-full items-center justify-center gap-2 text-center">
                <span className="block leading-tight">Quero saber se me encaixo</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
