import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div
          className={`glass px-6 py-3 shadow-soft transition-colors duration-300 ${
            open ? "rounded-3xl" : "rounded-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <a href="#top" className="font-display text-xl tracking-wide">
              Giovanna <span className="text-gradient-gold">Felix</span>
            </a>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#sobre" className="hover:text-foreground transition">
                Sobre
              </a>

              <a href="#servicos" className="hover:text-foreground transition">
                Serviços
              </a>

              <a href="#galeria" className="hover:text-foreground transition">
                Galeria
              </a>

              <a href="#depoimentos" className="hover:text-foreground transition">
                Depoimentos
              </a>
            </nav>

            {/* BOTÃO DESKTOP */}
            <a
              href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Felix!"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm hover:opacity-90 transition"
            >
              Agendar
            </a>

            {/* HAMBURGUER MOBILE */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MENU MOBILE */}
          {open && (
            <div className="md:hidden mt-6 flex flex-col gap-4 text-sm">
              <a href="#sobre" onClick={() => setOpen(false)}>
                Sobre
              </a>

              <a href="#servicos" onClick={() => setOpen(false)}>
                Serviços
              </a>

              <a href="#galeria" onClick={() => setOpen(false)}>
                Galeria
              </a>

              <a href="#depoimentos" onClick={() => setOpen(false)}>
                Depoimentos
              </a>

              <a
                href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Felix!"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-foreground text-background px-5 py-3 text-center"
              >
                Agendar
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
