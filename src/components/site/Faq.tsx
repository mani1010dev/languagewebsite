import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How do I enrol?", a: "Pick a language above and use the contact form, or call us directly — we'll guide you to the right batch." },
  { q: "Are these classes fully online?", a: "Yes. Mozhi Mirai is a fully online language institute. Every course is conducted 100% live online with interactive sessions, expert guidance, and recorded backups for your convenience." },
  { q: "Do you provide certificates?", a: "Yes — institute certifications plus preparation for international exams like IELTS, JLPT, and Goethe." },
  { q: "What are the batch timings?", a: "Morning, evening, and weekend batches. We accommodate students, professionals, and travellers." },
  { q: "Which language should I choose?", a: "If you're unsure, book a free consultation — we'll help you match a language to your goals." },
];

export function Faq() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Quiet Questions</p>
        <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] mb-12">
          You asked, <span className="italic text-gradient-brand">we listened.</span>
        </h2>

        <Accordion type="single" collapsible className="divide-y divide-foreground/10 border-y border-foreground/10">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="py-6 text-left font-display text-xl md:text-2xl hover:text-royal hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/75 pb-6 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}