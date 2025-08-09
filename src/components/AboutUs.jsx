// import React from 'react'; // Added React import
// import styled, { keyframes, css } from 'styled-components';
// import { useInView } from 'react-intersection-observer';
// import ab1 from '../Images/ab1.jpg';
// import ab2 from "../Images/ab2.jpg"

// // --- Global Page Container ---
// const AboutUsPageContainer = styled.div`
//   font-family: Arial, sans-serif;
//   background-color: #f8f8f8; /* Light background for the page */
//   color: #333333;
//   line-height: 1.6;
//   overflow-x: hidden; /* Prevent horizontal scroll from animations */
// `;

// // --- Animation Keyframes ---
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const fadeInLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const fadeInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// // --- Reusable Animated Styled Component Wrapper ---
// const AnimatedDiv = styled.div`
//   opacity: 0; /* Hidden by default */
//   ${props =>
//     props.$inView &&
//     css`
//       animation: ${props.$animationType || fadeIn} 0.8s ease-out forwards;
//       animation-delay: ${props.$delay || '0s'};
//     `}
// `;

// // --- Hero Section Styles ---
// const HeroSection = styled.section`
//   position: relative;
//   background-image: url(${ab1}); /* REPLACE with your actual hero image */
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: #ffffff;
//   padding: 100px 40px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 450px;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     padding: 80px 20px;
//     min-height: 350px;
//   }
// `;

// const HeroOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 0;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const HeroTitle = styled.h1`
//   font-size: 58px;
//   margin-bottom: 20px;
//   font-weight: bold;
//   line-height: 1.2;
//   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

//   @media (max-width: 1024px) {
//     font-size: 50px;
//   }
//   @media (max-width: 768px) {
//     font-size: 42px;
//   }
//   @media (max-width: 480px) {
//     font-size: 36px;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 24px;
//   max-width: 900px;
//   line-height: 1.6;
//   text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);

//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
//   @media (max-width: 480px) {
//     font-size: 18px;
//   }
// `;

// // --- General Section Styling ---
// const SectionWrapper = styled.section`
//   padding: 80px 40px;
//   max-width: 1200px;
//   margin: 0 auto;
//   text-align: center;
//   background-color: ${props => props.$bgColor || 'transparent'};

//   @media (max-width: 768px) {
//     padding: 60px 20px;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 42px;
//   color: #0d286d;
//   margin-bottom: 25px;
//   font-weight: bold;

//   @media (max-width: 1024px) {
//     font-size: 38px;
//   }
//   @media (max-width: 768px) {
//     font-size: 32px;
//   }
//   @media (max-width: 480px) {
//     font-size: 28px;
//   }
// `;

// const SectionDescription = styled.p`
//   font-size: 18px;
//   color: #555555;
//   max-width: 800px;
//   margin: 0 auto 50px auto;
//   line-height: 1.8;

//   @media (max-width: 768px) {
//     font-size: 16px;
//     margin-bottom: 40px;
//   }
// `;

// // --- Our Story Section ---
// const StoryContentWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
//   text-align: left;

//   @media (max-width: 992px) {
//     flex-direction: column;
//     gap: 30px;
//     text-align: center;
//   }
// `;

// const StoryText = styled.div`
//   flex: 1;
// `;

// const StoryImage = styled.img`
//   flex: 1;
//   max-width: 500px;
//   height: auto;
//   border-radius: 10px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

//   @media (max-width: 992px) {
//     max-width: 100%;
//   }
// `;

// // --- Mission & Vision Section ---
// const MissionVisionGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   gap: 30px;
//   margin-top: 50px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MVCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const MVIcon = styled.div`
//   font-size: 60px;
//   color: #e60000; /* Red accent */
//   margin-bottom: 20px;
// `;

// const MVTitle = styled.h3`
//   font-size: 28px;
//   color: #0d286d;
//   margin-bottom: 15px;
//   font-weight: bold;
// `;

// const MVDescription = styled.p`
//   font-size: 16px;
//   color: #555555;
//   line-height: 1.7;
// `;

// // --- Our Values Section ---
// const ValuesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 25px;
//   margin-top: 40px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ValueItem = styled.div`
//   background-color: #f0f8ff; /* Light blue background */
//   border-left: 5px solid #0d286d; /* Dark blue border accent */
//   border-radius: 8px;
//   padding: 25px;
//   text-align: left;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

