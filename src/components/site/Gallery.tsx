import { motion } from "motion/react";
import a from "@/assets/about-portrait.jpg";
import b from "@/assets/lang-english.jpg";
import c from "@/assets/lang-japanese.jpg";
import d from "@/assets/lang-german.jpg";
import e from "@/assets/lang-hindi.jpg";
import f from "@/assets/lang-tamil.jpg";

const ITEMS = [
  { src: a, span: "row-span-2", label: "The Atelier" },
  { src: b, span: "", label: "London Week" },
  { src: c, span: "", label: "Sakura Workshop" },
  { src: d, span: "row-span-2", label: "Berlin Exchange" },
  { src: e, span: "", label: "Hindi Diwas" },
  { src: f, span: "", label: "Tamil Literature Day" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Album</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Life inside <span className="italic text-gradient-brand">the institute.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/70">Workshops, festivals, guest sessions and quiet study afternoons — a year in pictures.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {ITEMS.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img src={it.src} alt={it.label} loading="lazy" width={1280} height={880} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white text-sm font-medium bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}