import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import Image from "next/image"

const people = [
  { id: 1, image: "/placeholder.svg?height=150&width=150", name: "Sarah M." },
  { id: 2, image: "/placeholder.svg?height=150&width=150", name: "Mike R." },
  { id: 3, image: "/placeholder.svg?height=150&width=150", name: "Emma L." },
  { id: 4, image: "/placeholder.svg?height=150&width=150", name: "David K." },
  { id: 5, image: "/placeholder.svg?height=150&width=150", name: "Lisa P." },
  { id: 6, image: "/placeholder.svg?height=150&width=150", name: "Tom W." },
]

export function PeopleSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-3 h-3 mr-1" />
            Community
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Real People Just Drinks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered their perfect drinks with LANA
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {people.map((person) => (
            <Card key={person.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-32 md:h-40">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-gray-900 text-sm">{person.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
