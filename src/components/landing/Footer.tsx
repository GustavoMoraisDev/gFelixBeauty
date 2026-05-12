import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-3">
          <a href="#top" className="font-display text-3xl">
            Giovanna <span className="text-gradient-gold">Félix</span>
          </a>
          <p className="text-sm text-muted-foreground max-w-sm">
            Studio premium de design de sobrancelhas e realce do olhar.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg">Contato</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <Instagram className="h-4 w-4" /> @giovannafelix.brows
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg">Studio</h4>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Rua das Flores, 123 — Sala 04
          </p>
          <p className="flex items-start gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 mt-0.5 shrink-0" /> Seg–Sáb · 9h às 19h
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Giovanna Félix. Todos os direitos reservados.</p>
        <p>Feito com delicadeza ✦</p>
      </div>
    </footer>
  );
}