//   h4 {
//     font-size: 20px;
//     color: #0d286d;
//     margin-bottom: 10px;
//     font-weight: bold;
//   }

//   p {
//     font-size: 15px;
//     color: #555555;
//   }
// `;

// // --- Why Choose Us Section ---
// const WhyChooseUsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
//   margin-top: 50px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeatureCard = styled.div`
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;

//   .icon {
//     font-size: 50px;
//     color: #0d286d; /* Dark blue icon */
//     margin-bottom: 15px;
//   }

//   h4 {
//     font-size: 22px;
//     color: #0d286d;
//     margin-bottom: 10px;
//     font-weight: bold;
//   }

//   p {
//     font-size: 15px;
//     color: #555555;
//   }
// `;

// // --- Call To Action Section ---
// const CallToActionSection = styled.section`
//   background-color: rgba(0,0,0,0.8);
//   color: #ffffff;
//   padding: 80px 40px;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 60px 20px;
//   }
// `;

// const CallToActionTitle = styled.h2`
//   font-size: 42px;
//   margin-bottom: 20px;
//   font-weight: bold;

//   @media (max-width: 768px) {
//     font-size: 36px;
//   }
// `;

// const CallToActionText = styled.p`
//   font-size: 20px;
//   max-width: 700px;
//   margin: 0 auto 40px auto;

//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const PrimaryButton = styled.a`
//   display: inline-block;
//   background-color: #e60000;
//   color: #ffffff;
//   padding: 15px 35px;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 20px;
//   transition: background-color 0.3s ease, transform 0.3s ease;

//   &:hover {
//     background-color: #cc0000;
//     transform: translateY(-3px);
//   }
// `;

// // --- React Component: AboutUsPage ---
// const AboutUsPage = () => {
//   // Hero Section Animations
//   const { ref: heroTitleRef, inView: heroTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: heroSubtitleRef, inView: heroSubtitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   // Our Story Section Animations
//   const { ref: storyTitleRef, inView: storyTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   // CORRECTED: Defining storyTextRef here
//   const { ref: storyTextRef, inView: storyTextInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: storyImageRef, inView: storyImageInView } = useInView({ triggerOnce: true, threshold: 0.2 });


//   // Mission & Vision Section Animations
//   const { ref: mvTitleRef, inView: mvTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: mvDescRef, inView: mvDescInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: missionCardRef, inView: missionCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: visionCardRef, inView: visionCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   // Our Values Section Animations
//   const { ref: valuesTitleRef, inView: valuesTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: valuesDescRef, inView: valuesDescInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: value1Ref, inView: value1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: value2Ref, inView: value2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: value3Ref, inView: value3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: value4Ref, inView: value4InView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   // Why Choose Us Section Animations
//   const { ref: whyChooseTitleRef, inView: whyChooseTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: whyChooseDescRef, inView: whyChooseDescInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: feature1Ref, inView: feature1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: feature2Ref, inView: feature2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: feature3Ref, inView: feature3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: feature4Ref, inView: feature4InView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   // Call to Action Animations
//   const { ref: ctaTitleRef, inView: ctaTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: ctaTextRef, inView: ctaTextInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: ctaButtonRef, inView: ctaButtonInView } = useInView({ triggerOnce: true, threshold: 0.1 });


//   return (
//     <AboutUsPageContainer>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroOverlay />
//         <HeroContent>
//           <AnimatedDiv ref={heroTitleRef} $inView={heroTitleInView} $animationType={fadeInUp}>
//             <HeroTitle>About Havranna Travels and Tours Ltd.</HeroTitle>
//           </AnimatedDiv>
//           <AnimatedDiv ref={heroSubtitleRef} $inView={heroSubtitleInView} $animationType={fadeInUp} $delay="0.2s">
//             <HeroSubtitle>
//               Your trusted partner in crafting unforgettable journeys across the globe.
//             </HeroSubtitle>
//           </AnimatedDiv>
//         </HeroContent>
//       </HeroSection>

