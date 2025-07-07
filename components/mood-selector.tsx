"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import graylogo from "@/public/graylogo.svg";

import { useState } from "react";
import { experienceOptions, moodOptions } from "./Data";

export function MoodSelector() {
  const [isExperiences, setIsExperiences] = useState(false);

  return (
    <Card className="w-full  xl:max-w-[1300px] overflow-hidden  font-sans  relative  px-0 pt-[25px] pb-6  shadow-[0px_0px_0px_4px_rgba(233,234,235,0.3)] bg-white mx-auto rounded-3xl">
      <CardContent className="w-full">
        <div className="flex items-start gap-4 ">
          <div className="flex items-center mb-14 lg:mb-7 max-w-[630px] w-full">
            <div className="w-7 sm:w-10 h-7 sm:h-10 mr-3 flex-shrink-0">
              <Image src={graylogo} alt="" />
            </div>
            <h2 className="text-[12px] sm:text-base md:text-xl font-medium text-[#717680] tracking-tight">
              What are you in the mood for?
            </h2>
          </div>

          <div className=" top-16  absolute  left-1/2 transform -translate-x-1/2  lg:top-6  ">
            <div className="w-[200px]  lg:w-[234px] h-[40px] lg:h-[44px] bg-[#FAFAFA] border border-[#E9EAEB] rounded-full p-1 flex gap-2">
              <button
                type="button"
                onClick={() => setIsExperiences(false)}
                className={` h-full px-3  rounded-full text-xs lg:text-[15px] font-medium  transition-all duration-300 hover:cursor-pointer ${
                  isExperiences
                    ? "bg-transparent text-[#717680] w-[90px]"
                    : "bg-[#FF6700] text-white shadow w-[99px]"
                }`}
              >
                Drinks
              </button>

              <button
                type="button"
                onClick={() => setIsExperiences(true)}
                className={`  h-full px-3  rounded-full  text-xs lg:text-[15px] font-medium transition-all duration-300 hover:cursor-pointer ${
                  isExperiences
                    ? "bg-[#FF6700] text-white shadow w-[136px]"
                    : "bg-transparent text-[#717680] w-[125px]"
                }`}
              >
                Experiences
              </button>
            </div>
          </div>
        </div>

        <div className=" overflow-auto scrollbar-none pt-3 sm:pt-0 scrollbar-hide ">
          <div className="grid grid-cols-6 gap-2 w-[1300px] xl:w-full ">
            {!isExperiences
              ? moodOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`
                  ${
                    option.isSelected
                      ? `${option.bgColor} border ${option.borderColor}`
                      : `${option.bgColornonSelected}`
                  }
                  w-[202px] h-[123px] rounded-[16px]   flex flex-col items-center justify-center group
                `}
                  >
                    <div
                      className={`gap-1.5 grid 
                  ${
                    option.title === "Beers"
                      ? "grid-cols-[35%_auto]"
                      : option.title === "Wines"
                      ? "grid-cols-[42%_auto] !gap-0"
                      : option.title === "Ready To Drink"
                      ? "grid-cols-[42%_auto]  !gap-0"
                      : option.title === "Spirits"
                      ? "grid-cols-[42%_auto] !gap-0"
                      : option.title === "Mixers"
                      ? "grid-cols-[42%_auto] !gap-0"
                      : option.title === "Functionals"
                      ? "grid-cols-[38%_auto] !gap-0"
                      : ""
                  }
                  items-center h-full w-full`}
                    >
                      <div className="w-full overflow-hidden h-full relative">
                        <div
                          className={`absolute -bottom-[5px]  duration-500 transition-all  
                    ${
                      option.title === "Beers"
                        ? "h-24   w-[68px] group-hover:bottom-[11px]"
                        : option.title === "Wines"
                        ? "h-24 w-[68px] group-hover:bottom-[11px]"
                        : option.title === "Ready To Drink"
                        ? "h-[105px] w-[52px] ml-1 group-hover:scale-110"
                        : option.title === "Spirits"
                        ? "h-[105px] w-[62px] group-hover:scale-110 group-hover:-bottom-[5px]"
                        : option.title === "Mixers"
                        ? "h-[105px] w-[89px]  group-hover:bottom-[4px]"
                        : option.title === "Functionals"
                        ? "h-[105px] w-[59px] ml-0.5 group-hover:scale-110 group-hover:bottom-[0px]"
                        : ""
                    }
                       left-1/2 transform -translate-x-1/2`}
                        >
                          <Image
                            src={option.image}
                            alt=""
                            className=" object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="font-medium text-black text-start text-[22px] leading-tight">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                ))
              : experienceOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`
                  ${
                    option.isSelected
                      ? `${option.bgColor} border ${option.borderColor}`
                      : `${option.bgColornonSelected}`
                  }
                  w-[202px] h-[123px] rounded-[16px]   flex flex-col items-center justify-center group
                `}
                  >
                    <div
                      className={`gap-2.5 grid  grid-cols-[35%_auto] items-center h-full w-full `}
                    >
                      <div className="w-full overflow-hidden h-full relative">
                        <div
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[79px]  flex items-center justify-center transition-all duration-300 group-hover:-rotate-12`}
                        >
                          <Image
                            src={option.image}
                            alt=""
                            className=" object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="font-medium text-black text-start text-[20px] leading-tight">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </CardContent>
       <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Card>
  );
}
