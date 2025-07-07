import { Header } from "@/components/header";
import LanaFooter from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";

interface ProductPageProps {
   params: Promise<{
    eventId: string;
  }>;
}

export default async function Product({ params }: ProductPageProps) {
   const { eventId } = await params;

  return (
    <div className="font-sans  h-auto w-full mx-auto max-w-[1312px] pt-4 sm:pt-7 px-2 2xl:px-0 ">
      <div className="">
        <Header />
        <ProductDetail id={eventId} />

        <LanaFooter />
      </div>
    </div>
  );
}
