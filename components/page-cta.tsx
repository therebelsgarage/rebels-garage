import { CheckCircle, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { fullAddress, site } from "@/lib/site"

export default function PageCta({ heading = "Get a free estimate" }: { heading?: string }) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-muted-foreground">
            Send us a few details and we&apos;ll get back to you, or call the shop. You can also stop by at {fullAddress}.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {site.perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8" asChild>
            <a href={site.phoneHref}>
              <PhoneCall className="mr-2 h-4 w-4" /> Call {site.phone}
            </a>
          </Button>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
