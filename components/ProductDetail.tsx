"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  ChevronUp,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import can1 from "@/public/can1.png";
import wreathleft from "@/public/Wreath left.svg";
import wreathright from "@/public/Wreath right.svg";
import bag from "@/public/whitebag.svg";
import img1 from "@/public/img1.png";
import Staricon from "@/public/Star.svg";
import scale from "@/public/scale.svg";
import zeroperc from "@/public/zeroperc.svg";
import zeroalchohal from "@/public/zeroalchohal.svg";
import tiktok from "@/public/tiktoklogo.svg";
import instagramlogo from "@/public/instagramlogo.svg";
import youtubelogo from "@/public/youtubelogo.svg";
import logo from "@/public/logo.svg";
import arrow from "@/public/arrowicon.svg";

import line from "@/public/Line 179.svg";
import SocialMediaTabs from "./checkout/SocialTabs";
export default function ProductPage({ id }: { id: string }) {
  // const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = ["/can1.png", "/can2.png", "/can3.png"];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const [openSections, setOpenSections] = useState({
    taste: true,
    health: false,
    value: false,
  });

  const toggleSection = (section: "taste" | "health" | "value") => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={` mx-auto bg-white mt-[62px] font-sans mb-6 lg:mb-12 xl:mb-16 ${id?"":""}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[45.2%_auto] gap-10 lg:min-h-[80rem] xl:min-h-[100rem]">
        {/* Left Section - Product Images */}
        <div className="">
          {/* Main Product Image */}
          <div
            className="relative bg-[#E8D5D1] rounded-3xl  overflow-hidden  mb-4"
            style={{ aspectRatio: "1/1" }}
          >
            <button
              onClick={prevImage}
              className="absolute  hover:cursor-pointer left-6 top-1/2 -translate-y-1/2 w-[48px] h-[48px] backdrop-blur-md bg-[#FFFFFF4D] rounded-full flex items-center justify-center  hover:shadow-xl transition-shadow z-10"
            >
              <ChevronLeft className="w-6 h-6 text-black font-bold" />
            </button>
            <button
              onClick={nextImage}
              className="absolute  hover:cursor-pointer right-6 top-1/2 -translate-y-1/2 w-[48px] h-[48px] backdrop-blur-md bg-[#FFFFFF4D] rounded-full flex items-center justify-center  hover:shw-10 h-10adow-xl transition-shadow z-10"
            >
              <ChevronRight className="w-6 h-6 text-black font-bold" />
            </button>
            <div className="w-full h-full flex items-center justify-center relative group overflow-hidden">
              <div className=" w-[60%] h-full z-20 absolute -bottom-[7%] left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:bottom-[1%] transition-all duration-500 " >
                <Image
                  src={productImages[selectedImage] || "/placeholder.svg"}
                  alt="Athletic Brewing Raspberry Espresso"
                  fill
                  className="object-contain "
                />
              </div>
              <div
                className={`bg-[#FF6700] w-[664px] h-[664px] scale-0  group-hover:scale-100 transition-all duration-500  left-1/2 transform -translate-x-1/2  absolute -bottom-[23.5rem] origin-bottom   rounded-full `}
              ></div>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4 mb-10">
            {productImages.map((image, index) => (
              <button
                key={index}

                onClick={() => setSelectedImage(index)}
                className={`w-[186.6px] h-[139px] bg-[#E8D5D1] relative   rounded-2xl overflow-hidden cursor-pointer transition-all ${selectedImage === index ? "ring ring-[#AA7B6F]" : ""
                  }`}
              >
                <Image
                  src={can1 || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  className=" w-[60%]  absolute  left-1/2 transform top-1/2 -translate-y-1/2 sm:top-[14%] sm:-translate-y-0 -translate-x-1/2 "

                />
              </button>
            ))}
          </div>


          <div className="h-full mb-12">
            <h2 className="font-medium text-xl sm:text-[24px] leading-[105%] capitalize text-black font-sans mb-[18px]">Product Showcase</h2>
            <div className="overflow-x-auto scrollbar-hide max-w-[828px] h-full ">
              <div
                className="flex gap-4 lg:gap-4  h-full"
                style={{ width: "max-content" }}
              >
                {[
                  { name: "Eleanor Pena", platform: "TikTok", img: tiktok },
                  { name: "Eleanor Pena", platform: "YouTube", img: youtubelogo },
                  { name: "Eleanor Pena", platform: "Instagram", img: instagramlogo },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gray-800 rounded-[12px]  border   transition-all duration-300  font-sans w-[150px] sm:w-[250px] lg:w-[186px]  h-[211.14px] sm:h-[351.9px] lg:h-[295px] bg-cover bg-center bg-no-repeat"
                  >


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <button className=" w-8 sm:w-[60px]  h-8 sm:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-white/35 transition-all duration-300 border border-white/20">
                        <Play
                          className="w-4 sm:w-6 h-4 sm:h-6 text-[#FF6700] ml-1"
                          fill="#FF6700"
                        />
                      </button>
                    </div>

                    <div className="flex justify-between items-center absolute -bottom-8 font-semibold text-[#414651] w-full">
                      <div className="flex gap-2">
                        <Image src={item.img} alt="" />
                        <span className="text-sm sm:text-base">{item.platform}</span>
                      </div>
                      <span className="text-xs sm:text-sm">3M Likes</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className=" space-y-6 py-[22px]">
          {/* Product Title and Rating */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-[42px]  font-semibold text-black mb-7 leading-tight tracking-[-0.015em] ">
              Raspberry Espresso{" "}
              <span className="text-black">Extra Dark Non-Alcoholic Drink</span>
            </h1>

            <div className="w-full bg-white py-4 sm:py-[22px] px-3 sm:px-5 rounded-xl shadow-sm border flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
              <div className="flex items-center justify-between relative min-w-[115px] flex-shrink-0">
                <Image src={wreathleft} alt="" />
                <div className="flex flex-col items-center pt-2 tracking-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-[14px] font-semibold text-[#181D27] leading-none">
                    Trending&nbsp;#1
                  </span>
                  <span className="text-[#717680] text-[12px] font-semibold">
                    On Lana
                  </span>
                </div>
                <Image src={wreathright} alt="" />
              </div>

              <div className="flex mx-0 sm:mx-6 flex-shrink">
                <div className="text-[#535862] max-w-none sm:max-w-[244px] leading-tight font-medium text-[14px] sm:text-[16px] tracking-[-0.06em] text-center sm:text-left">
                  One of the most demanding drink in Non Alcoholic Industry
                </div>
              </div>

              <div className="flex flex-1 items-center justify-between w-full sm:w-auto sm:pr-4 gap-4 sm:gap-2">
                <div className="flex flex-col items-center gap-y-1">
                  <div className="text-xl font-semibold leading-none text-black tracking-tight">
                    4.99
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-black text-black"
                      />
                    ))}
                  </div>
                </div>

                <Image src={line} alt="" className="hidden sm:block" />

                <div className="flex items-center flex-col pr-0 sm:pr-0.5">
                  <div className="text-xl font-semibold leading-none text-black tracking-tight">
                    561
                  </div>
                  <div className="text-[16px] text-[#717680] font-normal font-sans">
                    Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volume and Influencer */}
          <div className="flex items-center gap-5 text-lg font-semibold">
            <span className="text-[#181D27] text-xs sm:text-[18px] font-semibold tracking-[-0.04em]">
              750 ML
            </span>
            <span className="text-[#414651] text-[12px]">.</span>
            <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-gray-400 rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-[#181D27] text-[16px] font-semibold">
                309
              </span>
              <span className="text-[#717680]  text-[16px] font-normal font-sans tracking-tight">
                (Influencer Tried)
              </span>
            </div>
          </div>

          {/* Product Description */}
          <p className="text-xs sm:text-[18px] text-[#717680] font-sans tracking-[-0.045em]">
            Experience the rich aroma of Raspberry Espresso— a dark,
            medium-bodied brew infused with sweet raspberry puree and mocha,
            delivering a perfectly balanced, semi-sweet sip for any occasion.
          </p>

          {/* Quantity and Price */}
          <div className="flex items-center justify-between flex-col gap-4 sm:flex-row border-y py-4 mb-8">
            <div className="flex items-center gap-2  rounded-lg bg-white">
              <button className="  bg-[#F5F5F5] w-[36px] h-[36px] flex items-center justify-center transition-colors rounded-full">
                <Minus className="w-4 h-4 text-black" />
              </button>
              <span className=" font-medium font-sans text-xl sm:text-[24px] min-w-[3rem] text-black px-2 text-center">
                02
              </span>
              <button className=" bg-[#F5F5F5] w-[36px] h-[36px] flex items-center justify-center transition-colors rounded-full">
                <Plus className="w-4 h-4 text-black" />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-2xl sm:text-[32px] font-semibold  text-[#181D27]">
                ${4.99}
              </span>
              <Button className="rounded-[12px] gap-[2px] sm:w-[144px] h-[44px] px-5 py-[10px] space-x-[4px] text-[14px] bg-gradient-to-br from-[#F49062] to-[#FD371F]">
                <Image src={bag} alt="" className="h-5 w-5" />
                <span>Add to Bag</span>
              </Button>
            </div>
          </div>

          {/* Taste Section */}
          <div className="border border-[#E9EAEB] rounded-2xl px-[17px] py-[13px] mb-8">
            <div className="flex items-center justify-between  ">
              <h3 className="text-xl sm:text-[24px] font-medium text-black tracking-[-0.04em] font-sans">
                Taste
              </h3>

              <div className="flex items-center gap-3.5 flex-1 mx-6">
                <div className="flex-1 bg-[#E9EAEB] rounded-full h-2">
                  <div
                    className="bg-gradient-to-b from-[#FBC2EB] to-[#A18CD1] h-2 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
                <span className="text-xs sm:text-[18px] font-medium text-[#717680] font-sans whitespace-nowrap tracking-tight">
                  9/10
                </span>
              </div>

              <button
                onClick={() => toggleSection("taste")}
                className=" hover:cursor-pointer rounded-full h-[32px] w-[32px] bg-[#F5F5F5] flex items-center justify-center"
              >
                <ChevronUp
                  className={`w-4 h-4 text-black transition-transform ${openSections.taste ? "" : ""
                    }`}
                />
              </button>
            </div>

            {openSections.taste && (
              <div className="space-y-6 mt-3  border-t py-6">
                <div className="   flex gap-x-6 flex-col sm:flex-row">
                  <div className="flex gap-2 items-start  w-full max-w-[150px]  truncate">
                    <Image
                      src={img1}
                      alt={""}
                      className="rounded-full w-10 h-10"
                    />
                    <div>
                      <span className="font-semibold text-sm sm:text-base text-gray-900 tracking-[-0.038em]">
                        Alexandra M.
                      </span>
                      <p className="text-xs sm:text-[14px] font-normal text-[#535862] tracking-[-0.038em] mb-1">
                        Lana Member
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-1 max-w-[655px]">
                      <div className="flex items-center  gap-1 sm:gap-x-2 mb-1.5">
                        <div className="flex gap-0.5 sm:gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src={Staricon}
                              alt=""
                              className="w-4 h-4"
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900 text-xs sm:text-[14px] tracking-tight">
                          Love it!
                        </span>
                      </div>

                      <p className="text-[#717680] font-normal font-sans text-xs sm:text-base ">
                        This is the perfect replacement for alcoholic drink.
                        We&apos;ve been loving just the right amount of sweet,
                        adaptogens are a nice touch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Health Section */}
          <div className="border border-[#E9EAEB] rounded-2xl px-[17px] py-[13px] mb-8">
            <div className="flex items-center justify-between  ">
              <h3 className="text-xl sm:text-[24px] font-medium text-black tracking-[-0.04em] font-sans">
                Health
              </h3>

              <div className="flex items-center gap-3.5 flex-1 mx-6">
                <div className="flex-1 bg-[#E9EAEB] rounded-full h-2">
                  <div
                    className="bg-gradient-to-t from-[#6991C7] to-[#A3BDED] h-2 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
                <span className="text-xs sm:text-[18px] font-medium text-[#717680] font-sans whitespace-nowrap tracking-tight">
                  9/10
                </span>
              </div>

              <button
                onClick={() => toggleSection("health")}
                className=" hover:cursor-pointer rounded-full h-[32px] w-[32px] bg-[#F5F5F5] flex items-center justify-center"
              >
                <ChevronUp
                  className={`w-4 h-4 text-black transition-transform ${openSections.taste ? "" : ""
                    }`}
                />
              </button>
            </div>

            {openSections.health && (
              <div className="mt-9">
                <h4 className="text-sm sm:text-[20px] font-medium tracking-tight text-black mb-2.5">
                  Ingredients
                </h4>
                <p className="text-[#717680] text-xs sm:text-[16px] tracking-tighter max-w-[98%] mb-4">
                  Experience the rich aroma of Raspberry Espresso— a dark,
                  medium-bodied brew infused with sweet raspberry puree and
                  mocha, delivering a perfectly balanced, semi-sweet sip for any
                  occasion.
                </p>

                {/* Product Info Badges */}
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="flex items-center gap-1 sm:gap-2 bg-[#FFF0E6] px-2 sm:px-[17px] py-2 sm:py-[11px] rounded-lg sm:rounded-xl border border-[#FFD0B0]">
                    <Image src={scale} alt="" />
                    <span className="font-semibold text-xs sm:text-[18px] text-black  text-nowrap">750 ML</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 bg-[#FFF0E6] px-2 sm:px-[17px] py-2 sm:py-[11px] rounded-lg sm:rounded-xl border border-[#FFD0B0]">
                    <Image src={zeroperc} alt="" />
                    <span className="font-semibold text-xs sm:text-[18px] text-black text-nowrap">0% ALC/VOL</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 bg-[#FFF0E6] px-2 sm:px-[17px] py-2 sm:py-[11px] rounded-lg sm:rounded-xl border border-[#FFD0B0]">
                    <Image src={zeroalchohal} alt="" />
                    <span className="font-semibold text-xs sm:text-[18px] text-black text-nowrap">Zero Proof</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm sm:text-[20px] font-medium tracking-tight text-black mb-3">
                    Features
                  </h4>
                  <ul className="space-y-1 pl-2 text-xs sm:text-[16px] font-medium text-[#717680] tracking-tight">
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>A Clean Botanical Non-Alcoholic Spirit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>14 Botanicals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>Premium Bottles Produced in Le Havre, France</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>Non-GMO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>Gluten-Free</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>No Added Sugar or Sweeteners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>No Artificial Colors or Flavors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" mt-1">•</span>
                      <span>Vegan</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Value Section */}
          <div className="border border-[#E9EAEB] rounded-2xl px-[17px] py-[13px] mb-8">
            <div className="flex items-center justify-between  ">
              <h3 className="text-xl sm:text-[24px] font-medium text-black tracking-[-0.04em] font-sans">
                Value
              </h3>

              <div className="flex items-center gap-3.5 flex-1 mx-6">
                <div className="flex-1 bg-[#E9EAEB] rounded-full h-2">
                  <div
                    className="bg-gradient-to-br from-[#FFF6B7] to-[#FB758A] h-2 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
                <span className="text-xs sm:text-[18px] font-medium text-[#717680] font-sans whitespace-nowrap tracking-tight">
                  9/10
                </span>
              </div>

              <button
                onClick={() => toggleSection("value")}
                className=" hover:cursor-pointer rounded-full h-[32px] w-[32px] bg-[#F5F5F5] flex items-center justify-center"
              >
                <ChevronUp
                  className={`w-4 h-4 text-black transition-transform ${openSections.taste ? "" : ""
                    }`}
                />
              </button>
            </div>

            {openSections.value && (
              <div className="mt-6">
                <p className="text-gray-600">Value content would go here...</p>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* social reviews */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-black font-medium text-2xl sm:text-[48px] leading-[105%] tracking-[-0.04em] capitalize mb-4">
            Social{" "}
            <span className="font-serif tracking-[-0.0em]">Reviews</span>
          </h2>
          <span className="hidden lg:block">

            <SocialMediaTabs productdetailpage={true} />
          </span>
          <div className="absolute sm:static right-0 top-10 sm:top-12 hidden lg:block">
            <button className="  hover:cursor-pointer relative flex group items-center justify-between gap-2 text-xs sm:text-[18px] border border-[#D5D7DA] hover:border-[#F49062] rounded-full px-4 sm:px-6 py-2 sm:py-[12px] font-medium overflow-hidden transition-all duration-300 ease-in-out hover:pl-12">
              {/* <ArrowRight className="w-6 h-6 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0" /> */}
              <Image
                src={logo}
                alt=""
                className="w-7 h-7 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0"
              />
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

        <div className="lg:hidden flex items-start justify-between mb-12 sm:mb-4  relative lg:static  ">
          <span className="">

            <SocialMediaTabs productdetailpage={true} />

          </span>
          <div className="absolute sm:static right-0 top-10 sm:top-12">
            <button className="  hover:cursor-pointer relative flex group items-center justify-between gap-2 text-xs sm:text-[18px] border border-[#D5D7DA] hover:border-[#F49062] rounded-full px-4 sm:px-6 py-2 sm:py-[12px] font-medium overflow-hidden transition-all duration-300 ease-in-out hover:pl-12">
              {/* <ArrowRight className="w-6 h-6 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0" /> */}
              <Image
                src={logo}
                alt=""
                className="w-7 h-7 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0"
              />
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

        <div className="overflow-x-auto scrollbar-hide w-full mt-8 ">
          <div
            className="flex gap-4 lg:gap-4 "
            style={{ width: "max-content" }}
          >
            {[
              { name: "Eleanor Pena", platform: "TikTok" },
              { name: "Eleanor Pena", platform: "YouTube" },
              { name: "Eleanor Pena", platform: "Instagram" },
              { name: "Eleanor Pena", platform: "Instagram" },
              { name: "Eleanor Pena", platform: "Instagram" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-800 rounded-[12px] overflow-hidden    transition-all duration-300  font-sans w-[150px] sm:w-[250px] lg:w-[316px]  h-[211.14px] sm:h-[351.9px] lg:h-[463px] bg-cover bg-center bg-no-repeat"
              >
                <div className="absolute font-sans top-[9px] left-[9px] border sm:h-[28px] rounded-[6px] px-1.5 sm:px-[10px] py-0.5   sm:py-[4px] text-white text-[10px] sm:text-[14px] backdrop-blur-[16px] flex items-center justify-center">
                  230k Views
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button className=" w-8 sm:w-[60px]  h-8 sm:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-white/35 transition-all duration-300 border border-white/20">
                    <Play
                      className="w-4 sm:w-6 h-4 sm:h-6 text-[#FF6700] ml-1"
                      fill="#FF6700"
                    />
                  </button>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center  gap-1 sm:gap-2.5">
                  <div className="w-7 sm:w-[45px] h-7 sm:h-[45px] bg-orange-500 rounded-full flex items-center justify-center border border-white">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                  <div className="flex flex-col font-sans gap-0.5 sm:gap-1">
                    <span className="text-white text-sm sm:text-xl font-medium leading-none tracking-tight">
                      {item.name}
                    </span>
                    <span className="text-[#B2B9BB] text-xs sm:text-sm font-normal leading-none tracking-tight">
                      Tiktok Influencer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
}
