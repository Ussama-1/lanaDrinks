import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, ShoppingBag } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  isTrending?: boolean;
  rankNumber?: string;
  taste: number;
  health: number;
  value: number;
}

export function ProductCard({
  id,
  name,
  price,
  rating,
  reviewCount,
  image,
  isTrending = false,
  rankNumber = "01",
  taste = 85,
  health = 90,
  value = 80,
}: ProductCardProps) {
  return (
    <Card
      key={id}
      className="w-[320px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl"
    >
      <CardContent className="p-0">
        {/* Product Image Section */}
        <div className="relative bg-[#B91C5C] h-[320px] flex items-center justify-center">
          {/* Product Image */}
          <div className="relative w-48 h-64">
            <Image
              src={image || "/placeholder.svg?height=256&width=192"}
              alt={name}
              fill
              className="object-contain"
            />
          </div>

          {/* Rank Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-white rounded-full w-[60px] h-[60px] flex flex-col items-center justify-center shadow-md">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  {/* LANA logo mini */}
                  <circle cx="16" cy="12" r="6" fill="#000" />
                  <rect x="13" y="9" width="6" height="2" rx="1" fill="#fff" />
                  <rect x="11" y="10" width="2" height="1" fill="#000" />
                  <rect x="19" y="10" width="2" height="1" fill="#000" />
                  <path
                    d="M10 18 Q16 15 22 18 L21 22 Q16 19 11 22 Z"
                    fill="#000"
                  />
                  <rect x="22" y="16" width="1" height="6" fill="#000" />
                  <circle
                    cx="24"
                    cy="18"
                    r="1.5"
                    fill="#ff6b35"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-900">
                #{rankNumber}
              </span>
            </div>
          </div>

          {/* Trending Badge */}
          {isTrending && (
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-white text-gray-800 hover:bg-white flex items-center space-x-1 px-3 py-1.5 rounded-lg shadow-sm">
                <TrendingUp className="w-3 h-3" />
                <span className="font-medium text-sm">Trending</span>
              </Badge>
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="p-5 bg-white">
          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="ml-1 font-bold text-gray-900">{rating}</span>
            </div>
            <span className="ml-2 text-gray-500 text-sm">
              ({reviewCount} Reviews)
            </span>
          </div>

          {/* Progress Bars */}
          <div className="space-y-2.5 mb-5">
            {/* Taste */}
            <div className="flex items-center">
              <span className="text-gray-700 font-medium text-sm w-12">
                Taste
              </span>
              <div className="flex-1 mx-3">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-1.5 rounded-full"
                    style={{ width: `${taste}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Health */}
            <div className="flex items-center">
              <span className="text-gray-700 font-medium text-sm w-12">
                Health
              </span>
              <div className="flex-1 mx-3">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-500 h-1.5 rounded-full"
                    style={{ width: `${health}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Value */}
            <div className="flex items-center">
              <span className="text-gray-700 font-medium text-sm w-12">
                Value
              </span>
              <div className="flex-1 mx-3">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-pink-400 h-1.5 rounded-full"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Price and Add to Bag */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </div>
            <Button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold px-5 py-2.5 rounded-xl flex items-center space-x-2 text-sm">
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
