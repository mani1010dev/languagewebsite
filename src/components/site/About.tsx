import { motion } from "motion/react";
import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-white/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-royal/10">
            <img src={portrait} alt="Inside the Institute of Languages" width={960} height={1280} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 size-32 rounded-full bg-yellow grid place-items-center font-display italic text-foreground rotate-[-8deg] shadow-xl">
            <div className="text-center text-sm leading-tight">Since<br/><span className="text-2xl">2009</span></div>
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The House</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Language is not just communication. <span className="italic text-gradient-brand">It is connection.</span>
          </h2>
          <p className="mt-8 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Founded on the belief that fluency unlocks futures, the Institute of Languages has trained over five thousand students across five languages — from quiet classrooms in our atelier to live online theatres reaching every continent.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            <div className="border-l-2 border-royal pl-5">
              <h4 className="font-display text-xl">Our Mission</h4>
              <p className="mt-2 text-foreground/70">Equip every learner to communicate with confidence in the languages that matter to their life.</p>
            </div>
            <div className="border-l-2 border-pink pl-5">
              <h4 className="font-display text-xl">Our Vision</h4>
              <p className="mt-2 text-foreground/70">A generation of global communicators — fluent, curious, and culturally literate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}