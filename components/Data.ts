import beer from "@/public/beers.png";
import wines from "@/public/winebotttle.png";
import readytodrink from "@/public/readytodrink.png";
import spirits from "@/public/spritis.png";
import mixers from "@/public/mixers.png";
import functionals from "@/public/functionals.png";
import artsCultureIcon from "@/public/art&culture.svg";
import businessMoneyIcon from "@/public/business&money.svg";
import foodDrinkIcon from "@/public/food&drinks.svg";
import hangoutsIcon from "@/public/hangout&kickbacks.svg";
import healthFitnessIcon from "@/public/health&fitness.svg";
import musicMediaIcon from "@/public/music&media.svg";

export const moodOptions = [
  {
    id: "beers",
    title: "Beers",
    bgColor: "bg-[#FFF0E6]",
    bgColornonSelected: "bg-orange-100",
    borderColor: "border-[#FFB98A]",
    isSelected: true,
    image: beer,
  },
  {
    id: "wines",
    title: "Wines",
    bgColor: "bg-[#F4F8FE]",
    bgColornonSelected: "bg-[#F4F8FE]",
    borderColor: "border-purple-200",
    isSelected: false,
    image: wines,
  },
  {
    id: "ready-to-drink",
    title: "Ready To Drink",
    bgColor: "bg-[#F4F8FE]",
    bgColornonSelected: "bg-[#F4F8FE]",
    borderColor: "border-yellow-200",
    isSelected: false,
    image: readytodrink,
  },
  {
    id: "spirits",
    title: "Spirits",
    bgColor: "bg-[#F8F3F2]",
    bgColornonSelected: "bg-[#F8F3F2]",
    borderColor: "border-blue-200",
    isSelected: false,
    image: spirits,
  },
  {
    id: "mixers",
    title: "Mixers",
    bgColor: "bg-[#FFE6EE]",
    bgColornonSelected: "bg-[#FFE6EE]",
    borderColor: "border-pink-200",
    isSelected: false,
    image: mixers,
  },
  {
    id: "functionals",
    title: "Functionals",
    bgColor: "bg-[#FFF0E6]",
    bgColornonSelected: "bg-[#FFF0E6]",
    borderColor: "border-amber-200",
    isSelected: false,
    image: functionals,
  },
];

export const experienceOptions = [
  {
    id: "arts-culture",
    title: "Arts & Culture",
    bgColor: "bg-[#FFF3EC]",
    bgColornonSelected: "bg-[#FFF0E6]",
    borderColor: "border-[#FFB98A]",
    isSelected: false,
    image: artsCultureIcon,
  },
  {
    id: "business-money",
    title: "Business & Money",
    bgColor: "bg-[#F4F8FE]",
    bgColornonSelected: "bg-[#F4F8FE]",
    borderColor: "border-[#AECFFF]",
    isSelected: false,
    image: businessMoneyIcon,
  },
  {
    id: "food-drink",
    title: "Food & Drink",
    bgColor: "bg-[#F1EDFF]",
    bgColornonSelected: "bg-[#F1EEFF]",
    borderColor: "border-[#CABDFF]",
    isSelected: false,
    image: foodDrinkIcon,
  },
  {
    id: "hangouts-kickbacks",
    title: "Hangouts & Kickbacks",
    bgColor: "bg-[#FDF8F3]",
    bgColornonSelected: "bg-[#F8F3F2]",
    borderColor: "border-[#FFB98A]",
    isSelected: false,
    image: hangoutsIcon,
  },
  {
    id: "health-fitness",
    title: "Health & Fitness",
    bgColor: "bg-[#FCE9F2]",
    bgColornonSelected: "bg-[#FFE6EE]",
    borderColor: "border-[#FFADD6]",
    isSelected: false,
    image: healthFitnessIcon,
  },
  {
    id: "music-media",
    title: "Music & Media",
    bgColor: "bg-[#FFF3EC]",
    bgColornonSelected: "bg-[#FFF0E6]",
    borderColor: "border-[#FFB98A]",
    isSelected: false,
    image: musicMediaIcon,
  },
];
