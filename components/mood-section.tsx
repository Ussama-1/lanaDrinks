import { Card, CardContent } from "@/components/ui/card"
import { Wine, Coffee, Zap, Heart, Sun, Moon } from "lucide-react"

const moods = [
  { icon: Wine, label: "Relaxed", color: "bg-purple-100 text-purple-600" },
  { icon: Coffee, label: "Energetic", color: "bg-orange-100 text-orange-600" },
  { icon: Zap, label: "Adventurous", color: "bg-yellow-100 text-yellow-600" },
  { icon: Heart, label: "Romantic", color: "bg-pink-100 text-pink-600" },
  { icon: Sun, label: "Social", color: "bg-blue-100 text-blue-600" },
  { icon: Moon, label: "Contemplative", color: "bg-indigo-100 text-indigo-600" },
]

export function MoodSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are You In Mood Of?</h2>
          <p className="text-gray-600">Choose your vibe and let LANA find the perfect drink</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {moods.map((mood, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${mood.color} flex items-center justify-center mx-auto mb-4`}>
                  <mood.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900">{mood.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
