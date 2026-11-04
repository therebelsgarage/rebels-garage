import { Car, PenToolIcon as Tool, PaintBucket, Truck, CarIcon as Jeep, Ruler } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "car" | "tool" | "paintBucket" | "truck" | "jeep" | "ruler"
  href?: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "car":
        return <Car className="h-10 w-10 text-primary" />
      case "tool":
        return <Tool className="h-10 w-10 text-primary" />
      case "paintBucket":
        return <PaintBucket className="h-10 w-10 text-primary" />
      case "truck":
        return <Truck className="h-10 w-10 text-primary" />
      case "jeep":
        return <Jeep className="h-10 w-10 text-primary" />
      case "ruler":
        return <Ruler className="h-10 w-10 text-primary" />
      default:
        return <Car className="h-10 w-10 text-primary" />
    }
  }

  const card = (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-4">
          <IconComponent />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        {href && (
          <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        )}
      </CardContent>
    </Card>
  )

  return href ? <Link href={href} className="block h-full">{card}</Link> : card
}
