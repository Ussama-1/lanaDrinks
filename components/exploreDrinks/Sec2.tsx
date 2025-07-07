"use client";
import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedTextSequence = () => {
  const textSequence = [
    "Or",
    "just tell me",
    "what you would",
    "like to drink?",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [showSingleText, setShowSingleText] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        if (currentIndex < textSequence.length) {
          setDisplayedText((prev) => [...prev, textSequence[currentIndex]]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setDisplayedText([]);
            setCurrentIndex(0);
          }, 500);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isMobile]);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        if (currentIndex < textSequence.length) {
          setShowSingleText(true);
          setTimeout(() => {
            setShowSingleText(false);
            setTimeout(() => {
              setCurrentIndex((prev) => prev + 1);
            }, 200);
          }, 800);
        } else {
          setTimeout(() => {
            setCurrentIndex(0);
          }, 500);
        }
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isMobile]);

  if (isMobile) {
    return (
      <h1 className="font-sans font-medium text-xs w-fit text-[#181D27] leading-relaxed min-h-[20px]">
        <AnimatePresence mode="wait">
          {showSingleText && currentIndex < textSequence.length && (
            <motion.span
              key={`${textSequence[currentIndex]}-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {textSequence[currentIndex]}
            </motion.span>
          )}
        </AnimatePresence>
        <span className="select-none text-transparent">.</span>
      </h1>
    );
  }

  return (
    <h1 className="font-sans font-medium text-sm w-fit lg:text-[20px] text-[#717680]  tracking-tight">
      {displayedText.map((text, index) => (
        <motion.span
          key={`${text}-${index}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="inline-block mr-1"
        >
          {text}
        </motion.span>
      ))}
      <span className="select-none text-transparent">.</span>
    </h1>
  );
};
function Sec2() {
  const [search, setsearch] = useState("");
  return (
    <section className=" font-sans max-w-[1312px] mx-auto">
      <div className="border-y border-[#e9eaeb] py-3 lg:py-6 flex gap-3 ">
        <div
        onClick={()=>setsearch(" ")}
        className="w-full relative  h-[40px] lg:h-[64px]  font-semibold text-[16px]  bg-gray-100 rounded-full overflow-hidden group ">
          <Image
            src={logo}
            alt=""
            className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] absolute top-1/2 left-3 lg:left-6 transform  -translate-y-1/2"
          />

          <input
            type="text"
            className="border-none rounded-full outline-none px-14 lg:px-20 text-[#717680] text-sm lg:text-[20px] w-full h-full bg-transparent "
            onChange={(e) => setsearch(e.target.value)}
            autoFocus
          />

          {search === "" && (
            <div className="w-full absolute top-1/2 left-14 lg:left-20 transform  -translate-y-1/2 select-none ">
              <AnimatedTextSequence />
            </div>
          )}
        </div>

        <button
          className="relative sm:min-w-[186px] h-[40px] lg:h-[64px]  font-semibold text-xs sm:text-sm lg:text-[16px] group   transition-all duration-500  tracking-[0.12em] py-4 text-center uppercase overflow-hidden group flex items-center justify-center space-x-3 bg-gray-100 rounded-full px-8 sm:px-5 hover:cursor-pointer"
          aria-label="search"
        >
          <span className="group-hover:text-white text-black transition-all duration-500 relative z-40 m-0">
            search
          </span>
          <div className="h-[97px] w-[97px] rounded-full absolute -bottom-28 scale-0 group-hover:scale-[250%] lg:group-hover:scale-200 group-hover:-bottom-11 ease-in transition-all opacity-35 group-hover:opacity-100 origin-bottom duration-500 bg-black z-10"></div>
        </button>
      </div>
    </section>
  );
}

export default Sec2;
