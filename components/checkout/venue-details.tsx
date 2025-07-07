"use client";
import { Button } from "@/components/ui/button";
import car from "@/public/car.svg";
import rightarrow from "@/public/rightarrow.svg";
import Image from "next/image";
export default function VenueDetails() {
  const venueAddress = "279 Tremont St, Boston, MA 02116";
  const encodedAddress = encodeURIComponent(venueAddress);

  const handleDirectionClick = () => {
    // Open Google Maps with directions to the venue
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="border border-[#E9EAEB]  w-full bg-white rounded-[20px] p-4 ">
      {/* Real Interactive Map Section */}
      <div className="relative h-[186px] bg-gray-100 rounded-[16px] overflow-hidden mb-4">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BcqzKRJNKzI&q=${encodedAddress}&zoom=16`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-t-xl"
        />
      </div>

      <div className="">
        {/* Venue Title */}
        <div className="mb-5 border-b pb-5">
          <h1 className="font-semibold text-[26px] leading-[120%]  capitalize text-black mb-2 tracking-[-0.02em]">
            The Royale Nightclub
          </h1>
          <p className="text-gray-500 text-base">
            279 Tremont St, Boston, MA 02116
          </p>
        </div>

        {/* Transportation Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-black mb-3">
            Transportation
          </h2>

          <div className="space-y-6">
            {/* Parking Space */}
            <div className="flex gap-4 items-start ">
              <Image src={car} alt="" className="w-5 h-5" />{" "}
              <div>
                <h3 className="font-semibold text-black mb-1 text-[16px] tracking-[-0.04em] leading-none">
                  Parking Space
                </h3>
                <p className="text-[#717680] text-base tracking-[-0.04em] max-w-[90%]">
                  Several parking garages within 2 blocks. $20-25 for evening
                  rates.
                </p>
              </div>
            </div>

            {/* Public Transit */}
            <div className="flex gap-4 items-start">
              <Image src={car} alt="" className="w-5 h-5" />
              <div>
                <h3 className="font-semibold text-black mb-1 text-[16px] tracking-[-0.04em] leading-none">
                  Public Transit
                </h3>
                <p className="text-[#717680] text-base tracking-[-0.04em] max-w-[93%] ">
                  Boylston Station (Green Line) is a 5-minute walk away.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Features Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">
            Venue Features
          </h2>

          <ul className="space-y-4 pl-2 pr-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#717680] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#717680] text-base tracking-[-0.04em] ">
                Full-service bar (one drink included with ticket)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#717680] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#717680] text-base tracking-[-0.04em] ">
                VIP bottle service areas (reservation required)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#717680] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#717680] text-base tracking-[-0.04em] ">
                Coat check available ($5 per item)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#717680] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#717680] text-base tracking-[-0.04em] ">
                Smoking area in designated outdoor section
              </span>
            </li>
          </ul>
        </div>

        {/* Direction Button */}
        <Button
          onClick={handleDirectionClick}
          className="w-full bg-[linear-gradient(135deg,_#F49062_0%,_#FD371F_100%)] text-white font-semibold py-5 text-base rounded-[10px] transition-colors"
        >
          Direction
          <Image src={rightarrow} alt="" className="w-3 h-3 ml-2" />
        </Button>
      </div>
    </div>
  );
}
