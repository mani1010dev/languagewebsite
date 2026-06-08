import { useEffect } from "react";
import { motion } from "motion/react";

const REELS = [
  {
    url: "https://www.instagram.com/p/DXM8hUfklqQ/",
    title: "A post shared by Mozhli Mirai Lingua Institute of Languages (@mozhimirai)",
  },
  {
    url: "https://www.instagram.com/reel/DYRkjXivYFL/",
    title: "A reel shared by @kaviyam_school_of_arts",
  },
  {
    url: "https://www.instagram.com/reel/DX_k3XuP3x1/",
    title: "A reel shared by @kaviyam_school_of_arts",
  },
  {
    url: "https://www.instagram.com/reel/DXdX6G2E9Dx/",
    title: "A reel shared by @kaviyam_school_of_arts",
  },
];

export function InstagramFeed() {
  useEffect(() => {
    // Process embeds on mount or when script is loaded
    const processEmbeds = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }
  }, []);

  return (
    <section id="instagram-feed" className="py-24 md:py-32 bg-white/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Social Hub</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
            Featured Reels & <span className="italic text-gradient-brand">Posts.</span>
          </h2>
          <p className="mt-4 text-foreground/70 max-w-md mx-auto">
            Stay updated with our latest classroom highlights, student achievements, and language tips on Instagram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-start">
          {REELS.map((reel, idx) => (
            <motion.div
              key={reel.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-full flex justify-center bg-white rounded-2xl p-4 shadow-sm border border-foreground/5"
            >
              <blockquote
                className="instagram-media w-full"
                data-instgrm-captioned
                data-instgrm-permalink={`${reel.url}?utm_source=ig_embed&amp;utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  margin: "1px",
                  width: "100%",
                }}
              >
                <div className="p-4">
                  <a
                    href={`${reel.url}?utm_source=ig_embed&amp;utm_campaign=loading`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-royal text-sm font-medium transition"
                  >
                    {reel.title}
                  </a>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 bg-gradient-to-tr from-[#8a3ab9] via-[#e95950] to-[#fccc63] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#e95950]/10"
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
