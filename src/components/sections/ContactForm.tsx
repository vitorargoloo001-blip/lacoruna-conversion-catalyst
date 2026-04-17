import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoVertical from "@/assets/logo-lacoruna-vertical.png";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    income: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Formulário de Contato - La Coruña',
        content_category: formData.interest || 'Não especificado',
      });
    }

    setIsSubmitted(true);
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato com você.",
    });

    const whatsappMessage = encodeURIComponent(
      `Olá! Me chamo ${formData.name} e tenho interesse no La Coruña. ${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, "_blank");
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="relative py-14 sm:py-24 lg:py-32 overflow-hidden bg-card">
        <div className="container px-6 relative z-10">
          <div className="max-w-xl mx-auto">
            <div className="p-10 sm:p-12 bg-background border border-primary/20 rounded-sm text-center">
              <div className="w-16 h-16 mx-auto border-2 border-accent flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-primary mb-4" style={{ letterSpacing: '0.02em' }}>
                Mensagem enviada!
              </h2>
              <div className="w-12 h-px bg-accent/60 mx-auto mb-6" />
              <p className="text-muted-foreground mb-6">
                Em breve nossa equipe entrará em contato. Você será redirecionado para o WhatsApp.
              </p>
              <Button
                size="lg"
                className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsSubmitted(false)}
              >
                Enviar outra mensagem
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-light relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-card">
      <div className="container px-5 sm:px-6 max-w-[1180px] relative z-10">
        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 sm:p-12 lg:p-[60px] bg-background border border-primary/15 rounded-xl relative overflow-hidden"
            style={{ boxShadow: '0 20px 60px hsl(217 24% 15% / 0.08)' }}
          >
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-8">
                <img src={logoVertical} alt="La Coruña" className="w-full h-full object-contain" />
              </div>

              <div className="text-center mb-10">
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4" style={{ letterSpacing: '0.02em', lineHeight: 1.15 }}>
                  Seu novo capítulo
                  <br />
                  <span className="text-accent italic font-medium">começa aqui.</span>
                </h2>
                <div className="w-16 h-px bg-accent/60 mx-auto mt-6 mb-6" />
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Converse com um especialista e descubra como conquistar seu apartamento no La Coruña com condições exclusivas de lançamento.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                      WhatsApp *
                    </label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="income" className="block text-sm font-medium mb-2">
                      Faixa de renda
                    </label>
                    <select
                      id="income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border/50 bg-secondary/50 px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecione</option>
                      <option value="ate-5k">Até R$ 5.000</option>
                      <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                      <option value="10k-15k">R$ 10.000 - R$ 15.000</option>
                      <option value="acima-15k">Acima de R$ 15.000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      Utiliza FGTS?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border/50 bg-secondary/50 px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecione</option>
                      <option value="sim-fgts">Sim</option>
                      <option value="nao-fgts">Não</option>
                      <option value="nao-sei">Não sei</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos mais sobre o que você procura..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-full">
                  <Button variant="hero" size="lg" type="submit" className="w-full max-w-full sm:flex-1 min-h-[50px] px-4 lg:px-8 text-[12px] sm:text-[13px] lg:text-sm rounded-md">
                    <span className="flex w-full max-w-full items-center justify-center gap-2 text-center">
                      <span className="block leading-tight">Falar com especialista</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </span>
                  </Button>
                  <Button size="lg" type="button" asChild className="w-full max-w-full sm:flex-1 min-h-[50px] px-4 lg:px-8 text-[12px] sm:text-[13px] lg:text-sm border border-primary lg:border-2 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-md">
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de receber a tabela do La Coruña." target="_blank" rel="noopener noreferrer" className="flex w-full max-w-full items-center justify-center text-center">
                      Receber tabela
                    </a>
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Ou entre em contato diretamente pelo{" "}
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
