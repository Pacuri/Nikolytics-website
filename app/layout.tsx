import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import Reveal from "@/components/Reveal";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const label = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}. ${site.motto}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}. ${site.motto}`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${label.variable}`}>
      <body>
        <SmoothScroll />
        <Reveal />
        {children}
      </body>
    </html>
  );
}
