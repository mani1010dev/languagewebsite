import { motion } from "motion/react";

const SCREENSHOT_TESTIMONIALS = [
  {
    src: "/WhatsApp Image 2026-06-08 at 12.18.57 PM.jpeg",
    name: "Praveen (HITS)",
    caption: "\"This being ur first class and you have given 100percent already 💪 Soooo proud of you\"",
    tag: "Student Appreciation",
  },
  {
    src: "/WhatsApp Image 2026-06-08 at 12.18.57 PM (1).jpeg",
    name: "Heena — Nihongo Learner",
    caption: "\"Arigato gozaimasu, sensei for today's session. It was really engaging and I will continue practicing my pronunciation\"",
    tag: "Japanese Session Feedback",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-cream/60 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Wall</p>
        <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Voices from <span className="italic text-gradient-brand">our students.</span>
        </h2>
      </div>

      {/* Real student chat screenshots */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Real Conversations</p>
          <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
            What students <span className="italic text-gradient-brand">actually say.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SCREENSHOT_TESTIMONIALS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative bg-white rounded-3xl shadow-xl shadow-foreground/5 overflow-hidden border border-foreground/5 hover:shadow-2xl hover:shadow-foreground/10 transition-shadow duration-500"
            >
              {/* Tag badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-royal to-teal text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* Screenshot image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={`Chat with ${item.name}`}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="p-5">
                <p className="text-sm text-foreground/60 italic leading-relaxed line-clamp-2">{item.caption}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="size-7 rounded-full bg-gradient-to-br from-royal to-teal grid place-items-center text-white text-xs font-bold">{item.name.charAt(0)}</span>
                  <span className="text-sm font-medium text-foreground/80">{item.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}