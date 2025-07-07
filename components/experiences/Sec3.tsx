"use client";

import { useState } from "react";
import { FilterSidebar } from "./filter-sidebar";
import { Menu, X } from "lucide-react";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";
import card4 from "@/public/card4.png";
import { EventCard } from "../EventCard";

const EventCardData = [
  {
    id: 1,
    heroImage: card1,
    title: "Boston’s Hottest Kickback (1 Drink...",
    date: "Tue, Jan 9, 5:00 PM",
    venue: "Theory bar lounge",
    price: "US$57.09",
    friendsGoing: [], // Add avatars if needed
    additionalFriendsCount: 99,
    isTrending: true,
    hasSalesEndingSoon: true,
  },
  {
    id: 2,
    heroImage: card2,
    title: "Speed Dating In Cambridge",
    date: "Tue, Jan 9, 5:00 PM",
    venue: "Theory bar lounge",
    price: "US$57.09",
    friendsGoing: [],
    additionalFriendsCount: 99,
    isTrending: true,
    hasSalesEndingSoon: false,
    badge: "Going Fast",
  },
  {
    id: 3,
    heroImage: card3,
    title: "Italian Wine And Dating",
    date: "Tue, Jan 9, 5:00 PM",
    venue: "Theory bar lounge",
    price: "US$57.09",
    friendsGoing: [],
    additionalFriendsCount: 99,
    isTrending: true,
    hasSalesEndingSoon: false,
    badge: "Almost Full",
  },
  {
    id: 4,
    heroImage: card4,
    title: "Speed Dating In Cambridge",
    date: "Tue, Jan 9, 5:00 PM",
    venue: "Theory bar lounge",
    price: "US$57.09",
    friendsGoing: [],
    additionalFriendsCount: 99,
    isTrending: true,
    hasSalesEndingSoon: false,
    badge: "Grab Now",
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

      <section className=" lg:grid grid-cols-[23.7%_auto] gap-5 mt-6 lg:mt-12 max-w-[1312px] mx-auto">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block mb-8">
          <div className="sticky top-4">
            <FilterSidebar className=" py-2  " />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap h-fit ">
          {EventCardData.map((card) => (
            <EventCard
              key={card.id}
              id={card.id}
              heroImage={card.heroImage}
              title={card.title}
              date={card.date}
              venue={card.venue}
              price={card.price}
              friendsGoing={card.friendsGoing}
              additionalFriendsCount={card.additionalFriendsCount}
              isTrending={card.isTrending}
              hasSalesEndingSoon={true}
              experience={true}
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
