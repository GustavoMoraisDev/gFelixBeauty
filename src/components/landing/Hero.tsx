import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Sparkles } from "lucide-react";
import hero from "@/assets/herogiovanna.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-soft grain pt-28">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold opacity-20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-32 h-[600px] w-[600px] rounded-full bg-luxe opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Profissional em Beleza
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Giovanna
            <br />
            <span className="text-gradient-gold italic">Félix</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md">
            Especialista em sobrancelhas e realce do olhar.
          </p>

          <p className="font-display text-2xl md:text-3xl italic text-foreground/80 max-w-md">
            "Realçando sua beleza através do olhar."
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Félix!"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 shadow-glow hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Agendar pelo WhatsApp</span>
            </a>
            <a href="#servicos" className="text-sm tracking-wide underline-offset-4 hover:underline">
              Ver serviços
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-foreground">+5 anos</div>
              de experiência
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">+2k</div>
              clientes felizes
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">5.0★</div>
              avaliações
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-glow">
            <img src={hero} alt="Profissional Giovanna Félix" className="h-full w-full object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="shimmer absolute inset-0 opacity-40 mix-blend-overlay" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 max-w-[220px] shadow-soft"
          >
            <div className="flex -space-x-2 mb-2">
              {[0,1,2].map(i => (
                <div key={i} className="h-7 w-7 rounded-full bg-luxe border-2 border-background" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Mais de <span className="text-foreground font-medium">5.000</span> sobrancelhas transformadas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-soft"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs">Agendamento online</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Role para descobrir</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
