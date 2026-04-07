import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Update this URL to your real domain before deploying
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
