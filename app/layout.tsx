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
 * - metadataBase: required so Next.js can resolve relative OG image URLs.
 *   Update siteConfig.url in lib/content.ts to your real domain.
 * - Replace the ogImage path with /public/og-image.png (1200×630px recommended).
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteConfig.url,
  },
};

/**
 * JSON-LD STRUCTURED DATA
 * -----------------------
 * Helps Google display rich results (organization info, search box, etc.)
 * Update all fields to match your real organization.
 * Reference: https://schema.org/NGO
 */
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    sameAs: Object.values(siteConfig.socialLinks),
    // logo: `${siteConfig.url}/logo.png`, // Uncomment once you have a real logo
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
