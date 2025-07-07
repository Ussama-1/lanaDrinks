"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import icon from "@/public/logo1.svg";
import bag from "@/public/shopicon.svg";
import Image from "next/image";
import { Handshake, X } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  overlay?: (value: boolean) => void;
};

export function Header({ overlay }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="font-sans bg-white rounded-full mx-auto max-w-[1312px] sm:h-[85px] flex items-center justify-center">
        <div className="w-full mx-auto px-4 sm:px-7 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"} className=" w-[62.24921417236328px] h-[58px] overflow-hidden">
              <Image src={icon} className="object-cover" alt="" />
            </Link>

            {/* Desktop Navigation - Hidden below lg */}
            <div className="hidden lg:flex items-center space-x-[31px]">
              <div className="flex items-center space-x-[40px] font-sans -tracking-[0.039em]">
                <Link
                  href="explore-drinks"
                  className="font-medium text-[20px] leading-[105%] hover:cursor-pointer capitalize text-[#181D27]"
                >
                  Explore Drinks
                </Link>
                <Link
                  href="experiences"
                  className="font-medium text-[20px] leading-[105%] hover:cursor-pointer capitalize text-[#181D27]"
                >
                  Experiences
                </Link>
                <div className="flex items-center space-x-2">
                  <Link
                    href="#"
                    onClick={() => overlay?.(true)}
                    className="font-medium text-[20px] leading-[105%] hover:cursor-pointer capitalize text-[#181D27]"
                  >
                    Bring a Friend
                  </Link>
                  <Badge className=" rounded-full border border-[#ABEFC6] px-[12px] py-[4px] bg-[#1FC16B] text-sm text-white">
                    $5
                  </Badge>
                </div>
              </div>
              <button
                className="relative flex items-center justify-center group overflow-hidden 
                 h-[51px] font-sans rounded-[12px] px-[18px] py-[24px] 
                 bg-gradient-to-br from-[#F49062] to-[#FD371F] 
                 text-[16px] tracking-[0.12em] font-[600] 
                 transition-all duration-300 ease-in-out 
                 hover:pl-[48px] gap-2.5 text-white hover:cursor-pointer"
              >
                <Handshake
                  className="w-6 h-6 absolute left-[16px] opacity-0 
                   group-hover:opacity-100 
                   transition-all duration-300 ease-in-out 
                   transform -translate-x-3 group-hover:translate-x-0"
                />
                MEET LANA
              </button>

              <Link href={'/bag'} className="flex items-center space-x-2.5 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
                <Image src={bag} alt="" />
                <span className="font-[600] tracking-[0.12em] text-[16px] leading-[105%] capitalize text-[#181D27]">
                  BAG (0)
                </span>
              </Link>
            </div>

            {/* Mobile Navigation - Visible below lg */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleMobileMenu}
                className="relative overflow-hidden group flex items-center space-x-3 bg-gray-100 rounded-full px-6 py-3 hover:cursor-pointer"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col space-y-1 z-20">
                  <div className="w-4 h-0.5 bg-black group-hover:bg-white rounded-full transition-all duration-1000"></div>
                  <div className="w-4 h-0.5 bg-black group-hover:bg-white rounded-full transition-all duration-1000"></div>
                </div>
                <span className="font-[600] text-[16px] text-black group-hover:text-white tracking-wide z-20  transition-all duration-1000">
                  MENU
                </span>

                <div className="h-[97px] w-[97px] rounded-full absolute -bottom-28 scale-0 group-hover:scale-150 group-hover:-bottom-11 ease-in transition-all opacity-35 group-hover:opacity-100 origin-bottom duration-500 bg-black z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40  bg-black opacity-50"
            onClick={toggleMobileMenu}
          />

          {/* Sidebar */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-[#181D27]" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
                  <Image src={bag} alt="" />
                  <span className="font-[600] tracking-[0.12em] text-[16px] leading-[105%] capitalize text-[#181D27]">
                    BAG (0)
                  </span>
                </div>
                <Link
                  href="/explore-drinks"
                  className="block font-medium text-[20px] leading-[105%] hover:cursor-pointer capitalize text-[#181D27] hover:text-[#F49062] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Explore Drinks
                </Link>

                <Link
                  href="/experiences"
                  className="block font-medium text-[20px] leading-[105%] hover:cursor-pointer capitalize text-[#181D27] hover:text-[#F49062] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Experiences
                </Link>

                <div className="flex items-center space-x-2">
                  <Link
                    href="#"
                    className="font-medium text-[20px] leading-[105%] hover:cursor-pointer capitalize text-[#181D27] hover:text-[#F49062] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Bring a Friend
                  </Link>
                  <Badge className="w-[48px] h-[28px] rounded-full border border-[#ABEFC6] px-[12px] py-[4px] bg-[#ECFDF3] text-sm text-[#067647]">
                    $10
                  </Badge>
                </div>

                {/* Meet Lana Button */}
                <button
                  className="w-full relative flex items-center justify-center group overflow-hidden 
                   h-[51px] font-sans rounded-[12px] px-[18px] py-[24px] 
                   bg-gradient-to-br from-[#F49062] to-[#FD371F] 
                   text-[16px] tracking-[0.12em] font-[600] 
                   transition-all duration-300 ease-in-out 
                   hover:pl-[48px] gap-2.5 text-white hover:cursor-pointer mt-8"
                  onClick={toggleMobileMenu}
                >
                  <Handshake
                    className="w-6 h-6 absolute left-[16px] opacity-0 
                     group-hover:opacity-100 
                     transition-all duration-300 ease-in-out 
                     transform -translate-x-3 group-hover:translate-x-0"
                  />
                  MEET LANA
                </button>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  );
}
