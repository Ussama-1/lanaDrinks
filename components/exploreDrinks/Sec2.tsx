// "use client";
// import React, { useState } from "react";

// import { Search } from "lucide-react";
// import { ProductCard } from "../TrendingCard";

// const FilterSection = ({ title, children }) => (
//   <div className="mb-6">
//     <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
//       {title}
//     </h3>
//     {children}
//   </div>
// );

// const RatingSlider = ({ value, onChange, label }) => (
//   <div className="mb-4">
//     <div className="flex justify-between text-xs text-gray-600 mb-2">
//       <span>Good</span>
//       <span>Great</span>
//       <span>Excellent</span>
//     </div>
//     <input
//       type="range"
//       min="0"
//       max="100"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
//       style={{
//         background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
//       }}
//     />
//   </div>
// );

// const BeerCatalogPage = () => {
//   const [tasteRating, setTasteRating] = useState(75);
//   const [healthRating, setHealthRating] = useState(60);
//   const [socialRating, setSocialRating] = useState(85);

//   const [selectedTasteFilters, setSelectedTasteFilters] = useState([
//     "Sour",
//     "Bitter",
//     "Fruity",
//   ]);

//   const [selectedHealthFilters, setSelectedHealthFilters] = useState([
//     "ZERO Sugar",
//   ]);

//   const [selectedSocialFilters, setSelectedSocialFilters] = useState([
//     "Tried by 25K+",
//   ]);

//   const tasteOptions = [
//     "Sweet",
//     "Sour",
//     "Bitter",
//     "Tart",
//     "Fruity",
//     "Herbal",
//     "Spicy",
//     "Oaky",
//     "Aged",
//   ];

//   const healthOptions = [
//     "No GMO",
//     "No Preservatives",
//     "ZERO Sugar",
//     "Low Sugar < 10g",
//     "No NUTS",
//     "Gluten Free",
//     "Alcohol Free",
//     "ZERO Alcohol",
//     "Plant Based",
//   ];

//   const socialOptions = [
//     "Tried by 5K+",
//     "Tried by 25K+",
//     "Tried by 50K+",
//     "Tried by 100K+",
//   ];

//   const trendingProducts = [
//     {
//       id: 1,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 75,
//       health: 60,
//       value: 80,
//       backgroundColor: "#FED7AA",
//     },
//     {
//       id: 2,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 70,
//       health: 65,
//       value: 75,
//       backgroundColor: "#FCA5A5",
//     },
//     {
//       id: 3,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#F59E0B",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: true,
//       rankNumber: 1,
//       taste: 85,
//       health: 70,
//       value: 90,
//       backgroundColor: "#3B82F6",
//     },
//     {
//       id: 4,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 65,
//       health: 55,
//       value: 70,
//       backgroundColor: "#FCA5A5",
//     },
//     {
//       id: 5,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 80,
//       health: 75,
//       value: 85,
//       backgroundColor: "#FED7AA",
//     },
//     {
//       id: 6,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#F59E0B",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: true,
//       rankNumber: 2,
//       taste: 90,
//       health: 80,
//       value: 95,
//       backgroundColor: "#3B82F6",
//     },
//     {
//       id: 7,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 70,
//       health: 60,
//       value: 75,
//       backgroundColor: "#FED7AA",
//     },
//     {
//       id: 8,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#F59E0B",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: true,
//       rankNumber: 3,
//       taste: 85,
//       health: 70,
//       value: 80,
//       backgroundColor: "#3B82F6",
//     },
//     {
//       id: 9,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 75,
//       health: 65,
//       value: 70,
//       backgroundColor: "#FCA5A5",
//     },
//     {
//       id: 10,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 80,
//       health: 75,
//       value: 85,
//       backgroundColor: "#FED7AA",
//     },
//     {
//       id: 11,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#8B5CF6",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: false,
//       taste: 70,
//       health: 60,
//       value: 75,
//       backgroundColor: "#FCA5A5",
//     },
//     {
//       id: 12,
//       name: "Trailblazer Hoppy Helles",
//       circle: "4.4",
//       circlecolor: "#F59E0B",
//       price: "4.99",
//       rating: 4.4,
//       reviewCount: 139,
//       image: "/api/placeholder/150/200",
//       isTrending: true,
//       rankNumber: 4,
//       taste: 85,
//       health: 80,
//       value: 90,
//       backgroundColor: "#3B82F6",
//     },
//   ];

