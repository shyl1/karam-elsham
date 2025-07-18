import FavProducts from '@/components/HomeCpmonents/favproducts/FavProducts'
import HeroSection from '@/components/HomeCpmonents/HeroSection'
import OfferSection from '@/components/HomeCpmonents/OfferSection'
import React from 'react'

export default function Home() {
  return (
    <section>
      <HeroSection />
      
      <section className='max-sm:mx-2 mt-5'>
        <OfferSection />
      </section>

      <section className='mt-5 bg-yellow-500'>
        <FavProducts />
      </section>
    
    </section>
  )
}
