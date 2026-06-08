import { motion } from "motion/react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const TRAINERS = [
  {
    img: t1,
    name: "Eleanor Whitfield",
    lang: "English · IELTS",
    years: "14 years",
    bio: "Cambridge-trained, formerly with the British Council. Eleanor coaches executives and university candidates on accent, structure, and presence.",
  },
  {
    img: t2,
    name: "Hiroshi Tanaka",
    lang: "Japanese · JLPT",
    years: "11 years",
    bio: "A native Tokyoite who has placed dozens of students in Japanese corporates. Patient, precise, and obsessed with the grammar of nuance.",
  },
  {
    img: t3,
    name: "Priya Ramanathan",
    lang: "Hindi · Tamil",
    years: "9 years",
    bio: "A literature scholar bridging classical heritage with everyday speech. Her sessions feel like sitting with a thoughtful friend.",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Profiles</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            The voices behind <span className="italic text-gradient-brand">the words.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {TRAINERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-12 gap-8 md:gap-14 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-5">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-foreground/10">
                  <img src={t.img} alt={t.name} width={960} height={1200} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm uppercase tracking-[0.25em] text-orange">{t.lang} · {t.years}</p>
                <h3 className="mt-3 font-display text-5xl md:text-6xl leading-none">{t.name}</h3>
                <p className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed">{t.bio}</p>
                <div className="mt-8 flex gap-3">
                  {["Certified", "Native-level", "1:1 mentoring"].map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">{tag}</span>
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