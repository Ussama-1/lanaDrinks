import Image from "next/image";
import React from "react";
import logo from "@/public/logo1.svg";
import arrow from "@/public/arrowicon.svg";
import { EventCard } from "./EventCard";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";
import card4 from "@/public/card4.png";

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

function Upcoming() {
  return (
    <section className="container max-w-[1312px] px-1 mx-auto mb-28">
      <div className="flex items-center justify-between mb-12  relative lg:static">
        <h3 className="text-2xl sm:text-5xl  ">
          <span className="font-medium font-sans tracking-[-0.04em]">
            Upcoming Lana
          </span>
          <span className="font-serif italic tracking-[-0.0em]  "> Events</span>{" "}
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
              Explore All Events
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 lg:pt-0.5 items-center justify-center">
        {EventCardData.map((card) => (
          <EventCard
            key={card.id}
            heroImage={card.heroImage}
            title={card.title}
            date={card.date}
            venue={card.venue}
            price={card.price}
            friendsGoing={card.friendsGoing}
            additionalFriendsCount={card.additionalFriendsCount}
            isTrending={card.isTrending}
            hasSalesEndingSoon={true}
          />
        ))}
      </div>
    </section>
  );
}

export default Upcoming;
