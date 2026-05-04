import Image from "next/image";
import Icon, { type IconName } from "./Icon";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section
      id="section-3"
      aria-labelledby="services-heading"
      className="py-24 bg-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">Tjänster</span>
          <h2 id="services-heading" className="section-heading">
            {services.heading}
          </h2>
          <p className="section-subheading">{services.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden hover:border-brand-accent/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-brand-navy/10">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/95 backdrop-blur-sm text-brand-accent shadow-lg shadow-brand-navy/20">
                  <Icon name={item.icon as IconName} className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1 flex flex-col p-7">
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans flex-1">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
