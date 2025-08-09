import React from 'react'
import BookingSection from './BookingSection'
import HeroSection from './Hero'
import FamilyTourPackages from './FamilyTourPackages'
import CustomerTestimonial from './CustomerTestimonial'
import Partners from './Partners'
import Newsletter from './Newsletter'
import SecondQuarterDeals from './SecondQuarterDeals'
import PopularToursSection from './PopularToursSection'
import Gallery from './Gallery'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <PopularToursSection/>
      <SecondQuarterDeals/>
      <FamilyTourPackages/>
      <CustomerTestimonial/>
      <BookingSection/>
      <Partners/>
      <Gallery/>
      <Newsletter/>

      
    </div>
  )
}

export default LandingPage
