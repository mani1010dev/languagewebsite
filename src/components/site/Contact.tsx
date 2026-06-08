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

            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const name = data.get("name") as string;
            const email = data.get("email") as string;
            const phone = data.get("phone") as string;
            const lang = data.get("lang") as string;
            const message = data.get("message") as string;

            const lines = [
              `📚 *New Enquiry — Mozhi Mirai*`,
              ``,
              `👤 *Name:* ${name}`,
              `📧 *Email:* ${email}`,
              phone ? `📱 *Phone:* ${phone}` : null,
              `🌐 *Language:* ${lang}`,
              message ? `💬 *Message:* ${message}` : null,
              ``,
              `— Sent from mozhimirai.com`,
            ]
              .filter(Boolean)
              .join("\n");

            const waUrl = `https://wa.me/918754558374?text=${encodeURIComponent(lines)}`;
            window.open(waUrl, "_blank", "noopener,noreferrer");

            setSending(false);
            toast.success("Opening WhatsApp — please hit send to complete your enquiry!");
            form.reset();
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
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-7 py-4 font-medium hover:bg-[#1ebe57] transition-colors disabled:opacity-60 shadow-lg shadow-[#25D366]/20"
          >
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {sending ? "Opening…" : "Send via WhatsApp →"}
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