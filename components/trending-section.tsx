import { ProductCard } from "@/components/product-grid";
import brand1 from "@/public/brand1.svg";
import brand2 from "@/public/brand2.svg";
import brand3 from "@/public/brand3.svg";
import brand4 from "@/public/ghia.svg";
import brand5 from "@/public/brand5.svg";
import Image from "next/image";
import logo from "@/public/logo1.svg";
import arrow from "@/public/arrowicon.svg";
import can1 from "@/public/can1.png";
import can2 from "@/public/can2.png";
import can3 from "@/public/can3.png";
import can4 from "@/public/can4.png";
const brandLogos = [
  { name: "BREZ", logo: brand1 },
  { name: "Athletic Brewing Co", logo: brand2 },
  { name: "Ritual Zero Proof", logo: brand3 },
  { name: "Ghia", logo: brand4 },
  { name: "Misty Cliffs", logo: brand5 },
];

const trendingProducts = [
  {
    id: "trailblazer-1",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image: can1,
    isTrending: true,
    rankNumber: "01",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#B5003C", // Burgundy
    circle: "#B5003c",
    circlecolor: "#FF0055",
  },
  {
    id: "trailblazer-2",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image: can2,
    isTrending: true,
    rankNumber: "02",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#FFD0B0", // Peach
    circle: "#B5003c",
    circlecolor: "#FF6700",
  },
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
    backgroundColor: "#F58357", // Orange
    circle: "#B5003c",
    circlecolor: "#FF6700",
  },
  {
    id: "trailblazer-4",
    name: "Trailblazer Hoppy Helles",
    price: 4.99,
    rating: 4.8,
    reviewCount: 382,
    image:can4,
    isTrending: true,
    rankNumber: "04",
    taste: 85,
    health: 90,
    value: 80,
    backgroundColor: "#026AA2", // Blue
    circle: "#B5003c",
    circlecolor: "#40AAE3",
  },
];

export function TrendingSection() {
  return (
    <section className="py-[84px] bg-white">
      <div className="container mx-auto px-6">
        {/* Brand Showcase */}
        <div className="text-center mb-10 sm:mb-16 border-y border-[#E9EAEB] py-[51px] pl-4 max-w-[1312px] m-auto ">
          <h2 className=" text-2xl sm:text-5xl  ">
            <span className="font-serif italic text-2xl sm:text-5xl ">
              Featuring
            </span>{" "}
            <span className="font-medium font-sans tracking-[-0.034em]">
              The Industry’s Best NA Brands
            </span>
          </h2>

          <div className="  grid grid-cols-2  gap-6 sm:flex items-center justify-center sm:justify-between space-x-12 md:space-x-16 lg:space-x-20 mt-5 sm:mt-10  max-w-[1070px] mx-auto">
            {brandLogos.map((brand, index) => (
              <div key={index} className="w-16 sm:w-28 mx-auto sm:mx-0">
                <Image src={brand.logo} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Trending Products */}
        <div className="mb-8 sm:px-12 py-5">
          <div className="flex items-center justify-between mb-11  relative lg:static">
            <h3 className="text-2xl sm:text-5xl  ">
              <span className="font-serif italic tracking-[-0.0em]  ">
                Trending
              </span>{" "}
              <span className="font-medium font-sans tracking-[-0.04em]">
                NA Drinks
              </span>
            </h3>
            <div className="absolute lg:static right-0 top-8 sm:top-12">
              <button className="  hover:cursor-pointer relative flex group items-center justify-between gap-2 text-xs sm:text-[18px] border border-[#D5D7DA] hover:border-[#F49062] rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-medium overflow-hidden transition-all duration-300 ease-in-out hover:pl-16">
                {/* <ArrowRight className="w-6 h-6 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0" /> */}
                <Image
                  src={logo}
                  alt=""
                  className="w-7 h-7 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0"
                />
                <span className="transition-transform duration-300 ease-in-out">
                  Explore All Drinks
                </span>
                {/* <ArrowRight className="w-6 h-6 transition-transform duration-300 ease-in-out" /> */}
                <Image
                  src={arrow}
                  alt=""
                  className="w-3 sm:w-5 h-3 sm:h-5 transition-transform duration-300 ease-in-out"
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 pt-4 lg:pt-0.5 items-center justify-center">
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
