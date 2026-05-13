import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  { name: "Ana Júlia", text: "Gi vc arrasa demais, minhas sobrancelhas ficaram perfeitas e super naturais." },
  { name: "Mariana Souza", text: "Melhor designer que já fui! Ambiente gostoso e resultado impecável." },
  { name: "Fernanda Lima", text: "Fiz brow lamination e fiquei apaixonada no resultado, valorizou muito meu olhar." },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-32 bg-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Depoimentos</span>
          <h2 className="font-display text-5xl md:text-6xl">
            Histórias de <span className="italic text-gradient-gold">autoestima</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass rounded-3xl p-8 hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-gold/60 mb-4" />
              <p className="font-display text-xl leading-relaxed italic text-foreground/85">"{t.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
