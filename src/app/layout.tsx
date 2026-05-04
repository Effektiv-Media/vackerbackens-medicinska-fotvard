import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vackerbackensmedisinskfotvard.se"),
  title: {
    default: "Vackerbackens Medicinska Fotvård – Fotvård i Luleå, Vackerbacken",
    template: "%s | Vackerbackens Medicinska Fotvård",
  },
  description:
    "Professionell medicinsk fotvård i Vackerbacken, Luleå. Diplomerad medicinsk fotterapeut, medlem i Sveriges Medicinska fotterapeuter. Boka via Bokadirekt eller ring 070-300 19 19.",
  keywords: [
    "medicinsk fotvård",
    "fotvård Luleå",
    "fotvård Vackerbacken",
    "liktorn",
    "förhårdnader",
    "nagelsvamp",
    "ambulerande fotvård",
    "fotvårdsterapeut Luleå",
  ],
  authors: [{ name: "Vackerbackens Medicinska Fotvård" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vackerbackens Medicinska Fotvård – Fotvård i Luleå",
    description:
      "Professionell medicinsk fotvård i Vackerbacken, Luleå. Diplomerad fotterapeut, fri parkering, naturskön miljö.",
    locale: "sv_SE",
    type: "website",
    siteName: "Vackerbackens Medicinska Fotvård",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vackerbackens Medicinska Fotvård – Fotvård i Luleå",
    description:
      "Professionell medicinsk fotvård i Vackerbacken, Luleå. Boka via Bokadirekt eller ring 070-300 19 19.",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv-SE"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
