import { Menu } from "@/assets/svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import OrderNow from "./OrderNow";
import LangSwitcher from "./LangSwitcher";


export default function MobileMenu() {

    const {t} = useTranslation();

    const [open , setOpen] = useState(false);

    // =lock body to prevent scroll on sidebar
    useEffect(() => {
    if (open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
        document.body.style.overflow = 'auto';
    };
    }, [open]);


    return (
        <section className="flex md:hidden">
            <button className="ml-2 cursor-pointer relative" onClick={()=> setOpen((prev)=> !prev)}>
                <Menu  className="text-white w-[30px] h-[30px] relative"/>
            </button>

            {/* when its open */}
            {
                open && (
                    <div className={`absolute min-h-screen bg-yellow-400 top-[90px] right-0 left-0 z-50 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0': 'translate-x-full'}`}>
                        <ul className="flex flex-col mt-5">
                            <Link to={'/'} className="menuStyling" onClick={()=> setOpen(false)}>{t("navbar.home")}</Link>
                            <Link to={'/Menu'} className="menuStyling"  onClick={()=> setOpen(false)}>{t("navbar.menu")}</Link>
                            <Link to={'/Contact'} className="menuStyling"  onClick={()=> setOpen(false)}>{t("navbar.contact")}</Link>
                            <Link to={'/About'} className="menuStyling"  onClick={()=> setOpen(false)}>{t("navbar.about")}</Link>
                        </ul>

                        {/* btns */}
                        <div className='flex md:hidden justify-center items-center gap-6 mt-3'>
                            <OrderNow textKey="buttons.orderNow" bgColor={'bg-text-brown'} textColor={"text-[var(--color-btn-bg-yellow)]"} hoverColor={"hover:bg-[var(--color-brown-hover)]"}/>
                            <LangSwitcher />
                        </div>

                    </div>
                )
            }

        </section>
    )
}
