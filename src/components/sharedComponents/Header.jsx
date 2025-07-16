import { Logo } from '@/assets/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const {t , i18n} = useTranslation();
    
    return (
        <header className='container h-[50px] border-2'>

            <img src={Logo} alt="Karam Elsham Logo" className='w-[86px] h-[86px]'/>

            <nav>
                <NavLink>
                    <span>{t("navbar.home")}</span>
                </NavLink>

            </nav>

        </header>
    )
}
