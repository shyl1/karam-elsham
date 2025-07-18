import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './FavProducts.css';
import Button from "../../sharedComponents/Button";
import Title from "../../sharedComponents/Title";
import useProduct from "@/hooks/useProduct";
import { useTranslation } from "react-i18next";
import ProductCard from "../../sharedComponents/ProductCard";
import { responsive } from "@/constants";

export default function FavProducts() {

    const {data:products , error , isLoading , isError} = useProduct();
    const {i18n} = useTranslation();

    const lang = (i18n.resolvedLanguage || i18n.language || 'ar').split('-')[0];

    if(isLoading) return <p>loading...</p>;

    if(error) return <p>Error: {error.message}</p>

    const fiveProducts = Array.isArray(products) ? products.slice(0, 8) : [];

    return (
        <section className="container flex flex-col p-3 h-100">
            <div className="flex justify-between items-center">
                <Title textKey="products.favs" textColor={'text-[var(--color-text-brown)]'} textSize={'text-sm md:text-xl'}/>
                <Button textKey="products.viewAll" borderColor={'border-[var(color-text-brown)]'} borderSize={'border-2'}/>
            </div>

            <div className="w-full p-3">
                
                <Carousel responsive={responsive} infinite ssr>
                    {
                        fiveProducts.map((product)=>(
                            <div key={product.item_id} dir={lang === "ar" ? "rtl" : "ltr"} className="h-[315px] flex items-center">
                                <ProductCard product={product} lang={lang} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}
