import { motion } from "motion/react";

const REVIEWS = [
  { name: "Aisha K.", course: "IELTS · English", text: "I scored an 8.0 and landed admits from three UK universities. The mock interviews were a game changer.", color: "bg-yellow" },
  { name: "Karthik S.", course: "JLPT N3", text: "Hiroshi-sensei made kanji feel like puzzles, not punishments. I'm relocating to Osaka next month.", color: "bg-orange" },
  { name: "Meera P.", course: "German A2", text: "Warm teachers, structured pace, and a community that actually wants you to speak.", color: "bg-lime" },
  { name: "Rahul V.", course: "Spoken English", text: "Six months in and my client calls are confident, not rehearsed. Worth every rupee.", color: "bg-pink" },
  { name: "Sneha R.", course: "Tamil Literature", text: "Priya ma'am brought poetry alive. I'm reading Bharathiyar in the original now.", color: "bg-sky" },
  { name: "Daniel O.", course: "Hindi Beginner", text: "I came for travel, stayed for the culture. The trainers treat learners like equals.", color: "bg-purple text-white" },
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

      <div className="mx-auto max-w-7xl px-5 md:px-8 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {REVIEWS.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)` }}
            className={`break-inside-avoid p-7 rounded-2xl ${r.color} shadow-xl shadow-foreground/10 hover:rotate-0 transition-transform duration-500`}
          >
            <blockquote className="font-display text-xl leading-snug">"{r.text}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="size-10 rounded-full bg-white/70 grid place-items-center font-display text-sm">{r.name.charAt(0)}</span>
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs opacity-80 uppercase tracking-widest">{r.course}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}