import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-3">
          <a href="#top" className="font-display text-3xl">
            Giovanna <span className="text-gradient-gold">Felix</span>
          </a>
          <p className="text-sm text-muted-foreground max-w-sm">
            Profissional de design de sobrancelhas e realce do olhar.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg">Contato</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <Instagram className="h-4 w-4" /> @gfelix_beauty
          </a>
          <a href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Felix!" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg">Studio</h4>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Estr. das Lágrimas, 1886 - Ipiranga, São Paulo - SP, 04235-320
          </p>
          <p className="flex items-start gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 mt-0.5 shrink-0" /> Ter–Sáb · 10h às 19h30
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Giovanna Felix. Todos os direitos reservados.</p>
        <p>Desenvolvimento | Gustavo Morais ✦</p>
      </div>
    </footer>
  );
}
