import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import can1 from '@/public/can1.png'
import trash from "@/public/trash-01.svg";
import shield from "@/public/shield-dollar.svg";
import { BoughtTogather } from "./BoughtTogather"

export default function Bag() {
    return (
        <div className="py-16 font-sans">
            <div className="">
                <h1 className="text-black font-semibold text-2xl sm:text-[42px] leading-none tracking-[-0.01em] capitalize mb-1.5 ">Shopping Bag (2)</h1>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-7">
                    {/* Cart Items */}
                    <div className="xl:col-span-2 ">
                        {/* First Item - Raspberry Espresso */}
                        {[1, 2].map((index) => (

                            <div key={index} className="bg-white  py-4 md:py-12  border-b flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex flex-col sm:flex-row md:items-center gap-4 md:gap-8">
                                    <div className=" w-[100px] md:w-[200px] h-[100px] md:h-[200px] overflow-hidden bg-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center">
                                        <Image src={can1} alt="" className="object-contain w-16 md:w-32" />
                                    </div>

                                    <div className="flex-1 space-y-3 md:space-y-6">

                                        <h3 className="text-black font-semibold text-xl md:text-[24px] leading-tight md:leading-[120%] tracking-[-0.015em] capitalize sm:max-w-[70%]">
                                            Raspberry Espresso Extra Dark Non-Alcoholic Drink
                                        </h3>


                                        <div className="space-y-3 md:space-y-6">

                                            <div className="flex gap-8 items-center">
                                                <div className="flex items-center gap-2  rounded-lg bg-white">
                                                    <button className="  bg-[#F5F5F5] w-[28px] h-[28px] flex items-center justify-center transition-colors rounded-full">
                                                        <Minus className="w-4 h-4 text-black" />
                                                    </button>
                                                    <span className=" font-medium font-sans text-lg sm:text-[20px] text-black px-0.5 text-center">
                                                        02
                                                    </span>
                                                    <button className=" bg-[#F5F5F5] w-[28px] h-[28px] flex items-center justify-center transition-colors rounded-full">
                                                        <Plus className="w-4 h-4 text-black" />
                                                    </button>
                                                </div>
                                                <span className="text-[#181D27] font-semibold text-[24px] leading-[120%] capitalize">$4.99</span>

                                            </div>
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 text-lg font-semibold">
                                                <span className="text-[#717680] text-xs sm:text-[16px] font-normal  tracking-[-0.04em]">
                                                    750 ML
                                                </span>
                                                <span className="text-[#414651] text-[12px] hidden sm:block">.</span>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex -space-x-1">
                                                        {[...Array(4)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className="w-5 h-5 bg-gray-400 rounded-full border-2 border-white"
                                                            ></div>
                                                        ))}
                                                    </div>
                                                    <span className="text-[#181D27] text-[16px] font-semibold">
                                                        309
                                                    </span>
                                                    <span className="text-[#717680]  text-[16px] font-normal font-sans tracking-tight">
                                                        (Influencer Tried)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex gap-2 mt-3 sm:mt-0 text-[#717680] text-center font-semibold text-[16px] tracking-[1.92px] uppercase mr-7  font-sans">
                                    <Image src={trash} alt="" className="w-[24px] " />
                                    Remove
                                </button>
                            </div>
                        ))}


                    </div>

                    {/* Summary Panel */}
                    <div className="xl:col-span-1 mt-8 border-[#E9EAEB]">
                        <div className="bg-white rounded-2xl p-5 border border-[#E9EAEB]  sticky top-4">
                            <div className=" border-b border-[#E9EAEB] mb-[30px] pb-[17px]">

                                <h2 className="text-black font-sans font-semibold text-[24px]  tracking-tight capitalize leading-tight  ">Summary</h2>
                            </div>

                            <div className="">
                                <div className="flex justify-between items-center mb-3.5">
                                    <span className="text-[#717680] font-medium text-[18px]  tracking-tight capitalize font-sans">Subtotal</span>
                                    <span className="text-[#181D27] text-right font-semibold text-[18px]  tracking-tight capitalize">$9.98</span>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[#717680] font-medium text-[18px]  tracking-tight capitalize font-sans">Estimated Shipping</span>
                                    <span className="text-[#181D27]  font-semibold text-[18px]  tracking-tight capitalize">FREE</span>
                                </div>

                                <div className="flex justify-start items-center gap-[10px] p-[6px_16px] bg-[#FFE6EE] rounded-[8px] mb-4">
                                    <p className="text-[#181D27] font-medium text-[14px]  tracking-tight">You saved $5.99! via free shipping</p>
                                </div>

                                <div className="flex justify-between items-center mb-7">
                                    <span className="text-[#717680] font-medium text-[18px]  tracking-tight capitalize font-sans">Estimated Tax</span>
                                    <span className="text-[#181D27] text-right font-semibold text-[18px]  tracking-tight capitalize">2.5%</span>
                                </div>


                                <div className="flex justify-between items-center text-2xl font-bold border-y border-[#E9EAEB] py-[18px]">
                                    <span className="text-[#181D27]  font-semibold text-[20px]  tracking-tight capitalize">Total</span>
                                    <span className="text-[#181D27]  font-semibold text-[20px]  tracking-tight capitalize">$12.87</span>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-start items-center gap-[10px]  rounded-[8px] border border-dashed border-[#FF9954] bg-[#FFF0E6] p-[12px_16px]">
                                <p className="max-w-[90%]">
                                    You Qualify For Free Shipping As A Member!{" "}
                                    <a href="#" className="text-[#B54900]  font-semibold ">
                                        Join Us
                                    </a>{" "}
                                    Or{" "}
                                    <a href="#" className="text-[#B54900] font-semibold ">
                                        Sign-In
                                    </a>
                                </p>
                            </div>

                            <div className="mt-6 mb-8 space-y-4">
                                <h3 className="text-[#181D27] font-medium text-[16px] leading-[120%]  capitalize tracking-tight mb-4">Apply For Discount</h3>
                                <Input placeholder="Add Promo Code" className="flex h-[56px] items-center self-stretch rounded-[12px] border text-[14px] border-[#E9EAEB] bg-white p-3" />
                            </div>

                            <Button className=" flex h-[44px] justify-center items-center gap-[6.462px] self-stretch  bg-gradient-to-br from-[#F49062] to-[#FD371F] w-full rounded-[12px] font-sans]">
                                <Image src={shield} alt="" className="w-[20px] h-[20px]" />
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <BoughtTogather />
        </div>
    )
}
