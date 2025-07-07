import { Sec1 } from "@/components/exploreDrinks/Sec1";
import BeerCatalogPage from "@/components/exploreDrinks/Sec2";
import Sec3 from "@/components/exploreDrinks/Sec3";
import LanaFooter from "@/components/Footer";
// import BeerCatalogPage from "@/components/exploreDrinks/Sec2";
import React from "react";

function page() {
  return (
    <section className="px-2">
      <Sec1 />
      <BeerCatalogPage />
      <Sec3 />
      <LanaFooter />
    </section>
  );
}

export default page;
