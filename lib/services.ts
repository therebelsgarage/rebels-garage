export type ServiceImage = { src: string; alt: string }

export type Service = {
  slug: string
  name: string
  short: string
  icon: "car" | "tool" | "paintBucket" | "truck" | "jeep" | "ruler"
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  hero: ServiceImage
  sections: { heading: string; paragraphs: string[] }[]
  checklist: { heading: string; items: string[] }
  gallery: ServiceImage[]
  faqs: { q: string; a: string }[]
}

const img = (name: string, alt: string): ServiceImage => ({ src: `/images/${name}.webp`, alt })

export const services: Service[] = [
  {
    slug: "collision-repair-las-vegas",
    name: "Collision Repair",
    short: "Complete collision repair services to restore your vehicle to pre-accident condition.",
    icon: "car",
    metaTitle: "Collision Repair in Las Vegas | The Rebels Garage",
    metaDescription:
      "Auto collision repair in Las Vegas on S Decatur Blvd. Free estimates, free towing with repairs, and we work with all insurance companies. Call (702) 935-4200.",
    h1: "Collision Repair in Las Vegas",
    lead:
      "Been in an accident? The Rebels Garage handles the whole repair, from the first estimate to the final inspection, so your vehicle leaves looking and driving the way it did before the crash.",
    hero: img("collision-repair-hyundai-kona-front-end-damage", "Hyundai Kona with front end collision damage on a lift at The Rebels Garage in Las Vegas"),
    sections: [
      {
        heading: "Collision repair done right the first time",
        paragraphs: [
          "A collision repair is more than a new bumper and a coat of paint. Hidden damage behind the bumper cover, bent brackets, cracked mounts and misaligned panels are what cause problems months later. Our certified technicians take the damaged area apart, find everything that was affected, and repair or replace it before any paint goes on.",
          "We handle front end, rear end and side impact damage on cars, trucks and SUVs, along with the larger vehicles most Las Vegas body shops turn away, like RVs, box trucks and UTVs.",
        ],
      },
      {
        heading: "We work with all insurance companies",
        paragraphs: [
          "Dealing with an insurance claim after an accident is stressful enough. We work with all insurance companies, and we can help walk you through the claim process. You have the right to choose the shop that repairs your vehicle, even if your insurer suggests somewhere else.",
          "Paying out of pocket? We give free estimates, so you know what the repair involves before you decide.",
        ],
      },
      {
        heading: "Free towing with repairs",
        paragraphs: [
          "If your vehicle isn't safe to drive after an accident, call us. We offer free towing when we do the repair, so you don't have to pay to get your car to the shop.",
        ],
      },
    ],
    checklist: {
      heading: "What our collision repair covers",
      items: [
        "Front end, rear end and side impact damage",
        "Bumper repair and replacement",
        "Panel repair and replacement",
        "Frame and structural repair",
        "Paint matching and refinishing",
        "Final inspection before pickup",
      ],
    },
    gallery: [
      img("collision-repair-lexus-front-bumper-damage", "Lexus SUV with front bumper removed during collision repair"),
      img("collision-repair-honda-accord-front-end", "Honda Accord with front end damage in the Rebels Garage shop"),
      img("collision-repair-vehicle-on-lift", "Damaged SUV on a lift during collision repair at The Rebels Garage"),
    ],
    faqs: [
      {
        q: "Do I have to use the body shop my insurance company recommends?",
        a: "No. You can choose any shop to repair your vehicle. The Rebels Garage works with all insurance companies.",
      },
      {
        q: "Do you offer free estimates for collision repair?",
        a: "Yes. Estimates are free. Stop by the shop on S Decatur Blvd or call (702) 935-4200.",
      },
      {
        q: "Can you tow my car to the shop after an accident?",
        a: "Yes. We offer free towing when we do the repair.",
      },
    ],
  },
  {
    slug: "dent-removal-las-vegas",
    name: "Dent Removal",
    short: "Professional dent removal, including paintless dent repair, without damaging your paint.",
    icon: "tool",
    metaTitle: "Dent Removal & Paintless Dent Repair in Las Vegas | The Rebels Garage",
    metaDescription:
      "Paintless dent removal and dent repair in Las Vegas. Door dings, hail damage and creases fixed without repainting. Free estimates. Call (702) 935-4200.",
    h1: "Dent Removal and Paintless Dent Repair in Las Vegas",
    lead:
      "Door dings, parking lot dents, hail damage and creases. Most dents can be fixed without sanding, filler or repainting, which keeps your factory paint intact.",
    hero: img("panel-and-dent-inspection-corvette", "Rebels Garage technician inspecting a Corvette body panel for dents"),
    sections: [
      {
        heading: "Paintless dent removal",
        paragraphs: [
          "Paintless dent removal, or PDR, works the metal back into shape from behind the panel using specialized tools. When the paint isn't cracked or chipped, PDR is usually the fastest and most affordable way to fix a dent, and your original factory finish stays in place.",
          "That matters when you sell or trade in your vehicle. Original paint holds its value better than a repainted panel.",
        ],
      },
      {
        heading: "When a dent needs traditional repair",
        paragraphs: [
          "Some dents are too sharp, too deep or too close to a panel edge for PDR, or the paint is already damaged. In those cases we repair the dent with traditional bodywork, then match and refinish the paint so the repair blends in with the rest of the vehicle.",
          "We'll look at the damage and tell you which approach makes sense before any work starts.",
        ],
      },
      {
        heading: "Hail and parking lot damage",
        paragraphs: [
          "Las Vegas storms can leave a car covered in small dents in a matter of minutes. Hail damage is often a good fit for paintless repair, and we work with all insurance companies if you're filing a claim.",
        ],
      },
    ],
    checklist: {
      heading: "Dents we repair",
      items: [
        "Door dings and parking lot dents",
        "Hail damage",
        "Body line creases",
        "Bumper dents",
        "Hood, roof and trunk dents",
        "Dents with damaged paint (traditional repair)",
      ],
    },
    gallery: [
      img("technician-checking-corvette-body-panel", "Technician checking the body panel on a Corvette at The Rebels Garage"),
      img("technician-repairing-front-bumper", "Technician repairing a front bumper in the Rebels Garage shop"),
      img("body-panel-fit-check-corvette-z06", "Corvette Z06 body panel fit check during repair"),
    ],
    faqs: [
      {
        q: "What is paintless dent removal?",
        a: "Paintless dent removal (PDR) is a technique that pushes a dent back into shape from behind the panel, without sanding, filler or repainting. It works best when the paint isn't cracked.",
      },
      {
        q: "Can every dent be fixed with PDR?",
        a: "Not every dent. Very sharp dents, damage on panel edges, or dents with cracked paint usually need traditional repair and refinishing. We'll tell you which option fits during your free estimate.",
      },
      {
        q: "Do you repair hail damage?",
        a: "Yes. Hail damage is often a good fit for paintless dent removal, and we work with all insurance companies.",
      },
    ],
  },
  {
    slug: "custom-paint-las-vegas",
    name: "Custom Paint & Refinishing",
    short: "Expert color matching, refinishing and custom paint jobs for all vehicles.",
    icon: "paintBucket",
    metaTitle: "Custom Paint & Auto Refinishing in Las Vegas | The Rebels Garage",
    metaDescription:
      "Auto paint, color matching, refinishing and custom paint jobs in Las Vegas. Full color changes, panel refinishing and restorations. Free estimates. (702) 935-4200.",
    h1: "Custom Paint and Auto Refinishing in Las Vegas",
    lead:
      "From matching a single panel after a repair to a full color change, our paint and refinishing work is done in house with careful prep and precise color matching.",
    hero: img("paint-mixing-room-refinishing", "Paint mixing room and refinishing area at The Rebels Garage auto body shop"),
    sections: [
      {
        heading: "Color matching that disappears",
        paragraphs: [
          "Most paint work starts after a repair. The goal is simple: nobody should be able to tell which panel was fixed. We mix paint in house to match your vehicle's color, then blend it into the surrounding panels so the repair disappears under any light.",
          "Las Vegas sun is hard on paint, and factory colors fade over time. Good color matching accounts for that, not just the paint code on the door jamb.",
        ],
      },
      {
        heading: "Custom paint and full color changes",
        paragraphs: [
          "Want something different? We do custom paint jobs and complete color changes, like the BMW X6 in our gallery that went from factory white to a custom teal metallic. We also take on restoration paint work for classic and collector vehicles.",
        ],
      },
      {
        heading: "Prep is where the quality comes from",
        paragraphs: [
          "A paint job is only as good as the work underneath it. Before any color goes on, we repair the bodywork, sand, prime and seal the surface. Skipping prep is how paint ends up peeling or showing waves a year later, so we don't skip it.",
        ],
      },
    ],
    checklist: {
      heading: "Paint services",
      items: [
        "Paint matching after collision repair",
        "Single panel refinishing",
        "Bumper painting",
        "Full color changes",
        "Custom paint jobs",
        "Classic and restoration paint work",
      ],
    },
    gallery: [
      img("bmw-m3-custom-lime-green-paint", "BMW M3 with custom lime green paint at The Rebels Garage"),
      img("primer-and-body-filler-work", "Vehicle panel in primer during paint prep at The Rebels Garage"),
      img("corvette-c8-front-finished", "Gray Corvette C8 inside The Rebels Garage paint and body shop"),
    ],
    faqs: [
      {
        q: "Can you match my car's factory paint color?",
        a: "Yes. We mix paint in house and blend it into the surrounding panels so the repair matches the rest of your vehicle.",
      },
      {
        q: "Do you do full color changes?",
        a: "Yes. We do complete color changes and custom paint jobs. Bring the vehicle in for a free estimate.",
      },
      {
        q: "Do you paint classic cars?",
        a: "Yes. We do restoration bodywork and paint on classic and collector vehicles.",
      },
    ],
  },
  {
    slug: "rv-box-truck-repair-las-vegas",
    name: "RV & Box Truck Repair",
    short: "Specialized body repairs for RVs, motorhomes, trailers and commercial box trucks.",
    icon: "truck",
    metaTitle: "RV & Box Truck Body Repair in Las Vegas | The Rebels Garage",
    metaDescription:
      "RV, motorhome and box truck body repair in Las Vegas. Collision damage, panel repair and paint for large vehicles most shops can't take. Call (702) 935-4200.",
    h1: "RV and Box Truck Body Repair in Las Vegas",
    lead:
      "Most body shops can't fit an RV or a box truck, and many won't touch one. The Rebels Garage repairs both, so you don't have to drive across town or out of state to get the work done.",
    hero: img("rebels-garage-shop-floor", "Rebels Garage shop floor with vehicles being repaired in Las Vegas"),
    sections: [
      {
        heading: "RV and motorhome body repair",
        paragraphs: [
          "RVs take damage in ways cars don't. Low branches, gas station canopies, tight campgrounds and backing into posts can crack fiberglass, dent aluminum siding and damage compartment doors. We repair RV and motorhome body damage, including fiberglass repair, panel repair and paint.",
          "If you're filing an insurance claim, we work with all insurance companies.",
        ],
      },
      {
        heading: "Box truck and commercial vehicle repair",
        paragraphs: [
          "When a work truck is sitting, it isn't making money. We repair box trucks and commercial vehicles with collision damage, dented box panels, damaged roll up door frames, bumpers and more.",
          "Running a fleet? Ask us about getting your trucks on a repair schedule that keeps them on the road.",
        ],
      },
    ],
    checklist: {
      heading: "Large vehicle repairs we handle",
      items: [
        "RV and motorhome collision damage",
        "Fiberglass and aluminum panel repair",
        "Box truck body and box panel repair",
        "Bumper repair and replacement",
        "Paint matching and refinishing",
        "Insurance claim repairs",
      ],
    },
    gallery: [
      img("rebels-garage-team-reviewing-repair", "Rebels Garage team reviewing a repair in the shop"),
      img("rebels-garage-storefront-decatur-blvd", "The Rebels Garage auto collision repair shop on S Decatur Blvd in Las Vegas"),
    ],
    faqs: [
      {
        q: "Do you repair RVs and motorhomes?",
        a: "Yes. We repair RV and motorhome body damage, including fiberglass, panels and paint.",
      },
      {
        q: "Do you work on box trucks and commercial vehicles?",
        a: "Yes. We repair box trucks and commercial vehicles, and we can work with businesses that run multiple trucks.",
      },
      {
        q: "Will my insurance cover RV body repair?",
        a: "It depends on your policy, but we work with all insurance companies and can help you through the claim.",
      },
    ],
  },
  {
    slug: "utv-can-am-rzr-repair-las-vegas",
    name: "UTV, Can-Am & RZR Repair",
    short: "Body and plastics repair for UTVs, Can-Ams, Polaris RZRs and other off-road vehicles.",
    icon: "jeep",
    metaTitle: "UTV, Can-Am & RZR Repair in Las Vegas | The Rebels Garage",
    metaDescription:
      "UTV body repair in Las Vegas for Can-Am, Polaris RZR and other side by sides. Plastics, panels, paint and rollover damage. Free estimates. (702) 935-4200.",
    h1: "UTV, Can-Am and RZR Repair in Las Vegas",
    lead:
      "Southern Nevada is side by side country, and off-road vehicles take a beating. We repair the body damage on UTVs, Can-Ams, Polaris RZRs and other off-road machines.",
    hero: img("technician-working-on-wheel-well", "Rebels Garage technician working on a wheel well during a repair"),
    sections: [
      {
        heading: "Off-road vehicles need a shop that knows them",
        paragraphs: [
          "A rollover in the desert, a run in with a rock, or a trailer mishap can leave a UTV with cracked plastics, bent panels and damaged paint. A lot of body shops won't take off-road vehicles at all. We do, and we treat them with the same attention as any car in our shop.",
          "We work on Can-Am Maverick and Commander models, Polaris RZR and General models, and other UTVs and side by sides.",
        ],
      },
      {
        heading: "Plastics, panels and paint",
        paragraphs: [
          "UTV body panels are often plastic, which takes different repair techniques than steel. Depending on the damage, we repair or replace plastics and panels, then refinish them so the machine looks right again.",
          "If your UTV is insured, we work with all insurance companies.",
        ],
      },
    ],
    checklist: {
      heading: "UTV repairs we handle",
      items: [
        "Rollover and crash damage",
        "Cracked or broken body plastics",
        "Panel repair and replacement",
        "Paint and refinishing",
        "Trailer and transport damage",
        "Insurance claim repairs",
      ],
    },
    gallery: [
      img("rebels-garage-technicians", "Rebels Garage technicians in the Las Vegas shop"),
      img("rebels-garage-auto-collision-repair-entrance", "Entrance to The Rebels Garage auto collision repair in Las Vegas"),
    ],
    faqs: [
      {
        q: "Do you repair Can-Am and Polaris RZR UTVs?",
        a: "Yes. We repair Can-Am, Polaris RZR and other UTVs and side by sides.",
      },
      {
        q: "Can you fix cracked UTV plastics?",
        a: "Yes. Depending on the damage, we repair or replace body plastics and refinish them.",
      },
      {
        q: "Do you give estimates on off-road vehicles?",
        a: "Yes. Estimates are free. Bring your UTV by the shop or call (702) 935-4200.",
      },
    ],
  },
  {
    slug: "frame-straightening-las-vegas",
    name: "Frame Repair & Straightening",
    short: "Precision frame straightening to restore your vehicle's structural integrity.",
    icon: "ruler",
    metaTitle: "Frame Repair & Frame Straightening in Las Vegas | The Rebels Garage",
    metaDescription:
      "Frame repair and frame straightening in Las Vegas. Restore structural integrity and alignment after an accident. Works with all insurance. (702) 935-4200.",
    h1: "Frame Repair and Frame Straightening in Las Vegas",
    lead:
      "A bent frame affects how your vehicle drives, how it wears tires, and how it protects you in another accident. We repair frame and structural damage and bring the vehicle back to its correct dimensions.",
    hero: img("pontiac-trans-am-on-frame-rack", "Pontiac Trans Am on the frame rack at The Rebels Garage in Las Vegas"),
    sections: [
      {
        heading: "Why frame damage matters",
        paragraphs: [
          "Even a moderate collision can shift a vehicle's frame or unibody out of position. You might not see it, but you'll feel it: the car pulls to one side, doors and panels don't line up, or tires wear unevenly. More important, a vehicle with structural damage won't absorb the energy of a future crash the way it was designed to.",
        ],
      },
      {
        heading: "How we straighten a frame",
        paragraphs: [
          "The vehicle is anchored to our frame rack, measured against its correct dimensions, and pulled back into position in a controlled way. Then we measure again to confirm it's right before moving on to body panels and paint.",
          "We repair frame damage on cars, trucks and SUVs, and on classic vehicles during restorations.",
        ],
      },
    ],
    checklist: {
      heading: "Signs you may have frame damage",
      items: [
        "Vehicle pulls to one side after an accident",
        "Doors, hood or trunk don't close evenly",
        "Uneven gaps between body panels",
        "Uneven or rapid tire wear",
        "Unusual noises or vibration",
        "Visible kinks or cracks underneath",
      ],
    },
    gallery: [
      img("collision-repair-vehicle-on-lift", "Vehicle on a lift for structural inspection at The Rebels Garage"),
      img("black-corvette-in-collision-shop", "Black Corvette in the Rebels Garage collision repair shop"),
    ],
    faqs: [
      {
        q: "Can a bent frame be repaired?",
        a: "In most cases, yes. The vehicle is pulled back to its correct dimensions on a frame rack and measured to confirm the repair.",
      },
      {
        q: "How do I know if my car has frame damage?",
        a: "Common signs include the car pulling to one side, doors or the hood not closing evenly, uneven panel gaps and uneven tire wear. Bring it in for a free estimate and we'll check.",
      },
      {
        q: "Does insurance cover frame repair?",
        a: "If the frame damage came from a covered accident, it's usually part of the claim. We work with all insurance companies.",
      },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
