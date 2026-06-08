const COLS = [
  { title: "Languages", links: ["English", "Hindi", "Japanese", "German", "Tamil"] },
  { title: "Institute", links: ["About", "Trainers", "Gallery", "Blog", "Careers"] },
  { title: "Connect", links: ["Instagram", "YouTube", "LinkedIn", "WhatsApp"] },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="font-display text-5xl md:text-6xl leading-none">
              Mozhi<br/><span className="italic text-yellow">Mirai.</span>
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
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-background/85 hover:text-yellow transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 text-xs text-background/60 leading-relaxed">
            Online Only<br/>+91 87545 58374
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Mozhi Mirai. The Future of Languages.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}