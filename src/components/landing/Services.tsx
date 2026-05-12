import { motion } from "framer-motion";
import { Brush, Wand2, Leaf, Droplet, Pen, Eye, Feather } from "lucide-react";

const services = [
  { icon: Brush, name: "Design de sobrancelhas", desc: "Modelagem precisa que valoriza seu rosto." },
  { icon: Wand2, name: "Brow Lamination", desc: "Fios alinhados e efeito natural duradouro." },
  { icon: Leaf, name: "Henna", desc: "Coloração natural com aspecto preenchido." },
  { icon: Droplet, name: "Micropigmentação", desc: "Pigmentação artística de longa duração." },
  { icon: Pen, name: "Nanoblading", desc: "Fio a fio ultra realista e delicado." },
  { icon: Eye, name: "Lash Lift", desc: "Curvatura natural que realça o olhar." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32 bg-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Serviços</span>
          <h2 className="font-display text-5xl md:text-6xl">
            Realce sua <span className="italic text-gradient-gold">essência</span>
          </h2>
          <p className="text-muted-foreground">Tratamentos premium para sobrancelhas e cílios pensados para destacar a sua beleza única.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-luxe flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Consultar →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
