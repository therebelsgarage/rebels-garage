import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageCta from "@/components/page-cta"
import { postsQuery, sanityFetch, urlFor, type PostSummary } from "@/sanity/client"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Auto Body Repair Blog | The Rebels Garage Las Vegas",
  description:
    "Tips, repair stories and shop projects from The Rebels Garage, a Las Vegas auto collision and body repair shop.",
  alternates: { canonical: "/blog" },
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })

export default async function BlogPage() {
  const posts = await sanityFetch<PostSummary[]>(postsQuery, {}, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">The Rebels Garage Blog</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Repair stories, shop projects and practical advice from our Las Vegas body shop.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground">New posts are on the way. Check back soon.</p>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-lg border transition hover:shadow-md">
                    {p.mainImage?.asset ? (
                      <div className="relative aspect-[16/10] bg-muted">
                        <Image
                          src={urlFor(p.mainImage).width(800).height(500).fit("crop").url()}
                          alt={p.mainImage.alt || p.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    ) : null}
                    <div className="p-5">
                      <time dateTime={p.publishedAt} className="text-xs uppercase tracking-wide text-muted-foreground">
                        {fmt(p.publishedAt)}
                      </time>
                      <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">{p.title}</h2>
                      {p.excerpt && <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <PageCta />
      </main>
      <SiteFooter />
    </div>
  )
}
