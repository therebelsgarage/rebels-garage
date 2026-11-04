import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { localBusinessSchema, site } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "The Rebels Garage | Auto Collision Repair & Bodywork in Las Vegas",
  description:
    "Las Vegas auto body and collision repair for cars, UTVs, box trucks, RVs, Can-Ams, and RZRs. Free estimates, free towing with repairs, all insurance accepted.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: ["/images/rebels-garage-auto-collision-repair-entrance.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        {children}
      </body>
    </html>
  )
}
