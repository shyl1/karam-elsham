import { getLocalizedText } from "@/utils/getLocalizedText";
import OrderNow from "../sharedComponents/OrderNow";
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductCard({product , lang }) {
    const navigate = useNavigate();
    const location = useLocation();
    const title = getLocalizedText(product , 'title' , lang);

    function popUp(){
        navigate(`/product/${product.item_id}`, { state: {background: location.pathname } });
    }
    
    // fall back text
    const altText = getLocalizedText(product , 'title' , lang);
    return (
        <div className="flex flex-col bg-white border-1 border-[var(--color-text-brown)] overflow-hidden h-full min-h-auto w-[355px] mx-auto gap-3 ">
            <div className="h-[200px] w-full overflow-hidden border-b-1 border-[var(--color-text-brown)]">
                <img src={product.item_image} alt={altText} className="w-full h-full object-cover cursor-pointer " loading="lazy" onClick={popUp}/>
            </div>

            <div className='flex flex-col gap-2 px-5 '>
                <h1 className={`text-base flex ${lang === 'ar' ? `text-right` : `text-left`}`}>{title}</h1>
            </div>

            <div className="flex justify-between items-center px-5 text-sm mb-5">
                <span className="text-base font-medium">{`${product.price} ${lang === 'ar' ? 'جنية': 'EGP'}`}</span>
                <OrderNow textKey='buttons.orderNow' textColor={'text-[var(--color-text-brown)]'} bgColor={'bg-yellow-400'} hoverColor={'hover:bg-yellow-500'} paddingX={"px-11 md:px-5 lg:px-11"} paddingY={'py-2'}/>
            </div>

        </div>
    )
}
