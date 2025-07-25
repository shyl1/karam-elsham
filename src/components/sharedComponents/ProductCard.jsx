import { getLocalizedText } from "@/utils/getLocalizedText"
import OrderNow from "./OrderNow";

export default function ProductCard({product , lang , onClick }) {
    const title = getLocalizedText(product , 'title' , lang);
    const description = getLocalizedText(product, 'description', lang);

    // fall back text
    const altText = getLocalizedText(product , 'title' , lang);



    return (
        <div className="flex flex-col bg-white rounded-xl overflow-hidden h-full min-h-auto w-[355px] mx-auto gap-5"
            onClick={onClick}
        >
            <div className="h-[139px] w-full overflow-hidden">
                <img src={product.item_image} alt={altText} className="w-full h-full object-cover cursor-pointer" loading="lazy"/>
            </div>

            <div className='flex flex-col gap-3 px-5 '>
                <h1 className={`text-base flex ${lang === 'ar' ? `text-right` : `text-left`}`}>{title}</h1>
                <div className={`flex text-xs ${lang === 'ar' ? `text-right` : `text-left`} h-[30px]`}>{`${description.substring(0, 70)}...`}</div>
            </div>

            <div className="flex justify-between items-center px-5 text-sm mb-5">
                <span className="text-base font-medium">{`${product.price} ${lang === 'ar' ? 'جنية': 'EGP'}`}</span>
                <OrderNow textKey='buttons.orderNow' textColor={'text-[var(--color-text-brown)]'} bgColor={'bg-yellow-400'} hoverColor={'hover:bg-yellow-500'} paddingX={"px-11"} paddingY={'py-2'}/>
            </div>

        </div>
    )
}
