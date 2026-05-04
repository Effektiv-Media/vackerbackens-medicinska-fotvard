import Icon from "./Icon";
import { business, contact, openingHours, reviews } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="section-5"
      aria-labelledby="contact-heading"
      className="py-24 bg-brand-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">{contact.eyebrow}</span>
          <h2 id="contact-heading" className="section-heading">
            {contact.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-brand-navy p-10 text-white shadow-xl shadow-brand-navy/20">
            <h3 className="font-serif text-2xl font-bold mb-2">
              {contact.detailsHeading}
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-8 font-sans">
              {contact.detailsLead}
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-accent/15 text-brand-accent flex items-center justify-center">
                  <Icon name="phone" className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider font-sans mb-1">
                    Telefon
                  </div>
                  <a
                    href={business.phoneHref}
                    className="text-white font-medium hover:text-brand-accent transition-colors text-sm"
                  >
                    {business.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-accent/15 text-brand-accent flex items-center justify-center">
                  <Icon name="mail" className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider font-sans mb-1">
                    E-post
                  </div>
                  <a
                    href={business.emailHref}
                    className="text-white font-medium hover:text-brand-accent transition-colors text-sm"
                  >
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-accent/15 text-brand-accent flex items-center justify-center">
                  <Icon name="map-pin" className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider font-sans mb-1">
                    Adress
                  </div>
                  <address className="not-italic text-white font-medium text-sm leading-relaxed">
                    {business.address.streetAddress}
                    <br />
                    {business.address.postalCode}{" "}
                    {business.address.addressLocality}
                  </address>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white/50 text-xs uppercase tracking-wider font-sans mb-3">
                Ordinarie öppettider
              </h4>
              <dl className="space-y-1.5 text-sm">
                {openingHours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between gap-4 text-white/80"
                  >
                    <dt className="font-sans">{h.label}</dt>
                    <dd className="font-medium tabular-nums text-white/90">
                      {h.opens && h.closes ? (
                        `${h.opens} – ${h.closes}`
                      ) : (
                        <span className="text-white/40">Stängt</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-6 pt-6 border-t border-white/10 text-white/65 text-xs leading-relaxed font-sans">
              {contact.parkingNote}
            </p>
          </div>

          <div className="relative rounded-3xl bg-linear-to-br from-brand-navy via-brand-navy/95 to-brand-navy-dark p-10 text-white shadow-2xl shadow-brand-navy/30 flex flex-col overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-brand-accent/20 blur-3xl"
            />
            <div className="relative flex-1">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                <span className="text-brand-accent text-xs" aria-hidden>
                  ★★★★★
                </span>
                <span className="text-white/85 text-xs font-medium">
                  {reviews.rating.toFixed(1)} av 5 · {reviews.count} betyg
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 text-balance">
                {contact.bookHeading}
              </h3>
              <p className="text-white/80 font-sans text-lg leading-relaxed mb-8">
                {contact.bookLead}
              </p>
            </div>
            <div className="relative space-y-4">
              <a
                href={business.bokadirektUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between gap-3 px-7 py-5 bg-brand-accent hover:bg-brand-accent-light text-white font-bold uppercase tracking-wider text-base rounded-2xl transition-all shadow-2xl shadow-brand-accent/40 hover:shadow-brand-accent/60 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="flex items-center gap-3">
                  <Icon name="calendar" className="w-6 h-6" />
                  Boka via Bokadirekt
                </span>
                <Icon
                  name="external"
                  className="w-5 h-5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <p className="text-sm text-white/55 font-sans text-center">
                {contact.bookOnlineHelp}
              </p>
              <a
                href={business.phoneHref}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded-xl transition-all"
              >
                <Icon name="phone" className="w-5 h-5" />
                Ring {business.phone}
              </a>
              <p className="text-sm text-white/55 font-sans text-center">
                {contact.bookCallHelp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
