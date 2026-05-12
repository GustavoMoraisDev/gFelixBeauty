export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-soft">
          <a href="#top" className="font-display text-xl tracking-wide">
            Giovanna <span className="text-gradient-gold">Félix</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
            <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          </nav>
          <a
            href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Félix!"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm hover:opacity-90 transition"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
