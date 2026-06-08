import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      <div aria-hidden className="absolute top-20 right-0 size-[500px] rounded-full bg-pink/15 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 left-0 size-[500px] rounded-full bg-royal/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Begin</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.92]">
            Start your <span className="italic text-gradient-brand">language journey</span> today.
          </h2>
          <p className="mt-8 text-lg text-foreground/70 max-w-md">
            Tell us where you'd like to go. We'll match you with the right trainer, batch, and pace.
          </p>

          <div className="mt-12 space-y-5 text-foreground/80">
            <a className="flex items-center gap-4 hover:text-royal" href="tel:+918754558374"><Phone className="size-5 text-royal" /> +91 87545 58374</a>
            <a className="flex items-center gap-4 hover:text-royal" href="mailto:mozhimirai@gmail.com"><Mail className="size-5 text-pink" /> mozhimirai@gmail.com</a>
            <div className="flex items-start gap-4"><MapPin className="size-5 text-orange mt-1" /> Online Only</div>
            <a className="flex items-center gap-4 hover:text-lime" target="_blank" rel="noopener noreferrer" href="https://wa.me/918754558374"><MessageCircle className="size-5 text-lime" /> WhatsApp us (+91 87545 58374)</a>
          </div>

          <p className="mt-10 text-xs uppercase tracking-widest text-muted-foreground">Daily · 11 am to 9 pm</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Thank you — we'll be in touch within a day.");
              (e.target as HTMLFormElement).reset();
            }, 800);
          }}
          className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Language Interested</label>
              <select required name="lang" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-royal transition">
                <option value="">Choose one…</option>
                <option>English</option><option>Hindi</option><option>Japanese</option><option>German</option><option>Tamil</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea name="message" rows={4} className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-royal transition resize-none" />
          </div>
          <button
            disabled={sending}
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 font-medium hover:bg-royal transition-colors disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input {...props} className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-royal transition" />
    </div>
  );
}