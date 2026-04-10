import { ArrowRight, CheckCircle2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const conditions = [
  "Minha Casa Minha Vida",
  "Utilize seu FGTS",
  "Entrada facilitada",
  "Parcelas a partir de R$ 600*",
  "A partir de R$ 360.000",
];

const Conditions = () => {
  return (
    <section id="condicoes" className="relative py-24 sm:py-32 bg-gradient-subtle">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Condições Especiais
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
              Condições especiais
              <br />
              <span className="text-gradient">de lançamento.</span>
            </h2>
          </div>

          {/* Conditions list */}
          <div className="max-w-md mx-auto mb-8">
            <div className="space-y-4">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-muted-foreground mb-8">
            *Condições sujeitas à análise e disponibilidade.
          </p>

          {/* Motivational text */}
          <div className="text-center mb-10">
            <p className="text-lg text-foreground font-medium max-w-xl mx-auto">
              Essa pode ser a sua oportunidade de sair do aluguel e investir no que é seu.
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
