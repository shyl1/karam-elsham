import { Logo } from '@/assets/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const {t , i18n} = useTranslation();
    
    return (
        <header className=''>

            <img src={Logo} alt="Karam Elsham Logo" className='w-[86px] h-[86px]'/>

            <nav>
                <h1>{t("about.aboutUs")}</h1>
                <button onClick={() => i18n.changeLanguage("ar")}>عربي</button>
                <button onClick={() => i18n.changeLanguage("en")}>English</button>
            </nav>

        </header>
    )
}
