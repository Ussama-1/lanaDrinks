import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

export function RefreshingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-r from-pink-50 to-orange-50">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-pink-100 text-pink-800">Featured</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Refreshing Fruit Beverage</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">(4.8/5)</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Made with real fruit extracts and natural ingredients. A burst of tropical flavors in every sip.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-orange-500">$1.45</span>
                    <span className="text-lg text-gray-500 line-through">$2.99</span>
                    <Badge className="bg-red-100 text-red-800">52% OFF</Badge>
                  </div>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors w-fit">
                    Order Now
                  </button>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Refreshing Fruit Beverage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
