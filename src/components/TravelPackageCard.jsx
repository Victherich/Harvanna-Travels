
// import React from 'react';
// import styled from 'styled-components';

// // --- Styled Components for the Travel Package Card ---
// const CardContainer = styled.div`
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   height: 100%; /* Ensures cards align nicely in a grid */
//   text-align: center; /* Center content within the card */

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 350px; /* Fixed height for the main package image/poster */
//   object-fit: cover;
//   display: block; /* Removes extra space below image */

//   @media (max-width: 768px) {
//     height: 300px;
//   }
//   @media (max-width: 480px) {
//     height: 250px;
//   }
// `;

// const CardContent = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center; /* Center content horizontally */
//   flex-grow: 1; /* Allows content to expand */
// `;

// const PackageTitle = styled.h3`
//   font-size: 24px;
//   color: #0d286d; /* Dark blue title */
//   margin-bottom: 15px;
//   font-weight: bold;
//   text-align: center;
//   min-height: 60px; /* Ensure consistent height for titles */
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 768px) {
//     font-size: 20px;
//     min-height: 50px;
//   }
// `;

// const MetaInfo = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-bottom: 15px;
//   width: 100%; /* Take full width */

//   @media (max-width: 480px) {
//     flex-direction: column;
//     gap: 5px;
//   }
// `;

// const MetaItem = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 15px;
//   color: #555555;

//   i {
//     color: #e60000; /* Red icon color */
//     font-size: 16px;
//   }
// `;

// const PriceDisplay = styled.div`
//   font-size: 32px;
//   font-weight: bold;
//   color: #0d286d; /* Dark blue for price */
//   margin-bottom: 20px;
  
//   @media (max-width: 768px) {
//     font-size: 28px;
//   }
// `;

// const DateDisplay = styled.div`
//   background-color: #f0f8ff; /* Light blue background for date */
//   color: #0d286d;
//   padding: 10px 15px;
//   border-radius: 5px;
//   font-size: 16px;
//   font-weight: bold;
//   margin-bottom: 25px;
// `;

// const LearnMoreButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   background-color: #e60000; /* Red button */
//   color: #ffffff;
//   padding: 12px 25px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: background-color 0.3s ease;
//   cursor: pointer; /* Indicate clickable */

//   &:hover {
//     background-color: #cc0000;
//   }

//   i {
//     font-size: 14px;
//   }
// `;

// // --- React Component: TravelPackageCard ---
// const TravelPackageCard = ({
//   image,
//   title,
//   location,
//   duration,
//   price,
//   date,
//   link
// }) => {
//   // Function to format price with comma separator and 2 decimal places
//   const formatPrice = (value) => {
//     return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Assuming NGN is whole number for display like in images
//   };

//   return (
//     <CardContainer>
//       <CardImage src={image} alt={title} />
//       <CardContent>
//         <PackageTitle>{title}</PackageTitle>
//         <MetaInfo>
//           <MetaItem><i className="fas fa-map-marker-alt"></i> {location}</MetaItem>
//           <MetaItem><i className="far fa-clock"></i> {duration}</MetaItem>
//         </MetaInfo>
//         <PriceDisplay>₦{formatPrice(price)}</PriceDisplay>
//         <DateDisplay>{date}</DateDisplay>
//         <LearnMoreButton href={link} target="_blank" rel="noopener noreferrer">
//           LEARN MORE <i className="fas fa-arrow-right"></i>
//         </LearnMoreButton>
//       </CardContent>
//     </CardContainer>
//   );
// };

// export default TravelPackageCard;



import React from 'react';
import styled from 'styled-components';

// --- Styled Components for the Featured Package Card (based on image_dee2a6.png) ---
const FeaturedCardContainer = styled.div`
  background-color:rgba(0,0,255,0.1);
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex; /* Arrange image and content horizontally */
  max-width: 950px; /* Adjust max width as seen in the image */
  margin: 30px auto; /* Center the card */
  font-family: Arial, sans-serif;
  padding:10px;

  @media (max-width: 992px) {
    flex-direction: column; /* Stack image and content on smaller screens */
    max-width: 500px; /* Adjust max width for mobile */
  }
`;

const ImageSection = styled.div`
  flex: 0 0 45%; /* Image takes about 45% width */
  position: relative;
//   background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
//   min-height: 450px; /* Fixed height for image section */
  display: flex;
  justify-content: flex-end; /* Push logo to top-right */
  padding: 15px; /* Padding for the logo */
width:40%;

@media(max-width:768px){
  width:100%;
}
  @media (max-width: 992px) {
    flex: 0 0 auto; /* No fixed width when stacked */
    // min-height: 350px; /* Adjust height for mobile */
  }
  @media (max-width: 576px) {
    // min-height: 280px;
  }

  img{
    width:100%;

  }
`;

const ImageLogo = styled.img`
  width: 90px; /* Size of the Aspom logo */
  height: auto;
  position: absolute; /* Position relative to ImageSection */
  top: 15px;
  right: 15px;
  z-index: 2; /* Ensure it's above the image */

  @media (max-width: 576px) {
    width: 70px;
  }
`;

const DetailsSection = styled.div`
  flex: 1; /* Content takes remaining width */
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start; /* Space out content vertically */

  @media (max-width: 992px) {
    padding: 25px 30px;
  }
  @media (max-width: 576px) {
    padding: 20px 25px;
  }
`;

const PackageTitle = styled.h2`
  font-size: 32px;
  color: #0d286d; /* Dark blue */
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 28px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const PackageDescription = styled.p`
  font-size: 16px;
  color: #555555;
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const StarRating = styled.div`
  color: #daa520; /* Gold/yellow color for stars */
  font-size: 18px;
  margin-bottom: 15px;

  i {
    margin-right: 2px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 25px; /* Space between meta items */
  margin-bottom: 25px; /* Space below meta info */

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #555555;

  i {
    color: #e60000; /* Red icon color */
    font-size: 16px;
  }
`;

const PriceWrapper = styled.div`
  border-left: 3px solid #f0f0f0; /* Light gray vertical line */
  padding-left: 30px;
  margin-left: 30px;
  margin-bottom: 30px; /* Space before button */

  @media (max-width: 992px) {
    border-left: none;
    padding-left: 0;
    margin-left: 0;
    border-top: 1px solid #f0f0f0; /* Horizontal line on small screens */
    padding-top: 20px;
    margin-top: 20px;
  }
`;

const FromText = styled.span`
  display: block;
  font-size: 15px;
  color: #777777;
  margin-bottom: 5px;
`;

const PriceAmount = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: #e60000; /* Red price */

  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const ExploreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #0d286d; /* Dark blue button */
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  align-self: flex-start; /* Align button to the left */

  &:hover {
    background-color: #081a4d;
  }

  @media (max-width: 992px) {
    align-self: center; /* Center button when stacked */
  }
`;


// --- React Component: FeaturedPackageCard ---
const TravelPackageCard = ({
  image,
  logo, // Path to Aspom logo
  title,
  description,
  rating, // e.g., 5 for 5 stars
  location,
  duration,
  price,
  buttonText = 'Explore', // Default button text
  buttonLink
}) => {
  // Function to format price with comma separator (as seen in image)
  const formatPrice = (value) => {
    // Ensuring it always has commas for thousands, and no decimals as per image
    return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={i < numStars ? "fas fa-star" : "far fa-star"}></i>
      );
    }
    return stars;
  };

  return (
    <FeaturedCardContainer>
      <ImageSection> {/* Use transient prop for styled-components */}
        {logo && <ImageLogo src={logo} alt="Aspom Logo" />}
        <img src={image} alt='bg'/>
      </ImageSection>
      <DetailsSection>
        <div>
          <PackageTitle>{title}</PackageTitle>
          <PackageDescription>{description}</PackageDescription>
          {rating && <StarRating>{renderStars(rating)}</StarRating>}
          <MetaRow>
            <MetaItem><i className="fas fa-map-marker-alt"></i> {location}</MetaItem>
            <MetaItem><i className="far fa-clock"></i> {duration}</MetaItem>
          </MetaRow>
        </div>
        <PriceWrapper>
          <FromText>From:</FromText>
          <PriceAmount>₦{formatPrice(price)}</PriceAmount>
        </PriceWrapper>
        <ExploreButton href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </ExploreButton>
      </DetailsSection>
    </FeaturedCardContainer>
  );
};

export default TravelPackageCard;