export const site = {
  name: "The Rebels Garage",
  url: "https://www.therebelsgarage.com",
  phone: "(702) 935-4200",
  phoneHref: "tel:+17029354200",
  email: "info@rebelsauto.us",
  address: {
    street: "2695 S Decatur Blvd. Suite 400",
    city: "Las Vegas",
    state: "NV",
    zip: "89102",
  },
  hours: [
    { days: "Monday-Friday", time: "8am-5:30pm" },
    { days: "Saturday", time: "9am-1pm" },
    { days: "Sunday", time: "Closed" },
  ],
  perks: [
    "Free estimates",
    "Free towing with repairs",
    "We work with all insurance companies",
    "Certified technicians",
    "Nevada licensed body shop",
    "Quality guaranteed",
  ],
}

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: "+1-702-935-4200",
    email: site.email,
    image: `${site.url}/images/rebels-garage-auto-collision-repair-entrance.webp`,
    logo: `${site.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: ["Las Vegas", "Henderson", "North Las Vegas", "Spring Valley", "Summerlin", "Paradise"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:30",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
  }
}
