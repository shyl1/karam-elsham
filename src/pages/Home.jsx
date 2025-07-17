import HeroSection from '@/components/HomeCpmonents/HeroSection'
import OfferSection from '@/components/HomeCpmonents/OfferSection'
import React from 'react'

export default function Home() {
  return (
    <section>
      <HeroSection />
      
      <section className='mt-5'>
        <OfferSection />
      </section>
    
    </section>
  )
}
