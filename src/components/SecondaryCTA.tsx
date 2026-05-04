import Icon from "./Icon";
import { business, reviews, secondaryCta } from "@/data/content";

export default function SecondaryCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-dark">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,_var(--brand-amber)_0%,_transparent_50%),radial-gradient(circle_at_70%_80%,_var(--brand-navy-light)_0%,_transparent_50%)]"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block w-16 h-px bg-brand-accent" />
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 text-balance">
          {secondaryCta.heading}
        </h2>
        <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed mb-6 font-sans text-pretty">
          {secondaryCta.description}
        </p>

        <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="text-brand-accent text-sm" aria-hidden>
            ★★★★★
          </span>
          <span className="text-white/80 text-sm">
            {reviews.rating.toFixed(1)} av 5 · {reviews.count} betyg på
            Bokadirekt
          </span>
        </div>

        <div>
          <a
            href={business.bokadirektUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-white font-bold uppercase tracking-wider text-base rounded-2xl hover:bg-brand-accent-light shadow-2xl shadow-brand-accent/40 hover:shadow-brand-accent/60 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Icon name="calendar" className="w-5 h-5" />
            Boka via Bokadirekt
            <Icon
              name="external"
              className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
