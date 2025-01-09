import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ledgerline Technology",
  description: "Ledgerline is a leading blockchain and software development company in Vadodara, Gujarat, providing innovative technology solutions tailored to your needs.",
  keywords: [
    "blockchain company",
    "software development",
    "Vadodara technology company",
    "Gujarat blockchain solutions",
    "custom software development",
    "blockchain development services",
    "Ledgerline technology",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ledgerlinetechnology-pqqo.vercel.app",
    title: "Ledgerline | Best Blockchain & Software Development Company",
    description: "Ledgerline offers top-notch blockchain solutions and software development services in Gujarat. Partner with us for innovative tech solutions.",
    siteName: "Ledgerline",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
