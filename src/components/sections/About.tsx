import { Building2 } from "lucide-react";

const About = () => {
  return (
    <section id="empreendimento" className="relative py-24 sm:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              O Empreendimento
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">
              Conheça o
              <br />
              <span className="text-gradient">La Coruña</span>
            </h2>
          </div>

          {/* Text content */}
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              O La Coruña nasce com um propósito claro: oferecer conforto, segurança e lazer completo em um projeto inteligente, moderno e acessível.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              São 52 unidades em torre única com elevador, plantas otimizadas e acabamento pensado para o dia a dia da família brasileira.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
              Aqui, cada detalhe foi planejado para transformar o sonho do primeiro apê em uma conquista real.
            </p>
          </div>

          {/* Decorative icon */}
          <div className="flex justify-center mt-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
