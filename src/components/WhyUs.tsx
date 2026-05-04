import Icon, { type IconName } from "./Icon";
import { whyUs } from "@/data/content";

export default function WhyUs() {
  return (
    <section
      id="section-2"
      aria-labelledby="why-us-heading"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">Varför oss</span>
          <h2 id="why-us-heading" className="section-heading">
            {whyUs.heading}
          </h2>
          <p className="section-subheading">{whyUs.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.items.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl border border-border bg-white hover:border-brand-accent/60 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <Icon name={item.icon as IconName} className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
