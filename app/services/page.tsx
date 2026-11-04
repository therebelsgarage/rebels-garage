import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageCta from "@/components/page-cta"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Auto Body & Collision Repair Services in Las Vegas | The Rebels Garage",
  description:
    "Collision repair, dent removal, custom paint, frame straightening, and RV, box truck and UTV body repair in Las Vegas. Free estimates. (702) 935-4200.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Auto Body and Collision Repair Services in Las Vegas</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From a door ding to a full collision repair, and from a sports car to an RV, The Rebels Garage handles the bodywork in house on S Decatur Blvd.
            </p>
          </div>
        </section>
        <section className="pb-16 md:pb-24">
          <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group overflow-hidden rounded-lg border transition hover:shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image src={s.hero.src} alt={s.hero.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold">{s.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  )
}
