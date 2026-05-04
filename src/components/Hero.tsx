import Image from "next/image";
import Icon from "./Icon";
import Breadcrumbs from "./Breadcrumbs";
import { business, defaultHero, reviews, type HeroContent } from "@/data/content";

type Props = {
  hero?: HeroContent;
  breadcrumbs?: { name: string; url: string }[];
};

export default function Hero({ hero = defaultHero, breadcrumbs }: Props) {
  return (
    <section
      id="section-1"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-brand-navy/90 via-brand-navy/65 to-brand-navy-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_30%,_rgba(0,44,74,0.6)_100%)]" />

      {breadcrumbs && (
        <div className="absolute inset-x-0 top-32 z-20">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        {hero.eyebrow && (
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent text-xs font-semibold uppercase tracking-widest">
            {hero.eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          {hero.title}
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 text-pretty font-sans">
          {hero.description}
        </p>

        <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
          <span className="text-brand-accent text-sm" aria-hidden>
            ★★★★★
          </span>
          <span className="text-white/90 text-sm font-medium">
            {reviews.rating.toFixed(1)} av 5
          </span>
          <span className="text-white/50 text-sm">·</span>
          <span className="text-white/70 text-sm">
            {reviews.count} betyg på Bokadirekt
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={business.bokadirektUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-white font-bold uppercase tracking-wider text-base rounded-2xl hover:bg-brand-accent-light shadow-2xl shadow-brand-accent/40 hover:shadow-brand-accent/60 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Icon name="calendar" className="w-5 h-5" />
            Boka
            <Icon
              name="external"
              className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <Icon name="phone" className="w-4 h-4" />
            Ring {business.phone}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 text-xs uppercase tracking-widest font-sans">
        Scrolla ner
      </div>
    </section>
  );
}
