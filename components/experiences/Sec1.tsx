"use client";
import Image from "next/image";
import { Header } from "../header";
import { experienceOptions } from "../Data";

export function Sec1() {
  return (
    <>
      <section className="font-sans  h-auto   w-full pt-4 sm:pt-7 ">
        <Header />
        <div className=" pb-6 pt-[38px]">
          {/* Main Headline */}
          <div className="text-center ">
            <h1 className=" text-center font-[BrittiSans]   text-2xl sm:text-4xl lg:text-[56px]  max-w-[400px] sm:max-w-[580px] lg:max-w-[920px]  mx-auto leading-[105%] tracking-[-0.04em] font-medium text-black px-4 py-6 ">
              Epic Events{" "}
              <span className="font-serif tracking-[-0.05em] font-normal">
                {" "}
                Made for Fun
              </span>{" "}
              Crews
            </h1>
          </div>

          <div className=" overflow-auto scrollbar-none pt-3 sm:pt-5  scrollbar-hide">
            <div className="grid grid-cols-6 gap-1.5  w-[1312px] mx-auto  ">
              {experienceOptions.map((option) => (
                <div
                  key={option.id}
                  className={`
                                ${
                                  option.isSelected
                                    ? `${option.bgColor} border ${option.borderColor}`
                                    : `${option.bgColornonSelected}`
                                }
                                w-[212px] pr-3 h-[123px] rounded-[16px]   flex flex-col items-center justify-center group
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
