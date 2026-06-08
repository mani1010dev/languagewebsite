const COLS = [
  {
    title: "Languages",
    links: [
      { label: "English", href: "#languages" },
      { label: "Hindi", href: "#languages" },
      { label: "Japanese", href: "#languages" },
      { label: "German", href: "#languages" },
      { label: "Tamil", href: "#languages" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/mozhimirai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", target: "_blank" },
      { label: "WhatsApp", href: "https://wa.me/918754558374", target: "_blank" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/Untitled design (20).png" alt="MMLI Logo" className="h-14 w-auto object-contain" />
              <div className="font-display text-3xl md:text-4xl leading-[1.1]">
                Mozhi Mirai<br/>
                Lingua <span className="italic text-yellow">Institute.</span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-background/70">The Future of Languages. A premier online language institute dedicated to transforming the way people learn languages.</p>

            <form className="mt-8 flex gap-2 max-w-md">
              <input type="email" placeholder="Your email for updates" className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-yellow" />
              <button className="rounded-full bg-yellow text-foreground px-5 py-3 text-sm font-medium hover:bg-orange transition">Subscribe</button>
            </form>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.3em] text-background/60">{c.title}</div>
              <ul className="mt-5 space-y-3">
                {c.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-background/85 hover:text-yellow transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 text-xs text-background/60 leading-relaxed md:text-right">
            Online Only<br/>+91 87545 58374
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Mozhi Mirai Lingua Institute of Languages. The Future of Languages.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}