
import React from 'react'
import Hero3 from './Hero3'
import styled from 'styled-components'
import TravelPackageCard from './TravelPackageCard'
import FamilyTourPackagesCard from './FamilyTourPackagesCard'
import tourcard1 from '../Images/tourcard1.jpeg'
import SummerHolidayCard from './SummerHolidayCard'
import SideCard from './SideCard'
import PopularToursHeader from './PopularToursHeader'





const Div = styled.div`
display:flex;
width:100%;
padding:20px;

`

const Div1 = styled.div`
    width:70%;
    padding:10px;
@media(max-width:768px){
  width:100%;
}

`

const Div2 = styled.div`
width:30%;
padding:20px;
@media(max-width:768px){
  display:none;
}
`

const PlannedPackages = () => {

const travelPackages = [
  {
    id: 1,
    image: tourcard1, // Replace with actual image path for Dubai
    title: 'SUMMER IN DUBAI & SEYCHELLES',
    location: 'DUBAI & SEYCHELLES',
    duration: '8 Days & 7 Nights',
    price: 2999999, // Numeric value for price
    date: '6th – 14th August 2025',
    link: '/packages/dubai-seychelles-summer', // Example link
  },
  {
    id: 2,
    image: tourcard1, // Replace with actual image path for Doha
    title: 'SUMMER IN DOHA',
    location: 'DOHA, QATAR',
    duration: '7 Days & 6 Nights',
    price: 3210608, // Numeric value for price
    date: '15th – 21st August 2025',
    link: '/packages/doha-summer-getaway', // Example link
  },
  {
    id: 3,
    image: tourcard1, // Replace with actual image path for London
    title: 'LONDON CITY EXPLORER',
    location: 'LONDON, UK',
    duration: '6 Days & 5 Nights',
    price: 3850000, // Numeric value for price
    date: '10th – 15th September 2025',
    link: '/packages/london-city-explorer', // Example link
  },
  {
    id: 4,
    image: tourcard1, // Replace with actual image path for Paris
    title: 'ROMANTIC PARIS ESCAPE',
    location: 'PARIS, FRANCE',
    duration: '5 Days & 4 Nights',
    price: 2500000, // Numeric value for price
    date: '20th – 24th October 2025',
    link: '/packages/paris-romantic-escape', // Example link
  },
];


const relocationServices = [
  {
    id: 1, // Unique ID for React key prop
    promoImage: tourcard1, // Corresponds to image_df5b27.png / image_b49884.png
    logo: 'https://via.placeholder.com/80x30/FFFFFF/000000?text=Aspom', // Placeholder for Aspom logo
    title: 'Relocate to Canada',
    rating: 5, // 5 stars as seen in the image
    feeAmount: 390000, // N390,000
    link: '/services/relocate-canada', // Example link for details
  },
  {
    id: 2,
    promoImage: tourcard1, // Placeholder for another relocation service
    logo: 'https://via.placeholder.com/80x30/FFFFFF/000000?text=Aspom',
    title: 'Relocate to Australia',
    rating: 4, // Example rating
    feeAmount: 550000,
    link: '/services/relocate-australia',
  },]

  return (
    <div>
      <Hero3/>
      <Div>
        <Div1>
 {travelPackages.map(pkg => (
          <TravelPackageCard
            key={pkg.id} // Essential for React lists
            image={pkg.image}
            title={pkg.title}
            location={pkg.location}
            duration={pkg.duration}
            price={pkg.price}
            date={pkg.date}
            link={pkg.link}
          />
        ))}
        </Div1>
        <Div2>
            <PopularToursHeader/>
   {relocationServices.map(service => (
          <SideCard
            key={service.id} // Essential for React lists
            promoImage={service.promoImage}
            logo={service.logo}
            title={service.title}
            rating={service.rating}
            feeAmount={service.feeAmount}
            link={service.link}
          />
        ))}
        </Div2>
      </Div>
    </div>
  )
}

export default PlannedPackages
