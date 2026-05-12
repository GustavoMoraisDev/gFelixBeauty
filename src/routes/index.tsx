import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Differentials } from "@/components/landing/Differentials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Giovanna Félix · Especialista em Sobrancelhas" },
      { name: "description", content: "Studio premium de design de sobrancelhas, lash lift, brow lamination e realce do olhar com Giovanna Félix." },
      { property: "og:title", content: "Giovanna Félix · Realçando sua beleza através do olhar" },
      { property: "og:description", content: "Agende seu horário no studio premium de Giovanna Félix." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Differentials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
