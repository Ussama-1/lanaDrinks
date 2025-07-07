"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import manu from "@/public/menu.svg";
import Image from "next/image";
interface FilterSidebarProps {
  className?: string;
}

export function FilterSidebar({ className }: FilterSidebarProps) {
  const [checkedItems, setCheckedItems] = useState({
    thisWeek: false,
    thisMonth: true,
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
    trendingEvents: false,
    highlyRatedEvents: false,
    within5Miles: false,
    miles10: false,
    miles20: false,
    rock: false,
    pop: true,
    jazz: false,
    edm: false,
    hipHop: false,
    conferences: false,
    networking: false,
    startupPitches: false,
    wineTasting: false,
    brunch: false,
    streetFood: false,
    vegan: false,
    photography: false,
    painting: false,
    sculpture: false,
  });

  const handleCheckboxChange = (item: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [item]: checked }));
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
    <div className="flex items-center space-x-2 py-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-[linear-gradient(135deg,_#F49062_0%,_#FD371F_100%)] data-[state=checked]:border-0 border-gray-300 h-[20px] w-[20px] "
      />
      <label
        htmlFor={id}
        className="text-[18px] font-medium text-gray-900 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );

  return (
    <div className={`w-full max-w-sm bg-white pr-3 font-sans ${className}`}>
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

      {/* Date & Time Section */}
      <div className="mb-9">
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[7px]">
          DATE & TIME
        </h3>
        <div className="space-y-1">
          <CheckboxItem
            id="this-week"
            label="This Week"
            checked={checkedItems.thisWeek}
            onChange={(checked) => handleCheckboxChange("thisWeek", checked)}
          />
          <CheckboxItem
            id="this-month"
            label="This Month"
            checked={checkedItems.thisMonth}
            onChange={(checked) => handleCheckboxChange("thisMonth", checked)}
          />
        </div>

        <div className="mt-1">
          <div className="flex gap-2 items-center justify-center mb-1">
            <div className="text-sm font-medium text-[#99A0AE] ">Time</div>
            <div className="border border-[#E9EAEB] w-full"></div>
          </div>
          <div className="space-y-1">
            <CheckboxItem
              id="morning"
              label="Morning"
              checked={checkedItems.morning}
              onChange={(checked) => handleCheckboxChange("morning", checked)}
            />
            <CheckboxItem
              id="afternoon"
              label="Afternoon"
              checked={checkedItems.afternoon}
              onChange={(checked) => handleCheckboxChange("afternoon", checked)}
            />
            <CheckboxItem
              id="evening"
              label="Evening"
              checked={checkedItems.evening}
              onChange={(checked) => handleCheckboxChange("evening", checked)}
            />
            <CheckboxItem
              id="night"
              label="Night"
              checked={checkedItems.night}
              onChange={(checked) => handleCheckboxChange("night", checked)}
            />
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="mb-9">
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[7px]">
          SOCIAL PROOF
        </h3>
        <div className="space-y-1">
          <CheckboxItem
            id="trending-events"
            label="Trending Events"
            checked={checkedItems.trendingEvents}
            onChange={(checked) =>
              handleCheckboxChange("trendingEvents", checked)
            }
          />
          <CheckboxItem
            id="highly-rated-events"
            label="Highly Rated Events"
            checked={checkedItems.highlyRatedEvents}
            onChange={(checked) =>
              handleCheckboxChange("highlyRatedEvents", checked)
            }
          />
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-9">
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[16px]">
          LOCATION
        </h3>
        <div className="relative mb-2 ">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="City or Region"
            className="pl-10 border-gray-300 text-sm h-[40px] "
          />
        </div>
        <div className="space-y-0">
          <CheckboxItem
            id="within-5-miles"
            label="Within 5 miles"
            checked={checkedItems.within5Miles}
            onChange={(checked) =>
              handleCheckboxChange("within5Miles", checked)
            }
          />
          <CheckboxItem
            id="10-miles"
            label="10 miles"
            checked={checkedItems.miles10}
            onChange={(checked) => handleCheckboxChange("miles10", checked)}
          />
          <CheckboxItem
            id="20-miles"
            label="20 miles"
            checked={checkedItems.miles20}
            onChange={(checked) => handleCheckboxChange("miles20", checked)}
          />
        </div>
      </div>

      {/* Event Type & Theme Section */}
      <div>
        <h3 className="font-medium text-[20px] leading-[120%] tracking-[0em]  uppercase text-[#667085] mb-[16px]">
          EVENT TYPE & THEME
        </h3>

        {/* Music Genre */}
        <div className="mb-6">
          <div className="flex gap-2 items-center justify-center mb-1">
            <div className="text-sm font-medium text-[#99A0AE] text-nowrap">
              Music Genre
            </div>
            <div className="border border-[#E9EAEB] w-full"></div>
          </div>
          <div className="space-y-1">
            <CheckboxItem
              id="rock"
              label="Rock"
              checked={checkedItems.rock}
              onChange={(checked) => handleCheckboxChange("rock", checked)}
            />
            <CheckboxItem
              id="pop"
              label="Pop"
              checked={checkedItems.pop}
              onChange={(checked) => handleCheckboxChange("pop", checked)}
            />
            <CheckboxItem
              id="jazz"
              label="Jazz"
              checked={checkedItems.jazz}
              onChange={(checked) => handleCheckboxChange("jazz", checked)}
            />
            <CheckboxItem
              id="edm"
              label="EDM"
              checked={checkedItems.edm}
              onChange={(checked) => handleCheckboxChange("edm", checked)}
            />
            <CheckboxItem
              id="hip-hop"
              label="Hip-Hop"
              checked={checkedItems.hipHop}
              onChange={(checked) => handleCheckboxChange("hipHop", checked)}
            />
          </div>
        </div>

        {/* Business Type */}
        <div className="mb-6">
          <div className="flex gap-2 items-center justify-center mb-1">
            <div className="text-sm font-medium text-[#99A0AE] text-nowrap">
              Business Type
            </div>
            <div className="border border-[#E9EAEB] w-full"></div>
          </div>

          <div className="space-y-1">
            <CheckboxItem
              id="conferences"
              label="Conferences"
              checked={checkedItems.conferences}
              onChange={(checked) =>
                handleCheckboxChange("conferences", checked)
              }
            />
            <CheckboxItem
              id="networking"
              label="Networking"
              checked={checkedItems.networking}
              onChange={(checked) =>
                handleCheckboxChange("networking", checked)
              }
            />
            <CheckboxItem
              id="startup-pitches"
              label="Startup Pitches"
              checked={checkedItems.startupPitches}
              onChange={(checked) =>
                handleCheckboxChange("startupPitches", checked)
              }
            />
          </div>
        </div>

        {/* Food Type */}
        <div className="mb-6">
          <div className="flex gap-2 items-center justify-center mb-1">
            <div className="text-sm font-medium text-[#99A0AE] text-nowrap">
              Food Type
            </div>
            <div className="border border-[#E9EAEB] w-full"></div>
          </div>

          <div className="space-y-1">
            <CheckboxItem
              id="wine-tasting"
              label="Wine Tasting"
              checked={checkedItems.wineTasting}
              onChange={(checked) =>
                handleCheckboxChange("wineTasting", checked)
              }
            />
            <CheckboxItem
              id="brunch"
              label="Brunch"
              checked={checkedItems.brunch}
              onChange={(checked) => handleCheckboxChange("brunch", checked)}
            />
            <CheckboxItem
              id="street-food"
              label="Street Food"
              checked={checkedItems.streetFood}
              onChange={(checked) =>
                handleCheckboxChange("streetFood", checked)
              }
            />
            <CheckboxItem
              id="vegan"
              label="Vegan"
              checked={checkedItems.vegan}
              onChange={(checked) => handleCheckboxChange("vegan", checked)}
            />
          </div>
        </div>

        {/* Art Forms */}
        <div>
          <div className="flex gap-2 items-center justify-center mb-1">
            <div className="text-sm font-medium text-[#99A0AE] text-nowrap">
              Art Forms
            </div>
            <div className="border border-[#E9EAEB] w-full"></div>
          </div>

          <div className="space-y-1">
            <CheckboxItem
              id="photography"
              label="Photography"
              checked={checkedItems.photography}
              onChange={(checked) =>
                handleCheckboxChange("photography", checked)
              }
            />
            <CheckboxItem
              id="painting"
              label="Painting"
              checked={checkedItems.painting}
              onChange={(checked) => handleCheckboxChange("painting", checked)}
            />
            <CheckboxItem
              id="sculpture"
              label="Sculpture"
              checked={checkedItems.sculpture}
              onChange={(checked) => handleCheckboxChange("sculpture", checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
