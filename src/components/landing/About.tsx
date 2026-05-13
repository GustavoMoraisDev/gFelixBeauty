import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf, Coffee } from "lucide-react";
import about from "@/assets/sobregiovanna.png";

const cards = [
  { icon: Heart, title: "Experiência exclusiva", text: "Um momento especial para você, conforto e atendimento que você merece." },
  { icon: Sparkles, title: "Técnicas avançadas", text: "Resultados naturais e leves que valorizam sua essência." },
  { icon: Leaf, title: "+5 anos de experiência", text: "Anos dedicados ao aperfeiçoamento de técnicas e à transformação de olhares." },
  { icon: Coffee, title: "+2 mil clientes transformadas", text: "Uma trajetória construída com confiança, dedicação e resultados que encantam." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <img src={about} alt="Giovanna Félix" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block glass rounded-3xl p-6 max-w-[260px] shadow-soft">
            <p className="font-display italic text-lg leading-tight">"Quando se trabalha com amor, os resultados são consequência."</p>
            <p className="mt-2 text-xs text-muted-foreground tracking-widest uppercase">— Giovanna</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Sobre Giovanna</span>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Cuidado em cada <span className="italic text-gradient-gold">detalhe</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Há mais de 5 anos transformando olhares com técnicas especializadas, precisão em cada detalhe e excelência em cada atendimento. Minha prioridade é renovar sua autoestima, valorizar sua beleza natural e proporcionar o momento que você merece.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <div className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center mb-3">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
