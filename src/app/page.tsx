import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import MidCTA from "@/components/MidCTA";
import About from "@/components/About";
import SecondaryCTA from "@/components/SecondaryCTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocalAreas from "@/components/LocalAreas";
import {
  LocalBusinessJsonLd,
  FaqJsonLd,
  WebSiteJsonLd,
} from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <WebSiteJsonLd />
      <FaqJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Services />
        <MidCTA />
        <About />
        <SecondaryCTA />
        <FAQ />
        <LocalAreas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
