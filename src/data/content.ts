export const business = {
  name: "Vackerbackens Medicinska Fotvård",
  legalName: "Vackerbackens Medicinska Fotvård",
  phone: "070-300 19 19",
  phoneHref: "tel:+46703001919",
  phoneE164: "+46703001919",
  email: "guggilu@hotmail.com",
  emailHref: "mailto:guggilu@hotmail.com",
  area: "Vackerbacken, Luleå",
  url: "https://www.vackerbackensmedisinskfotvard.se",
  address: {
    streetAddress: "Vackerbacken 78",
    postalCode: "975 94",
    addressLocality: "Luleå",
    addressRegion: "Norrbottens län",
    addressCountry: "SE",
  },
  geo: {
    latitude: 65.6552,
    longitude: 21.9056,
  },
  priceRange: "$$",
  bokadirektUrl:
    "https://www.bokadirekt.se/places/vackerbackens-medicinska-fotvard-134803",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

// Aggregate rating from Bokadirekt
export const reviews = {
  rating: 5.0,
  count: 9,
  bestRating: 5,
  worstRating: 1,
  source: "Bokadirekt",
  sourceUrl:
    "https://www.bokadirekt.se/places/vackerbackens-medicinska-fotvard-134803",
} as const;

// Schema.org dayOfWeek values
export const openingHours = [
  { day: "Monday", label: "Måndag", opens: "09:00", closes: "18:00" },
  { day: "Tuesday", label: "Tisdag", opens: "09:00", closes: "19:00" },
  { day: "Wednesday", label: "Onsdag", opens: "09:00", closes: "18:00" },
  { day: "Thursday", label: "Torsdag", opens: "09:00", closes: "19:00" },
  { day: "Friday", label: "Fredag", opens: "09:00", closes: "16:00" },
  { day: "Saturday", label: "Lördag", opens: null, closes: null },
  { day: "Sunday", label: "Söndag", opens: null, closes: null },
] as const;

export type HeroContent = {
  eyebrow?: string;
  title: string;
  description: string;
};

export const defaultHero: HeroContent = {
  eyebrow: "Medicinsk fotvård i Luleå",
  title: "Medicinsk fotvård i Luleå",
  description:
    "Välkommen till Vackerbackens Medicinska Fotvård. Diplomerad Medicinsk Fotterapeut. Medlem i Sveriges Medicinska fotterapeuter. Vi tar hand om dina fötter med omsorg och professionalism i en naturskön miljö nära Luleå centrum.",
};

export const whyUs = {
  heading: "Varför välja Vackerbackens Medicinska Fotvård?",
  subheading:
    "Jag är diplomerad medicinsk fotterapeut, medlem i Sveriges Medicinska fotterapeuter. Du får personlig service i en naturskön miljö.",
  items: [
    {
      title: "Medicinsk kompetens",
      description:
        "Vi är utbildade fotvårdsterapeuter med lång erfarenhet av medicinska fotproblem. Du är i trygga och kunniga händer.",
      icon: "shield-check",
    },
    {
      title: "Naturskönt läge",
      description:
        "Vår klinik ligger i vackra Vackerbacken, ett stenkast från centrala Luleå. En lugn och avkopplande miljö som gör besöket till en upplevelse.",
      icon: "leaf",
    },
    {
      title: "Fri parkering",
      description:
        "Vi erbjuder fri parkering direkt utanför kliniken. Inga krångel eller parkeringsavgifter – bara enkel och smidig access.",
      icon: "car",
    },
    {
      title: "Lugn miljö",
      description:
        "Naturen runt oss skapar en unik atmosfär. Kombinera din fotvård med en stund av återhämtning i vacker miljö.",
      icon: "sparkle",
    },
    {
      title: "Ambulerande fotvård",
      description:
        "Ambulerande fotvård görs via mobilkontakt. Kontakta mig direkt för att boka tid på hemmet.",
      icon: "home",
    },
    {
      title: "Personlig service",
      description:
        "Vi tar oss alltid den tid som behövs för att göra ett grundligt och noggrant arbete. Du är aldrig ett nummer i kön.",
      icon: "heart",
    },
  ],
};

export const services = {
  heading: "Våra fotvårdstjänster",
  subheading:
    "Vi erbjuder ett brett utbud av medicinska fotvårdsbehandlingar anpassade efter dina individuella behov.",
  items: [
    {
      title: "Medicinsk fotvård",
      description:
        "Professionell medicinsk fotvård utförd med precision och omsorg. Vi behandlar fötterna på ett säkert och skonsamt sätt med rätt verktyg och metoder.",
      icon: "stethoscope",
      image: "/services/medicinsk-fotvard-lulea.jpg",
      imageAlt:
        "Diplomerad fotterapeut utför medicinsk fotvård på klinik i Vackerbacken, Luleå",
      imageWidth: 1280,
      imageHeight: 854,
    },
    {
      title: "Ambulerande fotvård",
      description:
        "Kan du inte ta dig till oss? Vi erbjuder ambulerande fotvård och kommer hem till dig. Perfekt för dig som har svårt att ta dig ut.",
      icon: "home",
      image: "/services/ambulerande-fotvard-lulea.jpg",
      imageAlt:
        "Ambulerande fotvård – hembesök hos kund i Luleå för medicinsk fotbehandling",
      imageWidth: 1280,
      imageHeight: 854,
    },
    {
      title: "Förhårdnader & liktorn",
      description:
        "Vi behandlar effektivt förhårdnader och liktorn som kan orsaka smärta och obehag. Du känner skillnaden direkt efter behandlingen.",
      icon: "hand",
      image: "/services/forhardnader-liktorn-behandling.jpg",
      imageAlt:
        "Skonsam behandling av förhårdnader och liktorn på fötter hos fotterapeut i Luleå",
      imageWidth: 1280,
      imageHeight: 853,
    },
    {
      title: "Nagel- & hudsvamp",
      description:
        "Noggrann behandling av nagel- och hudsvamp med beprövade metoder. Vi ger dig också råd om hur du förebygger återfall.",
      icon: "drop",
      image: "/services/nagelsvamp-hudsvamp-behandling.jpg",
      imageAlt:
        "Behandling av nagelsvamp och hudsvamp på tånaglar – Vackerbackens Medicinska Fotvård i Luleå",
      imageWidth: 1280,
      imageHeight: 854,
    },
    {
      title: "Skor, inlägg & fotgymnastik",
      description:
        "Vi ger individuell rådgivning om rätt skoval och inlägg för just dina fötter, samt enkel fotgymnastik för bättre hälsa.",
      icon: "shoe",
      image: "/services/skor-inlagg-fotgymnastik.jpg",
      imageAlt:
        "Rådgivning om skor, inlägg och fotgymnastik för friskare fötter hos fotterapeut",
      imageWidth: 1280,
      imageHeight: 960,
    },
    {
      title: "Vårtor",
      description:
        "Behandling av vårtor på ett effektivt och skonsamt sätt. Vi väljer metod utifrån din situation och önskemål.",
      icon: "spark",
      image: "/services/vartor-behandling.jpg",
      imageAlt:
        "Effektiv behandling av vårtor på fötter hos diplomerad fotterapeut i Luleå",
      imageWidth: 1280,
      imageHeight: 854,
    },
  ],
};

export const about = {
  heading: "Diplomerad Medicinsk Fotterapeut",
  eyebrow: "Om oss",
  subheading: "Medlem i Sveriges Medicinska fotterapeuter",
  paragraphs: [
    "Välkommen till Vackerbackens Medicinska Fotvård. Jag är diplomerad medicinsk fotterapeut och medlem i Sveriges Medicinska fotterapeuter. Jag ligger i natursköna Vackerbacken, ett stenkast från centrala Luleå, där jag erbjuder professionell fotvård i en lugn och ombonad miljö med fri parkering.",
    "Jag behandlar allt från vardagliga fotvårdsbehov till mer komplexa medicinska tillstånd. För ambulerande fotvård kontaktar du mig via mobil. Naturen runt oss skapar en unik atmosfär. Jag tar alltid den tid som krävs för att ge dig bästa möjliga behandling.",
  ],
};

export const midCta = {
  heading: "Redo för friskare och välmående fötter?",
  description:
    "Vi välkomnar dig till vår klinik i Vackerbacken – nära Luleå, med fri parkering.",
  buttonLabel: "Boka din tid",
};

export const secondaryCta = {
  heading: "Redo för bättre fötter?",
  description:
    "Boka din fotvårdsbehandling hos oss i Vackerbacken. Vi ser fram emot att välkomna dig i en lugn och naturskön miljö nära Luleå centrum.",
  buttonLabel: "Boka din tid",
};

export const contact = {
  eyebrow: "Kontakt & Bokning",
  heading: "Boka din fotvårdsbehandling",
  subheading:
    "Hänvisa bokningarna till Bokadirekt eller ring för frågor. För ambulerande fotvård kontaktar du mig via mobil.",
  detailsHeading: "Kontaktuppgifter",
  detailsLead:
    "Hänvisa bokningarna till Bokadirekt. Vid frågor eller för ambulerande fotvård, ring direkt.",
  parkingNote:
    "Fri parkering direkt utanför kliniken i Vackerbacken. Nära Luleå centrum och enkelt att hitta.",
  bookHeading: "Boka online via Bokadirekt",
  bookLead: "Enkelt och snabbt – boka din fotvårdsbehandling direkt",
  bookOnlineHelp: "Boka online när det passar dig, dygnet runt",
  bookCallHelp: "Ring för frågor eller ambulerande fotvård",
};

// Nav items use absolute paths so they work from any route.
// On the homepage, Next.js handles the hash scroll; on slug pages,
// they navigate to "/" and scroll to the section.
export const navItems = [
  { label: "Hem", href: "/" },
  { label: "Varför oss", href: "/#section-2" },
  { label: "Tjänster", href: "/#section-3" },
  { label: "Om oss", href: "/#section-4" },
  { label: "Kontakt", href: "/#section-5" },
];

export const footerCopy = {
  description:
    "Diplomerad Medicinsk Fotterapeut. Medlem i Sveriges Medicinska fotterapeuter. Professionell fotvård i naturskön miljö. Fri parkering.",
};
