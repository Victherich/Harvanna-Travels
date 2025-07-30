import React from 'react'; // Added React import
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ab1 from '../Images/ab1.jpg';
import ab2 from "../Images/ab2.jpg"

// --- Global Page Container ---
const AboutUsPageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f8f8; /* Light background for the page */
  color: #333333;
  line-height: 1.6;
  overflow-x: hidden; /* Prevent horizontal scroll from animations */
`;

// --- Animation Keyframes ---
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// --- Reusable Animated Styled Component Wrapper ---
const AnimatedDiv = styled.div`
  opacity: 0; /* Hidden by default */
  ${props =>
    props.$inView &&
    css`
      animation: ${props.$animationType || fadeIn} 0.8s ease-out forwards;
      animation-delay: ${props.$delay || '0s'};
    `}
`;

// --- Hero Section Styles ---
const HeroSection = styled.section`
  position: relative;
  background-image: url(${ab1}); /* REPLACE with your actual hero image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 100px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 20px;
    min-height: 350px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 58px;
  margin-bottom: 20px;
  font-weight: bold;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 42px;
  }
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  max-width: 900px;
  line-height: 1.6;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

// --- General Section Styling ---
const SectionWrapper = styled.section`
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.$bgColor || 'transparent'};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  color: #0d286d;
  margin-bottom: 25px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #555555;
  max-width: 800px;
  margin: 0 auto 50px auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

// --- Our Story Section ---
const StoryContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  text-align: left;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const StoryText = styled.div`
  flex: 1;
`;

const StoryImage = styled.img`
  flex: 1;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

// --- Mission & Vision Section ---
const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MVCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MVIcon = styled.div`
  font-size: 60px;
  color: #e60000; /* Red accent */
  margin-bottom: 20px;
`;

const MVTitle = styled.h3`
  font-size: 28px;
  color: #0d286d;
  margin-bottom: 15px;
  font-weight: bold;
`;

const MVDescription = styled.p`
  font-size: 16px;
  color: #555555;
  line-height: 1.7;
`;

// --- Our Values Section ---
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueItem = styled.div`
  background-color: #f0f8ff; /* Light blue background */
  border-left: 5px solid #0d286d; /* Dark blue border accent */
  border-radius: 8px;
  padding: 25px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h4 {
    font-size: 20px;
    color: #0d286d;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 15px;
    color: #555555;
  }
`;

// --- Why Choose Us Section ---
const WhyChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    font-size: 50px;
    color: #0d286d; /* Dark blue icon */
    margin-bottom: 15px;
  }

  h4 {
    font-size: 22px;
    color: #0d286d;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 15px;
    color: #555555;
  }
`;

// --- Call To Action Section ---
const CallToActionSection = styled.section`
  background-color: rgba(0,0,0,0.8);
  color: #ffffff;
  padding: 80px 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CallToActionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CallToActionText = styled.p`
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto 40px auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: #e60000;
  color: #ffffff;
  padding: 15px 35px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #cc0000;
    transform: translateY(-3px);
  }
