import { Counter } from "./Counter";

const STATS = [
  { n: 5000, suffix: "+", label: "Students Trained", color: "text-royal" },
  { n: 95, suffix: "%", label: "Success Rate", color: "text-pink" },
  { n: 20, suffix: "+", label: "Expert Trainers", color: "text-orange" },
  { n: 5, suffix: "", label: "World Languages", color: "text-purple" },
];

export function Stats() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-foreground/10 rounded-3xl glass-card overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="p-8 md:p-12">
              <div className={`font-display text-6xl md:text-7xl leading-none ${s.color}`}>
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}