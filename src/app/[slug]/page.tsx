import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  BreadcrumbJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import seoPagesData from "@/data/seo-pages.json";

type SeoPage = {
  slug: string;
  keyword: string;
  area: string;
  title: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; description: string };
  intro: { heading: string; paragraphs: string[] };
};

const seoPages = seoPagesData as SeoPage[];

function findPage(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return seoPages.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      locale: "sv_SE",
      type: "website",
      url: `/${page.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
    },
  };
}

export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();

  const breadcrumbs = [
    { name: "Hem", url: "/" },
    { name: page.hero.title, url: `/${page.slug}` },
  ];

  return (
    <>
      <LocalBusinessJsonLd />
      <FaqJsonLd />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServiceJsonLd
        name={`${page.keyword} i ${page.area}`}
        description={page.hero.description}
        serviceArea={page.area}
        url={`/${page.slug}`}
        image="/services/medicinsk-fotvard-lulea.jpg"
      />
      <Header />
      <main className="flex-1">
        <Hero hero={page.hero} breadcrumbs={breadcrumbs} />

        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="section-heading-eyebrow">
              {page.keyword} i {page.area}
            </span>
            <h2 className="section-heading">{page.intro.heading}</h2>
            {page.intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed font-sans text-pretty mb-4 max-w-2xl mx-auto"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        <WhyUs />
        <Services />
        <MidCTA />
        <About />
        <SecondaryCTA />
        <FAQ />
        <LocalAreas excludeSlug={page.slug} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
