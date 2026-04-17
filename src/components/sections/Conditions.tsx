import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const conditions = [
  "Minha Casa Minha Vida",
  "Utilize seu FGTS",
  "Entrada facilitada",
];

const Conditions = () => {
  return (
    <section id="condicoes" className="relative py-14 sm:py-24 lg:py-32 text-primary-foreground" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
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
          <div className="max-w-md mx-auto mb-8">
            <div className="space-y-3">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-primary-foreground/[0.04] border border-primary-foreground/20 rounded-sm transition-all duration-300 hover:border-accent/60"
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
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                Quero saber se me encaixo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
