import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Cooper Hewitt — the exact typeface the live site uses.
   (Open-source, SIL OFL licensed — the same woff2 files the site serves.)
   The real site only loads medium + semibold uprights, so heavier
   weights map to semibold exactly as they render on gre.ac.uk. */
const cooperHewitt = localFont({
  src: [
    {
      path: "../public/fonts/cooperhewitt-medium-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/cooperhewitt-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/cooperhewitt-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/cooperhewitt-semibold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/cooperhewitt-semibold-webfont.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/cooperhewitt-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-cooper",
});

export const metadata: Metadata = {
  title: "University of Greenwich | Clone Project",
  description:
    "An educational recreation of the University of Greenwich website, built with Next.js and Tailwind CSS for web-development practice. Not affiliated with the university.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cooperHewitt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
