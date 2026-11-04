import { createClient, type QueryParams } from "next-sanity"
import { createImageUrlBuilder } from "@sanity/image-url"
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env"

const client = isSanityConfigured ? createClient({ projectId, dataset, apiVersion, useCdn: true }) : null
const builder = isSanityConfigured ? createImageUrlBuilder({ projectId, dataset }) : null

// New and edited posts show up on the site within about a minute.
export const REVALIDATE_SECONDS = 60

export async function sanityFetch<T>(query: string, params: QueryParams = {}, fallback: T): Promise<T> {
  if (!client) return fallback
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: REVALIDATE_SECONDS } })
  } catch (err) {
    console.error("Sanity fetch failed", err)
    return fallback
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder!.image(source).auto("format").fit("max")
}

export type PostSummary = {
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: { alt?: string; asset?: unknown }
}

export type Post = PostSummary & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[]
  seoTitle?: string
  metaDescription?: string
  relatedService?: string
  _updatedAt: string
}

const summaryFields = `title, "slug": slug.current, publishedAt, excerpt, mainImage`

export const postsQuery = `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) { ${summaryFields} }`

export const postQuery = `*[_type == "post" && slug.current == $slug && publishedAt <= now()][0] { ${summaryFields}, body, seoTitle, metaDescription, relatedService, _updatedAt }`

export const postSlugsQuery = `*[_type == "post" && defined(slug.current) && publishedAt <= now()] { "slug": slug.current, _updatedAt }`
