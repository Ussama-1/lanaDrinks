import { ProductCard } from "@/components/product-grid";
import Image from "next/image";
import can1 from "@/public/can1.png";
import can2 from "@/public/can2.png";
import can3 from "@/public/can3.png";
import can4 from "@/public/can4.png";
import saveperc from "@/public/saveperc.svg";


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
        image: can4,
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

export function BoughtTogather() {
    return (
        <section className="py-[35px]  bg-white">


            {/* Trending Products */}
            <div className="mb-8  py-5">
                <div className="flex items-center justify-between mb-6  relative lg:static">
                    <h3 className="text-2xl sm:text-[42px]  ">
                        <span className="font-medium font-sans tracking-[-0.04em]">
                            Bought {" "}
                        </span>
                        <span className="font-serif italic tracking-[-0.0em]  ">
                            Together
                        </span>{" "}
                    </h3>
                    <div className="absolute md:static right-0 top-8 sm:top-12 flex items-center font-sans gap-1 sm:gap-2 text-black font-medium text-sm sm:text-[20px] leading-[120%] capitalize">
                        <Image src={saveperc} alt="" className="w-5 sm:w-6 h-5 sm:h-6" />
                        <span className="tracking-[-0.04em]">

                            Save 10% when you bundle 3+ drinks!
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 lg:pt-0.5 items-center justify-center">
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

        </section>
    );
}
