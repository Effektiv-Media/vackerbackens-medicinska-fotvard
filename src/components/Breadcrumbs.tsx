import Link from "next/link";

type Crumb = { name: string; url: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brödsmulor" className="max-w-7xl mx-auto px-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-white/70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {!isLast ? (
                <Link
                  href={item.url}
                  className="hover:text-brand-accent transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="text-brand-accent uppercase tracking-wider"
                >
                  {item.name}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-white/30">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
