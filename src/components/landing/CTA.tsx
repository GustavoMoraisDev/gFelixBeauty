import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-luxe opacity-90" />
      <div className="absolute inset-0 grain" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold opacity-30 blur-3xl animate-float" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-4xl px-6 text-center space-y-8"
      >
        <Sparkles className="h-8 w-8 text-gold mx-auto" />
        <h2 className="font-display text-6xl md:text-8xl leading-[0.95]">
          Seu olhar <br /> merece <span className="italic text-gradient-gold">destaque</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-xl mx-auto">
          Agende seu horário e descubra a melhor versão da sua beleza.
        </p>
        <a
          href="https://wa.me/5511986590169?text=Olá%20gostaria%20de%20agendar%20com%20a%20profissional%20Giovanna%20Félix!"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-10 py-5 text-lg shadow-glow hover:scale-[1.03] transition-all"
        >
          <MessageCircle className="h-5 w-5" />
          Agendar Agora
        </a>
      </motion.div>
    </section>
  );
}
