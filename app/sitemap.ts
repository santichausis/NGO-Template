import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Add more pages here as you expand the site, e.g.:
    // { url: `${baseUrl}/about`, ... }
    // { url: `${baseUrl}/programs`, ... }
    // { url: `${baseUrl}/blog`, ... }
  ];
}
