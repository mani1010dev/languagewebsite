import { motion } from "motion/react";
import english from "@/assets/lang-english.jpg";
import hindi from "@/assets/lang-hindi.jpg";
import japanese from "@/assets/lang-japanese.jpg";
import german from "@/assets/lang-german.jpg";
import tamil from "@/assets/lang-tamil.jpg";

const STORIES = [
  {
    no: "01",
    name: "English",
    native: "The Global Tongue",
    image: english,
    accent: "text-orange",
    bullets: ["Levels A1–C2 Programs", "IELTS & TOEFL Preparation", "Spoken English Classes", "Grammar Training"],
    duration: "4 Months + 2 Months Exam Prep",
  },
  {
    no: "02",
    name: "Hindi",
    native: "हिन्दी",
    image: hindi,
    accent: "text-pink",
    bullets: ["All Proficiency Levels", "Spoken Hindi Focus"],
    duration: "4 Months + 2 Months Exam Prep",
  },
  {
    no: "03",
    name: "Japanese",
    native: "日本語",
    image: japanese,
    accent: "text-purple",
    bullets: ["JLPT N5–N1 Preparation", "NAT Q5–Q1 Examination", "Kaiwa (Spoken Japanese)"],
    duration: "4 Months + 2 Months Exam Prep",
  },
  {
    no: "04",
    name: "German",
    native: "Deutsch",
    image: german,
    accent: "text-royal",
    bullets: ["Levels A1–B2 Programs"],
    duration: "4 Months + 2 Months Exam Prep",
  },
  {
    no: "05",
    name: "Tamil",
    native: "தமிழ்",
    image: tamil,
    accent: "text-lime",
    bullets: ["All Proficiency Levels"],
    duration: "4 Months + 2 Months Exam Prep",
  },
];

export function LanguageStories() {
  return (
    <section id="languages" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Feature · Five Worlds</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              A passport in <span className="italic text-gradient-brand">five tongues.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 text-lg">
            Each course spans 4 months of comprehensive training + 2 months of dedicated exam preparation, combining proficiency with confidence.
          </p>
        </div>

        <div className="space-y-28 md:space-y-40">
          {STORIES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[5/4] shadow-2xl shadow-foreground/10">
                  <img
                    src={s.image}
                    alt={`${s.name} culture`}
                    loading="lazy"
                    width={1280}
                    height={880}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
                  />
                  <span className={`absolute top-6 left-6 text-xs uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-white/85 backdrop-blur ${s.accent}`}>
                    No. {s.no}
                  </span>
                </div>
              </div>
              <div className="md:col-span-5">
                <p className={`font-display text-2xl italic ${s.accent}`}>{s.native}</p>
                <h3 className="mt-2 font-display text-6xl md:text-7xl leading-none">{s.name}</h3>
                <div className="editorial-rule my-8" />
                <ul className="space-y-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-lg text-foreground/80">
                      <span className={`mt-2 size-1.5 rounded-full ${s.accent.replace("text-", "bg-")}`} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 bg-foreground/5 rounded-2xl p-4 border border-foreground/5 max-w-sm">
                  <div className={`size-2.5 rounded-full animate-pulse ${s.accent.replace("text-", "bg-")}`} />
                  <div className="text-sm">
                    <span className="font-semibold text-foreground">Duration: </span>
                    <span className="text-muted-foreground">{s.duration}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#contact" className="inline-flex items-center gap-2 text-base font-medium border-b border-foreground/40 hover:border-royal hover:text-royal transition pb-1">
                    Begin {s.name} →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}