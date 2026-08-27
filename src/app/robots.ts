import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://x2motorsportswebsite.vercel.app/sitemap.xml",
  };
}
