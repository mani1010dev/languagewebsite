const POSTS = [
  { tag: "English", title: "Five phrases that make you sound instantly native", read: "6 min", color: "text-orange" },
  { tag: "Japanese", title: "Kanji without tears: a beginner's mental model", read: "8 min", color: "text-pink" },
  { tag: "German", title: "Why German grammar feels like architecture", read: "5 min", color: "text-royal" },
  { tag: "Communication", title: "The art of speaking less and saying more", read: "4 min", color: "text-purple" },
];

export function Blog() {
  return (
    <section id="blog" className="py-28 md:py-36 bg-white/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Journal</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">Read, then <span className="italic text-gradient-brand">speak.</span></h2>
          </div>
          <a href="#" className="text-sm font-medium border-b border-foreground/40 hover:border-royal hover:text-royal pb-1">All essays →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((p) => (
            <a key={p.title} href="#" className="group block p-7 bg-card rounded-2xl border border-foreground/5 hover:border-royal/40 hover:-translate-y-1 transition-all">
              <span className={`text-xs uppercase tracking-[0.25em] ${p.color}`}>{p.tag}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight group-hover:text-royal transition-colors">{p.title}</h3>
              <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">{p.read} read</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}