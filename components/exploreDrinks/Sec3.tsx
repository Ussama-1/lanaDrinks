"use client";

import { useState } from "react";
import { FilterSidebar } from "./filter-sidebar";
import { ProductCard } from "../product-grid";
import { Menu, X } from "lucide-react";
import can1 from "@/public/can1.png";
import can2 from "@/public/can2.png";
import can3 from "@/public/can3.png";
import can4 from "@/public/can4.png";

const trendingProducts = [
  {
    id: "trailblazer-3",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image: can3,
    isTrending: true,
    rankNumber: "03",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#F58357",
    circle: "#B5003c",
    circlecolor: "#FF6700",
  },
  {
    id: "trailblazer-4",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image: can4,
    isTrending: true,
    rankNumber: "04",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#026AA2",
    circle: "#B5003c",
    circlecolor: "#40AAE3",
  },
  {
    id: "trailblazer-5",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image: can1,
    isTrending: true,
    rankNumber: "05",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#FFD0B0",
    circle: "#B5003c",
    circlecolor: "#FF6700",
  },
  {
    id: "trailblazer-6",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image: can2,
    isTrending: true,
    rankNumber: "06",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#B5003C",
    circle: "#B5003c",
    circlecolor: "#FFD0B0",
  },
];

export default function Home() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Mobile Filter Toggle - keep its own padding */}
      <div className="lg:hidden py-3 lg:py-6 bg-white border-b">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center gap-2 text-gray-700"
        >
          <Menu className="w-5 h-5" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-[8000000000000000000] ">
          <div className="bg-white w-80 h-full overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}

      <section className=" lg:grid grid-cols-[24%_auto] gap-4 mt-6 lg:mt-12 max-w-[1312px] mx-auto">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block mb-8">
          <div className="sticky top-4">
            <FilterSidebar className=" py-2  border-r border-gray-200" />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap h-fit ">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              circle={product.circle}
              circlecolor={product.circlecolor}
              price={product.price}
              rating={product.rating}
              reviewCount={product.reviewCount}
              image={product.image}
              isTrending={product.isTrending}
              rankNumber={product.rankNumber}
              taste={product.taste}
              health={product.health}
              value={product.value}
              backgroundColor={product.backgroundColor}
              listproduct
            />
          ))}

          <div className="w-full ">
            <button
              className="relative mx-auto my-12  sm:min-w-[186px] h-[40px] lg:h-[64px]  font-semibold text-xs sm:text-sm lg:text-[16px] group   transition-all duration-500  tracking-[0.12em] py-4 text-center uppercase overflow-hidden group flex items-center justify-center space-x-3 bg-gray-100 rounded-full px-8 sm:px-5 hover:cursor-pointer"
              aria-label="search"
            >
              <span className="group-hover:text-white text-black transition-all duration-500 relative z-40 m-0">
                load more
              </span>
              <div className="h-[97px] w-[97px] rounded-full absolute -bottom-28 scale-0 group-hover:scale-[250%] lg:group-hover:scale-200 group-hover:-bottom-11 ease-in transition-all opacity-35 group-hover:opacity-100 origin-bottom duration-500 bg-black z-10"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
