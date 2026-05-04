import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { business, footerCopy, navItems, services } from "@/data/content";
import seoPagesData from "@/data/seo-pages.json";

type SeoPage = { slug: string; hero: { title: string } };
const seoPages = seoPagesData as SeoPage[];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.png"
              alt="Vackerbackens Medicinska Fotvård – logotyp"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-serif text-white text-base font-bold leading-tight">
                Vackerbackens
              </div>
              <div className="text-[10px] font-sans font-medium tracking-widest uppercase text-brand-accent">
                Medicinska Fotvård
              </div>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
            {footerCopy.description}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-accent/20 hover:text-brand-accent text-white/60 flex items-center justify-center transition-colors"
            >
              <Icon name="facebook" className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-accent/20 hover:text-brand-accent text-white/60 flex items-center justify-center transition-colors"
            >
              <Icon name="instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
            Navigation
          </h3>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/50 text-sm hover:text-brand-accent transition-colors duration-200 font-sans"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
            Tjänster
          </h3>
          <ul className="space-y-3">
            {services.items.map((s) => (
              <li key={s.title}>
                <a
                  href="#section-3"
                  className="text-white/50 text-sm hover:text-brand-accent transition-colors duration-200 font-sans"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
            Områden
          </h3>
          <ul className="space-y-3">
            {seoPages.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="text-white/50 text-sm hover:text-brand-accent transition-colors duration-200 font-sans"
                >
                  {p.hero.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
            Kontakt
          </h3>
          <ul className="space-y-3 mb-6">
            <li>
              <a
                href={business.phoneHref}
                className="text-white/50 text-sm hover:text-brand-accent transition-colors duration-200 font-sans"
              >
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="text-white/50 text-sm hover:text-brand-accent transition-colors duration-200 font-sans"
              >
                {business.email}
              </a>
            </li>
            <li className="text-white/50 text-sm font-sans">{business.area}</li>
          </ul>
          <a
            href="#section-5"
            className="inline-block px-5 py-2.5 bg-brand-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-accent-light hover:shadow-md hover:shadow-brand-accent/30 transition-all duration-300"
          >
            Boka tid
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-sans">
            © {year} {business.name}. Alla rättigheter reserverade.
          </p>
          <p className="text-white/35 text-xs font-sans">{business.area}</p>
        </div>
      </div>
    </footer>
  );
}
