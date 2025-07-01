import { Badge } from "@/components/ui/badge"

export function SpiritSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Premium Collection
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900">Spirit Pricing NA Drinks</h2>
          <p className="text-gray-600 mt-4">Discover our premium non-alcoholic spirits collection</p>
        </div>
      </div>
    </section>
  )
}
