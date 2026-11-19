import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.siteUrl, lastModified: new Date(), priority: 1 }];
}
