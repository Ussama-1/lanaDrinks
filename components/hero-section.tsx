"use client"
import { MoodSelector } from "@/components/mood-selector";
import Image from "next/image";
import icon from "@/public/logo1.svg";
import thinkcircle from "@/public/thinkcircle.svg";
import AnimatedTextSequence from "./AnimatedTextSequence";
import { Header } from "./header";

interface HeroSectionProps {
  overlay?: (value: boolean) => void; 
}

export function HeroSection({ overlay }: HeroSectionProps) {

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/sec1BG.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="font-sans  h-auto bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100  w-full pt-4 sm:pt-7 px-2"
      >
        <Header overlay={overlay} />

        
        <div className="container mx-auto  pb-14 pt-[41px]">
          {/* Main Headline */}
          <div className="text-center -mb-1">
            <h1 className=" text-center font-sans  text-2xl sm:text-4xl lg:text-[56px]  max-w-[400px] sm:max-w-[580px] lg:max-w-[920px]  mx-auto leading-[105%] tracking-[-0.089em] font-medium text-black px-4 py-6 ">
              Meet Lana: The World’s First AI-Driven{" "}
              <span className="bg-[linear-gradient(135deg,_#F49062_0%,_#FD371F_100%)] bg-clip-text text-transparent font-sans font-[600]  ">
                Non-Alcoholic{" "}
              </span>{" "}
              Social Club & Marketplace
            </h1>
          </div>
          <div className=" sm:h-[10rem] md:h-auto">
            <div className="  lg:max-w-[857px] mx-auto relative mb-20 md:mb-14 pt-2 sm:pt-6 pl-[63px]">
              <div className="bg-[rgba(255,_255,_255,_0.5)] rounded-full md:w-[600px] lg:w-[758px]  mx-auto px-5 py-2.5 ">
                <AnimatedTextSequence />
              </div>
              <Image
                src={thinkcircle}
                alt=""
                className="absolute md:bottom-0 left-8 md:left-12 "
              />
              <div className="w-[40px] sm:w-[64px] h-[40px] sm:h-[58px] absolute -left-2 sm:-left-3 md:-left-2 top-14 sm:top-20 md:top-12">
                <Image src={icon} alt="" className="object-cover" />
              </div>
            </div>
          </div>

          {/* Mood Selector */}
          <MoodSelector />
        </div>
      </section>

      


    </>
  );
}
