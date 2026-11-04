import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { site } from "@/lib/site"
import { postSlugsQuery, sanityFetch } from "@/sanity/client"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityFetch<{ slug: string; _updatedAt: string }[]>(postSlugsQuery, {}, [])
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p._updatedAt, changeFrequency: "monthly" as const, priority: 0.6 })),
  ]
}
