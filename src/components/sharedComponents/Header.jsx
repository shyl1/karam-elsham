import { Logo } from '@/assets/image'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import MobileMenu from './MobileMenu';

export default function Header() {

    
    return (
        <header className='fixed top-0 w-full z-50 bg-black/50 border-b-3 border-[var(--color-btn-bg-yellow)]'>

            <div className='container h-[90px] flex justify-between items-center font-body'>
                <Link to={'/'}>
                    <img src={Logo} alt="Karam Elsham Logo" className='w-[86px] h-[86px]'/>
                </Link>

                <NavBar />
                <MobileMenu />
            </div>

        </header>
    )
}
