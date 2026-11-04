import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import GallerySection from "@/components/gallery-section"
import ContactForm from "@/components/contact-form"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { services } from "@/lib/services"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Auto body repair shop"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Expert Vehicle Bodywork & Repairs
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200">
              From dents to full collision repairs, we ensure top-quality service to get your vehicle looking and
              performing like new.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Request a Quote</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 text-white border-white hover:bg-background/30"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                We specialize in comprehensive bodywork and repairs for a wide range of vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.slug} title={s.name} description={s.short} icon={s.icon} href={`/services/${s.slug}`} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="group" asChild>
                <a href="#contact">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">About The Rebels Garage</h2>
              <p className="mt-4 text-muted-foreground text-center">
                With years of experience in the automotive repair industry, The Rebels Garage has built a reputation
                for excellence in bodywork and collision repair.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Expert Technicians</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team consists of certified professionals with years of experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Quality Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      We use only the highest quality parts and materials for all repairs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Satisfaction Guaranteed</h3>
                    <p className="text-sm text-muted-foreground">
                      We stand behind our work with a satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Versatile Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      From cars to RVs, UTVs to box trucks - we repair them all with the same attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="John D."
                vehicle="Ford F-150"
                quote="After a bad accident, I thought my truck was done for. The Rebels Garage restored it to better than new condition. I couldn't be happier with their work!"
                rating={5}
              />
              <TestimonialCard
                name="Sarah M."
                vehicle="Can-Am Maverick"
                quote="Finding someone who knows how to properly repair my Can-Am was a challenge until I found The Rebels Garage. Their expertise with off-road vehicles is unmatched."
                rating={5}
              />
              <TestimonialCard
                name="Robert T."
                vehicle="Winnebago RV"
                quote="The team at Rebels Garage did an amazing job repairing the damage to my RV after a tree branch fell on it. Professional service from start to finish."
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions or need a quote? Reach out to us and we'll get back to you as soon as possible.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">(702) 935-4200</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@rebelsauto.us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">2695 S Decatur Blvd. Suite 400, Las Vegas NV 89102</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday-Friday: 8am-5:30pm</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9am-1pm</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
