const About = () => {
  return (
    <section id="empreendimento" className="relative py-24 sm:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase border border-primary/40 bg-primary/5 text-primary rounded-sm">
              O Empreendimento
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
              Conheça o
              <br />
              <span className="text-accent italic font-medium">La Coruña</span>
            </h2>
            <div className="w-16 h-px bg-accent/60 mx-auto mt-6" />
          </div>

          {/* Text content */}
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              O La Coruña nasce com um propósito claro: oferecer conforto, segurança e lazer completo em um projeto inteligente, moderno e acessível.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              São 52 unidades em torre única com elevador, plantas otimizadas e acabamento pensado para o dia a dia da família brasileira.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed max-w-3xl mx-auto italic font-heading">
              "Aqui, cada detalhe foi planejado para transformar o sonho do primeiro apê em uma conquista real."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
