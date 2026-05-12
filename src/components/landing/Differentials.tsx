import { motion } from "framer-motion";

const items = [
  { n: "01", t: "Atendimento humanizado", d: "Tempo dedicado para entender sua expectativa." },
  { n: "02", t: "Produtos premium", d: "Marcas certificadas e de alta performance." },
  { n: "03", t: "Técnicas atualizadas", d: "Formação contínua e tendências internacionais." },
  { n: "04", t: "Ambiente aconchegante", d: "Um refúgio para você se cuidar com calma." },
  { n: "05", t: "Resultados naturais", d: "Realce delicado que respeita sua expressão." },
  { n: "06", t: "Beleza única", d: "Cada design é desenvolvido sob medida." },
];

export function Differentials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Diferenciais</span>
          <h2 className="font-display text-5xl md:text-6xl">
            Por que escolher o <span className="italic text-gradient-gold">studio</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card p-10 hover:bg-secondary/40 transition-colors group"
            >
              <span className="font-display text-4xl text-gold/70">{it.n}</span>
              <h3 className="font-display text-2xl mt-4 group-hover:translate-x-1 transition-transform">{it.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
