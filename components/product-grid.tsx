import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import bag from "@/public/whitebag.svg";
import logo from "@/public/logo1.svg";
import Link from "next/link";
interface ProductCardProps {
  id: string;
  name: string;
  circle: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: StaticImageData;
  circlecolor: string;
  isTrending?: boolean;
  rankNumber?: string;
  taste: number;
  health: number;
  value: number;
  backgroundColor?: string;
  listproduct?: boolean;
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
  circlecolor,
  taste = 85,
  health = 90,
  value = 80,
  backgroundColor = "#B91C5C",
  listproduct,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}  className={`${
          listproduct
            ? "w-full flex-1 min-w-[316px] h-[523px] overflow-hidden  rounded-2xl p-0 group font-sans shadow-none "
            : "w-full xl:w-[316px] h-[523px] overflow-hidden  rounded-2xl p-0 group font-sans shadow-none"
        }`}>
      <Card
        key={id}
        className={`${
          listproduct
            ? "w-full flex-1 min-w-[316px] h-[523px] overflow-hidden  rounded-2xl p-0 group font-sans shadow-none "
            : "w-full xl:w-[316px] h-[523px] overflow-hidden  rounded-2xl p-0 group font-sans shadow-none"
        }`}
      >
        <CardContent className="p-0">
          {/* Product Image Section */}
          <div
            className="relative h-[280px] flex items-center justify-center py-0 overflow-hidden"
            style={{ backgroundColor }}
          >
            {/* Product Image */}
            <div className="relative w-56 h-[18.9rem] -bottom-12 z-20 group-hover:scale-110 transition-transform duration-500 origin-bottom  ">
              <Image
                src={image || "/placeholder.svg?height=256&width=192"}
                alt={name}
                fill
                className="object-cover"
              />
            </div>

            {/* Rank Badge */}
            <div className="absolute top-0 right-3">
              <div className="bg-white rounded-b-full w-[70px] h-[70px] flex flex-col items-center justify-center ">
                <div className="w-9 h-9 ">
                  <Image src={logo} alt="" className="object-contain" />
                </div>
                <span className="text-base font-[600] font-sans text-gray-900">
                  #{rankNumber}
                </span>
              </div>
            </div>

            {/* Trending Badge */}
            {isTrending && (
              <div className="absolute bottom-4 left-4 w-[89px] h-[24px] z-50">
                <Badge className="backdrop-blur-[16px] bg-[#FFFFFF33]">
                  <TrendingUp className="" />
                  <span className="font-medium text-sm">Trending</span>
                </Badge>
              </div>
            )}

            <div className="absolute w-full h-[67px] bottom-0 bg-gradient-to-b from-[rgba(10,13,18,0)] to-[rgba(10,13,18,0.7)] z-40"></div>

            <div
              className={`bg-[${circlecolor}] w-[416px] h-[416px] scale-0 group-hover:scale-100 transition-all duration-500  left-1/2 transform -translate-x-1/2  absolute -bottom-[17.5rem]   rounded-full `}
            ></div>
          </div>

          {/* Product Details Section */}
          <div className="py-3 px-3.5 bg-white">
            {/* Product Name */}
            <h3 className="font-sans font-medium text-[20px] leading-[120%] -tracking-[0.04em] mb-2 capitalize">
              {name}
            </h3>

            {/* Rating */}
            <div className="flex items-center mb-2.5 ">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                <span className="ml-1 font-bold text-[#181D27] text-base">
                  {rating}
                </span>
              </div>
              <span className="ml-1 text-[#717680] text-base">
                ({reviewCount} Reviews)
              </span>
            </div>

            {/* Progress Bars */}
            <div className="space-y-1 mb-3.5 border-y border-[#E9EAEB] py-3">
              {/* Taste */}
              <div className="flex items-center">
                <span className="text-black font-sans font-medium text-sm w-12">
                  Taste
                </span>
                <div className="flex-1 mx-0">
                  <div className="w-full bg-gray-200 rounded-full h-[8px]">
                    <div
                      className="bg-gradient-to-b from-[#FBC2EB] to-[#A18CD1] h-[8px] rounded-full"
                      style={{ width: `${taste}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Health */}
              <div className="flex items-center">
                <span className="text-black font-sans font-medium text-sm w-12">
                  Health
                </span>
                <div className="flex-1 mx-0">
                  <div className="w-full bg-gray-200 rounded-full h-[8px]">
                    <div
                      className="bg-gradient-to-t from-[#6991C7] to-[#A3BDED] h-[8px] rounded-full"
                      style={{ width: `${health}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Value */}
              <div className="flex items-center">
                <span className="text-black font-sans font-medium text-sm w-12">
                  Value
                </span>
                <div className="flex-1 mx-0">
                  <div className="w-full bg-gray-200 rounded-full h-[8px]">
                    <div
                      className="bg-gradient-to-br from-[#FCCB90] to-[#D57EEB] h-[8px] rounded-full"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Add to Bag */}
            <div className="flex items-center justify-between">
              <div className="font-sans font-semibold text-[22px] leading-[120%] tracking-[0em] capitalize  text-[#181D27]">
                ${price.toFixed(2)}
              </div>
              <Button className="rounded-[12px] gap-[2px] sm:w-[159px] h-[40px] px-5 py-[10px] space-x-[4px] text-[14px] bg-gradient-to-br from-[#F49062] to-[#FD371F]">
                <Image src={bag} alt="" className="h-5 w-5" />
                <span>Add to Bag</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
