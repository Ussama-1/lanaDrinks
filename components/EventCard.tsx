import React from "react";
import trendingicon from "@/public/trendingicon.svg";
import calendar from "@/public/Calendar.svg";
import location from "@/public/location.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Friend = {
  name: string;
  avatar: string;
};

type EventCardProps = {
  id?: number;
  heroImage?: StaticImageData;
  title?: string;
  date?: string;
  venue?: string;
  price?: string;
  friendsGoing?: Friend[];
  additionalFriendsCount?: number;
  isTrending?: boolean;
  hasSalesEndingSoon?: boolean;
  className?: string;
  badge?: string;
  experience?: boolean;
};

export const EventCard: React.FC<EventCardProps> = ({
  id,
  heroImage,
  title,
  date,
  venue,
  price,
  friendsGoing,
  additionalFriendsCount,
  isTrending,
  hasSalesEndingSoon,
  experience,
}) => {
  const displayFriends = friendsGoing?.slice(0, 4);

  return (
    <Link
      href={`/checkout/${id}`}
      className={`${
        experience
          ? "bg-white rounded-t-2xl overflow-hidden  w-full flex-1 flex-wrap min-w-[316px]  h-[358px] group font-sans"
          : "bg-white rounded-t-2xl overflow-hidden  w-full xl:w-[316px]  h-[358px] group font-sans"
      } `}
    >
      {/* Hero Image Section */}
      <div className="relative h-[180px] overflow-hidden  ">
        <Image
          src={heroImage || ""}
          alt={title || "Event image"}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          fill
          sizes="316px"
          priority
        />

        {/* Friends Going Overlay - positioned at bottom left of image */}
        <div className="absolute bottom-2.5 z-50 left-2 flex items-center  ">
          <div className="flex -space-x-1 mr-3">
            {(displayFriends ?? []).length > 0 ? (
              (displayFriends ?? []).map((friend, index) => (
                <Image
                  key={index}
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-7 h-7 rounded-full object-cover"
                  width={28}
                  height={28}
                  unoptimized
                />
              ))
            ) : (
              <>
                <div className="w-5 h-5 rounded-full border border-white bg-blue-500 "></div>
                <div className="w-5 h-5 rounded-full border border-white bg-green-500 "></div>
                <div className="w-5 h-5 rounded-full border border-white bg-purple-500 "></div>
                <div className="w-5 h-5 rounded-full border border-white bg-orange-500 "></div>
              </>
            )}
            <div className="w-5 h-5 rounded-full bg-gray-600 border border-white  flex items-center justify-center">
              <span className="text-white text-[8.33px] font-bold">
                +{additionalFriendsCount}
              </span>
            </div>
          </div>
          <span className="text-[rgba(255,255,255,0.8)] text-[12px] font-medium">
            Friends are going
          </span>
        </div>

        <div className="bg-gradient-to-b from-[rgba(10,13,18,0)] to-[#0A0D12] absolute bottom-0 h-[50px]  w-full"></div>
      </div>

      {/* Content Section */}
      <div className=" py-3.5 ">
        {/* Badges Row */}
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          {isTrending && (
            <div className="flex items-center gap-0.5 text-[#181D27] text-xs font-medium rounded-full py-0.5 px-2  h-[22px] border border-[#E9EAEB]">
              <Image src={trendingicon} alt="" className="w-3 h-3" />
              <span className="">Trending</span>
            </div>
          )}
          {hasSalesEndingSoon && (
            <div className="flex items-center gap-1.5 text-[#B42318] bg-[#FEF3F2] text-xs font-medium rounded-full py-0.5 px-2  h-[22px] border border-[#FECDCA]">
              <span className="">Sales end soon</span>
            </div>
          )}
        </div>

        {/* Event Title */}
        <h2 className="font-medium text-xl text-black leading-tight text-nowrap  truncate mb-3.5">
          {title}
        </h2>

        {/* Event Details */}
        <div className="space-y-0.5 py-3  border-t border-[#E9EAEB] text-[14px] font-medium">
          <div className="flex items-center gap-3 text-gray-800">
            <Image src={calendar} alt="" className="w-[16px] h-[16px]" />
            <span className="">{date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <Image src={location} alt="" className="w-[16px] h-[16px]" />{" "}
            <span className="">{venue}</span>
          </div>
        </div>

        {/* Price */}
        <div>
          <div className="flex items-baseline gap-2 font-semibold text-xl font-sans">
            <span className="">From</span>
            <span className="">{price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
