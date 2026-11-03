"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, PhoneCall, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { site } from "@/lib/site"

const links = [
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="The Rebels Garage Logo" width={120} height={60} className="h-12 w-auto rounded-lg" />
          <span className="text-xl font-bold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div className="group relative">
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-lg border bg-background p-2 shadow-lg">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden md:flex items-center gap-2 text-sm font-medium">
            <PhoneCall className="h-4 w-4" />
            <span>{site.phone}</span>
          </a>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#contact">Get a Quote</Link>
          </Button>
          <button
            type="button"
            className="md:hidden rounded-md p-2 hover:bg-muted"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t bg-background">
          <ul className="container py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2 font-medium hover:bg-muted">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href={site.phoneHref} className="flex items-center gap-2 px-2 py-2 font-medium">
                <PhoneCall className="h-4 w-4" /> {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
