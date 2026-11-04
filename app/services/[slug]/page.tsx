import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageCta from "@/components/page-cta"
import { getService, services } from "@/lib/services"
import { localBusinessSchema, site } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug)
  if (!service) return {}
  const url = `/services/${service.slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      images: [{ url: service.hero.src, alt: service.hero.alt }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      areaServed: { "@type": "City", name: "Las Vegas" },
      provider: localBusinessSchema(),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${site.url}/services/${service.slug}` },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-foreground">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{service.name}</span>
              </nav>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{service.h1}</h1>
              <p className="mt-6 text-lg text-muted-foreground">{service.lead}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#contact">Get a Free Estimate</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={site.phoneHref}>
                    <PhoneCall className="mr-2 h-4 w-4" /> {site.phone}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-[4/4.5]">
              <Image src={service.hero.src} alt={service.hero.alt} fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              {service.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{sec.heading}</h2>
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
                  ))}
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-lg border bg-muted/40 p-6">
              <h2 className="text-lg font-semibold">{service.checklist.heading}</h2>
              <ul className="mt-4 space-y-3">
                {service.checklist.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">From our shop</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((g) => (
                <div key={g.src} className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 divide-y rounded-lg border">
              {service.faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="cursor-pointer list-none font-medium">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCta heading={`Get a free ${service.name.toLowerCase()} estimate`} />

        <section className="py-16">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Other services</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {others.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-lg border p-4 text-sm font-medium hover:bg-muted">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
