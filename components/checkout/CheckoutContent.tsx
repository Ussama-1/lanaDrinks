"use client";

import Image from "next/image";
import { Play, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import usericon from "@/public/usericon.svg";
import calendaricon from "@/public/calendaricon.svg";
import waitbottle from "@/public/waitbottle.svg";
import ticket from "@/public/ticket.svg";
import musicicon from "@/public/musicicon.svg";
import drink from "@/public/drink.svg";
import vip from "@/public/vip.svg";
import time from "@/public/time.svg";
import Staricon from "@/public/Star.svg";
import logo from "@/public/logo.svg";
import plusicon from "@/public/pluseiconblack.svg";
import SocialMediaTabs from "./SocialTabs";
import arrow from "@/public/arrowicon.svg";
import ClockCircle from "@/public/ClockCircle.svg";
import MapPointWave from "@/public/MapPointWave.svg";
import Calendarorange from "@/public/Calendarorange.svg";
import TicketStar from "@/public/TicketStar.svg";
import stars2 from "@/public/stars2.svg";
import hourglass from "@/public/hourglass.svg";

import { useState } from "react";
import VenueDetails from "./venue-details";

const getEventData = (eventId: string) => {
  return {
    id: eventId,
    title: "Boston's Hottest Kickback (1 Drink Included)",
    subtitle:
      "The Ultimate Night Out in Boston – Great Vibes, Great People, & One Free Drink on Us!",
    price: 75,
    originalPrice: null,
    heroImage: img1,
    galleryImages: [img2, img3, img1, img4, img5],
    stats: {
      going: 346,
      ageLimit: "21+",
      hoursLeft: "05",
      spotsLeft: 54,
    },
    schedule: {
      date: "Saturday, June 15, 2024",
      time: "9:00 PM - 2:00 AM EST",
      venue: "The Royale Nightclub, Boston",
    },
    about:
      "Join us for Boston's hottest kickback - an electrifying night of music, connections, and unforgettable moments. We've curated the perfect atmosphere for you to unwind, dance, and create memories that will last you a lifetime.\n\nOur top DJs will be spinning the hottest tracks across Hip-Hop, RNB, and Afrobeats, keeping the energy high all night long. Whether you're looking to dance the night away or simply vibe with great company, this event promises an experience like no other.\n\nYour ticket includes one complimentary drink to start your night right. VIP options available for those looking for an elevated experience with even more perks and priority entry.",
    features: [
      { title: "Live DJs", subtitle: "Hip-Hop, RNB, Afrobeats" },
      { title: "Free Drink", subtitle: "Every ticket" },
      { title: "VIP Options", subtitle: "Elevated experience" },
      { title: "5-Hour Event", subtitle: "9 PM - 2 AM" },
    ],
    reviews: [
      {
        name: "Alexandra M.",
        rating: 5,
        comment: "Love it!",
        detail:
          "This is the best event I've been to in months. Great vibes, amazing music, and the crowd was incredible. Can't wait for the next one!",
        avatar: img1,
      },
      {
        name: "Jordan K.",
        rating: 5,
        comment: "Super!",
        detail:
          "The energy was through the roof! DJs were on point, and the venue was perfect. Definitely coming back for more events like this.",
        avatar: img1,
      },
      {
        name: "Taylor S.",
        rating: 5,
        comment: "Great!",
        detail:
          "The vibe was immaculate! Great music, great people, and overall awesome experience. The free drink was a nice touch too!",
        avatar: img1,
      },
    ],
    venue: {
      name: "The Royale Nightclub",
      address: "279 Tremont St, Boston, MA 02116",
      features: [
        "Full-service bar, drink included with ticket",
        "VIP area available (paid separately)",
        "Coat check available ($5 per item)",
        "Smoking area in designated outdoor terrace",
      ],
    },
    transportation: {
      parking: "Street parking available after 6 hours.",
      publicTransit:
        "Orange Station (Green Line) is 4-5 minute walk from venue.",
    },
  };
};

interface CheckoutContentProps {
  eventId: string;
}

export function CheckoutContent({ eventId }: CheckoutContentProps) {
  const event = getEventData(eventId);
  const [quantity, setQuantity] = useState(2);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className=" mx-auto mt-3 sm:mt-6 md:mt-[46px] w-full ">
      <div className="mb-12">
        <div className="relative h-[200px] sm:h-[300px] md:h-[376px] rounded-[24px] overflow-hidden mb-2 sm:mb-3 w-full">
          <Image
            src={event.heroImage || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Gallery Thumbnails */}
        <div className="flex gap-2 sm:gap-2.5 overflow-x-auto">
          {event.galleryImages.map((image, index) => {
            const getFlexClasses = (index: number) => {
              const patterns = [
                "flex-shrink-0 md:flex-[1.07]",
                "flex-shrink-0 md:flex-[1.07]",
                "flex-shrink-0 md:flex-[2.3]",
                "flex-shrink-0 md:flex-[1.07]",
                "flex-shrink-0 md:flex-[1.07]",
              ];
              return patterns[index % patterns.length];
            };

            return (
              <div
                key={index}
                className={`relative h-[100px] sm:h-[127.66px] md:h-[160px] w-[163px] md:w-auto ${getFlexClasses(
                  index
                )} rounded-[12px] overflow-hidden`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[auto_30.5%] gap-12 mb-[52px]">
        {/* Main Content */}
        <div className="space-y-8 ">
          {/* Event Header */}
          <div className="mb-[50px]">
            <h1 className=" font-semibold text-2xl sm:text-[42px] leading-[120%] tracking-[-0.02em] capitalize mb-5 text-black">
              {event.title}
            </h1>
            <p className="font-sans font-normal text-sm sm:text-[18px] leading-[150%] tracking-[-0.04em] text-[#717680] mb-8">
              {event.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-0 items-center mb-8 border border-[#E9EAEB] max-w-[828px] p-2 sm:py-[30px] rounded-2xl shadow-lg px-0.5 sm:grid-cols-4">
              <div className="space-y-1.5 flex flex-col items-center border-r border-b sm:border-b-0 p-2 sm:p-0">
                <div className="flex items-start justify-center gap-2">
                  <Image
                    src={usericon}
                    alt=""
                    className="sm:w-[20px] h-[20px]"
                  />
                  <div className="font-sans font-medium text-base sm:text-[20px] leading-[105%] text-center">
                    146
                  </div>
                </div>
                <div className="font-sans font-normal text-xs sm:text-[16px] leading-[105%] tracking-[-0.04em] text-center text-[#717680]">
                  Attending
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col items-center border-b sm:border-r sm:border-b-0 p-2 sm:p-0">
                <div className="flex items-start justify-center gap-2">
                  <Image
                    src={calendaricon}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  <div className="font-sans font-medium text-base sm:text-[20px] leading-[105%] text-center">
                    21+
                  </div>
                </div>
                <div className="font-sans font-normal text-xs sm:text-[16px] leading-[105%] tracking-[-0.04em] text-center text-[#717680]">
                  Age Requirement
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col items-center border-r p-2 sm:p-0">
                <div className="flex items-start justify-center gap-2">
                  <Image
                    src={waitbottle}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  <div className="font-sans font-medium text-base sm:text-[20px] leading-[105%] text-center">
                    05
                  </div>
                </div>
                <div className="font-sans font-normal text-xs sm:text-[16px] leading-[105%] tracking-[-0.04em] text-center text-[#717680]">
                  Age Requirement
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col items-center p-2 sm:p-0">
                <div className="flex items-start justify-center gap-2">
                  <Image src={ticket} alt="" className="sm:w-[20px] h-[20px]" />
                  <div className="font-sans font-medium text-base sm:text-[20px] leading-[105%] text-center">
                    54
                  </div>
                </div>
                <div className="font-sans font-normal text-xs sm:text-[16px] leading-[105%] tracking-[-0.04em] text-center text-[#717680]">
                  Tickets Left
                </div>
              </div>
            </div>
          </div>

          {/* About The Event */}
          <div className="mb-[57px]">
            <h2 className="font-sans font-semibold text-2xl sm:text-[32px] leading-[120%] tracking-[0.02em] capitalize mb-4">
              About The Event
            </h2>
            <div className="space-y-7 font-sans font-normal text-sm sm:text-[18px] leading-[150%] tracking-[0em] text-[#717680] mb-14">
              {event.about.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Event Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 max-w-[598px]">
              <div className="flex items-start gap-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-gray-200 flex items-center justify-center ">
                  <Image src={musicicon} alt="" className="h-[15px] w-[15px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#181D27] text-xl mb-0 tracking-[-0.05em]">
                    Live DJs
                  </div>
                  <div className="text-[#717680] text-base tracking-[-0.044em]">
                    Hip-Hop, R&B, Afrobeats
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-gray-200 flex items-center justify-center ">
                  <Image src={drink} alt="" className="h-[15px] w-[15px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#181D27] text-xl mb-0 tracking-[-0.05em]">
                    Free Drink
                  </div>
                  <div className="text-[#717680] text-base tracking-[-0.044em]">
                    With every ticket{" "}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-gray-200 flex items-center justify-center ">
                  <Image src={vip} alt="" className="h-[15px] w-[15px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#181D27] text-xl mb-0 tracking-[-0.05em]">
                    VIP Options
                  </div>
                  <div className="text-[#717680] text-base tracking-[-0.044em]">
                    Reserved seating available
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-gray-200 flex items-center justify-center ">
                  <Image src={time} alt="" className="h-[15px] w-[15px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#181D27] text-xl mb-0 tracking-[-0.05em]">
                    5 Hour Event
                  </div>
                  <div className="text-[#717680] text-base tracking-[-0.044em]">
                    9PM - 2AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Was Our Last Event */}
          <div className="mb-12">
            <h2 className="font-sans font-semibold text-2xl sm:text-[32px] leading-[120%] tracking-[-0.009em] capitalize mb-5">
              How Was Our Last Event?
            </h2>
            <div className="mb-6 flex flex-col gap-y-[17px]">
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

            <div className="">
              <button className="  hover:cursor-pointer relative flex group items-center justify-between gap-2 text-xs  sm:text-[18px] border border-[#D5D7DA] hover:border-[#F49062] rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-medium overflow-hidden transition-all duration-300 ease-in-out hover:pl-16">
                {/* <ArrowRight className="w-6 h-6 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0" /> */}
                <Image
                  src={logo}
                  alt=""
                  className="w-7 h-7 absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform -translate-x-2 group-hover:translate-x-0"
                />
                <span className="transition-transform duration-300 ease-in-out ">
                  Show More Reviews
                </span>
                {/* <ArrowRight className="w-6 h-6 transition-transform duration-300 ease-in-out" /> */}
                <Image
                  src={plusicon}
                  alt=""
                  className="w-3 sm:w-[14] h-3 sm:h-[14] transition-transform duration-300 ease-in-out"
                />
              </button>
            </div>
          </div>

          {/* Social Reviews */}
          <div>
            <h2 className="text-black font-medium text-2xl sm:text-[32px] leading-[105%] tracking-[-0.04em] capitalize mb-4">
              Social{" "}
              <span className="font-serif tracking-[-0.0em]">Reviews</span>
            </h2>

            <div className="flex items-start justify-between mb-12 sm:mb-4  relative lg:static  max-w-[828px]">
              <SocialMediaTabs />
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

            <div className="overflow-x-auto scrollbar-hide max-w-[828px] ">
              <div
                className="flex gap-4 lg:gap-4 "
                style={{ width: "max-content" }}
              >
                {[
                  { name: "Eleanor Pena", platform: "TikTok" },
                  { name: "Eleanor Pena", platform: "YouTube" },
                  { name: "Eleanor Pena", platform: "Instagram" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gray-800 rounded-[12px] overflow-hidden    transition-all duration-300  font-sans w-[150px] sm:w-[250px] lg:w-[265px]  h-[211.14px] sm:h-[351.9px] lg:h-[463px] bg-cover bg-center bg-no-repeat"
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
        </div>

        {/* Sidebar */}
        <div className="space-y-6 ">
          {/* Pricing Card */}
          <div className="border border-[#E9EAEB]  w-full bg-white rounded-[20px]  py-6 px-6">
            <div className="">
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-sans text-[#A4A7AE] font-semibold text-[16px] leading-[120%] tracking-[0.16em] uppercase mb-3.5">
                  VIP EXPERIENCE
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-semibold text-black">
                    $75
                  </span>
                  <span className="text-[20px] text-[#717680] font-semibold">
                    Incl Tax.
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-200 mb-8" />

              {/* Event Details */}
              <div className="space-y-5 mb-[50px]">
                <div className="flex items-center gap-3">
                  <Image src={Calendarorange} alt="" />
                  <span className="text-[#181D27] font-medium text-base tracking-[-0.04em]">
                    Saturday, June 15, 2024
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src={ClockCircle} alt="" />
                  <span className="text-[#181D27] font-medium text-base tracking-[-0.04em]">
                    9:00 PM - 2:00 AM EST
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src={MapPointWave} alt="" />
                  <span className="text-[#181D27] font-medium text-base tracking-[-0.04em]">
                    The Royale Nightclub, Boston
                  </span>
                </div>
              </div>

              {/* Quantity Selector and Button */}
              <div className="flex items-center gap-4 mb-[22px]">
                <div className="flex items-center  rounded-lg bg-white">
                  <button
                    className="  bg-[#F5F5F5] w-[36px] h-[36px] flex items-center justify-center transition-colors rounded-full"
                    onClick={handleDecrease}
                  >
                    <Minus className="w-4 h-4 text-black" />
                  </button>
                  <span className=" font-medium font-sans text-xl min-w-[3rem] text-black px-2 text-center">
                    {quantity.toString().padStart(2, "0")}
                  </span>
                  <button
                    className=" bg-[#F5F5F5] w-[36px] h-[36px] flex items-center justify-center transition-colors rounded-full"
                    onClick={handleIncrease}
                  >
                    <Plus className="w-4 h-4 text-black" />
                  </button>
                </div>
                <Button className="flex-1 bg-[linear-gradient(135deg,_#F49062_0%,_#FD371F_100%)] tracking-tight max-w-[220px] text-white font-medium py-2.5 text-[18px] rounded-[12px] transition-colors h-auto">
                  <Image src={TicketStar} alt="" className="w-[26px] " />
                  Get Tickets
                </Button>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-2 mb-[11px]  max-w-[352px] h-[60px]">
                <div className="text-center bg-[#F5F7FA] w-full rounded-[12px] flex flex-col items-center justify-center py-2.5 px-2.5">
                  <div className="text-[16px] font-semibold text-black mb-1">
                    05
                  </div>
                  <div className="text-[10px] text-[#717784] uppercase tracking-tight font-semibold">
                    DAYS
                  </div>
                </div>
                <div className="text-center bg-[#F5F7FA] w-full rounded-[12px] flex flex-col items-center justify-center py-2.5 px-2.5">
                  <div className="text-[16px] font-semibold text-black mb-1">
                    07
                  </div>
                  <div className="text-[10px] text-[#717784] uppercase tracking-tight font-semibold">
                    HOURS
                  </div>
                </div>
                <div className="text-center bg-[#F5F7FA] w-full rounded-[12px] flex flex-col items-center justify-center py-2.5 px-2.5">
                  <div className="text-[16px] font-semibold text-black mb-1">
                    44
                  </div>
                  <div className="text-[10px] text-[#717784] uppercase tracking-tight font-semibold">
                    MINUTES
                  </div>
                </div>
                <div className="text-center bg-[#F5F7FA] w-full rounded-[12px] flex flex-col items-center justify-center py-2.5 px-2.5">
                  <div className="text-[16px] font-semibold text-black mb-1">
                    52
                  </div>
                  <div className="text-[10px] text-[#717784] uppercase tracking-tight font-semibold">
                    SECONDS
                  </div>
                </div>
              </div>

              {/* Bottom Information */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Image src={hourglass} alt="" className="w-[17px] h-[17px]" />
                  <span className="text-[#FB3748] font-medium text-sm tracking-[-0.034em]">
                    Hurry – only 24 tickets remaining
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={stars2} alt="" className="w-[18px] h-[18px]" />
                  <span className="text-[#525866] font-medium text-sm tracking-[-0.034em]">
                    Lana Members earn 75 points with purchase
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={stars2} alt="" className="w-[18px] h-[18px]" />
                  <span className="text-[#525866] font-medium text-[14px] tracking-[-0.034em]">
                    Redeem your points for discounted drinks & events
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Info */}
          <VenueDetails />
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
