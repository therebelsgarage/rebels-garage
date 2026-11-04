import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/services"
import { fullAddress, site } from "@/lib/site"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="The Rebels Garage Logo" width={100} height={50} className="h-10 w-auto rounded-lg" />
              <span className="text-lg font-bold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Auto collision repair and bodywork in Las Vegas for cars, UTVs, box trucks, RVs, Can-Ams, and RZRs.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-muted-foreground hover:text-foreground">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/#gallery" className="text-muted-foreground hover:text-foreground">Gallery</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Visit the Shop</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>{fullAddress}</p>
              <p><a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a></p>
              {site.hours.map((h) => (
                <p key={h.days}>{h.days}: {h.time}</p>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
