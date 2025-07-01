import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const upcomingImages = [
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
]

export function UpcomingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Calendar className="w-3 h-3 mr-1" />
            Coming Soon
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Lana Launch Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get ready for our exciting new collection. Be the first to experience our latest innovations in beverage
            curation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {upcomingImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Upcoming product ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Notify Me When Available
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
