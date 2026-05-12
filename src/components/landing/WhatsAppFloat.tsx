import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Félix!"
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-50 blur-xl group-hover:opacity-80 transition" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 text-white shadow-glow hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
