import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { LanguageStories } from "@/components/site/LanguageStories";
import { Journey } from "@/components/site/Journey";
import { Stats } from "@/components/site/Stats";
import { Trainers } from "@/components/site/Trainers";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Institute of Languages — Speak to the World" },
      { name: "description", content: "Master English, Hindi, Japanese, German, and Tamil with expert trainers at the Institute of Languages — a premium global language experience." },
      { property: "og:title", content: "Institute of Languages — Speak to the World" },
      { property: "og:description", content: "A premium language atelier teaching five world languages." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Institute of Languages",
          description: "Premium language institute teaching English, Hindi, Japanese, German and Tamil.",
          url: "/",
          telephone: "+91-98765-43210",
          address: { "@type": "PostalAddress", streetAddress: "24 Linguist Lane", addressLocality: "Chennai", postalCode: "600001", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <About />
        <LanguageStories />
        <Journey />
        <Stats />
        <Trainers />
        <Testimonials />
        <Gallery />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="bottom-center" />
    </div>
  );
}
