import React, { useState } from "react";
import tiktok from "@/public/tiktoklogo.svg";
import instagramlogo from "@/public/instagramlogo.svg";
import youtubelogo from "@/public/youtubelogo.svg";
import Image from "next/image";


interface SocialMediaTabsProps {
  productdetailpage?: boolean; // Replace 'any' with the actual type if known
}

const SocialMediaTabs: React.FC<SocialMediaTabsProps> = ({ productdetailpage }) => {
  const [activeTab, setActiveTab] = useState("tiktok");

  const tabs = [
    {
      id: "tiktok",
      name: "Tiktok",
      icon: (
        <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-lg  relative overflow-hidden flex items-center justify-center">
          <Image src={tiktok} alt="" />
        </div>
      ),
    },
    {
      id: "youtube",
      name: "Youtube",
      icon: (
        <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-lg  flex items-center justify-center">
          <Image src={youtubelogo} alt="" />
        </div>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: (
        <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-lg  flex items-center justify-center">
          <Image src={instagramlogo} alt="" />
        </div>
      ),
    },
  ];

  return (
    <div className={`${productdetailpage ? "  sm:w-[402px]  sm:h-[52px]" : "w-auto max-w-[372px] sm:w-[372px] sm:h-[44px]"} rounded-full border bg-[#F5F5F5] border-[#E9EAEB] gap-[2px] p-1 `}>
      <div className="flex items-center h-full gap-[2px] w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 ${productdetailpage ? " h-full" : "sm:h-9"}   rounded-full transition-all duration-200 hover:cursor-pointer w-full ${activeTab === tab.id
              ? "bg-white px-3 py-1 sm:py-[6px]   shadow-sm"
              : "px-3 py-1 sm:py-[6px]"
              }`}
          >
            {tab.icon}
            <span
              className={`text-[10px] sm:text-base font-medium whitespace-nowrap ${activeTab === tab.id ? "text-black" : "text-gray-500"
                }`}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTabs;
