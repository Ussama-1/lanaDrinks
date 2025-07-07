import { Header } from "@/components/header";
import LanaFooter from "@/components/Footer";
import Bag from "@/components/shopping-bag";



export default function page() {
    return (
        <div className="font-sans  h-auto w-full mx-auto max-w-[1312px] pt-4 sm:pt-7 px-2 2xl:px-0 ">
            <div className="">
                <Header />
                <Bag />

                <LanaFooter />
            </div>
        </div>
    );
}
