import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Languages", "#languages"],
  ["Trainers", "#trainers"],
  ["Testimonials", "#testimonials"],
  ["Gallery", "#gallery"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "glass-card py-2.5 px-4 md:px-6" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src="/Untitled design (20).png" alt="MMLI Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          <span className="font-display text-[15px] font-semibold tracking-tight leading-none">
            Mozhi Mirai<br/>
            <span className="text-muted-foreground text-[9px] uppercase tracking-[0.05em]">Lingua Institute</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-royal transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-royal hover:after:w-full after:transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-royal transition-colors"
          >
            Enroll Now
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-full glass-card"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-5 mt-3 rounded-3xl glass-card p-6 grid gap-3"
          >
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg font-display text-foreground/90 hover:text-royal"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}