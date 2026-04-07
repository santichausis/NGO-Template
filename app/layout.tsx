import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * METADATA
 * --------
 * Update title, description, and OG image to match your organization.
 * The OG image is shown when sharing links on social media.
 * Replace the ogImage URL with /public/og-image.png (1200×630px recommended).
 */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "NGO",
    "nonprofit",
    "charity",
    "humanitarian",
    "community development",
    "education",
    "clean water",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hopeforward.org", // Replace with your domain
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
