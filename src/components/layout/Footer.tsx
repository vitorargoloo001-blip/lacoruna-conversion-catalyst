import { Phone } from "lucide-react";
import logoLaCoruna from "@/assets/logo-lacoruna.png";
import logoSymbol from "@/assets/logo-symbol.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 sm:py-16 text-primary-foreground overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <img
        src={logoSymbol}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-16 -bottom-16 w-[420px] opacity-[0.06]"
      />
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main footer content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div>
              <img src={logoLaCoruna} alt="La Coruña - Edifício Residencial" className="h-24 w-auto mb-4" />
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                O 2 dormitórios mais completo de São Bernardo do Campo. Torre única com varanda, elevador, vaga coberta e lazer completo.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-heading text-lg mb-4 text-primary-foreground" style={{ letterSpacing: '0.05em' }}>Navegação</h3>
              <div className="w-10 h-px bg-accent/60 mb-4" />
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#empreendimento" className="hover:text-accent transition-colors">O Empreendimento</a></li>
                <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a></li>
                <li><a href="#lazer" className="hover:text-accent transition-colors">Lazer</a></li>
                <li><a href="#plantas" className="hover:text-accent transition-colors">Plantas</a></li>
                <li><a href="#localizacao" className="hover:text-accent transition-colors">Localização</a></li>
                <li><a href="#condicoes" className="hover:text-accent transition-colors">Condições</a></li>
                <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg mb-4 text-primary-foreground" style={{ letterSpacing: '0.05em' }}>Contato</h3>
              <div className="w-10 h-px bg-accent/60 mb-4" />
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="p-6 bg-primary-foreground/[0.04] border border-primary-foreground/15 rounded-sm mb-8">
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              <strong className="text-primary-foreground/80">AVISO LEGAL:</strong> Este material tem caráter meramente informativo, não constituindo oferta pública de venda de valores mobiliários ou títulos representativos de direitos sobre imóveis. A comercialização das unidades está sujeita a registro do memorial de incorporação no competente Cartório de Registro de Imóveis. As informações, imagens, ilustrações e perspectivas aqui apresentadas são preliminares e sujeitas a alterações sem aviso prévio. Os móveis, objetos de decoração e acabamentos apresentados nas imagens são meramente ilustrativos, não fazendo parte integrante do contrato de compra e venda.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-foreground/15">
            <p className="text-xs text-primary-foreground/60 text-center sm:text-left tracking-wider">
              © {currentYear} LA CORUÑA. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/60 tracking-wider">
              <a href="#privacidade" className="hover:text-accent transition-colors">
                POLÍTICA DE PRIVACIDADE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
