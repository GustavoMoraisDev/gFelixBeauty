import { motion } from "framer-motion";
import g1 from "@/assets/brow2.jpeg";
import g2 from "@/assets/designer.jpeg";
import g3 from "@/assets/linha.jpeg";
import g4 from "@/assets/henna.jpeg";
import g5 from "@/assets/piercing.jpeg";
import g6 from "@/assets/brow1.jpeg";

const images = [
  { src: g1, label: "Brow Lamination", span: "row-span-2" }, 
  { src: g2, label: "Design de sobrancelhas", span: "" },
  { src: g3, label: "Depilação Egípcia", span: "" }, 
  { src: g5, label: "Piercing", span: "row-span-2" },
  { src: g4, label: "Henna", span: "" },
  { src: g6, label: "Brow Lamination", span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Galeria</span>
            <h2 className="font-display text-5xl md:text-6xl">
              Resultados que <span className="italic text-gradient-gold">encantam</span>
            </h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm underline-offset-4 hover:underline text-muted-foreground">
            @gfelix_beauty ↗
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
            >
              <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-background font-display text-lg">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
