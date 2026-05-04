import Link from "next/link";
import Icon from "./Icon";
import seoPagesData from "@/data/seo-pages.json";

type SeoPage = {
  slug: string;
  keyword: string;
  area: string;
  hero: { title: string };
  metaDescription: string;
};

const seoPages = seoPagesData as SeoPage[];

export default function LocalAreas({
  excludeSlug,
}: {
  excludeSlug?: string;
}) {
  const pages = seoPages.filter((p) => p.slug !== excludeSlug);
  if (pages.length === 0) return null;

  return (
    <section
      aria-labelledby="local-areas-heading"
      className="py-20 bg-brand-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-heading-eyebrow">Områden vi servar</span>
          <h2 id="local-areas-heading" className="section-heading">
            Fotvård i Luleå med omnejd
          </h2>
          <p className="section-subheading">
            Hitta information om våra fotvårdstjänster i Luleå. Vi tar emot dig
            i Vackerbacken eller kommer hem till dig med ambulerande fotvård.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group flex items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-border hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4 min-w-0">
                <span className="shrink-0 w-11 h-11 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Icon name="map-pin" className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-bold text-brand-navy mb-1 truncate">
                    {p.hero.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-snug font-sans line-clamp-2">
                    {p.metaDescription}
                  </p>
                </div>
              </div>
              <span
                aria-hidden
                className="shrink-0 text-brand-accent group-hover:translate-x-1 transition-transform"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
