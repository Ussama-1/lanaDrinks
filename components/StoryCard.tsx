import { Play } from "lucide-react";

type StoryCardProps = {
  image: string;
  name: string;
  title?: string;
  onClick?: () => void;
};

export const StoryCard = ({
  image,
  name,
  title,
  onClick,
}: StoryCardProps) => (
  <div
    className={`relative flex-shrink-0 rounded-2xl    transition-all duration-300  font-sans w-[150px] sm:w-[250px] lg:w-[394.5px] h-[211.14px] sm:h-[351.9px] lg:h-[555px] bg-cover bg-center bg-no-repeat`}
    onClick={onClick}
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%), url(${image})`,
    }}
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button className=" w-8 sm:w-14  h-8 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-white/35 transition-all duration-300 border border-white/20">
        <Play
          className="w-4 sm:w-6 h-4 sm:h-6 text-[#FF6700] ml-1"
          fill="#FF6700"
        />
      </button>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
      <h3 className="text-white font-medium text-sm sm:text-xl leading-tight tracking-normal sm:mb-1">
        {name}
      </h3>
      {title && (
        <p className="text-white/90 font-medium text-xs tsm:ext-sm leading-[160%]">
          {title}
        </p>
      )}
    </div>
  </div>
);
