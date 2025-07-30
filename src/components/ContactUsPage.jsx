
import React from 'react';
import styled from 'styled-components';
import contactbg from '../Images/contactbg.png'
import Swal from 'sweetalert2';

// --- Styled Components for the entire page ---

const ContactPageContainer = styled.div`
  font-family: 'Inter', sans-serif; /* Using Inter font as per instructions */
  background-color: #f8f8f8; /* Light background for the page */
  color: #333333;
`;

// --- Styled Components for the Hero Section ---
const HeroSection = styled.section`
  position: relative; /* Needed for positioning the overlay */
  background-image: url(${contactbg}); /* REPLACE with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;

  padding: 80px 40px;
    padding-top:150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px; /* Ensure a decent height */
  overflow: hidden; /* Ensures content stays within bounds */

  @media (max-width: 768px) {
    padding: 60px 20px;
    min-height: 250px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Dark overlay for text readability */
  z-index: 0; /* Behind content */
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1; /* Above the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for better contrast */

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  max-width: 700px;
  line-height: 1.5;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Add text shadow */

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// --- Contact Form Section Styles ---
const ContactFormSection = styled.section`
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 700px;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FormTitle = styled.h2`
  font-size: 32px;
  color: #0d286d;
  margin-bottom: 25px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack inputs on smaller screens */
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(4) { /* Message field spans two columns */
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-size: 15px;
  color: #555555;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0d286d;
    box-shadow: 0 0 0 3px rgba(13, 40, 109, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333333;
  min-height: 120px;
  resize: vertical; /* Allow vertical resizing */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0d286d;
    box-shadow: 0 0 0 3px rgba(13, 40, 109, 0.2);
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1; /* Button spans all columns */
  background-color: #0d286d; /* Red button */
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: gray; /* Darker red on hover */
  }
`;

// --- Our Office Section Styles (from image_cee8cc.png) ---
const OurOfficeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  background-color: #f8f8f8; /* Light background */
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const OfficeContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: flex-start; /* Align map and text to top */
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  min-width: 300px;
  height: 400px; /* Fixed height for the map */
  background-color: #e0e0e0; /* Placeholder for map */
  border-radius: 8px;
  overflow: hidden; /* Ensure map content stays within bounds */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative; /* For map overlay if needed */

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const OfficeInfo = styled.div`
  flex: 1;
  text-align: left;
  max-width: 500px; /* Limit width of info text */

  @media (max-width: 1024px) {
    text-align: center;
    margin-top: 30px;
  }
`;

const YellowStripes = styled.div`
  display: flex;
  margin-bottom: 20px;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #ffde00; /* Yellow color */
    margin: 0 2px;
    transform: skewX(-20deg);
  }

  @media (max-width: 1024px) {
    justify-content: center; /* Center stripes on mobile */
    margin: 0 auto 20px auto;
  }
`;

const OfficeTitle = styled.h2`
  font-size: 38px;
  color: #0d286d;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: flex-start; /* Align icon and text to top */
  margin-bottom: 15px;
  font-size: 16px;
  color: #555555;

  i {
    font-size: 20px;
    color: #0d286d; /* Dark blue icon color */
    margin-right: 15px;
    margin-top: 3px; /* Adjust vertical alignment of icon */
  }

  a {
    color: #555555;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    justify-content: center; /* Center details on mobile */
    text-align: center;
  }
`;


// --- React Component: ContactUsPage ---
const ContactUsPage = () => {


 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  // Show loading modal
  Swal.fire({
    title: 'Sending...',
    text: 'Please wait while we send your message.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await fetch('https://harvannatravelsandtour.com/api/contact_form_endpoint.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: result.message || 'Thank you for reaching out. We’ll be in touch shortly.',
      });
      e.target.reset(); // Clear form after success
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: result.error || 'Something went wrong. Please try again later.',
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Network Error',
      text: 'Could not connect to the server. Please try again later.',
    });
  }
};


  // Google Maps Embed URL for "4th Floor Brasas's Place, 69 Admiralty Way, Lekki Phase 1, Lagos"
  // You can generate this from Google Maps by searching the address, clicking Share, then Embed a map.
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.300589886477!2d3.472719674991091!3d6.47714579350567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf45300f89823%3A0x7179e8e5d3c1374!2s69%20Admiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"; // Placeholder URL, replace with actual if needed

  return (
    <ContactPageContainer>
      {/* Hero Section */}
       <HeroSection>
    <HeroOverlay /> 
    <HeroContent> 
      <HeroTitle>Contact Us</HeroTitle>
      <HeroSubtitle>
        We'd love to hear from you! Reach out to us for any inquiries, bookings, or support.
      </HeroSubtitle>
    </HeroContent>
  </HeroSection>

      {/* Contact Form Section */}
      <ContactFormSection>
        <FormWrapper>
          <FormTitle>Send Us a Message</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" placeholder="Your Message" rows="5" required />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormWrapper>
      </ContactFormSection>

      {/* Our Office Section (from image_cee8cc.png) */}
      <OurOfficeSection>
        <OfficeContentWrapper>
          <MapContainer>
            {/* Using an iframe for Google Maps embed */}
            <iframe
              src={googleMapsEmbedUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harvanna Travels and Tour Ltd Office Location"
            ></iframe>
          </MapContainer>
          <OfficeInfo>
            <YellowStripes>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </YellowStripes>
            <OfficeTitle>We'd Love to See You On-board</OfficeTitle>
            <ContactDetail>
              <i className="fas fa-map-marker-alt"></i>
              <span>4th Floor Brasas's Place, 69 Admiralty Way, Lekki Phase 1 100242, Lagos</span>
            </ContactDetail>
            <ContactDetail>
              <i className="fas fa-phone"></i>
              <span>
                <a href="tel:+2349082212663">+234 908 221 2663</a>, <a href="tel:+2348172699697">+234 817 269 9697</a>
              </span>
            </ContactDetail>
            <ContactDetail>
              <i className="fas fa-envelope"></i>
              <a href="mailto:holidays@aspomtravels.com">holidays@aspomtravels.com</a>
            </ContactDetail>
          </OfficeInfo>
        </OfficeContentWrapper>
      </OurOfficeSection>
    </ContactPageContainer>
  );
};

export default ContactUsPage;