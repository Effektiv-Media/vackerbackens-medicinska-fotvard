import { business, openingHours, reviews, services } from "@/data/content";
import { faqs } from "@/data/faqs";

type Json =
  | string
  | number
  | boolean
  | null
  | undefined
  | Json[]
  | { [k: string]: Json };

function Script({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe here — values are static, vetted strings/numbers.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const businessId = `${business.url}/#localbusiness`;

function localBusinessSchema(): Json {
  const openingHoursSpecification = openingHours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    }));

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": businessId,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    telephone: business.phoneE164,
    email: business.email,
    image: [
      `${business.url}/opengraph-image`,
      `${business.url}/owner.jpg`,
      `${business.url}/hero-bg.jpg`,
    ],
    logo: `${business.url}/logo.png`,
    priceRange: business.priceRange,
    description:
      "Diplomerad medicinsk fotterapeut i Luleå. Behandling av förhårdnader, liktorn, nagel- och hudsvamp, vårtor samt rådgivning om skor och inlägg. Ambulerande fotvård erbjuds. Medlem i Sveriges Medicinska fotterapeuter.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      postalCode: business.address.postalCode,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Luleå" },
      { "@type": "Place", name: "Vackerbacken" },
      { "@type": "AdministrativeArea", name: "Norrbottens län" },
    ],
    openingHoursSpecification,
    sameAs: [business.bokadirektUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fotvårdsbehandlingar",
      itemListElement: services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          image: `${business.url}${encodeURI(s.image)}`,
          provider: { "@id": businessId },
          areaServed: "Luleå",
        },
      })),
    },
    knowsLanguage: ["sv-SE"],
    paymentAccepted: "Kontant, Kort, Swish",
    currenciesAccepted: "SEK",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.rating,
      reviewCount: reviews.count,
      bestRating: reviews.bestRating,
      worstRating: reviews.worstRating,
    },
  };
}

export function LocalBusinessJsonLd() {
  return <Script data={localBusinessSchema()} />;
}

export function FaqJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return <Script data={data} />;
}

export function WebSiteJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.url}/#website`,
    url: business.url,
    name: business.name,
    inLanguage: "sv-SE",
    publisher: { "@id": businessId },
  };
  return <Script data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${business.url}${it.url}`,
    })),
  };
  return <Script data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  serviceArea,
  url,
  image,
}: {
  name: string;
  description: string;
  serviceArea: string;
  url: string;
  image?: string;
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: serviceArea },
    url: url.startsWith("http") ? url : `${business.url}${url}`,
    serviceType: name,
    ...(image && {
      image: image.startsWith("http")
        ? image
        : `${business.url}${encodeURI(image)}`,
    }),
  };
  return <Script data={data} />;
}
