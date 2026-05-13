import { motion } from "framer-motion";

const items = [
  { n: "01", t: "Autoestima renovada", d: "Se sentir bonita muda a forma como você se vê todos os dias." },
  { n: "02", t: "Momento só seu", d: "Uma pausa na rotina para cuidar de você com carinho." },
  { n: "03", t: "Beleza natural", d: "Realce seus traços sem perder sua essência." },
  { n: "04", t: "Mais confiança", d: "Pequenos cuidados que fazem uma grande diferença no seu olhar." },
  { n: "05", t: "Cuidado feminino", d: "Você merece se sentir bem, leve e ainda mais linda." },
  { n: "06", t: "Detalhes que encantam", d: "Sobrancelhas bem feitas valorizam toda sua expressão." },
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
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Momento Mulher</span>
          <h2 className="font-display text-5xl md:text-6xl">
            Por que você deve se <span className="italic text-gradient-gold">Cuidar</span>
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
