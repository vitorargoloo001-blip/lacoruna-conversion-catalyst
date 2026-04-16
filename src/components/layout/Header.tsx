import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoLaCoruna from "@/assets/logo-hero.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#empreendimento", label: "O Empreendimento" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#lazer", label: "Lazer" },
    { href: "#plantas", label: "Plantas" },
    { href: "#localizacao", label: "Localização" },
    { href: "#condicoes", label: "Condições" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-lg border-b border-primary-foreground/10 opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo text */}
          <a href="#" className="flex items-center">
            <img src={logoLaCoruna} alt="La Coruña - Edifício Residencial" className="h-24 sm:h-28 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wider uppercase text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href="#contato">Quero condições especiais</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div 
            className="absolute inset-0 bg-foreground/20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav 
            className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white border-l border-border/50 shadow-xl py-8 px-6 transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Quero condições especiais
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
