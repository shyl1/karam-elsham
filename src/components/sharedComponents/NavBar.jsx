import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import OrderNow from "./OrderNow";
import LangSwitcher from "./LangSwitcher";

export default function NavBar() {
    const {t } = useTranslation();

    return (
        <>
        <nav className='hidden md:flex justify-between gap-3 w-[405px] text-white '>
            {/* Home */}
            <NavLink to={'/'} className={({isActive})=> `centering py-2 px-4 ${isActive? `isActiveStyling` : ''}` }>
                {t("navbar.home")}
            </NavLink>

            {/* menu */}
            <NavLink to={'/Menu'} className={({isActive})=> `centering py-2 px-4${isActive? `isActiveStyling` : ''}` }>
                {t("navbar.menu")}
            </NavLink>


            {/* contact */}
            <NavLink to={'/Contact'} className={({isActive})=> `centering py-2 px-4 ${isActive? `isActiveStyling` : ''}` }>
                {t("navbar.contact")}
            </NavLink>

            {/* about */}
            <NavLink to={'/About'} className={({isActive})=> `centering py-2 px-4 ${isActive? `isActiveStyling` : ''}` }>
                {t("navbar.about")}
            </NavLink>
        </nav>

        {/* btns */}
        <div className='hidden md:flex justify-between items-center  gap-5'>
            <OrderNow textKey="buttons.orderNow" bgColor={"bg-btn-bg-yellow"} textColor={'text-[var(--color-text-brown)]'} hoverColor={"hover:bg-yellow-400"}/>
            <LangSwitcher />
        </div>
        </>
    )
}
