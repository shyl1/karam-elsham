import { getGridSpanClass } from "@/utils/getColandRowSpan";
import Button from "../sharedComponents/Button";
import Title from "../sharedComponents/Title";
import useDynamicOffers from "@/hooks/useDynamicOffers";
import OrderNow from "../sharedComponents/OrderNow";
import { useTranslation } from "react-i18next";


export default function OfferSection() {

    const {data: DynamicOffers , isLoading , isError , error} = useDynamicOffers();

    if(isLoading) return <p>Loading</p>;
    if(isError) return <p>Error:{error.message}</p>;

    return (
        <section className="container flex flex-col p-3">
            <div className="flex justify-between items-center">
                <Title textKey="offers.todayOffer" textColor={'text-[var(--color-text-brown)]'} bgColor={'bg-transparent'} textSize={"text-sm md:text-xl"} />
                <Button textKey="offers.viewOffers" borderColor={'border-black'} borderSize={'border-0'}/>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-12 auto-rows-[200px] gap-4 mt-5">
                {/* Offers */}
                {
                    DynamicOffers.map((offer)=> {
                        const spanClass = getGridSpanClass(offer.col_span, offer.row_span);
                        return(
                            <div key={offer.offer_id} className={`${spanClass} cursor-pointer relative group overflow-hidden rounded-xl`}>
                                {/* Image */}
                                <img
                                    src={offer.image_url}
                                    className="w-full h-full rounded-xl relative group-hover:scale-110 transition-transform duration-200"
                                    alt={offer.title_ar}
                                />

                                {/* overlay on image */}
                                <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center">
                                    <OrderNow textKey='buttons.orderNow' textColor={'text-[var(--color-text-brown)]'} bgColor={'bg-yellow-400'} hoverColor={'hover:bg-yellow-500'} paddingX={'px-6'} paddingY={'py-2'}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
