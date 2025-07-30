
import React from 'react';
import styled from 'styled-components';
import logo from '../Images/logo.png'
import { useNavigate } from 'react-router-dom';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #0d286d; /* Dark blue background */
  color: #ffffff; /* White text color */
  padding: 80px 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 0 20px;
  max-width: 280px; /* Adjust as needed */

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CompanyDescription = styled(Section)`
  max-width: 350px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 50px; /* Adjust as needed */
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
  cursor:pointer;
`;

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const CopyrightSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  width: 90%;
  max-width: 1200px;
  text-align: center;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const SettingsLink = styled.p`
  font-size: 12px;
  margin-top: 10px; /* Adjust as needed for spacing from copyright */
  a {
    color: #4CAF50; /* Example color, adjust to match original if known */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// React Component
const Footer = () => {
const navigate = useNavigate();


  return (
    <FooterContainer>
      <FooterContent>
        <CompanyDescription>
          <LogoContainer>
            {/* You'll need to replace 'path/to/your/logo.png' with the actual path to your Aspom logo image */}
            <Logo src={logo} alt="Harvanna Travels and Tour Ltd Agency Logo" />
            {/* <LogoText>Aspom</LogoText> */}
          </LogoContainer>
          <p>
            Harvanna Travels and Tour Ltd Agency was founded on the 2nd of February, 2012 and has remained at the top of its
            game providing visa assistants, hotels, holiday packages, tours and flight deals to her clients.
          </p>
        </CompanyDescription>

        <Section>
          <SectionTitle>Company</SectionTitle>
          <LinkList>
            <ListItem><StyledLink onClick={()=>navigate('/about')}>About Us</StyledLink></ListItem>
            <ListItem><StyledLink onClick={()=>navigate('/services')}>Services</StyledLink></ListItem>
            {/* <ListItem><StyledLink href="#">Affiliates</StyledLink></ListItem> */}
            {/* <ListItem><StyledLink href="#">Careers</StyledLink></ListItem> */}
            {/* <ListItem><StyledLink href="#">Reviews</StyledLink></ListItem> */}
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Support</SectionTitle>
          <LinkList>
            <ListItem><StyledLink onClick={()=>navigate('/contactus')}>Contact Us</StyledLink></ListItem>
            <ListItem><StyledLink onClick={()=>navigate('/blogs')}>Blog</StyledLink></ListItem>
            <ListItem><StyledLink onClick={()=>navigate('/faq')}>FAQ</StyledLink></ListItem>
            <ListItem><StyledLink href="#">Terms Of Use</StyledLink></ListItem>
            <ListItem><StyledLink href="#">Privacy Policy</StyledLink></ListItem>
            <ListItem><StyledLink href="#">Flights</StyledLink></ListItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Our Office</SectionTitle>
          <ContactInfo>
            <Icon><i className="fas fa-map-marker-alt"></i></Icon> {/* Font Awesome icon */}
            <span>4th Floor Brasas's Place, 69 Admiralty Way, Lekki Phase 1, Lagos</span>
          </ContactInfo>
          <ContactInfo>
            <Icon><i className="fas fa-envelope"></i></Icon> {/* Font Awesome icon */}
            <StyledLink href="mailto:info@aspomtravels.com">info@aspomtravels.com</StyledLink>
          </ContactInfo>
          <ContactInfo>
            <Icon><i className="fas fa-phone"></i></Icon> {/* Font Awesome icon */}
            <span>+234-816-654-9711</span>
          </ContactInfo>
        </Section>
      </FooterContent>

      <CopyrightSection>
        <SocialIcons>
          {/* Replace with actual social media icons/links if available, e.g., Font Awesome */}
          <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
          <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
          <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
          <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
        </SocialIcons>
        <span>Copyright © 2012 - 2025 Harvanna Travels and Tour Ltds. All rights reserved.</span>
        {/* <SettingsLink>
          <a href="#">Powered by Elexdon Technologies Limited</a>
        </SettingsLink> */}
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;