//   const toggleFilter = (filterArray, setFilterArray, item) => {
//     if (filterArray.includes(item)) {
//       setFilterArray(filterArray.filter((f) => f !== item));
//     } else {
//       setFilterArray([...filterArray, item]);
//     }
//   };

//   const FilterCheckbox = ({ label, checked, onChange }) => (
//     <label className="flex items-center space-x-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={onChange}
//         className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
//       />
//       <span
//         className={checked ? "text-orange-500 font-medium" : "text-gray-700"}
//       >
//         {label}
//       </span>
//     </label>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">O</span>
//               </div>
//               <span className="text-xl font-semibold text-gray-900">Or</span>
//             </div>

//             <div className="flex-1 max-w-xl mx-8">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
//               SEARCH
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex gap-8">
//           {/* Sidebar Filters */}
//           <div className="w-80 flex-shrink-0">
//             <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-2">
//                   <Filter className="w-5 h-5 text-gray-600" />
//                   <span className="font-semibold text-gray-900">FILTERS</span>
//                 </div>
//                 <button className="text-orange-500 font-medium text-sm hover:text-orange-600">
//                   CLEAR
//                 </button>
//               </div>

//               {/* Taste Section */}
//               <FilterSection title="TASTE">
//                 <RatingSlider
//                   value={tasteRating}
//                   onChange={setTasteRating}
//                   label="Taste"
//                 />
//                 <div className="space-y-2">
//                   {tasteOptions.map((option) => (
//                     <FilterCheckbox
//                       key={option}
//                       label={option}
//                       checked={selectedTasteFilters.includes(option)}
//                       onChange={() =>
//                         toggleFilter(
//                           selectedTasteFilters,
//                           setSelectedTasteFilters,
//                           option
//                         )
//                       }
//                     />
//                   ))}
//                 </div>
//                 <button className="text-gray-500 text-sm mt-2 flex items-center space-x-1 hover:text-gray-700">
//                   <Plus className="w-4 h-4" />
//                   <span>SHOW MORE</span>
//                 </button>
//               </FilterSection>

//               {/* Health Section */}
//               <FilterSection title="HEALTH">
//                 <RatingSlider
//                   value={healthRating}
//                   onChange={setHealthRating}
//                   label="Health"
//                 />
//                 <div className="space-y-2">
//                   {healthOptions.map((option) => (
//                     <FilterCheckbox
//                       key={option}
//                       label={option}
//                       checked={selectedHealthFilters.includes(option)}
//                       onChange={() =>
//                         toggleFilter(
//                           selectedHealthFilters,
//                           setSelectedHealthFilters,
//                           option
//                         )
//                       }
//                     />
//                   ))}
//                 </div>
//                 <button className="text-gray-500 text-sm mt-2 flex items-center space-x-1 hover:text-gray-700">
//                   <Plus className="w-4 h-4" />
//                   <span>SHOW MORE</span>
//                 </button>
//               </FilterSection>

//               {/* Social Section */}
//               <FilterSection title="SOCIAL">
//                 <RatingSlider
//                   value={socialRating}
//                   onChange={setSocialRating}
//                   label="Social"
//                 />
//                 <div className="space-y-2">
//                   {socialOptions.map((option) => (
//                     <FilterCheckbox
//                       key={option}
//                       label={option}
//                       checked={selectedSocialFilters.includes(option)}
//                       onChange={() =>
//                         toggleFilter(
//                           selectedSocialFilters,
//                           setSelectedSocialFilters,
//                           option
//                         )
//                       }
//                     />
//                   ))}
//                 </div>
//                 <button className="text-gray-500 text-sm mt-2 flex items-center space-x-1 hover:text-gray-700">
//                   <Plus className="w-4 h-4" />
//                   <span>SHOW MORE</span>
//                 </button>
//               </FilterSection>
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {trendingProducts.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   id={product.id}
//                   name={product.name}
//                   circle={product.circle}
//                   circlecolor={product.circlecolor}
//                   price={product.price}
//                   rating={product.rating}
//                   reviewCount={product.reviewCount}
//                   image={product.image}
//                   isTrending={product.isTrending}
//                   rankNumber={product.rankNumber}
//                   taste={product.taste}
//                   health={product.health}
//                   value={product.value}
//                   backgroundColor={product.backgroundColor}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeerCatalogPage;


import React from 'react'

function Sec2() {
  return (
    <div>
      
    </div>
  )
}

export default Sec2
