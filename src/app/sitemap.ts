import { siteLinks } from "@/data/sitesLinks";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(siteLinks).map((key) => {
    const item = siteLinks[key as keyof typeof siteLinks];
    return {
      url: `${process.env.SITE_URL || ""}${item.host}${item.path}`,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });
}
