import { Hero } from "@/assets/image";
import { LeftArrow, RightArrow } from "@/assets/svg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {

    const { t ,i18n} = useTranslation();
    
    const lang = (i18n.resolvedLanguage || i18n.language || 'ar').split('-')[0];


    const Icon = lang === 'ar' ? 
    <LeftArrow className='text-[var(--color-text-brown)] w-[30px] h-[30px]' />
    : <RightArrow className='text-[var(--color-text-brown)] w-[30px] h-[30px]'/>

    return (
        <section className="w-full h-screen bg-cover bg-center relative pt-[92px]" style={{ backgroundImage: `url(${Hero})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Content on top */}
            <div className="container relative z-10 w-full h-full flex  items-center md:items-end justify-center md:justify-start md:pb-[200px]">
                <button className="bg-yellow-400 text-[var(--color-text-brown)] font-semibold px-10 py-3 rounded-full hover:bg-yellow-500 transition-all gap-3 flex justify-between items-center text-sm mr-5 md:text-2xl cursor-pointer font-body">
                {t('buttons.aboutUs')} {Icon}
                </button>
            </div>
        </section>

    )
}