//       {/* Our Story Section */}
//       <SectionWrapper>
//         <AnimatedDiv ref={storyTitleRef} $inView={storyTitleInView} $animationType={fadeInUp}>
//           <SectionTitle>Our Story: Passion for Exploration</SectionTitle>
//         </AnimatedDiv>
//         <StoryContentWrapper>
//           <AnimatedDiv ref={storyTextRef} $inView={storyTextInView} $animationType={fadeInLeft}> {/* Applying ref here */}
//             <StoryText>
//               {/* Removed storyDescRef as it's now wrapped by storyTextRef */}
//               <SectionDescription>
//                 Harvanna Travels and Tours Ltd. began with a simple yet profound vision: to make the world accessible to everyone. Founded by a team of avid travelers, we understand the transformative power of discovery and the joy of new experiences.
//               </SectionDescription>
//               {/* Added individual refs for staggered animation if desired, otherwise rely on parent */}
//               <p style={{textAlign: 'left', marginBottom: '15px'}}>
//                 For over a decade, we have dedicated ourselves to curating exceptional travel packages, offering seamless visa processing, and providing unparalleled customer service. Our journey is built on a foundation of trust, expertise, and a genuine desire to see our clients embark on their dream adventures.
//               </p>
//               <p style={{textAlign: 'left'}}>
//                 From serene beach getaways to thrilling mountain expeditions, bustling city breaks to tranquil cultural immersions, we meticulously plan every detail so you can focus on making memories.
//               </p>
//             </StoryText>
//           </AnimatedDiv>
//           <AnimatedDiv ref={storyImageRef} $inView={storyImageInView} $animationType={fadeInRight}>
//             <StoryImage src={ab2} alt="Our Story" />
//           </AnimatedDiv>
//         </StoryContentWrapper>
//       </SectionWrapper>

//       {/* Mission & Vision Section */}
//       <SectionWrapper $bgColor="#f0f8ff"> {/* Light blue background */}
//         <AnimatedDiv ref={mvTitleRef} $inView={mvTitleInView} $animationType={fadeInUp}>
//           <SectionTitle>Our Mission & Vision</SectionTitle>
//         </AnimatedDiv>
//         <AnimatedDiv ref={mvDescRef} $inView={mvDescInView} $animationType={fadeInUp} $delay="0.2s">
//           <SectionDescription>
//             Guiding our every step is a clear purpose and a bold aspiration for the future of travel.
//           </SectionDescription>
//         </AnimatedDiv>
//         <MissionVisionGrid>
//           <AnimatedDiv ref={missionCardRef} $inView={missionCardInView} $animationType={fadeInUp}>
//             <MVCard>
//               <MVIcon><i className="fas fa-bullseye"></i></MVIcon>
//               <MVTitle>Our Mission</MVTitle>
//               <MVDescription>
//                 To provide accessible, high-quality, and personalized travel solutions that inspire discovery, foster cultural understanding, and create lifelong memories for every traveler.
//               </MVDescription>
//             </MVCard>
//           </AnimatedDiv>
//           <AnimatedDiv ref={visionCardRef} $inView={visionCardInView} $animationType={fadeInUp} $delay="0.2s">
//             <MVCard>
//               <MVIcon><i className="fas fa-eye"></i></MVIcon>
//               <MVTitle>Our Vision</MVTitle>
//               <MVDescription>
//                 To be the leading and most trusted travel and tours company, recognized globally for innovation, customer satisfaction, and a commitment to sustainable tourism.
//               </MVDescription>
//             </MVCard>
//           </AnimatedDiv>
//         </MissionVisionGrid>
//       </SectionWrapper>

//       {/* Our Values Section */}
//       <SectionWrapper>
//         <AnimatedDiv ref={valuesTitleRef} $inView={valuesTitleInView} $animationType={fadeInUp}>
//           <SectionTitle>Core Values</SectionTitle>
//         </AnimatedDiv>
//         <AnimatedDiv ref={valuesDescRef} $inView={valuesDescInView} $animationType={fadeInUp} $delay="0.2s">
//           <SectionDescription>
//             The principles that define who we are and how we operate, ensuring excellence in every interaction.
//           </SectionDescription>
//         </AnimatedDiv>
//         <ValuesGrid>
//           <AnimatedDiv ref={value1Ref} $inView={value1InView} $animationType={fadeInUp}>
//             <ValueItem>
//               <h4>Customer-Centricity</h4>
//               <p>Our clients are at the heart of everything we do. We listen, understand, and tailor experiences to exceed expectations.</p>
//             </ValueItem>
//           </AnimatedDiv>
//           <AnimatedDiv ref={value2Ref} $inView={value2InView} $animationType={fadeInUp} $delay="0.1s">
//             <ValueItem>
//               <h4>Integrity & Trust</h4>
//               <p>We operate with honesty, transparency, and a commitment to building lasting relationships based on mutual trust.</p>
//             </ValueItem>
//           </AnimatedDiv>
//           <AnimatedDiv ref={value3Ref} $inView={value3InView} $animationType={fadeInUp} $delay="0.2s">
//             <ValueItem>
//               <h4>Excellence & Innovation</h4>
//               <p>We continuously strive for the highest standards in service delivery and embrace innovative solutions to enhance travel.</p>
//             </ValueItem>
//           </AnimatedDiv>
//           <AnimatedDiv ref={value4Ref} $inView={value4InView} $animationType={fadeInUp} $delay="0.3s">
//             <ValueItem>
//               <h4>Passion for Travel</h4>
//               <p>Our love for exploration fuels our dedication to creating inspiring and enriching journeys for all.</p>
//             </ValueItem>
//           </AnimatedDiv>
//         </ValuesGrid>
//       </SectionWrapper>

