import { Header } from "@/components/header";
import LanaFooter from "@/components/Footer";
import { CheckoutContent } from "@/components/checkout/CheckoutContent";

interface CheckoutPageProps {
  params: Promise<{
    eventId: string;
  }>;
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { eventId } = await params;
  return (
    <div className="font-sans  h-auto w-full mx-auto max-w-[1312px] pt-4 sm:pt-7 px-2 2xl:px-0 ">
      <div className="">
        <Header />
        <CheckoutContent eventId={eventId} />
        <LanaFooter />
      </div>
    </div>
  );
}
