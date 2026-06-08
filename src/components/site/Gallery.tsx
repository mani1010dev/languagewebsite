import { motion } from "motion/react";

const ITEMS = [
  {
    src: "/photos/WhatsApp Video 2026-06-08 at 12.22.24 PM.mp4",
    span: "md:col-span-2 md:row-span-2",
    label: "Live Virtual Classroom Session",
    isVideo: true,
  },
  {
    src: "/photos/WhatsApp Image 2026-06-06 at 11.04.28 AM.jpeg",
    span: "md:col-span-2",
    label: "Interactive Learning Materials",
  },
  {
    src: "/photos/WhatsApp Image 2026-06-08 at 12.22.25 PM.jpeg",
    span: "md:col-span-2",
    label: "Professional Online Training",
  },
  {
    src: "/photos/WhatsApp Image 2026-06-08 at 12.22.25 PM (1).jpeg",
    span: "md:col-span-2",
    label: "Engaged Learners & Batches",
  },
  {
    src: "/photos/WhatsApp Image 2026-06-08 at 12.22.26 PM.jpeg",
    span: "md:col-span-2",
    label: "Linguistic & Study Sessions",
  },
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
          <p className="max-w-sm text-foreground/70">Virtual sessions, study groups, interactive lessons, and global certifications — a year in pictures.</p>
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
              {it.isVideo ? (
                <div className="relative w-full h-full">
                  <video
                    src={it.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                    <svg className="size-3 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    REEL PREVIEW
                  </span>
                </div>
              ) : (
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  width={1280}
                  height={880}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white text-sm font-medium bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gradient-to-tr from-[#8a3ab9] via-[#e95950] to-[#fccc63] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#e95950]/10"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/80">Connect With Us</span>
            <h3 className="mt-2 font-display text-4xl md:text-5xl leading-none">@mozhimirai</h3>
            <p className="mt-4 text-white/90 max-w-md text-base leading-relaxed">
              Follow our journey on Instagram for daily language learning tips, study resources, and cultural highlights.
            </p>
          </div>
          <a
            href="https://www.instagram.com/mozhimirai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-[#e95950] hover:bg-white/90 transition-colors px-8 py-4 rounded-full font-medium shadow-lg flex items-center gap-3"
          >
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @mozhimirai
          </a>
        </motion.div>
      </div>
    </section>
  );
}