//       {/* Why Choose Us Section */}
//       <SectionWrapper $bgColor="#f0f8ff">
//         <AnimatedDiv ref={whyChooseTitleRef} $inView={whyChooseTitleInView} $animationType={fadeInUp}>
//           <SectionTitle>Why Choose Harvanna Travels?</SectionTitle>
//         </AnimatedDiv>
//         <AnimatedDiv ref={whyChooseDescRef} $inView={whyChooseDescInView} $animationType={fadeInUp} $delay="0.2s">
//           <SectionDescription>
//             Experience the difference with a travel partner committed to your comfort, safety, and satisfaction.
//           </SectionDescription>
//         </AnimatedDiv>
//         <WhyChooseUsGrid>
//           <AnimatedDiv ref={feature1Ref} $inView={feature1InView} $animationType={fadeInUp}>
//             <FeatureCard>
//               <div className="icon"><i className="fas fa-shield-alt"></i></div>
//               <h4>Reliable & Secure</h4>
//               <p>Your safety and peace of mind are our top priorities. We partner with trusted providers globally.</p>
//             </FeatureCard>
//           </AnimatedDiv>
//           <AnimatedDiv ref={feature2Ref} $inView={feature2InView} $animationType={fadeInUp} $delay="0.1s">
//             <FeatureCard>
//               <div className="icon"><i className="fas fa-headset"></i></div>
//               <h4>24/7 Support</h4>
//               <p>Our dedicated team is always available to assist you, from planning to your return.</p>
//             </FeatureCard>
//           </AnimatedDiv>
//           <AnimatedDiv ref={feature3Ref} $inView={feature3InView} $animationType={fadeInUp} $delay="0.2s">
//             <FeatureCard>
//               <div className="icon"><i className="fas fa-dollar-sign"></i></div>
//               <h4>Best Value Deals</h4>
//               <p>We offer competitive pricing without compromising on quality or experience.</p>
//             </FeatureCard>
//           </AnimatedDiv>
//           <AnimatedDiv ref={feature4Ref} $inView={feature4InView} $animationType={fadeInUp} $delay="0.3s">
//             <FeatureCard>
//               <div className="icon"><i className="fas fa-route"></i></div>
//               <h4>Customized Itineraries</h4>
//               <p>Every journey is unique. We tailor packages to fit your dreams, budget, and preferences.</p>
//             </FeatureCard>
//           </AnimatedDiv>
//         </WhyChooseUsGrid>
//       </SectionWrapper>

//       {/* Call To Action Section */}
//       <CallToActionSection>
//         <AnimatedDiv ref={ctaTitleRef} $inView={ctaTitleInView} $animationType={fadeInUp}>
//           <CallToActionTitle>Ready to Explore the World?</CallToActionTitle>
//         </AnimatedDiv>
//         <AnimatedDiv ref={ctaTextRef} $inView={ctaTextInView} $animationType={fadeInUp} $delay="0.2s">
//           <CallToActionText>
//             Contact Harvanna Travels and Tours Ltd. today to start planning your next unforgettable adventure.
//           </CallToActionText>
//         </AnimatedDiv>
//         <AnimatedDiv ref={ctaButtonRef} $inView={ctaButtonInView} $animationType={fadeInUp} $delay="0.4s">
//           <PrimaryButton href="/contactus">Get in Touch</PrimaryButton>
//         </AnimatedDiv>
//       </CallToActionSection>
//     </AboutUsPageContainer>
//   );
// };

// export default AboutUsPage;



// import React from 'react';
// import styled from 'styled-components';
// import { Fade, Slide } from 'react-awesome-reveal';

