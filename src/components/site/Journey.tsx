import { motion } from "motion/react";

const STEPS = [
  { n: "I", title: "Discover", text: "Choose the language that fits your life and goals.", color: "bg-royal" },
  { n: "II", title: "Learn", text: "Join a small batch with a personal trainer.", color: "bg-orange" },
  { n: "III", title: "Practice", text: "Speak weekly in immersive live sessions.", color: "bg-lime" },
  { n: "IV", title: "Certify", text: "Earn certifications recognised worldwide.", color: "bg-purple" },
  { n: "V", title: "Succeed", text: "Open doors to work, study, and travel abroad.", color: "bg-pink" },
];

export function Journey() {
  return (
    <section className="py-28 md:py-36 bg-foreground text-background relative overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-20 size-[500px] rounded-full bg-royal/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-20 size-[500px] rounded-full bg-pink/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60">The Journey</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            From first word to <span className="italic text-yellow">fluent voice.</span>
          </h2>
        </div>

        <ol className="relative grid md:grid-cols-5 gap-10">
          <div aria-hidden className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-royal via-orange via-lime via-purple to-pink" />
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className={`size-14 rounded-full ${s.color} text-white grid place-items-center font-display text-lg shadow-lg`}>
                {s.n}
              </div>
              <h4 className="mt-6 font-display text-2xl">{s.title}</h4>
              <p className="mt-2 text-background/70 text-sm leading-relaxed">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}