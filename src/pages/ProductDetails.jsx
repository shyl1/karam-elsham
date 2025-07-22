import { fetchProductById } from "@/API/singleProduct";
import { getLocalizedText } from "@/utils/getLocalizedText";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { Dialog, DialogBackdrop, DialogPanel,  } from '@headlessui/react';

export default function ProductDetails({open, setOpen , id}) {

    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id),
        enabled: !!id,
    });

    const {i18n} = useTranslation();
    
    const lang = (i18n.resolvedLanguage || i18n.language || 'ar').split('-')[0];

    const AltText = getLocalizedText(product , 'title' , lang);
    const Title = getLocalizedText(product , 'title' , lang);
    const Description = getLocalizedText(product , 'description' , lang);

    function copyProductLink(productId) {
    const link = `${window.location.origin}/product/${productId}`;
    navigator.clipboard.writeText(link)
        .then(() => console.log("Link copied!"))
        .catch(() => console.log("Failed to copy link"));
    }

    const {t} = useTranslation();

    console.log("open:", open);

    return (

        <Dialog open={open} onClose={setOpen} className=' z-50'>
            {/* back drop */}
            <div className='fixed inset-0 bg-black/50 ' aria-hidden='true'/>

                <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
                {/* content */}
                <DialogPanel className='bg-white relative rounded'>
                    {/* close icon */}
                    <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold cursor-pointer"
                    >
                        &times;
                    </button>

                    {/* content */}
                <div className="container mx-auto px-6 py-10">
                    <div className="flex max-md:flex-col justify-between items-center mt-5 w-full h-full">
                        {/* image of product */}
                        <img src={product?.item_image} alt={AltText}  className="h-[300px] w-full md:w-1/2 object-cover"/>
                        <div className="flex flex-col gap-3 w-full md:w-1/2 h-[300px] px-5">
                            {/* title and des and price */}
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl font-bold font-body">{Title}</h1>
                                <p className="flex gap-1 text-lg font-medium font-body mt-2"><span>{lang === 'ar' ? 'السعر:' : "Price:"}</span>{product?.price}<span>{lang === 'ar' ? 'جنية' : "EGP"}</span></p>
                                <p className="flex flex-col text-sm md:text-base font-normal text-[#595959] "><span className="font-body text-[18px] font-medium text-black">{lang === 'ar' ? 'وصف:' : "Description:"}</span>{Description}</p>
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-center items-center mt-5">
                                {/* quantity */}
                                <div className="bg-btn-bg-yellow w-full flex justify-center">
                                    <div className="w-1/2 flex justify-between items-center gap-5 md:gap-11 px-5 py-1 rounded">
                                        <button className="text-[25px] cursor-pointer">+</button>
                                        <span className="text-lg font-medium">1</span>
                                        <button className="text-[25px] cursor-pointer">-</button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-3 w-full">
                                    {/* share btn */}
                                    <button className="w-1/2 bg-white border-1 border-amber-400 px-5 py-2 hover:bg-btn-bg-yellow hover:text-white cursor-pointer"
                                        onClick={copyProductLink}
                                    >
                                        {t('popUp.share')}
                                    </button>
                                    {/* add to cart btn */}
                                    <button className="w-1/2 bg-btn-bg-yellow px-5 py-2 hover:bg-yellow-500 cursor-pointer ">{t('popUp.order')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </DialogPanel>
                </div>
        </Dialog>
    )
}