// // Import your images here (replace with your actual image paths)
// import heroImage from '../Images2/h4.jpg';
// import overviewImage from '../Images2/h5.jpg';
// import corporateImage from '../Images2/h6.jpg';
// import leadershipImage from '../Images2/h7.jpg';
// import recruitmentImage from '../Images2/h8.jpg';
// import achievementsImage from '../Images2/h9.jpg';
// import missionImage from '../Images2/h10.jpg';
// import mottoImage from '../Images2/h11.jpg';
// import joinUsImage from '../Images2/h12.jpg';

// // Styled Components
// const AboutUsContainer = styled.div`
//   font-family: 'Arial', sans-serif;
//   color: #333;
//   line-height: 1.6;
// `;

// const Section = styled.div`
//   padding: 60px 30px;
//   margin-bottom: 40px;
//   @media (min-width: 768px) {
//     padding: 80px 50px;
//   }
// `;

// const HeroSection = styled(Section)`
//   background: url(${heroImage}) center/cover no-repeat;
//   color: #fff;
//   text-align: center;
//   padding: 150px 30px;
//   position: relative;
//   min-height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//   }

//   div {
//     position: relative;
//     z-index: 1;
//   }

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     @media (min-width: 768px) {
//       font-size: 4rem;
//     }
//   }

//   p {
//     font-size: 1.1rem;
//     max-width: 800px;
//     margin: 0 auto;
//   }
// `;

// const ContentSection = styled(Section)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//     gap: 40px;
//   }

//   &.reverse {
//     flex-direction: column;

//     @media (min-width: 768px) {
//       flex-direction: row-reverse;
//     }
//   }

//   img {
//     width: 100%;
//     border-radius: 8px;
//     margin-bottom: 20px;
//     object-fit: cover;
//     max-height: 400px;

//     @media (min-width: 768px) {
//       width: 50%;
//       margin-bottom: 0;
//     }
//   }

//   div {
//     @media (min-width: 768px) {
//       width: 50%;
//     }
//   }

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 15px;
//     color: #007bff;
//   }
// `;

// const CredentialsSection = styled(Section)`
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   padding: 40px;
//   text-align: center;

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 15px;
//     color: #007bff;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       justify-content: center;
//       gap: 40px;
//     }
//   }

//   li {
//     padding: 10px 0;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
//     text-align: left;
//     max-width: 500px;
//     border-bottom: 1px solid #eee;

//     @media (min-width: 768px) {
//       border-bottom: none;
//       margin-bottom: 0;
//     }
//   }

//   li::before {
//     content: '✅';
//     margin-right: 10px;
//   }
// `;

// const AchievementsSection = styled(Section)`
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   padding: 40px;
//   text-align: center;

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 25px;
//     color: #007bff;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 20px;

//     @media (min-width: 768px) {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   li {
//     background-color: #fff;
//     padding: 20px;
//     border-radius: 6px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//     text-align: center;
//   }

//   strong {
//     font-size: 1.5rem;
//     color: #007bff;
//     display: block;
//     margin-bottom: 5px;
//   }
// `;

// const MottoSection = styled(Section)`
//   text-align: center;

//   h2 {
//     font-size: 2.5rem;
//     font-style: italic;
//     color: #007bff;
//     margin-bottom: 20px;
//   }

//   img {
//     max-width: 300px;
//     border-radius: 8px;
//     margin: 20px auto 0;
//     display: block;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// const FinalSection = styled(Section)`
//   background-color: #e9ecef;
//   text-align: center;
//   padding: 80px 30px;
//   border-radius: 8px;

//   h2 {
//     font-size: 2rem;
//     color: #007bff;
//     margin-bottom: 15px;
//   }

//   p {
//     max-width: 700px;
//     margin: 0 auto 20px;
//   }

//   img {
//     width: 100%;
//     max-width: 500px;
//     border-radius: 8px;
//     margin-top: 20px;
//   }
// `;

// // Main Component
// const AboutUsPage = () => {
//   return (
//     <AboutUsContainer>
//       <HeroSection>
//         <Fade>
//           <div>
//             <h1>About Harvanna Travels and Tour Ltd</h1>
//             <p>Your trusted travel and recruitment partner.</p>
//           </div>
//         </Fade>
//       </HeroSection>

//       <ContentSection>
//         <Slide direction="left">
//           <img src={overviewImage} alt="Overview" />
//         </Slide>
//         <div>
//           <Fade>
//             <h2>Overview</h2>
//             <p>Harvanna Travels and Tour Ltd is a premier international travel agency and recruitment service dedicated to providing exceptional travel experiences and job placement services worldwide. Established nine years ago, we have built a reputation for excellence, innovation, and customer satisfaction, making us a trusted name in the travel industry.</p>
//           </Fade>
//         </div>
//       </ContentSection>

//       <ContentSection className="reverse">
//         <Slide direction="right">
//           <img src={corporateImage} alt="Corporate Registration" />
//         </Slide>
//         <div>
//           <Fade>
//             <h2>Corporate Registration</h2>
//             <p>Harvanna Travels and Tour Ltd is fully registered with the Corporate Affairs Commission (CAC) of Nigeria under Company Registration No. 7210040. Formerly known as Alex and Harva Nig Ltd, the company officially changed its name to Harvanna Travels and Tour Ltd by Special Resolution dated 19th February, 2025, and was incorporated under the Companies and Allied Matters Act 2020 on 5th November, 2023.</p>
//             <p>This incorporation was certified by Hussaini Ishaq Magaji SAN, Registrar-General, on 21st February, 2025.</p>
//           </Fade>
//         </div>
//       </ContentSection>

//       <ContentSection>
//         <Slide direction="left">
//           <img src={leadershipImage} alt="Leadership Team" />
//         </Slide>
//         <div>
//           <Fade>
//             <h2>Leadership Team</h2>
//             <p>Our dynamic company is led by two visionary directors who bring diverse expertise and extensive experience in the travel and recruitment sectors. Their leadership, combined with contributions from our six strategic partners located in Canada, Ireland, Australia, Spain, Portugal, and the UK, ensures that Harvanna Travels operates on a global scale while maintaining a local touch.</p>
//           </Fade>
//         </div>
//       </ContentSection>

//       <CredentialsSection>
//         <Fade>
//           <h2>Credentials and Memberships</h2>
//           <ul>
//             <li>
//               IATA-certified travel agent, demonstrating our commitment to international standards in travel management.
//             </li>
//             <li>
//               Member of the National Association of Nigeria Travel Agencies (NANTA) for over five years, underscoring our dedication to best industry practices.
//             </li>
//           </ul>
//         </Fade>
//       </CredentialsSection>

//       <ContentSection className="reverse">
//         <Slide direction="right">
//           <img src={recruitmentImage} alt="International Recruitment Agency" />
//         </Slide>
//         <div>
//           <Fade>
//             <h2>International Recruitment Agency</h2>
//             <p>In addition to travel services, Harvanna Travels is a recognized international recruitment agency with a broad global network. We specialize in seamless job placements, visa support, and navigating complex immigration procedures. We are proud to have been awarded “Best Work Permit Recruitment Agency in Nigeria”, highlighting our success and client-centered approach.</p>
//           </Fade>
//         </div>
//       </ContentSection>

//       <AchievementsSection>
//         <Fade>
//           <h2>Achievements</h2>
//           <ul>
//             <li>
//               <strong>Over 4,000 successful visa approvals</strong>, reflecting our professionalism and proven track record.
//             </li>
//             <li>
//               <strong>Over 2,000 student visa approvals</strong>, supporting aspiring students to study abroad and reach their academic goals.
//             </li>
//           </ul>
//         </Fade>
//       </AchievementsSection>

//       <ContentSection>
//         <Slide direction="left">
//           <img src={missionImage} alt="Our Mission" />
//         </Slide>
//         <div>
//           <Fade>
//             <h2>Our Mission</h2>
//             <p>At Harvanna Travels and Tour Ltd, our mission is to deliver outstanding travel solutions and recruitment services worldwide. We strive to create seamless experiences for our clients, whether they are embarking on a new adventure or seeking professional opportunities across borders.</p>
//           </Fade>
//         </div>
//       </ContentSection>

//       <MottoSection>
//         <Fade>
//           <h2>“Connecting the World, One Journey at a Time!”</h2>
//           <img src={mottoImage} alt="Motto" />
//         </Fade>
//       </MottoSection>

//       <FinalSection>
//         <Fade>
//           <h2>Join us at Harvanna Travels and Tour Ltd</h2>
//           <p>where your journey begins and every experience is crafted with care. Let our dedicated team help you explore the world or find your perfect job placement.</p>
//           <p>Experience the difference with Harvanna Travels – your trusted travel and recruitment partner.</p>
//           <img src={joinUsImage} alt="Join Us" />
//         </Fade>
//       </FinalSection>
//     </AboutUsContainer>
//   );
// };

// export default AboutUsPage;




import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';

// Import your images here (replace with your actual image paths)
import heroImage from '../Images2/h4.jpg';
import overviewImage from '../Images2/h5.jpg';
import corporateImage from '../Images2/h6.jpg';
import leadershipImage from '../Images2/h7.jpg';
import recruitmentImage from '../Images2/h8.jpg';
import achievementsImage from '../Images2/h9.jpg';
import missionImage from '../Images2/h10.jpg';
import mottoImage from '../Images2/h11.jpg';
import joinUsImage from '../Images2/h12.jpg';

// Define a new color palette for consistency
const colors = {
  primary: '#00509d',
  secondary: '#f7c400',
  accent: '#1a73e8',
  text: '#34495e',
  lightBackground: '#f8f9fa',
  mediumBackground: '#e6f0ff',
};

// Styled Components
const AboutUsContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: ${colors.text};
  line-height: 1.6;
  overflow-x: hidden;
`;

const Section = styled.div`
  padding: 80px 50px;
  @media (max-width: 767px) {
    padding: 60px 20px;
  }
`;

const HeroSection = styled(Section)`
  background: linear-gradient(rgba(0, 80, 157, 0.7), rgba(0, 80, 157, 0.7)), url(${heroImage}) center/cover no-repeat;
  color: #fff;
  text-align: center;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    z-index: 1;
    max-width: 900px;
  }

  h1 {
    font-size: 4.5rem;
    margin-bottom: 20px;
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.4;
    @media (max-width: 767px) {
      font-size: 1.1rem;
    }
  }
