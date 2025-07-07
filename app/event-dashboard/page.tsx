"use client"
import { Plus, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger } from "@/components/ui/select"
import Sidebar from "@/components/Sidebar"
import sortby from '@/public/sort-desc.svg'
import filter from '@/public/filter-3-fill.svg'
import Shortcut from '@/public/Shortcut.svg'
import search from '@/public/search-2-line.svg'
import bad from '@/public/goodload.svg'
import line from '@/public/Line 184.svg'
import line2 from '@/public/Line 179.svg'
import star from '@/public/Star.svg'
import redchart from '@/public/line-chart-down-02.svg'
import ticket from '@/public/Ticker Star.svg'
import badgauge from '@/public/badgauge.svg'
import edit2 from '@/public/edit-line.svg'
import threedots from '@/public/dots-horizontal.svg'
import eye from '@/public/eye-line.svg'
import leftarrow from '@/public/arrow-left-double-line.svg'
import rightarrow from '@/public/arrow-right-double-line.svg'
import leftSingleArrow from '@/public/arrow-left-s-line.svg'
import rightSingleArrow from '@/public/arrow-right-s-line.svg'
import Image from "next/image"
import { useState } from "react"
const events = [
    {
        id: 1,
        name: "Wine & Dine",
        image: "/placeholder.svg?height=60&width=60",
        rating: 4.5,
        performance: { score: 148, rating: "12.4K", status: "Bad", percentage: 25 },
        status: "Still Selling",
        date: "03/15/2026",
        price: "$19,499",
        visible: true,
        bgColor: "bg-red-500",
    },
    {
        id: 2,
        name: "Wine & Dine",
        image: "/placeholder.svg?height=60&width=60",
        rating: 4.5,
        performance: { score: 148, rating: "12.4K", status: "Bad", percentage: 25 },
        status: "Still Selling",
        date: "03/15/2026",
        price: "$19,499",
        visible: true,
        bgColor: "bg-red-500",
    },
    {
        id: 3,
        name: "Wine & Dine",
        image: "/placeholder.svg?height=60&width=60",
        rating: 4.5,
        performance: { score: 148, rating: "12.4K", status: "Bad", percentage: 25 },
        status: "Still Selling",
        date: "03/15/2026",
        price: "$19,499",
        visible: true,
        bgColor: "bg-red-500",
    },
    {
        id: 4,
        name: "Wine & Dine",
        image: "/placeholder.svg?height=60&width=60",
        rating: 4.5,
        performance: { score: 148, rating: "12.4K", status: "Bad", percentage: 25 },
        status: "Still Selling",
        date: "03/15/2026",
        price: "$19,499",
        visible: true,
        bgColor: "bg-red-500",
    },

]



