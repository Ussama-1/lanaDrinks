"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedTextSequence = () => {
  const textSequence = [
    "Hey,",
    "I'm LANA",
    "Let's get you into",
    "some good",
    "drinks",
    "(and even better company)",
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
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        if (currentIndex < textSequence.length) {
          setDisplayedText(prev => [...prev, textSequence[currentIndex]]);
          setCurrentIndex(prev => prev + 1);
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
              setCurrentIndex(prev => prev + 1);
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
    <h1 className="font-sans font-medium text-sm w-fit lg:text-[19px] text-[#181D27] leading-relaxed">
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

export default AnimatedTextSequence;