`;

const ContentSection = styled(Section)`
  background-color: ${props => props.isColored ? colors.mediumBackground : '#fff'};
  display: flex;
  flex-direction: row; // Desktop-first
  align-items: center;
  gap: 40px;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  &.reverse {
    flex-direction: row-reverse; // Desktop-first
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  img {
    width: 100%;
    // max-width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
    
    @media (max-width: 767px) {
      width: 100%;
      height: 300px;
      margin-bottom: 20px;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 767px) {
      width: 100%;
      align-items: center;
    }
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${colors.primary};
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background-color: ${colors.secondary};
      border-radius: 2px;

      @media (max-width: 767px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  p {
    color: ${colors.text};
    text-align: left;
    margin: 0;
    
    @media (max-width: 767px) {
      text-align: center;
    }
  }
`;

const CredentialsSection = styled(Section)`
  background-color: ${colors.lightBackground};
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 30px;
    color: ${colors.primary};
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row; // Desktop-first
    justify-content: center;
    gap: 50px;
    
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 30px;
    }
  }

  li {
    background-color: #fff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: flex-start;
    text-align: left;
    max-width: 550px;
    font-size: 1.1rem;
    position: relative;
    border-left: 5px solid ${colors.secondary};
    
    &::before {
      content: '✅';
      font-size: 1.5rem;
      margin-right: 15px;
      flex-shrink: 0;
    }
  }
`;

const AchievementsSection = styled(Section)`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.accent});
  color: #fff;
  text-align: center;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 40px;
    color: ${colors.secondary};
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr); // Desktop-first
    gap: 50px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  li {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    backdrop-filter: blur(5px);
  }

  strong {
    font-size: 2.5rem;
    color: ${colors.secondary};
    display: block;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
`;

const MottoSection = styled(Section)`
  text-align: center;
  background-color: ${colors.lightBackground};

  h2 {
    font-size: 3.5rem;
    font-style: italic;
    color: ${colors.primary};
    margin-bottom: 30px;
    position: relative;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  img {
    width: 300px;
    height:300px;
    border-radius: 50%;
    margin: 20px auto 0;
    display: block;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const FinalSection = styled(Section)`
  background: linear-gradient(to right, ${colors.primary}, ${colors.accent});
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3.5rem;
    color: ${colors.secondary};
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  p {
    max-width: 800px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
  }

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    margin-top: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <HeroSection>
        <Fade>
          <div>
            <h1>About Harvanna Travels and Tour Ltd</h1>
            <p>Your trusted travel and recruitment partner.</p>
          </div>
        </Fade>
      </HeroSection>

      <ContentSection isColored={false}>
        <Slide direction="left">
          <img src={overviewImage} alt="Overview" />
        </Slide>
        <div>
          <Fade>
            <h2>Overview</h2>
            <p>Harvanna Travels and Tour Ltd is a premier international travel agency and recruitment service dedicated to providing exceptional travel experiences and job placement services worldwide. Established nine years ago, we have built a reputation for excellence, innovation, and customer satisfaction, making us a trusted name in the travel industry.</p>
          </Fade>
        </div>
      </ContentSection>

      <ContentSection className="reverse" isColored={true}>
        <Slide direction="right">
          <img src={corporateImage} alt="Corporate Registration" />
        </Slide>
        <div>
          <Fade>
            <h2>Corporate Registration</h2>
            <p>Harvanna Travels and Tour Ltd is fully registered with the Corporate Affairs Commission (CAC) of Nigeria under Company Registration No. 7210040. Formerly known as Alex and Harva Nig Ltd, the company officially changed its name to Harvanna Travels and Tour Ltd by Special Resolution dated 19th February, 2025, and was incorporated under the Companies and Allied Matters Act 2020 on 5th November, 2023.</p>
            <p>This incorporation was certified by Hussaini Ishaq Magaji SAN, Registrar-General, on 21st February, 2025.</p>
          </Fade>
        </div>
      </ContentSection>

      <ContentSection isColored={false}>
        <Slide direction="left">
          <img src={leadershipImage} alt="Leadership Team" />
        </Slide>
        <div>
          <Fade>
            <h2>Leadership Team</h2>
            <p>Our dynamic company is led by two visionary directors who bring diverse expertise and extensive experience in the travel and recruitment sectors. Their leadership, combined with contributions from our six strategic partners located in Canada, Ireland, Australia, Spain, Portugal, and the UK, ensures that Harvanna Travels operates on a global scale while maintaining a local touch.</p>
          </Fade>
        </div>
      </ContentSection>

      <CredentialsSection>
        <Fade>
          <h2>Credentials and Memberships</h2>
          <ul>
            <li>
              IATA-certified travel agent, demonstrating our commitment to international standards in travel management.
            </li>
            <li>
              Member of the National Association of Nigeria Travel Agencies (NANTA) for over five years, underscoring our dedication to best industry practices.
            </li>
          </ul>
        </Fade>
      </CredentialsSection>

      <ContentSection className="reverse" isColored={true}>
        <Slide direction="right">
          <img src={recruitmentImage} alt="International Recruitment Agency" />
        </Slide>
        <div>
          <Fade>
            <h2>International Recruitment Agency</h2>
            <p>In addition to travel services, Harvanna Travels is a recognized international recruitment agency with a broad global network. We specialize in seamless job placements, visa support, and navigating complex immigration procedures. We are proud to have been awarded “Best Work Permit Recruitment Agency in Nigeria”, highlighting our success and client-centered approach.</p>
          </Fade>
        </div>
      </ContentSection>

      <AchievementsSection>
        <Fade>
          <h2>Achievements</h2>
          <ul>
            <li>
              <strong>Over 4,000 successful visa approvals</strong>, reflecting our professionalism and proven track record.
            </li>
            <li>
              <strong>Over 2,000 student visa approvals</strong>, supporting aspiring students to study abroad and reach their academic goals.
            </li>
          </ul>
        </Fade>
      </AchievementsSection>

      <ContentSection isColored={false}>
        <Slide direction="left">
          <img src={missionImage} alt="Our Mission" />
        </Slide>
        <div>
          <Fade>
            <h2>Our Mission</h2>
            <p>At Harvanna Travels and Tour Ltd, our mission is to deliver outstanding travel solutions and recruitment services worldwide. We strive to create seamless experiences for our clients, whether they are embarking on a new adventure or seeking professional opportunities across borders.</p>
          </Fade>
        </div>
      </ContentSection>

      <MottoSection>
        <Fade>
          <h2>“Connecting the World, One Journey at a Time!”</h2>
          <img src={mottoImage} alt="Motto" />
        </Fade>
      </MottoSection>

      <FinalSection>
        <Fade>
          <h2>Join us at Harvanna Travels and Tour Ltd</h2>
          <p>where your journey begins and every experience is crafted with care. Let our dedicated team help you explore the world or find your perfect job placement.</p>
          <p>Experience the difference with Harvanna Travels – your trusted travel and recruitment partner.</p>
          <img src={joinUsImage} alt="Join Us" />
        </Fade>
      </FinalSection>
    </AboutUsContainer>
  );
};

export default AboutUsPage;