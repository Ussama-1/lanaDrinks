"use client"
import { useState } from "react"
import {
    ChevronDown,
    ChevronRight,
    ChevronUp,

} from "lucide-react"
import logo from '@/public/logo1.svg'
import lana from '@/public/Lana.svg'
import dropdown from '@/public/expand-up-down-line.svg'
import chart from '@/public/line-chart-line.svg'
import notification from '@/public/notification-3-line.svg'
import performace from '@/public/scan-line.svg'
import orders from '@/public/box-3-line.svg'
import allevents from '@/public/stack-line.svg'
import shipping from '@/public/truck-line.svg'
import catalog from '@/public/select-box-multiple-blank-line.svg'
import compaign from '@/public/trophy-line.svg'
import finance from '@/public/stack-linegray.svg'
import costumer from '@/public/users-02.svg'
import Image from "next/image"
export default function Sidebar() {
    const [openSections, setOpenSections] = useState({
        lanaLounge: false,
        main: true,
        product: true,
        myStore: true,
        analytics: false,
        productCategory: true,
    })

    interface OpenSections {
        lanaLounge: boolean;
        main: boolean;
        product: boolean;
        myStore: boolean;
        analytics: boolean;
        productCategory: boolean;
    }

    type Section = keyof OpenSections;

    const toggleSection = (section: Section) => {
        setOpenSections((prev: OpenSections) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    return (
        <div className="min-w-[272px] h-screen bg-white border-r border-[#E1E4EA] flex flex-col font-sans">
            {/* Header */}
            <div className="px-3 py-3.5  border-b border-[#E1E4EA]">
                <div className="flex items-center gap-3.5">
                    <div className="w-[44px] h-[44px]  rounded-full flex items-center justify-center overflow-hidden">
                        <Image src={logo} alt="" className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image src={lana} alt="" className="w-12" />
                        <p className="text-[#525866] text-[12px] font-sans font-normal leading-none">Drink Demurely</p>
                    </div>
                </div>
            </div>

            {/* Lana Lounge Section */}
            <div className="px-5 py-7">
                <button
                    onClick={() => toggleSection("lanaLounge")}
                    className="flex items-center justify-between w-full "
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#F49062] to-[#FD371F] rounded-lg"></div>
                        <div className="text-left space-y-1">
                            <div className="text-[#0E121B] text-[14px] font-medium leading-none tracking-tight">Lana Lounge</div>
                            <div className="text-[#525866] text-[12px] font-sans font-normal leading-tight">230 Events</div>
                        </div>
                    </div>
                    <button className="border border-[#E1E4EA] hover:bg-[#e1e4ea69] hover:border-[#e1e4ea69] hover:cursor-pointer rounded-sm p-0.5">
                        <Image src={dropdown} alt="" className="w-[20px] h-[20px]" />
                    </button>
                </button>
            </div>

            {/* Navigation Sections */}
            <div className="flex-1 px-5 overflow-y-auto scrollbar-hide">
                {/* MAIN Section */}
                <div className="mb-[18px] border-b border-[#E1E4EA] pb-2.5 px-1">
                    <button
                        onClick={() => toggleSection("main")}
                        className="flex items-center justify-between w-full py-1 mb-4 "
                    >
                        <h3 className="text-[#99A0AE] text-[12px] font-medium leading-none tracking-[0.48px] uppercase">MAIN</h3>
                        {/* {openSections.main ? (
                            <ChevronDown className="w-4 h-4 text-[#525866]" />
                        ) : (
                            <ChevronRight className="w-4 h-4 text-[#525866]" />
                        )} */}
                    </button>
                    {openSections.main && (
                        <nav className="space-y-3">
                            <button
                                onClick={() => toggleSection("analytics")}
                                className="flex items-center justify-between w-full px-2 py-1 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors group"
                            >
                                <div className="flex items-center gap-2">
                                    <Image src={chart} alt="" className="w-[20px]" />
                                    <span className="font-medium text-[#525866] text-sm">Analytics</span>
                                </div>
                                {openSections.analytics ? (
                                    <ChevronDown className="w-4 h-4 text-[#525866]" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-[#525866]" />
                                )}
                            </button>

                            <button className="flex items-center gap-2 w-full px-2 py-1 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={notification} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Notifications</span>
                            </button>

                            <button className="flex items-center gap-2 w-full px-2 py-1 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={performace} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Performance</span>
                            </button>

                            <button className="flex items-center gap-2 w-full px-2 py-1 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={orders} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Orders</span>
                            </button>
                        </nav>
                    )}
                </div>

                {/* PRODUCT Section */}
                <div className="mb-[18px] border-b border-[#E1E4EA] pb-1 ">
                    <button
                        onClick={() => toggleSection("product")}
                        className="flex items-center justify-between w-full py-1 mb-1 px-1"
                    >
                        <h3 className="text-[#99A0AE] text-[12px] font-medium leading-none tracking-[0.48px] uppercase">product</h3>
                        {openSections.product ? (
                            <ChevronUp className="w-4 h-4 text-[#525866]" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-[#525866]" />
                        )}
                    </button>
                    {openSections.product && (
                        <nav className="space-y-1 ">
                            <button className="relative flex items-center gap-2 w-full px-3 py-2 bg-[#F5F7FA] text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <div className="absolute h-[20px] w-[4px] bg-[#FF6700] rounded-r-[4px] -left-5"></div>
                                <Image src={allevents} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">All Events</span>
                            </button>
                            <button className="flex items-center gap-2 w-full px-3 py-2 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={shipping} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Shipping</span>
                            </button>
                            <button className="flex items-center gap-2 w-full px-3 py-2 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={compaign} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Campaign</span>
                            </button>
                            <button className="flex items-center gap-2 w-full px-3 py-2 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={catalog} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Catalog</span>
                            </button>



                        </nav>
                    )}
                </div>

                {/* MY STORE Section */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection("myStore")}
                        className="flex items-center justify-between w-full py-1  px-1"
                    >
                        <h3 className="text-[#99A0AE] text-[12px] font-medium leading-none tracking-[0.48px] uppercase">my store</h3>
                        {openSections.product ? (
                            <ChevronUp className="w-4 h-4 text-[#525866]" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-[#525866]" />
                        )}
                    </button>
                    {openSections.myStore && (
                        <nav className="space-y-3">
                            <div>
                                <button
                                    // onClick={() => toggleSection("productCategory")}
                                    className="flex items-center justify-between w-full px-3 py-3 text-[#525866] group"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image src={allevents} alt="" className="w-[20px]" />

                                        <span className="font-medium text-sm">Product Category</span>
                                    </div>

                                </button>
                                {openSections.productCategory && (
                                    <div className=" ml-6 space-y-1">
                                        <div className="flex items-center  gap-1 px-3 py-2 text-sm">

                                            <div className="flex items-center gap-[15px]">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                <span className="text-[#525866]">Beers</span>
                                            </div>
                                            <span className="flex justify-center items-center gap-[2px] px-2 py-[2px] text-[#B5003C] text-[11px] font-medium leading-[12px] tracking-[0.22px] uppercase bg-[#FFE6EE] rounded-full">120</span>
                                        </div>
                                        <div className="flex items-center  gap-1 px-3 py-2 text-sm">

                                            <div className="flex items-center gap-[15px]">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="text-[#525866]">Wines</span>
                                            </div>
                                            <span className="flex justify-center items-center gap-[2px] px-2 py-[2px] text-[#335CFF] text-[11px] font-medium leading-[12px] tracking-[0.22px] uppercase bg-[#EBF1FF] rounded-full">155</span>
                                        </div>
                                        <div className="flex items-center  gap-1 px-3 py-2 text-sm">

                                            <div className="flex items-center gap-[15px]">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-[#525866]">Spirits</span>
                                            </div>
                                            <span className="flex justify-center items-center gap-[2px] px-2 py-[2px] text-[#0B4627] text-[11px] font-medium leading-[12px] tracking-[0.22px] uppercase bg-[#E0FAEC] rounded-full">167</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className="flex items-center gap-2 w-full px-2 py-1 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={finance} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Finance</span>
                            </button>

                            <button className="flex items-center gap-2 w-full px-2 py-1 text-[#525866] hover:bg-gray-50 rounded-lg transition-colors text-left">
                                <Image src={costumer} alt="" className="w-[20px]" />
                                <span className="font-medium text-sm">Customer</span>
                            </button>
                        </nav>
                    )}
                </div>
            </div>

            {/* User Profile */}
            <div className="p-6 border-t border-gray-200 mt-auto">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <div className="flex items-center justify-center w-full h-full bg-purple-100 text-purple-600 font-semibold text-sm">SW</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-900 truncate">Sophia Williams</div>
                        <div className="text-xs text-gray-500 truncate">sophia@lana.com</div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* <div className="w-2 h-2 bg-red-500 rounded-full"></div> */}
                        <ChevronRight className="w-4 h-4 text-[#525866]" />
                    </div>
                </div>
            </div>
            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    )
}