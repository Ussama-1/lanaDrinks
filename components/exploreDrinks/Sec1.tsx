"use client";
import Image from "next/image";
import { Header } from "../header";
import { moodOptions } from "../Data";

export function Sec1() {
  return (
    <>
      <section className="font-sans  h-auto   w-full pt-4 sm:pt-7 px-4">
        <Header />
        <div className="container mx-auto px-2 sm:px-6 pb-14 pt-[38px]">
          {/* Main Headline */}
          <div className="text-center ">
            <h1 className=" text-center font-[BrittiSans]   text-2xl sm:text-4xl lg:text-[56px]  max-w-[400px] sm:max-w-[580px] lg:max-w-[920px]  mx-auto leading-[105%] tracking-[-0.04em] font-medium text-black px-4 py-6 ">
              NA Brews{" "}
              <span className="font-serif tracking-[-0.05em] font-normal">
                {" "}
                Made for Fun
              </span>{" "}
              Crews
            </h1>
          </div>

          <div className=" overflow-auto scrollbar-none pt-3 sm:pt-5  scrollbar-hide">
            <div className="grid grid-cols-6 gap-1.5 2xl:gap-5 w-[1312px] 2xl:w-[1312px] mx-auto  ">
              {moodOptions.map((option) => (
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
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          . {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </>
  );
}
