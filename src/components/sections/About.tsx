import { Building2, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="empreendimento" className="relative py-20 sm:py-24 bg-[hsl(37_42%_94%)]">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              O Empreendimento
            </span>
            <h2 className="text-3xl sm:text-[42px] md:text-5xl font-bold font-heading leading-tight mb-6">
              Mais que um apartamento.
              <br />
              <span className="text-gradient">Um começo novo.</span>
            </h2>
          </div>

          {/* Text content - emotional */}
          <div className="space-y-5 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              O La Coruña foi pensado para quem está pronto para dar o próximo passo. Para quem quer trocar o aluguel pela conquista, e transformar um sonho em endereço.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              São 52 unidades em torre única com elevador, lazer completo e tudo que sua família precisa para viver com mais conforto e segurança.
            </p>
            <p className="text-xl text-foreground font-semibold leading-relaxed max-w-3xl mx-auto">
              Aqui, cada detalhe foi planejado para transformar o sonho do primeiro apê em uma conquista real.
            </p>
          </div>

          {/* Decorative icon */}
          <div className="flex justify-center mt-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