export default function Dashboard() {
    const [toggle, settoggle] = useState(false)
    return (
        <div className={` max-w-[1440px] w-full border mx-auto flex font-sans  `}>
            {toggle && (

                <Sidebar />
            )}
            <div className=" h-screen  p-3 sm:p-6 overflow-y-auto  scrollbar-hide w-full">
                {/* Header */}
                <header className="">
                    <div className="flex items-start flex-wrap justify-between mb-4 gap-2">
                        <div className="flex gap-2">
                            <Menu className="hover:cursor-pointer  " onClick={() => { settoggle(prev => !prev) }} />
                            <h1 className="text-[#0E121B] text-[20px] font-medium tracking-tight leading-tight text-nowrap">All Events</h1>
                        </div>
                        <div className="flex items-center gap-3.5 flex-wrap justify-end">
                            <div className="relative">
                                <Image src={search} alt="" className="w-[20px] absolute left-4 top-1/2 transform -translate-y-1/2" />
                                <Input
                                    placeholder="Search..."
                                    className="pl-12 pr-14 w-full max-w-[300px] h-[36px] border-gray-300 rounded-lg text-[#99A0AE] text-[14px] font-normal leading-[20px] tracking-[-0.084px] "
                                />
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                                    <Image src={Shortcut} alt="" className="w-[31px]" />
                                </div>
                            </div>
                            <Button variant="outline" className="gap-2 h-[36px] w-[82px] flex items-center justify-center px-4 border-gray-300 hover:bg-gray-50 bg-transparent text-[#525866] text-[14px] font-medium leading-[20px] tracking-[-0.084px]">
                                <Image src={filter} alt="" className="w-5" />
                                Filter
                            </Button>
                            <Select defaultValue="sort">
                                <SelectTrigger className="w-[122px] px-1 xl:px-2.5  justify-between border-gray-300 flex gap-0 xl:gap-2 h-[36px] text-[#525866] text-[14px] font-normal leading-[20px] tracking-[-0.084px]">
                                    <Image src={sortby} alt="" className="w-5" />
                                    <span>
                                        Sort by
                                    </span>
                                </SelectTrigger>

                            </Select>
                            <Button className="gap-2  p-2  text-white text-[14px] font-medium leading-[20px] tracking-[-0.084px] bg-gradient-to-br from-[#F49062] to-[#FD371F]">
                                <Plus className="w-4 h-4" />
                                New Event
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-y-9 xl:grid-cols-[14.5%_23%_27.6%_18%_20%] items-center   px-4 md:px-8 py-4 md:py-[22px] mb-[18px] border border-[#E9EAEB] rounded-2xl">
                        <div className="flex xl:justify-between">

                            <div className="flex flex-col gap-2.5   ">

                                <div className="text-[#525866] text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap ">Active Events</div>
                                <div className="text-[#0E121B] text-[32px] font-medium leading-[40px] tracking-tight overflow-hidden text-ellipsis  whitespace-nowrap">352</div>
                            </div>
                            <Image src={line} alt="" className="hidden xl:block" />
                        </div>

                        <div className="flex xl:justify-between ">

                            <div className="flex flex-col xl:justify-center   xl:items-center xl:w-full gap-2.5">
                                <div className="flex flex-col   gap-2.5">

                                    <div className="text-[#525866] text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap  ">Best Event</div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-[44px] h-[44px] bg-red-500 rounded-lg flex items-center justify-center">

                                        </div>
                                        <span className="font-semibold text-gray-900">Wine & Dine</span>
                                    </div>
                                </div>
                            </div>

                            <Image src={line} alt="" className="hidden xl:block" />
                        </div>


                        <div className="flex xl:justify-between">

                            <div className=" xl:w-full flex  xl:justify-center xl:items-center">

                                <div className="flex flex-col  mr-9 gap-2 ">

                                    <div className="text-[#525866] text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap  ">Average Performance</div>
                                    <Image src={bad} alt="" />
                                </div>
                            </div>
                            <Image src={line} alt="" className="hidden xl:block" />
                        </div>

                        <div className="flex xl:justify-between">

                            <div className="xl:w-full flex  xl:justify-center xl:items-center">

                                <div className="flex flex-col gap-2.5 ">

                                    <div className="text-[#525866] text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap  ">Tickets Sold</div>
                                    <div className="text-[#0E121B] text-[32px] font-medium leading-[40px] tracking-[-0.16px] overflow-hidden text-ellipsis whitespace-nowrap">12,929</div>
                                </div>
                            </div>
                            <Image src={line} alt="" className="hidden xl:block" />
                        </div>

                        <div className="xl:w-full flex  xl:justify-center xl:items-center">

                            <div className="flex flex-col gap-2.5 ">

                                <div className="text-[#525866] text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap  ">Tickets Refunded</div>
                                <div className="text-[#0E121B] text-[32px] font-medium leading-[40px] tracking-[-0.16px] overflow-hidden text-ellipsis whitespace-nowrap">12,929</div>
                            </div>
                        </div>

                    </div>

                    {/* Events Table */}

                    <div className="overflow-x-auto">
                        <div className="w-full  ">
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className={`grid  grid-cols-[23%_28.9%_13%_13.7%_11.5%_auto] min-w-[1120px]  items-center border-b  py-3.5   ${index !== events.length - 1 ? "border-b border-gray-100" : ""
                                        } hover:bg-gray-50 transition-colors`}
                                >
                                    {/* Event Info */}
                                    <div className="flex justify-between items-center  ">

                                        <div className="flex items-center gap-3 ">
                                            <div className={`w-[72px] h-[72px] ${event.bgColor} rounded-xl flex items-center justify-center`}>

                                            </div>
                                            <div>
                                                <div className="text-[#0E121B] text-[18px] font-medium leading-[24px] tracking-[-0.27px] overflow-hidden text-ellipsis whitespace-nowrap mb-1">{event.name}</div>
                                                <div className="flex items-center gap-0.5 text-[#525866] text-[14px] font-normal leading-[20px] tracking-[-0.084px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span>Review:</span>
                                                    <span className="text-[#0E121B] text-[14px] font-semibold leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap tracking-tight">{event.rating}</span>
                                                    <Image src={star} alt="" className="w-[14px] h-[14px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <Image src={line2} alt="" />
                                    </div>


                                    <div className="flex justify-between">
                                        <div className="w-full flex justify-center items-center">

                                            <div className="flex gap-4">
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-[#0E121B] text-[18px] font-medium leading-[24px] tracking-[-0.27px] overflow-hidden text-ellipsis whitespace-nowrap capitalize">performance</span>
                                                    <div className="flex gap-5">
                                                        <div className="flex gap-1.5">

                                                            <Image src={redchart} alt="" />
                                                            <span>148</span>
                                                        </div>
                                                        <div className="flex gap-1.5">

                                                            <Image src={ticket} alt="" />
                                                            <span>12.4K</span>
                                                        </div>


                                                    </div>
                                                </div>
                                                <Image src={badgauge} alt="" />

                                            </div>
                                        </div>
                                        <Image src={line2} alt="" />
                                    </div>

                                    {/* Status */}
                                    <div className="flex justify-between ">
                                        <div className="flex w-full justify-center items-center">

                                            <div>

                                                <div className="text-[#0E121B] text-[18px] font-medium leading-[24px] tracking-[-0.27px] overflow-hidden text-ellipsis whitespace-nowrap capitalize mb-1">{event.status}</div>
                                                <div className="text-[#525866] text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap">{event.date}</div>
                                            </div>
                                        </div>
                                        <Image src={line2} alt="" />
                                    </div>

                                    {/* Price */}
                                    <div className="flex justify-between  ">
                                        <div className="flex w-full justify-center items-center">

                                            <div>

                                                <div className="text-[#0E121B] text-[18px] font-medium leading-[24px] tracking-[-0.27px] overflow-hidden text-ellipsis whitespace-nowrap capitalize mb-1">Event Price</div>
                                                <div className="text-[16px] font-normal leading-[20px] tracking-[-0.096px] overflow-hidden text-ellipsis whitespace-nowrap text-[#525866]">{event.price}</div>
                                            </div>
                                        </div>
                                        <Image src={line2} alt="" />
                                    </div>

                                    {/* Visibility */}
                                    <div className="flex justify-between ">
                                        <div className="flex w-full justify-center items-center">

                                            <div>

                                                <div className="text-[#0E121B] text-[18px] font-medium  leading-[24px] tracking-[-0.27px] overflow-hidden text-ellipsis whitespace-nowrap capitalize mb-1">Visibility</div>
                                                <Switch
                                                    checked={event.visible}
                                                    className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-gray-200   scale-110"
                                                />
                                            </div>
                                        </div>
                                        <Image src={line2} alt="" />
                                    </div>

                                    {/* Actions */}
                                    <div className="">
                                        <div className="flex w-full justify-center items-center">

                                            <div className="flex items-center gap-1">
                                                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-gray-100">
                                                    <Image src={edit2} alt="" />
                                                </Button>
                                                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-gray-100">
                                                    <Image src={eye} alt="" />
                                                </Button>
                                                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-gray-100">
                                                    <Image src={threedots} alt="" />
                                                </Button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Pagination */}
                    <div className="flex items-center justify-between flex-wrap  sm:flex-nowrap gap-y-3 sm:gap-y-0 mt-8 w-full">
                        {/* Left side - Page info */}
                        <div className="text-[#525866] text-center text-[14px] font-normal leading-[20px] tracking-[-0.084px]">
                            Page 3 of 16
                        </div>

                        {/* Center - Pagination controls */}

                        {/* Pagination container with rounded corners */}
                        <div className="flex items-center border border-[#E1E4EA] rounded-lg bg-white overflow-hidden max-h-8  max-w-[440px]">
                            {/* First page button */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-600 hover:bg-gray-50 text-sm">
                                <Image src={leftarrow} alt="" />
                            </button>

                            {/* Previous page button */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-600 hover:bg-gray-50 text-sm">
                                <Image src={leftSingleArrow} alt="" />
                            </button>

                            {/* Page 1 */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-700 hover:bg-gray-50 font-medium text-sm">
                                1
                            </button>

                            {/* Page 2 */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-700 hover:bg-gray-50 font-medium text-sm">
                                2
                            </button>

                            {/* Page 3 - Active */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] bg-[#F5F7FA] text-gray-600 font-medium text-sm">
                                3
                            </button>

                            {/* Page 4 */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-700 hover:bg-gray-50 font-medium text-sm">
                                4
                            </button>

                            {/* Page 5 */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-700 hover:bg-gray-50 font-medium text-sm">
                                5
                            </button>

                            {/* Ellipsis */}
                            <div className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-400 font-medium text-sm">
                                ...
                            </div>

                            {/* Page 16 */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-700 hover:bg-gray-50 font-medium text-sm">
                                16
                            </button>

                            {/* Next page button */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center border-r border-[#E1E4EA] text-gray-600 hover:bg-gray-50 text-sm">
                                <Image src={rightSingleArrow} alt="" />
                            </button>

                            {/* Last page button */}
                            <button className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm">
                                <Image src={rightarrow} alt="" />
                            </button>
                        </div>


                        {/* Right side - Items per page selector */}
                        <div className="relative">
                            <select className="appearance-none w-20 rounded-[8px] xl:w-28 h-8 px-3 pr-8 text-sm border border-gray-300  bg-white text-[#525866] text-center text-[14px] font-normal leading-[20px] tracking-[-0.084px] ">
                                <option value="7">7 / page</option>
                                <option value="10">10 / page</option>
                                <option value="20">20 / page</option>
                            </select>
                            <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
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
