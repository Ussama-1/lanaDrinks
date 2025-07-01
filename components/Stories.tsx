"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo1.svg";
import arrow from "@/public/arrowicon.svg";
import instagram from "@/public/instagram.svg";
import { Star } from "lucide-react";
import { StoryCard } from "./StoryCard";

const profiles = [
  {
    id: 1,
    name: "ena",
    title: "",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=700&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    title: "Lana Member",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=700&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    title: "Lana Member",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=700&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 4,
    name: "Eleanor Pena",
    title: "Lana Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=700&fit=crop&crop=face&auto=format&q=80",
  },
];

function Stories() {
  // const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
      <section className="container mx-auto px-6 sm:px-[4.5rem] pt-0.5 font-sans">
        <div className="flex items-center justify-between mb-16 lg:mb-10  relative lg:static">
          <div>
            <h3 className="text-2xl sm:text-5xl mb-1 sm:mb-4 ">
              <span className="font-medium font-sans tracking-[-0.04em]">
                Real People
              </span>
              <span className="font-serif italic tracking-[-0.0em]  ">
                {" "}
                Real Stories
              </span>{" "}
            </h3>
            <h4 className="flex items-center gap-1 sm:gap-2 text-base sm:text-xl  text-[#101828] font-medium font-sans leading-tight tracking-[-0.035em]">
              {" "}
              <Star fill="black" className="w-4 sm:w-6 h-4 sm:h-6" />
              15000+ Customers Who Love Lana
            </h4>
          </div>
          <div className="absolute lg:static right-0 top-16 sm:top-24">
            <button className="  hover:cursor-pointer relative flex group items-center justify-between gap-2 text-xs sm:text-[18px] border border-[#D5D7DA] hover:border-[#F49062] rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-medium overflow-hidden transition-all duration-300 ease-in-out hover:pl-12">
              {/* <ArrowRight className="w-6 h-6 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0" /> */}
              <Image
                src={logo}
                alt=""
                className="w-7 h-7 absolute left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0"
              />
              <Image src={instagram} alt="" className="w-5 h-5 " />
              <span className="transition-transform duration-300 ease-in-out">
                Stories
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
      </section>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 lg:gap-6 " style={{ width: "max-content" }}>
          {profiles.map((profile) => (
            <StoryCard
              key={profile.id}
              image={profile.image}
              name={profile.name}
              title={profile.title}
              // isActive={activeCard === profile.id}
              // onClick={() => setActiveCard(profile.id)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

export default Stories;
