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
      { title: "Mozhi Mirai Lingua Institute of Languages — The Future of Languages" },
      { name: "description", content: "Master English, Hindi, Japanese, German, and Tamil with expert online trainers at Mozhi Mirai Lingua Institute of Languages — the premier online language institute." },
      { property: "og:title", content: "Mozhi Mirai Lingua Institute of Languages — The Future of Languages" },
      { property: "og:description", content: "A premier online language institute dedicated to transforming the way people learn languages." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Mozhi Mirai Lingua Institute of Languages",
          description: "A premier online language institute dedicated to transforming the way people learn languages. Specializing in English, Hindi, Japanese, German, and Tamil.",
          url: "/",
          telephone: "+91 87545 58374",
          address: { "@type": "PostalAddress", streetAddress: "Online Only", addressLocality: "Chennai", postalCode: "600001", addressCountry: "IN" },
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
