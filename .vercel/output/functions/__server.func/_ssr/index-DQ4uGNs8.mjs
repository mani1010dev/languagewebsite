import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast, T as Toaster$1 } from "../_libs/sonner.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu, P as Phone, a as Mail, b as MapPin, c as MessageCircle, A as ArrowUp, C as ChevronDown } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Languages", "#languages"],
  ["Testimonials", "#testimonials"],
  ["Blog", "#blog"],
  ["Contact", "#contact"]
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${scrolled ? "glass-card py-2.5 px-4 md:px-6" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2.5 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Untitled design (20).png", alt: "MMLI Logo", className: "h-10 w-auto object-contain transition-transform group-hover:scale-105" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[15px] font-semibold tracking-tight leading-none", children: [
                  "Mozhi Mirai",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-[9px] uppercase tracking-[0.05em]", children: "Lingua Institute" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80", children: LINKS.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  className: "relative hover:text-royal transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-royal hover:after:w-full after:transition-all",
                  children: label
                },
                href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-royal transition-colors",
                    children: "Enroll Now"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Open menu",
                    onClick: () => setOpen((o) => !o),
                    className: "lg:hidden inline-flex size-10 items-center justify-center rounded-full glass-card",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "lg:hidden mx-5 mt-3 rounded-3xl glass-card p-6 grid gap-3",
            children: LINKS.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href,
                onClick: () => setOpen(false),
                className: "text-lg font-display text-foreground/90 hover:text-royal",
                children: label
              },
              href
            ))
          }
        ) })
      ]
    }
  );
}
const heroGlobe = "/assets/hero-globe-D-nGXDRx.jpg";
const FLOATING = [
  { label: "English", color: "bg-royal", top: "8%", left: "6%", delay: 0 },
  { label: "हिन्दी", color: "bg-orange", top: "22%", left: "78%", delay: 0.4 },
  { label: "日本語", color: "bg-pink", top: "58%", left: "2%", delay: 0.8 },
  { label: "Deutsch", color: "bg-purple", top: "74%", left: "70%", delay: 1.2 },
  { label: "தமிழ்", color: "bg-lime", top: "40%", left: "84%", delay: 1.6 }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative pt-32 md:pt-40 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -top-32 -left-32 size-[520px] rounded-full bg-orange/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute top-40 -right-40 size-[600px] rounded-full bg-royal/25 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute bottom-0 left-1/3 size-[420px] rounded-full bg-pink/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-foreground/40" }),
              "Est. 2026 · The Future of Languages"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display font-light leading-[0.92] text-[clamp(3.2rem,9vw,8.5rem)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1, duration: 0.9 }, className: "block", children: "Speak to" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.25, duration: 0.9 }, className: "block italic font-normal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "the World." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5, duration: 0.8 },
            className: "mt-8 max-w-xl text-lg md:text-xl text-foreground/70 leading-relaxed",
            children: [
              "An immersive online education in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-foreground", children: "English, Hindi, Japanese, German" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-foreground", children: "Tamil" }),
              " — designed for students, professionals, and global citizens at",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-royal", children: " Mozhi Mirai Lingua Institute of Languages" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.7, duration: 0.8 },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-base font-medium hover:bg-royal transition-colors", children: [
                "Book a Free Demo",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform group-hover:translate-x-1", children: "→" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#languages", className: "inline-flex items-center gap-2 px-2 py-4 text-base font-medium border-b border-foreground/40 hover:border-royal hover:text-royal transition", children: "Explore Languages" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-3 max-w-md gap-6", children: [
          ["100+", "Students"],
          ["20+", "Trainers"],
          ["95%", "Success"]
        ].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: l })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 relative aspect-square", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            src: heroGlobe,
            alt: "Globe of colorful speech bubbles representing world languages",
            width: 1280,
            height: 1280,
            className: "absolute inset-0 w-full h-full object-contain drop-shadow-2xl animate-float-slow",
            initial: { opacity: 0, scale: 0.92 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1.2 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-6 rounded-full border border-dashed border-foreground/15 animate-spin-slow" }),
        FLOATING.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: f.delay, duration: 0.8 },
            style: { top: f.top, left: f.left },
            className: `absolute ${f.color} text-white text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-lg shadow-foreground/10 animate-float-slow`,
            children: f.label
          },
          f.label
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-20 border-y border-foreground/10 overflow-hidden bg-white/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-16 py-5 whitespace-nowrap animate-marquee text-2xl md:text-3xl font-display italic text-foreground/60", children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-16 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hello" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "नमस्ते" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "こんにちは" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hallo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "வணக்கம்" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-royal", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bonjour" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hola" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange", children: "•" })
    ] }, i)) }) })
  ] });
}
const portrait = "/assets/about-portrait-D1bF4eb7.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-28 md:py-36 bg-white/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "md:col-span-5 relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-royal/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Inside Mozhi Mirai Lingua Institute of Languages", width: 960, height: 1280, loading: "lazy", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-6 size-32 rounded-full bg-yellow grid place-items-center font-display italic text-foreground rotate-[-8deg] shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm leading-tight", children: [
            "Since",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "2026" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Institute" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: [
        "Language is not just communication. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "It is connection." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4 text-foreground/75 max-w-2xl leading-relaxed text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mozhi Mirai Lingua Institute of Languages – The Future of Languages" }),
          " is a premier online language institute dedicated to transforming the way people learn languages. Founded in 2026, we are committed to empowering students, professionals, and lifelong learners with the linguistic skills and cultural understanding needed to thrive in an increasingly interconnected world."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-foreground/70", children: "At Mozhi Mirai Lingua Institute of Languages, we believe that language is not merely a subject to be studied—it is a powerful tool that unlocks opportunities, broadens perspectives, and builds meaningful connections across cultures and communities. Our mission is to make high-quality language education accessible, engaging, and results-driven for learners everywhere." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-royal pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground/70 text-sm", children: "To deliver exceptional language education that inspires confidence, fosters global competence, and equips learners with the skills needed to succeed in academic, professional, and personal pursuits." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-pink pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl", children: "Our Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground/70 text-sm", children: "To become a globally recognized language learning institution that empowers individuals through communication, cultural understanding, and lifelong learning." })
        ] })
      ] })
    ] })
  ] }) });
}
const english = "/assets/lang-english-Dxq9h8kR.jpg";
const hindi = "/assets/lang-hindi-8W9njdRN.jpg";
const japanese = "/assets/lang-japanese-C6D_KhUn.jpg";
const german = "/assets/lang-german-Bhh-kC4J.jpg";
const tamil = "/assets/lang-tamil-CpEL9CEH.jpg";
const STORIES = [
  {
    no: "01",
    name: "English",
    native: "The Global Tongue",
    image: english,
    accent: "text-orange",
    bullets: ["Levels A1–C2 Programs", "IELTS & TOEFL Preparation", "Spoken English Classes", "Grammar Training"],
    duration: "4 Months + 2 Months Exam Prep"
  },
  {
    no: "02",
    name: "Hindi",
    native: "हिन्दी",
    image: hindi,
    accent: "text-pink",
    bullets: ["All Proficiency Levels", "Spoken Hindi Focus"],
    duration: "4 Months + 2 Months Exam Prep"
  },
  {
    no: "03",
    name: "Japanese",
    native: "日本語",
    image: japanese,
    accent: "text-purple",
    bullets: ["JLPT N5–N1 Preparation", "NAT Q5–Q1 Examination", "Kaiwa (Spoken Japanese)"],
    duration: "4 Months + 2 Months Exam Prep"
  },
  {
    no: "04",
    name: "German",
    native: "Deutsch",
    image: german,
    accent: "text-royal",
    bullets: ["Levels A1–B2 Programs"],
    duration: "4 Months + 2 Months Exam Prep"
  },
  {
    no: "05",
    name: "Tamil",
    native: "தமிழ்",
    image: tamil,
    accent: "text-lime",
    bullets: ["All Proficiency Levels"],
    duration: "4 Months + 2 Months Exam Prep"
  }
];
function LanguageStories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "languages", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Feature · Five Worlds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: [
          "A passport in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "five tongues." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-foreground/70 text-lg", children: "Each course spans 4 months of comprehensive training + 2 months of dedicated exam preparation, combining proficiency with confidence." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-28 md:space-y-40", children: STORIES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.9 },
        className: `grid md:grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl aspect-[5/4] shadow-2xl shadow-foreground/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: s.image,
                alt: `${s.name} culture`,
                loading: "lazy",
                width: 1280,
                height: 880,
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `absolute top-6 left-6 text-xs uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-white/85 backdrop-blur ${s.accent}`, children: [
              "No. ",
              s.no
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-2xl italic ${s.accent}`, children: s.native }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-6xl md:text-7xl leading-none", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editorial-rule my-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-lg text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-2 size-1.5 rounded-full ${s.accent.replace("text-", "bg-")}` }),
              b
            ] }, b)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 bg-foreground/5 rounded-2xl p-4 border border-foreground/5 max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-2.5 rounded-full animate-pulse ${s.accent.replace("text-", "bg-")}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Duration: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.duration })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 text-base font-medium border-b border-foreground/40 hover:border-royal hover:text-royal transition pb-1", children: [
              "Begin ",
              s.name,
              " →"
            ] }) })
          ] })
        ]
      },
      s.name
    )) })
  ] }) });
}
const STEPS = [
  { n: "I", title: "Discover", text: "Choose the language that fits your life and goals.", color: "bg-royal" },
  { n: "II", title: "Learn", text: "Join a small batch with a personal trainer.", color: "bg-orange" },
  { n: "III", title: "Practice", text: "Speak weekly in immersive live sessions.", color: "bg-lime" },
  { n: "IV", title: "Certify", text: "Earn certifications recognised worldwide.", color: "bg-purple" },
  { n: "V", title: "Succeed", text: "Open doors to work, study, and travel abroad.", color: "bg-pink" }
];
function Journey() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 md:py-36 bg-foreground text-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -top-40 -left-20 size-[500px] rounded-full bg-royal/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -bottom-32 -right-20 size-[500px] rounded-full bg-pink/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-background/60", children: "The Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: [
          "From first word to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-yellow", children: "fluent voice." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative grid md:grid-cols-5 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-royal via-orange via-lime via-purple to-pink" }),
        STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.1 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-14 rounded-full ${s.color} text-white grid place-items-center font-display text-lg shadow-lg`, children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 font-display text-2xl", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-background/70 text-sm leading-relaxed", children: s.text })
            ]
          },
          s.title
        ))
      ] })
    ] })
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
const STATS = [
  { n: 100, suffix: "+", label: "Students Trained", color: "text-royal" },
  { n: 95, suffix: "%", label: "Success Rate", color: "text-pink" },
  { n: 20, suffix: "+", label: "Expert Trainers", color: "text-orange" },
  { n: 5, suffix: "", label: "World Languages", color: "text-purple" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-foreground/10 rounded-3xl glass-card overflow-hidden", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-4xl md:text-7xl leading-none ${s.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.n, suffix: s.suffix }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: s.label })
  ] }, s.label)) }) }) });
}
const SCREENSHOT_TESTIMONIALS = [
  {
    src: "/WhatsApp Image 2026-06-08 at 12.18.57 PM.jpeg",
    name: "Praveen (HITS)",
    caption: '"This being ur first class and you have given 100percent already 💪 Soooo proud of you"',
    tag: "Student Appreciation"
  },
  {
    src: "/WhatsApp Image 2026-06-08 at 12.18.57 PM (1).jpeg",
    name: "Heena — Nihongo Learner",
    caption: `"Arigato gozaimasu, sensei for today's session. It was really engaging and I will continue practicing my pronunciation"`,
    tag: "Japanese Session Feedback"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "py-28 md:py-36 bg-cream/60 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Wall" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl", children: [
        "Voices from ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "our students." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "mb-10 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Real Conversations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 font-display text-3xl md:text-4xl leading-tight", children: [
              "What students ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "actually say." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: SCREENSHOT_TESTIMONIALS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 },
          whileInView: { opacity: 1, y: 0, rotate: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: i * 0.15 },
          className: "group relative bg-white rounded-3xl shadow-xl shadow-foreground/5 overflow-hidden border border-foreground/5 hover:shadow-2xl hover:shadow-foreground/10 transition-shadow duration-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-royal to-teal text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full shadow-md", children: item.tag }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.src,
                  alt: `Chat with ${item.name}`,
                  loading: "lazy",
                  className: "w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/60 italic leading-relaxed line-clamp-2", children: item.caption }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-7 rounded-full bg-gradient-to-br from-royal to-teal grid place-items-center text-white text-xs font-bold", children: item.name.charAt(0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground/80", children: item.name })
              ] })
            ] })
          ]
        },
        item.name
      )) })
    ] })
  ] });
}
const REELS = [
  {
    url: "https://www.instagram.com/p/DXM8hUfklqQ/",
    title: "A post shared by Mozhli Mirai Lingua Institute of Languages (@mozhimirai)"
  },
  {
    url: "https://www.instagram.com/reel/DYRkjXivYFL/",
    title: "A reel shared by @kaviyam_school_of_arts"
  },
  {
    url: "https://www.instagram.com/reel/DX_k3XuP3x1/",
    title: "A reel shared by @kaviyam_school_of_arts"
  },
  {
    url: "https://www.instagram.com/reel/DXdX6G2E9Dx/",
    title: "A reel shared by @kaviyam_school_of_arts"
  }
];
function InstagramFeed() {
  reactExports.useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "instagram-feed", className: "py-24 md:py-32 bg-white/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Social Hub" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-6xl leading-[0.95]", children: [
        "Featured Reels & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "Posts." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/70 max-w-md mx-auto", children: "Stay updated with our latest classroom highlights, student achievements, and language tips on Instagram." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-start", children: REELS.map((reel, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: idx * 0.1 },
        className: "w-full flex justify-center bg-white rounded-2xl p-4 shadow-sm border border-foreground/5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "blockquote",
          {
            className: "instagram-media w-full",
            "data-instgrm-captioned": true,
            "data-instgrm-permalink": `${reel.url}?utm_source=ig_embed&amp;utm_campaign=loading`,
            "data-instgrm-version": "14",
            style: {
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              margin: "1px",
              width: "100%"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `${reel.url}?utm_source=ig_embed&amp;utm_campaign=loading`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-muted-foreground hover:text-royal text-sm font-medium transition",
                children: reel.title
              }
            ) })
          }
        )
      },
      reel.url
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mt-14 bg-gradient-to-tr from-[#8a3ab9] via-[#e95950] to-[#fccc63] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#e95950]/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-white/80", children: "Connect With Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-4xl md:text-5xl leading-none", children: "@mozhimirai" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/90 max-w-md text-base leading-relaxed", children: "Follow our journey on Instagram for daily language learning tips, study resources, and cultural highlights." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.instagram.com/mozhimirai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "shrink-0 bg-white text-[#e95950] hover:bg-white/90 transition-colors px-8 py-4 rounded-full font-medium shadow-lg flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }) }),
                "Follow @mozhimirai"
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
const POSTS = [
  { tag: "English", title: "Five phrases that make you sound instantly native", read: "6 min", color: "text-orange" },
  { tag: "Japanese", title: "Kanji without tears: a beginner's mental model", read: "8 min", color: "text-pink" },
  { tag: "German", title: "Why German grammar feels like architecture", read: "5 min", color: "text-royal" },
  { tag: "Communication", title: "The art of speaking less and saying more", read: "4 min", color: "text-purple" }
];
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "blog", className: "py-28 md:py-36 bg-white/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Journal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: [
          "Read, then ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "speak." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm font-medium border-b border-foreground/40 hover:border-royal hover:text-royal pb-1", children: "All essays →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: POSTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group block p-7 bg-card rounded-2xl border border-foreground/5 hover:border-royal/40 hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs uppercase tracking-[0.25em] ${p.color}`, children: p.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl leading-tight group-hover:text-royal transition-colors", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-xs uppercase tracking-widest text-muted-foreground", children: [
        p.read,
        " read"
      ] })
    ] }, p.title)) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const FAQS = [
  { q: "How do I enrol?", a: "Pick a language above and use the contact form, or call us directly — we'll guide you to the right batch." },
  { q: "Are online classes available?", a: "Yes. Every course runs both in-person at our atelier and live online, with recorded sessions available." },
  { q: "Do you provide certificates?", a: "Yes — institute certifications plus preparation for international exams like IELTS, JLPT, and Goethe." },
  { q: "What are the batch timings?", a: "Morning, evening, and weekend batches. We accommodate students, professionals, and travellers." },
  { q: "Which language should I choose?", a: "If you're unsure, book a free consultation — we'll help you match a language to your goals." }
];
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Quiet Questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95] mb-12", children: [
      "You asked, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "we listened." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "divide-y divide-foreground/10 border-y border-foreground/10", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-6 text-left font-display text-xl md:text-2xl hover:text-royal hover:no-underline", children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-base text-foreground/75 pb-6 leading-relaxed", children: f.a })
    ] }, i)) })
  ] }) });
}
function Contact() {
  const [sending, setSending] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-28 md:py-36 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute top-20 right-0 size-[500px] rounded-full bg-pink/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute bottom-0 left-0 size-[500px] rounded-full bg-royal/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Begin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.92]", children: [
          "Start your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-brand", children: "language journey" }),
          " today."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-foreground/70 max-w-md", children: "Tell us where you'd like to go. We'll match you with the right trainer, batch, and pace." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 space-y-5 text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "flex items-center gap-4 hover:text-royal", href: "tel:+918754558374", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-royal" }),
            " +91 87545 58374"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "flex items-center gap-4 hover:text-royal", href: "mailto:mozhimirai@gmail.com", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-pink" }),
            " mozhimirai@gmail.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-orange mt-1" }),
            " Online Only"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "flex items-center gap-4 hover:text-lime", target: "_blank", rel: "noopener noreferrer", href: "https://wa.me/918754558374", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5 text-lime" }),
            " WhatsApp us (+91 87545 58374)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-xs uppercase tracking-widest text-muted-foreground", children: "Daily · 11 am to 9 pm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            setSending(true);
            const form = e.target;
            const data = new FormData(form);
            const name = data.get("name");
            const email = data.get("email");
            const phone = data.get("phone");
            const lang = data.get("lang");
            const message = data.get("message");
            const lines = [
              `📚 *New Enquiry — Mozhi Mirai*`,
              ``,
              `👤 *Name:* ${name}`,
              `📧 *Email:* ${email}`,
              phone ? `📱 *Phone:* ${phone}` : null,
              `🌐 *Language:* ${lang}`,
              message ? `💬 *Message:* ${message}` : null,
              ``,
              `— Sent from mozhimirai.com`
            ].filter(Boolean).join("\n");
            const waUrl = `https://wa.me/918754558374?text=${encodeURIComponent(lines)}`;
            window.open(waUrl, "_blank", "noopener,noreferrer");
            setSending(false);
            toast.success("Opening WhatsApp — please hit send to complete your enquiry!");
            form.reset();
          },
          className: "lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Language Interested" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, name: "lang", className: "w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-royal transition", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose one…" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "English" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Hindi" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Japanese" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "German" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Tamil" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, className: "w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-royal transition resize-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                disabled: sending,
                className: "mt-4 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-7 py-4 font-medium hover:bg-[#1ebe57] transition-colors disabled:opacity-60 shadow-lg shadow-[#25D366]/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                  sending ? "Opening…" : "Send via WhatsApp →"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Field({ label, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-royal transition" })
  ] });
}
const COLS = [
  {
    title: "Languages",
    links: [
      { label: "English", href: "#languages" },
      { label: "Hindi", href: "#languages" },
      { label: "Japanese", href: "#languages" },
      { label: "German", href: "#languages" },
      { label: "Tamil", href: "#languages" }
    ]
  },
  {
    title: "Institute",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#contact" }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/mozhimirai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", target: "_blank" },
      { label: "WhatsApp", href: "https://wa.me/918754558374", target: "_blank" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background pt-24 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10 pb-16 border-b border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Untitled design (20).png", alt: "MMLI Logo", className: "h-14 w-auto object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl md:text-4xl leading-[1.1]", children: [
            "Mozhi Mirai",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Lingua ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-yellow", children: "Institute." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-background/70", children: "The Future of Languages. A premier online language institute dedicated to transforming the way people learn languages." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 flex gap-2 max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Your email for updates", className: "flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-yellow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-yellow text-foreground px-5 py-3 text-sm font-medium hover:bg-orange transition", children: "Subscribe" })
        ] })
      ] }),
      COLS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-background/60", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: c.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            target: link.target,
            rel: link.target === "_blank" ? "noopener noreferrer" : void 0,
            className: "text-background/85 hover:text-yellow transition",
            children: link.label
          }
        ) }, link.label)) })
      ] }, c.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 text-xs text-background/60 leading-relaxed md:text-right", children: [
        "Online Only",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "+91 87545 58374"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Mozhi Mirai Lingua Institute of Languages. The Future of Languages."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Cookies" })
      ] })
    ] })
  ] }) });
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-label": "Back to top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: "fixed bottom-6 right-6 z-40 size-12 rounded-full bg-foreground text-background grid place-items-center shadow-xl hover:bg-royal transition-colors animate-float-slow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "size-5" })
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground scroll-smooth", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageStories, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Journey, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramFeed, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-center" })
  ] });
}
export {
  Index as component
};