`;

// --- React Component: AboutUsPage ---
const AboutUsPage = () => {
  // Hero Section Animations
  const { ref: heroTitleRef, inView: heroTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: heroSubtitleRef, inView: heroSubtitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Our Story Section Animations
  const { ref: storyTitleRef, inView: storyTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  // CORRECTED: Defining storyTextRef here
  const { ref: storyTextRef, inView: storyTextInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: storyImageRef, inView: storyImageInView } = useInView({ triggerOnce: true, threshold: 0.2 });


  // Mission & Vision Section Animations
  const { ref: mvTitleRef, inView: mvTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: mvDescRef, inView: mvDescInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: missionCardRef, inView: missionCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: visionCardRef, inView: visionCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Our Values Section Animations
  const { ref: valuesTitleRef, inView: valuesTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: valuesDescRef, inView: valuesDescInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: value1Ref, inView: value1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: value2Ref, inView: value2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: value3Ref, inView: value3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: value4Ref, inView: value4InView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Why Choose Us Section Animations
  const { ref: whyChooseTitleRef, inView: whyChooseTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyChooseDescRef, inView: whyChooseDescInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: feature1Ref, inView: feature1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: feature2Ref, inView: feature2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: feature3Ref, inView: feature3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: feature4Ref, inView: feature4InView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Call to Action Animations
  const { ref: ctaTitleRef, inView: ctaTitleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaTextRef, inView: ctaTextInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaButtonRef, inView: ctaButtonInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <AboutUsPageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <AnimatedDiv ref={heroTitleRef} $inView={heroTitleInView} $animationType={fadeInUp}>
            <HeroTitle>About Harana Travels and Tours Ltd.</HeroTitle>
          </AnimatedDiv>
          <AnimatedDiv ref={heroSubtitleRef} $inView={heroSubtitleInView} $animationType={fadeInUp} $delay="0.2s">
            <HeroSubtitle>
              Your trusted partner in crafting unforgettable journeys across the globe.
            </HeroSubtitle>
          </AnimatedDiv>
        </HeroContent>
      </HeroSection>

      {/* Our Story Section */}
      <SectionWrapper>
        <AnimatedDiv ref={storyTitleRef} $inView={storyTitleInView} $animationType={fadeInUp}>
          <SectionTitle>Our Story: Passion for Exploration</SectionTitle>
        </AnimatedDiv>
        <StoryContentWrapper>
          <AnimatedDiv ref={storyTextRef} $inView={storyTextInView} $animationType={fadeInLeft}> {/* Applying ref here */}
            <StoryText>
              {/* Removed storyDescRef as it's now wrapped by storyTextRef */}
              <SectionDescription>
                Harana Travels and Tours Ltd. began with a simple yet profound vision: to make the world accessible to everyone. Founded by a team of avid travelers, we understand the transformative power of discovery and the joy of new experiences.
              </SectionDescription>
              {/* Added individual refs for staggered animation if desired, otherwise rely on parent */}
              <p style={{textAlign: 'left', marginBottom: '15px'}}>
                For over a decade, we have dedicated ourselves to curating exceptional travel packages, offering seamless visa processing, and providing unparalleled customer service. Our journey is built on a foundation of trust, expertise, and a genuine desire to see our clients embark on their dream adventures.
              </p>
              <p style={{textAlign: 'left'}}>
                From serene beach getaways to thrilling mountain expeditions, bustling city breaks to tranquil cultural immersions, we meticulously plan every detail so you can focus on making memories.
              </p>
            </StoryText>
          </AnimatedDiv>
          <AnimatedDiv ref={storyImageRef} $inView={storyImageInView} $animationType={fadeInRight}>
            <StoryImage src={ab2} alt="Our Story" />
          </AnimatedDiv>
        </StoryContentWrapper>
      </SectionWrapper>

      {/* Mission & Vision Section */}
      <SectionWrapper $bgColor="#f0f8ff"> {/* Light blue background */}
        <AnimatedDiv ref={mvTitleRef} $inView={mvTitleInView} $animationType={fadeInUp}>
          <SectionTitle>Our Mission & Vision</SectionTitle>
        </AnimatedDiv>
        <AnimatedDiv ref={mvDescRef} $inView={mvDescInView} $animationType={fadeInUp} $delay="0.2s">
          <SectionDescription>
            Guiding our every step is a clear purpose and a bold aspiration for the future of travel.
          </SectionDescription>
        </AnimatedDiv>
        <MissionVisionGrid>
          <AnimatedDiv ref={missionCardRef} $inView={missionCardInView} $animationType={fadeInUp}>
            <MVCard>
              <MVIcon><i className="fas fa-bullseye"></i></MVIcon>
              <MVTitle>Our Mission</MVTitle>
              <MVDescription>
                To provide accessible, high-quality, and personalized travel solutions that inspire discovery, foster cultural understanding, and create lifelong memories for every traveler.
              </MVDescription>
            </MVCard>
          </AnimatedDiv>
          <AnimatedDiv ref={visionCardRef} $inView={visionCardInView} $animationType={fadeInUp} $delay="0.2s">
            <MVCard>
              <MVIcon><i className="fas fa-eye"></i></MVIcon>
              <MVTitle>Our Vision</MVTitle>
              <MVDescription>
                To be the leading and most trusted travel and tours company, recognized globally for innovation, customer satisfaction, and a commitment to sustainable tourism.
              </MVDescription>
            </MVCard>
          </AnimatedDiv>
        </MissionVisionGrid>
      </SectionWrapper>

      {/* Our Values Section */}
      <SectionWrapper>
        <AnimatedDiv ref={valuesTitleRef} $inView={valuesTitleInView} $animationType={fadeInUp}>
          <SectionTitle>Core Values</SectionTitle>
        </AnimatedDiv>
        <AnimatedDiv ref={valuesDescRef} $inView={valuesDescInView} $animationType={fadeInUp} $delay="0.2s">
          <SectionDescription>
            The principles that define who we are and how we operate, ensuring excellence in every interaction.
          </SectionDescription>
        </AnimatedDiv>
        <ValuesGrid>
          <AnimatedDiv ref={value1Ref} $inView={value1InView} $animationType={fadeInUp}>
            <ValueItem>
              <h4>Customer-Centricity</h4>
              <p>Our clients are at the heart of everything we do. We listen, understand, and tailor experiences to exceed expectations.</p>
            </ValueItem>
          </AnimatedDiv>
          <AnimatedDiv ref={value2Ref} $inView={value2InView} $animationType={fadeInUp} $delay="0.1s">
            <ValueItem>
              <h4>Integrity & Trust</h4>
              <p>We operate with honesty, transparency, and a commitment to building lasting relationships based on mutual trust.</p>
            </ValueItem>
          </AnimatedDiv>
          <AnimatedDiv ref={value3Ref} $inView={value3InView} $animationType={fadeInUp} $delay="0.2s">
            <ValueItem>
              <h4>Excellence & Innovation</h4>
              <p>We continuously strive for the highest standards in service delivery and embrace innovative solutions to enhance travel.</p>
            </ValueItem>
          </AnimatedDiv>
          <AnimatedDiv ref={value4Ref} $inView={value4InView} $animationType={fadeInUp} $delay="0.3s">
            <ValueItem>
              <h4>Passion for Travel</h4>
              <p>Our love for exploration fuels our dedication to creating inspiring and enriching journeys for all.</p>
            </ValueItem>
          </AnimatedDiv>
        </ValuesGrid>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper $bgColor="#f0f8ff">
        <AnimatedDiv ref={whyChooseTitleRef} $inView={whyChooseTitleInView} $animationType={fadeInUp}>
          <SectionTitle>Why Choose Harana Travels?</SectionTitle>
        </AnimatedDiv>
        <AnimatedDiv ref={whyChooseDescRef} $inView={whyChooseDescInView} $animationType={fadeInUp} $delay="0.2s">
          <SectionDescription>
            Experience the difference with a travel partner committed to your comfort, safety, and satisfaction.
          </SectionDescription>
        </AnimatedDiv>
        <WhyChooseUsGrid>
          <AnimatedDiv ref={feature1Ref} $inView={feature1InView} $animationType={fadeInUp}>
            <FeatureCard>
              <div className="icon"><i className="fas fa-shield-alt"></i></div>
              <h4>Reliable & Secure</h4>
              <p>Your safety and peace of mind are our top priorities. We partner with trusted providers globally.</p>
            </FeatureCard>
          </AnimatedDiv>
          <AnimatedDiv ref={feature2Ref} $inView={feature2InView} $animationType={fadeInUp} $delay="0.1s">
            <FeatureCard>
              <div className="icon"><i className="fas fa-headset"></i></div>
              <h4>24/7 Support</h4>
              <p>Our dedicated team is always available to assist you, from planning to your return.</p>
            </FeatureCard>
          </AnimatedDiv>
          <AnimatedDiv ref={feature3Ref} $inView={feature3InView} $animationType={fadeInUp} $delay="0.2s">
            <FeatureCard>
              <div className="icon"><i className="fas fa-dollar-sign"></i></div>
              <h4>Best Value Deals</h4>
              <p>We offer competitive pricing without compromising on quality or experience.</p>
            </FeatureCard>
          </AnimatedDiv>
          <AnimatedDiv ref={feature4Ref} $inView={feature4InView} $animationType={fadeInUp} $delay="0.3s">
            <FeatureCard>
              <div className="icon"><i className="fas fa-route"></i></div>
              <h4>Customized Itineraries</h4>
              <p>Every journey is unique. We tailor packages to fit your dreams, budget, and preferences.</p>
            </FeatureCard>
          </AnimatedDiv>
        </WhyChooseUsGrid>
      </SectionWrapper>

      {/* Call To Action Section */}
      <CallToActionSection>
        <AnimatedDiv ref={ctaTitleRef} $inView={ctaTitleInView} $animationType={fadeInUp}>
          <CallToActionTitle>Ready to Explore the World?</CallToActionTitle>
        </AnimatedDiv>
        <AnimatedDiv ref={ctaTextRef} $inView={ctaTextInView} $animationType={fadeInUp} $delay="0.2s">
          <CallToActionText>
            Contact Harana Travels and Tours Ltd. today to start planning your next unforgettable adventure.
          </CallToActionText>
        </AnimatedDiv>
        <AnimatedDiv ref={ctaButtonRef} $inView={ctaButtonInView} $animationType={fadeInUp} $delay="0.4s">
          <PrimaryButton href="/contactus">Get in Touch</PrimaryButton>
        </AnimatedDiv>
      </CallToActionSection>
    </AboutUsPageContainer>
  );
};

export default AboutUsPage;