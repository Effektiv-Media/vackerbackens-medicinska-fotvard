export type Faq = {
  q: string;
  a: string;
  cta?: { label: string; href: string; external?: boolean };
};

export const faqs: Faq[] = [
  {
    q: "Vad är medicinsk fotvård?",
    a: "Medicinsk fotvård är professionell vård av fötterna utförd av utbildad fotvårdsterapeut. Vi behandlar allt från förhårdnader och liktorn till nagelproblem och svamp – på ett säkert och skonsamt sätt.",
  },
  {
    q: "Tar ni emot patienter med diabetes?",
    a: "Ja, vi har erfarenhet av fotvård för personer med diabetes och tar extra hänsyn till känsliga fötter. Vi rekommenderar regelbundna besök för förebyggande vård.",
  },
  {
    q: "Hur lång tid tar ett besök?",
    a: "Ett vanligt besök tar ungefär 60 minuter beroende på vilka behandlingar som behövs. Vi tar oss alltid den tid som krävs för att göra ett grundligt arbete.",
  },
  {
    q: "Erbjuder ni ambulerande fotvård?",
    a: "Ja, jag erbjuder ambulerande fotvård för dig som har svårt att ta dig till kliniken. Ambulerande fotvård bokas via mobilkontakt – ring mig på 070-300 19 19 så berättar jag mer om hur det fungerar.",
  },
  {
    q: "Var ligger ni?",
    a: "Vi är belägna i natursköna Vackerbacken, ett stenkast från centrala Luleå. Fri parkering finns på plats och det går utmärkt att kombinera ditt besök med en stund av återhämtning i den lugna miljön.",
  },
  {
    q: "Hur bokar jag lättast tid?",
    a: "I första hand bokar du enkelt din tid online via Bokadirekt – det är den snabbaste och smidigaste vägen. För ambulerande fotvård, frågor eller andra önskemål är du varmt välkommen att ringa mig på 070-300 19 19.",
    cta: {
      label: "Boka tid via Bokadirekt",
      href: "https://www.bokadirekt.se/places/vackerbackens-medicinska-fotvard-134803",
      external: true,
    },
  },
];
