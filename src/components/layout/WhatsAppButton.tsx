import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-accent-foreground font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      aria-label="Fale conosco via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;
