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
      </div>
    </section>
  );
}
