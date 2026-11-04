import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { ArrowRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageCta from "@/components/page-cta"
import { getService } from "@/lib/services"
import { localBusinessSchema, site } from "@/lib/site"
import { postQuery, postSlugsQuery, sanityFetch, urlFor, type Post } from "@/sanity/client"

export const revalidate = 60
export const dynamicParams = true

type Props = { params: Promise<{ slug: string }> }

const getPost = (slug: string) => sanityFetch<Post | null>(postQuery, { slug }, null)

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(postSlugsQuery, {}, [])
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug)
  if (!post) return {}
  const title = post.seoTitle || `${post.title} | The Rebels Garage`
  const description = post.metaDescription || post.excerpt
  const image = post.mainImage?.asset ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url() : undefined
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title, description, type: "article", publishedTime: post.publishedAt, images: image ? [image] : undefined },
  }
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mt-10 text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-xl font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>,
    blockquote: ({ children }) => <blockquote className="mt-6 border-l-4 pl-4 italic">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href || "#"
      const external = href.startsWith("http") && !href.includes("therebelsgarage.com")
      return (
        <a href={href} className="font-medium text-primary underline underline-offset-4" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure className="mt-8">
          <Image
            src={urlFor(value).width(1400).url()}
            alt={value.alt || ""}
            width={1400}
            height={900}
            className="h-auto w-full rounded-lg"
            sizes="(min-width: 768px) 768px, 100vw"
          />
          {value.caption && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{value.caption}</figcaption>}
        </figure>
      ) : null,
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost((await params).slug)
  if (!post) notFound()

  const service = post.relatedService ? getService(post.relatedService) : undefined
  const hero = post.mainImage?.asset ? urlFor(post.mainImage).width(1600).height(900).fit("crop").url() : null

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    image: hero || undefined,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: localBusinessSchema(),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="flex-1">
        <article className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
            <time dateTime={post.publishedAt} className="mt-4 block text-sm text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </div>
          {hero && (
            <div className="container mt-8 max-w-5xl">
              <Image src={hero} alt={post.mainImage?.alt || post.title} width={1600} height={900} priority className="h-auto w-full rounded-lg" sizes="(min-width: 1024px) 1024px, 100vw" />
            </div>
          )}
          <div className="container max-w-3xl">
            <PortableText value={post.body} components={components} />

            {service && (
              <Link href={`/services/${service.slug}`} className="group mt-12 flex items-center justify-between rounded-lg border p-6 hover:bg-muted">
                <div>
                  <p className="text-sm text-muted-foreground">Need this done?</p>
                  <p className="mt-1 text-lg font-semibold">{service.name} in Las Vegas</p>
                </div>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </article>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  )
}
