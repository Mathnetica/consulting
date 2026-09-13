import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/content/site";
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
  metadataBase: new URL("https://mathnetica.com"),
  title: {
    default: "Mathnetica — Data & AI Platform Engineering",
    template: "%s — Mathnetica",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_NL",
    siteName: siteConfig.name,
    title: "Mathnetica — Data & AI Platform Engineering",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathnetica — Data & AI Platform Engineering",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
