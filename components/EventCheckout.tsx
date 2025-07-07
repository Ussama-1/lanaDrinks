import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import trash from "@/public/trash-01.svg";
import shield from "@/public/shield-dollar.svg";
import calendar from "@/public/Calendar.svg";
import location from "@/public/location.svg";
import { EventCard } from "./EventCard";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";
import card4 from "@/public/card4.png";

const EventCardData = [
    {
        id: 1,
        heroImage: card1,
        title: "Boston’s Hottest Kickback (1 Drink...",
        date: "Tue, Jan 9, 5:00 PM",
        venue: "Theory bar lounge",
        price: "US$57.09",
        friendsGoing: [], // Add avatars if needed
        additionalFriendsCount: 99,
        isTrending: true,
        hasSalesEndingSoon: true,
    },
    {
        id: 2,
        heroImage: card2,
        title: "Speed Dating In Cambridge",
        date: "Tue, Jan 9, 5:00 PM",
        venue: "Theory bar lounge",
        price: "US$57.09",
        friendsGoing: [],
        additionalFriendsCount: 99,
        isTrending: true,
        hasSalesEndingSoon: false,
        badge: "Going Fast",
    },
    {
        id: 3,
        heroImage: card3,
        title: "Italian Wine And Dating",
        date: "Tue, Jan 9, 5:00 PM",
        venue: "Theory bar lounge",
        price: "US$57.09",
        friendsGoing: [],
        additionalFriendsCount: 99,
        isTrending: true,
        hasSalesEndingSoon: false,
        badge: "Almost Full",
    },
    {
        id: 4,
        heroImage: card4,
        title: "Speed Dating In Cambridge",
        date: "Tue, Jan 9, 5:00 PM",
        venue: "Theory bar lounge",
        price: "US$57.09",
        friendsGoing: [],
        additionalFriendsCount: 99,
        isTrending: true,
        hasSalesEndingSoon: false,
        badge: "Grab Now",
    },
];
function EventCheckout() {
    return (
        <div className="py-16 font-sans">
            <div className="">
                <h1 className="text-black font-semibold text-2xl sm:text-[42px] leading-none tracking-[-0.01em] capitalize mb-1.5 ">Events Checkout</h1>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-7">
                    {/* Cart Items */}
                    <div className="xl:col-span-2 ">
                        {/* First Item - Raspberry Espresso */}
                        {[1, 2].map((index) => (

                            <div key={index} className="bg-white  py-4 md:py-12  border-b flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex flex-col sm:flex-row md:items-center gap-4 md:gap-8">
                                    <div className=" w-[100px] md:w-[200px] h-[100px] md:h-[200px] overflow-hidden bg-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center">
                                    </div>

                                    <div className="flex-1 space-y-3 md:space-y-4">

                                        <h3 className="text-black font-semibold text-xl md:text-[24px] leading-tight md:leading-[120%] tracking-[-0.015em] capitalize sm:max-w-[70%]">
                                            Raspberry Espresso Extra Dark Non-Alcoholic Drink
                                        </h3>


                                        <div className="space-y-3 md:space-y-4">

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
                                            <div className="space-y-0.5   text-[14px] font-medium">
                                                <div className="flex items-center gap-3 text-gray-800">
                                                    <Image src={calendar} alt="" className="w-[16px] h-[16px]" />
                                                    <span className="">Tue, Jan 9, 5:00 PM</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-800">
                                                    <Image src={location} alt="" className="w-[16px] h-[16px]" />{" "}
                                                    <span className="">Theory bar lounge</span>
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
            <section className="mb-1 mt-[52px]">
                <div className="flex items-center justify-between mb-6  relative lg:static">
                    <h3 className="text-2xl sm:text-[42px]  ">
                        <span className="font-medium font-sans tracking-[-0.04em] capitalize">
                            We think you’ll also be into
                        </span>
                    </h3>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 lg:pt-0.5 items-center justify-center">
                    {EventCardData.map((card) => (
                        <EventCard
                            key={card.id}
                            heroImage={card.heroImage}
                            title={card.title}
                            date={card.date}
                            venue={card.venue}
                            price={card.price}
                            friendsGoing={card.friendsGoing}
                            additionalFriendsCount={card.additionalFriendsCount}
                            isTrending={card.isTrending}
                            hasSalesEndingSoon={true}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default EventCheckout
