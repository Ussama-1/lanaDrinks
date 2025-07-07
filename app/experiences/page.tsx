import { Sec1 } from "@/components/experiences/Sec1";
import BeerCatalogPage from "@/components/experiences/Sec2";
import Sec3 from "@/components/experiences/Sec3";
import LanaFooter from "@/components/Footer";
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
