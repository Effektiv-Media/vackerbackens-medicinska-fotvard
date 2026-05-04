import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { business, navItems, reviews } from "@/data/content";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="border-b border-white/10 bg-brand-navy/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-2.5 text-xs text-white/70">
          <div className="flex items-center gap-4">
            <a
              href={business.phoneHref}
              className="hover:text-brand-accent transition-colors flex items-center gap-1.5"
            >
              <Icon name="phone" className="w-3 h-3" />
              {business.phone}
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span className="text-brand-accent" aria-hidden>
                ★★★★★
              </span>
              <span className="text-white/80">
                {reviews.rating.toFixed(1)} ({reviews.count} betyg)
              </span>
            </span>
          </div>
          <a
            href={business.emailHref}
            className="hidden md:inline text-sm text-white/70 hover:text-brand-accent transition-colors"
          >
            {business.email}
          </a>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label={`${business.name} – till startsidan`}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Vackerbackens Medicinska Fotvård – logotyp"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain"
          />
          <span className="hidden md:block font-serif text-white text-lg font-bold leading-tight">
            Vackerbackens
            <span className="block text-xs font-sans font-medium tracking-widest uppercase text-brand-accent">
              Medicinska Fotvård
            </span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Link>
          ))}
          <a
            href={business.bokadirektUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2.5 px-6 py-3 bg-brand-accent text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-brand-accent-light hover:shadow-lg hover:shadow-brand-accent/40 transition-all hover:scale-105 active:scale-95"
          >
            <Icon name="calendar" className="w-4 h-4" />
            Boka
          </a>
        </div>
        <a
          href={business.bokadirektUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-brand-accent/30"
        >
          <Icon name="calendar" className="w-3.5 h-3.5" />
          Boka tid
        </a>
      </nav>
    </header>
  );
}
