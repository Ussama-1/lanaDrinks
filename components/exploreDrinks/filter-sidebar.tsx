"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import manu from "@/public/menu.svg";
import Image from "next/image";
import plusicon from "@/public/plusicon.svg";

interface FilterSidebarProps {
  className?: string;
}

export function FilterSidebar({ className }: FilterSidebarProps) {
  const [activeTab, setActiveTab] = useState({
    taste: "Excellent",
    health: "Great",
    social: "Excellent",
  });

  const [checkedItems, setCheckedItems] = useState({
    sour: true,
    bitter: true,
    fruity: true,
    zeroSugar: true,
    triedBy5k: true,
    triedBy25k: true,
  });

  const handleCheckboxChange = (item: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [item]: checked }));
  };

  const TabButton = ({
    label,
    isActive,
    onClick,
    section,
  }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
    section: string;
  }) => {
    let bgColor = "bg-gray-100 text-gray-600";
    if (isActive) {
      if (section === "taste") bgColor = "bg-purple-600 text-white";
      if (section === "health") bgColor = "bg-blue-600 text-white";
      if (section === "social") bgColor = "bg-pink-600 text-white";
    }

    return (
      <button
        onClick={onClick}
        className={`
          
          ${
            label === "Good" && section === "taste"
              ? "rounded-l-full bg-[linear-gradient(180deg,_#FBC2EB_0%,_#A18CD1_105.25%)]"
              : label === "Great" && section === "taste"
              ? "bg-[linear-gradient(180deg,_#EEA8DB_0%,_#59438D_105.25%)]"
              : label === "Excellent" && section === "taste"
              ? "bg-[linear-gradient(180deg,_#D280BB_0%,_#4D3583_105.25%)] rounded-r-full"
              : label === "Good" && section === "health"
              ? "rounded-l-full bg-[linear-gradient(0deg,_#A3BDED_0%,_#6991C7_100%)]"
              : label === "Great" && section === "health"
              ? "bg-[linear-gradient(0deg,_#829FD4_0%,_#245BA6_100%)]"
              : label === "Excellent" && section === "health"
              ? "bg-[linear-gradient(135deg,_#5B7AB3_0%,_#154584_100%)] rounded-r-full"
              : label === "Good" && section === "social"
              ? "rounded-l-full bg-[linear-gradient(135deg,_#FCCB90_0%,_#D57EEB_100%)]"
              : label === "Great" && section === "social"
              ? "bg-[linear-gradient(135deg,_#FFBA67_0%,_#C546E5_100%)]"
              : label === "Excellent" && section === "social"
              ? "bg-[linear-gradient(135deg,_#FFAF4F_0%,_#D42CFF_100%)] rounded-r-full"
              : ""
          }
          px-3 py-1.5 text-xs  transition-colors w-[284px] max-h-[10px] relative  hover:cursor-pointer hover:opacity-95  ${bgColor} ${
          isActive ? "font-bold" : "font-medium"
        }`}
      >
        <span className="absolute bottom-4 left-0 text-sm  text-black">
          {label}
        </span>
      </button>
    );
  };

  const CheckboxItem = ({
    id,
    label,
    checked,
    onChange,
  }: {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }) => (
    <div className="flex items-center space-x-2 py-1.5">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-[linear-gradient(135deg,_#F49062_0%,_#FD371F_100%)] data-[state=checked]:border-0 border-gray-300 h-[20px] w-[20px] "
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-900 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );

  return (
    <div className={`w-full bg-white ${className} pr-3 font-sans`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-1 border-[#E9EAEB]">
        <div className="flex items-center gap-4 font-sans">
          <Image src={manu} alt="" className="w-[22px]" />
          <span className="font-semibold text-[18px] leading-[100%] tracking-[0.12em] uppercase text-[#181D27] ">
            FILTERS
          </span>
        </div>
        <Button
          variant="ghost"
          className="font-semibold text-[18px] leading-[100%] tracking-[0.12em] uppercase text-[#FF6700] p-0 font-sans"
        >
          CLEAR
        </Button>
      </div>

      {/* Taste Section */}
      <div className="mb-12">
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[38px]">
          TASTE
        </h3>
        <div className="flex gap-0 mb-2.5 max-w-[284px]">
          <TabButton
            label="Good"
            isActive={activeTab.taste === "Good"}
            onClick={() => setActiveTab((prev) => ({ ...prev, taste: "Good" }))}
            section="taste"
          />
          <TabButton
            label="Great"
            isActive={activeTab.taste === "Great"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, taste: "Great" }))
            }
            section="taste"
          />
          <TabButton
            label="Excellent"
            isActive={activeTab.taste === "Excellent"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, taste: "Excellent" }))
            }
            section="taste"
          />
        </div>

        <div className="space-y-3">
          <CheckboxItem
            id="sweet"
            label="Sweet"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="sour"
            label="Sour"
            checked={checkedItems.sour}
            onChange={(checked) => handleCheckboxChange("sour", checked)}
          />
          <CheckboxItem
            id="bitter"
            label="Bitter"
            checked={checkedItems.bitter}
            onChange={(checked) => handleCheckboxChange("bitter", checked)}
          />
          <CheckboxItem
            id="tart"
            label="Tart"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="fruity"
            label="Fruity"
            checked={checkedItems.fruity}
            onChange={(checked) => handleCheckboxChange("fruity", checked)}
          />
          <CheckboxItem
            id="herbal"
            label="Herbal"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="spicy"
            label="Spicy"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="oaky"
            label="Oaky"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="aged"
            label="Aged"
            checked={false}
            onChange={() => {}}
          />
        </div>

        <button className="flex gap-2 items-center justify-center mt-3 text-[#717680] font-medium text-[16px] leading-[120%] tracking-[0em] text-center uppercase font-sans">
          <span className="text-base">
            <Image src={plusicon} alt="" />
          </span>{" "}
          SHOW MORE
        </button>
      </div>

      {/* Health Section */}
      <div className="mb-12">
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[38px]">
          HEALTH
        </h3>
        <div className="flex gap-0 mb-2.5 max-w-[284px]">
          <TabButton
            label="Good"
            isActive={activeTab.health === "Good"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, health: "Good" }))
            }
            section="health"
          />
          <TabButton
            label="Great"
            isActive={activeTab.health === "Great"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, health: "Great" }))
            }
            section="health"
          />
          <TabButton
            label="Excellent"
            isActive={activeTab.health === "Excellent"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, health: "Excellent" }))
            }
            section="health"
          />
        </div>
        <div className="space-y-1">
          <CheckboxItem
            id="no-gmo"
            label="No GMO"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="no-preservatives"
            label="No Preservatives"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="zero-sugar"
            label="ZERO Sugar"
            checked={checkedItems.zeroSugar}
            onChange={(checked) => handleCheckboxChange("zeroSugar", checked)}
          />
          <CheckboxItem
            id="low-sugar"
            label="Low Sugar < 10g"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="no-nuts"
            label="No NUTS"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="gluten-free"
            label="Gluten Free"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="alcohol-free"
            label="Alcohol Free"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="zero-alcohol"
            label="ZERO Alcohol"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="plant-based"
            label="Plant Based"
            checked={false}
            onChange={() => {}}
          />
        </div>
        <button className="flex gap-2 items-center justify-center mt-3 text-[#717680] font-medium text-[16px] leading-[120%] tracking-[0em] text-center uppercase font-sans">
          <span className="text-base">
            <Image src={plusicon} alt="" />
          </span>{" "}
          SHOW MORE
        </button>
      </div>

      {/* Social Section */}
      <div>
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[38px]">
          SOCIAL
        </h3>
        <div className="flex gap-0 mb-2.5 max-w-[284px]">
          <TabButton
            label="Good"
            isActive={activeTab.social === "Good"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, social: "Good" }))
            }
            section="social"
          />
          <TabButton
            label="Great"
            isActive={activeTab.social === "Great"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, social: "Great" }))
            }
            section="social"
          />
          <TabButton
            label="Excellent"
            isActive={activeTab.social === "Excellent"}
            onClick={() =>
              setActiveTab((prev) => ({ ...prev, social: "Excellent" }))
            }
            section="social"
          />
        </div>
        <div className="space-y-1">
          <CheckboxItem
            id="tried-5k"
            label="Tried by 5K+"
            checked={checkedItems.triedBy5k}
            onChange={(checked) => handleCheckboxChange("triedBy5k", checked)}
          />
          <CheckboxItem
            id="tried-25k"
            label="Tried by 25K+"
            checked={checkedItems.triedBy25k}
            onChange={(checked) => handleCheckboxChange("triedBy25k", checked)}
          />
          <CheckboxItem
            id="tried-50k"
            label="Tried by 50K+"
            checked={false}
            onChange={() => {}}
          />
          <CheckboxItem
            id="tried-100k"
            label="Tried by 100K+"
            checked={false}
            onChange={() => {}}
          />
        </div>
        <button className="flex gap-2 items-center justify-center mt-3 text-[#717680] font-medium text-[16px] leading-[120%] tracking-[0em] text-center uppercase font-sans">
          <span className="text-base">
            <Image src={plusicon} alt="" />
          </span>{" "}
          SHOW MORE
        </button>
      </div>
    </div>
  );
}
