import Icon from "./Icon";
import { business, midCta } from "@/data/content";

export default function MidCTA() {
  return (
    <section className="bg-brand-navy">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
            {midCta.heading}
          </h3>
          <p className="text-white/65 font-sans leading-relaxed">
            {midCta.description}
          </p>
        </div>
        <a
          href={business.bokadirektUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group shrink-0 inline-flex items-center gap-3 px-9 py-5 bg-brand-accent text-white font-bold uppercase tracking-wider text-base rounded-2xl hover:bg-brand-accent-light shadow-xl shadow-brand-accent/30 hover:shadow-brand-accent/50 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <Icon name="calendar" className="w-5 h-5" />
          Boka via Bokadirekt
          <Icon
            name="external"
            className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}
