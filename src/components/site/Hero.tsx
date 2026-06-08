import { motion } from "motion/react";
import heroGlobe from "@/assets/hero-globe.jpg";

const FLOATING = [
  { label: "English", color: "bg-royal", top: "8%", left: "6%", delay: 0 },
  { label: "हिन्दी", color: "bg-orange", top: "22%", left: "78%", delay: 0.4 },
  { label: "日本語", color: "bg-pink", top: "58%", left: "2%", delay: 0.8 },
  { label: "Deutsch", color: "bg-purple", top: "74%", left: "70%", delay: 1.2 },
  { label: "தமிழ்", color: "bg-lime", top: "40%", left: "84%", delay: 1.6 },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* ambient gradients */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 size-[520px] rounded-full bg-orange/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-40 size-[600px] rounded-full bg-royal/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 size-[420px] rounded-full bg-pink/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* Left: editorial type */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-foreground/40" />
            Issue No. 05 · The Language Edition
          </motion.div>

          <h1 className="mt-6 font-display font-light leading-[0.92] text-[clamp(3.2rem,9vw,8.5rem)]">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="block">
              Speak to
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9 }} className="block italic font-normal">
              <span className="text-gradient-brand">the World.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            An immersive education in <em className="text-foreground">English, Hindi, Japanese, German</em> and <em className="text-foreground">Tamil</em> — designed for students, professionals, and global citizens at the
            <span className="font-medium text-royal"> Institute of Languages</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-base font-medium hover:bg-royal transition-colors">
              Book a Free Demo
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#languages" className="inline-flex items-center gap-2 px-2 py-4 text-base font-medium border-b border-foreground/40 hover:border-royal hover:text-royal transition">
              Explore Languages
            </a>
          </motion.div>

          {/* mini stats strip */}
          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            {[
              ["5,000+", "Students"],
              ["20+", "Trainers"],
              ["95%", "Success"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: globe with floating bubbles */}
        <div className="lg:col-span-5 relative aspect-square">
          <motion.img
            src={heroGlobe}
            alt="Globe of colorful speech bubbles representing world languages"
            width={1280}
            height={1280}
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl animate-float-slow"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          {/* orbiting ring */}
          <div aria-hidden className="absolute inset-6 rounded-full border border-dashed border-foreground/15 animate-spin-slow" />
          {FLOATING.map((f) => (
            <motion.span
              key={f.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: f.delay, duration: 0.8 }}
              style={{ top: f.top, left: f.left }}
              className={`absolute ${f.color} text-white text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-lg shadow-foreground/10 animate-float-slow`}
            >
              {f.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative mt-20 border-y border-foreground/10 overflow-hidden bg-white/40">
        <div className="flex gap-16 py-5 whitespace-nowrap animate-marquee text-2xl md:text-3xl font-display italic text-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>Hello</span><span className="text-orange">•</span>
              <span>नमस्ते</span><span className="text-pink">•</span>
              <span>こんにちは</span><span className="text-lime">•</span>
              <span>Hallo</span><span className="text-purple">•</span>
              <span>வணக்கம்</span><span className="text-royal">•</span>
              <span>Bonjour</span><span className="text-yellow">•</span>
              <span>Hola</span><span className="text-orange">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}