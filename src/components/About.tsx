import Image from "next/image";
import Icon from "./Icon";
import { about, business } from "@/data/content";

export default function About() {
  return (
    <section
      id="section-4"
      aria-labelledby="about-heading"
      className="py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/20">
            <Image
              src="/owner.jpg"
              alt="Diplomerad medicinsk fotterapeut i Vackerbacken, Luleå"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 -z-10 hidden md:block" />
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-brand-navy/5 border border-brand-navy/10 -z-10 hidden md:block" />
        </div>

        <div>
          <span className="section-heading-eyebrow">{about.eyebrow}</span>
          <h2 id="about-heading" className="section-heading">
            {about.heading}
          </h2>
          <p className="text-brand-amber font-sans font-medium mb-6 text-sm uppercase tracking-wider">
            {about.subheading}
          </p>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-muted-foreground leading-relaxed mb-5 font-sans text-pretty"
            >
              {p}
            </p>
          ))}
          <a
            href={business.bokadirektUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-9 py-5 bg-brand-accent text-white font-bold uppercase tracking-wider text-base rounded-2xl hover:bg-brand-accent-light shadow-xl shadow-brand-accent/30 hover:shadow-brand-accent/50 transition-all duration-300 hover:scale-105 active:scale-95"
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
