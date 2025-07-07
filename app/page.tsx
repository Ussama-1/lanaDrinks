"use client"
import { HeroSection } from "@/components/hero-section";
import { TrendingSection } from "@/components/trending-section";
import Upcoming from "@/components/Upcoming";
import Stories from "@/components/Stories";
import LanaFooter from "@/components/Footer";
import { useState } from "react";
import logo from '@/public/logo1.svg'
import Image from "next/image";
export default function HomePage() {
  const [popup, setpopup] = useState(false)

  const handleEmailLogin = () => {
    console.log('Email login clicked');
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };
  return (
    <div className={`${popup ? "overflow-hidden  h-screen" : " min-h-screen"}`}>
      {popup &&

        <div onClick={() => (setpopup(false))} className="absolute flex items-center justify-center top-0 w-full z-50 max-w-[1440px] mx-auto h-full inset-0 backdrop-blur-sm bg-black/70 ">
          <div className="max-w-[548px] py-6 mx-2 sm:mx-0 sm:py-12 px-4 sm:px-8 rounded-[20px] w-full space-y-4 sm:space-y-8 bg-white">
            <div className="flex flex-col items-center justify-center gap-y-4">

              <Image src={logo} alt="" className="w-12 sm:w-20 " />

              <div className="flex flex-col sm:gap-y-3">

                <h1 className="text-[#181D27] text-center font-sans font-semibold text-2xl sm:text-[30px] leading-tight ">
                  Welcome to Lana
                </h1>
                <p className="text-[#535862] text-center text-sm sm:text-[16px] font-normal leading-[24px] ">
                  Start your 30-day free trial.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleEmailLogin}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm  bg-gradient-to-br from-[#F49062] to-[#FD371F]  text-white text-center font-semibold text-[16px] tracking-[1.92px] uppercase"
              >
                LOGIN VIA EMAIL
              </button>

              <button
                onClick={handleGoogleSignup}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-[#414651] text-[16px] font-semibold leading-[24px]"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?{' '}
                <button
                  onClick={handleSignUp}
                  className="font-medium text-orange-500 hover:text-orange-600 focus:outline-none focus:underline transition-colors duration-200"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      }
      <div className="h-full bg-white  ">
        {/* <Header /> */}
        <main>
          <HeroSection overlay={setpopup} />
          <TrendingSection />
          <Upcoming />
          <Stories />
          <LanaFooter />
        </main>
      </div>
    </div>
  );
}
