
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaPlane, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch, FaDollarSign } from 'react-icons/fa';
import Swal from 'sweetalert2';
import PaystackPop from '@paystack/inline-js';
import fb from '../Images2/fb.png'

// --- Global Constants ---
const FLIGHT_PRICE_PER_PERSON = 150000; // Fixed price in NGN
const BUSINESS_FEE = 1500; // Fixed business fee in NGN
const BACKGROUND_IMAGE_URL = "https://via.placeholder.com/1920x1080/D3D3D3/000000?text=Harvanna+Travels"; // Placeholder background image

// --- Styled Components ---

const BookingSectionWrapper = styled.div`
padding-top:100px;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${fb});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const BookingFormContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: #1246c9ff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
`;

const FormTitle = styled.h2`
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
`;

const TripTypeSelect = styled.select`
  appearance: none;
  background-color: #ffffff;
  color: #0d286d;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 18px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #333333;
  
  &::placeholder {
    color: #999999;
  }
`;

const InputIconContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  color: #0d286d;
  font-size: 20px;
`;

const ActionButton = styled.button`
  background-color: #e60000;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #cc0000;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  ${props => props.$secondary && css`
    background-color: #0d286d;
    &:hover {
      background-color: #0a205a;
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
  }
`;

const ResultsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  color: #333;
  text-align: center;
  width: 100%;
  
  h3 {
    color: #0d286d;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }

  strong {
    color: #e60000;
  }
`;

const PassengerInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const PassengerInputGroup = styled.div`
  background-color: #f0f2f5;
  padding: 20px;
  border-radius: 10px;
  
  h4 {
    color: #333;
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const BackButton2 = styled.button`
  background: none;
  border: none;
  color: #222;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

// --- React Component ---
const FlightBookingApp = () => {
  const [step, setStep] = useState('search');
  const [formData, setFormData] = useState({
    tripType: 'Round Trip',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalAmount = formData.passengers * FLIGHT_PRICE_PER_PERSON + BUSINESS_FEE;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFlightSearch = (e) => {
    e.preventDefault();
    if (!formData.origin || !formData.destination || !formData.departureDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all the required flight details.',
      });
      return;
    }
    setStep('results');
  };

  const handleProceedToBooking = () => {
    setStep('details');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in your contact information.',
      });
      return;
    }
    payWithPaystack();
  };

  const payWithPaystack = () => {
    setIsSubmitting(true);
    const paystack = new PaystackPop();
    paystack.newTransaction({
        //  key: 'pk_test_41a396ef9a4f9c53cf4f1139cc7e7002fc085f55',
      key: 'pk_live_64a5f718f2e9bfe267d3c4a93c2b8a90e66b915a',
      amount: totalAmount * 100, // in kobo
      email: formData.email,
      firstname: formData.name,
      phone: formData.phone,
      onSuccess: (transaction) => {
        sendPaymentEmail(transaction.reference, formData);
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'An email with your booking confirmation has been sent. Please check your inbox or spam folder.',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          setStep('search');
        });
      },
      onCancel: () => {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'info',
          title: 'Payment Cancelled',
          text: 'You cancelled the transaction.',
        });
      },
      onClose: () => {
        setIsSubmitting(false);
      },
    });
  };

  const sendPaymentEmail = async (reference, details) => {
    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/send-booking-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, ...details, amount: totalAmount }),
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Failed to send payment email');
      }
      console.log('✅ Booking email sent successfully.');
    } catch (error) {
      console.error('❌ Error sending booking email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Email Failed',
        text: 'Payment was successful, but email could not be sent. Please contact support.',
      });
    }
  };

  const renderContent = () => {
    switch (step) {
      case 'search':
        return (
          <form onSubmit={handleFlightSearch}>
            <FormTitle>Book a Flight</FormTitle>
            <FormRow>
              <FormInput>
                <TripTypeSelect name="tripType" value={formData.tripType} onChange={handleChange}>
                  <option>Round Trip</option>
                  <option>One Way</option>
                </TripTypeSelect>
              </FormInput>
              <p>From:</p>
              <InputIconContainer>
                <InputIcon><FaMapMarkerAlt /></InputIcon>
                <InputField name="origin" placeholder="From?" value={formData.origin} onChange={handleChange} required />
              </InputIconContainer>

              <p>To:</p>
              <InputIconContainer>
                <InputIcon><FaMapMarkerAlt /></InputIcon>
                <InputField name="destination" placeholder="To?" value={formData.destination} onChange={handleChange} required />
              </InputIconContainer>
            </FormRow>
            <FormRow>
                <p>Depature Date:</p>
              <InputIconContainer>
                <InputIcon><FaCalendarAlt /></InputIcon>
                <InputField
                  name="departureDate"
                  type="date"
                  placeholder="Departure Date"
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                />
              </InputIconContainer>

              <p>Return Date:</p>
              <InputIconContainer>
                <InputIcon><FaCalendarAlt /></InputIcon>
                <InputField
                  name="returnDate"
                  type="date"
                  placeholder="Return Date"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required={formData.tripType === 'Round Trip'}
                  disabled={formData.tripType === 'One Way'}
                />
              </InputIconContainer>
              <p>Number of Passengers:</p>
              <InputIconContainer>
                <InputIcon><FaUser /></InputIcon>
                <InputField
                  name="passengers"
                  type="number"
                  placeholder="Passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </InputIconContainer>
            </FormRow>
            <ActionButton type="submit">
              <FaSearch /> Search
            </ActionButton>
          </form>
        );

      case 'results':
        return (
          <ResultsContainer>
            <FormTitle>Flight Found!</FormTitle>
            <p>Based on your search, here is a suggested flight:</p>
            <p><strong>{formData.origin}</strong> to <strong>{formData.destination}</strong></p>
            <p>Departure: <strong>{formData.departureDate}</strong></p>
            {formData.tripType === 'Round Trip' && <p>Return: <strong>{formData.returnDate}</strong></p>}
            <p>Passengers: <strong>{formData.passengers}</strong></p>
            <h3>Total Price: <strong>NGN {totalAmount.toLocaleString()}</strong></h3>
            <p style={{marginTop: '20px', fontStyle: 'italic', fontWeight:"bold", fontSize:"1.1rem", textDecoration:"underline"}}>Note: This is a pre-determined offer to initiate your booking. A travel agent will contact you for final arrangements.</p>
            <ActionButton onClick={handleProceedToBooking} style={{marginTop: '20px'}}>
              Proceed to Booking
            </ActionButton>
            <BackButton2 onClick={() => setStep('search')}>&larr; Back to Search</BackButton2>
          </ResultsContainer>
        );

      case 'details':
        return (
          <form onSubmit={handlePayment}>
            <FormTitle>Passenger & Contact Details</FormTitle>
            <PassengerInputSection>
              <FormInput>
                <Label htmlFor="name">Full Name</Label>
                <InputField name="name" type="text" value={formData.name} onChange={handleChange} required />
              </FormInput>
              <FormInput>
                <Label htmlFor="email">Email Address</Label>
                <InputField name="email" type="email" value={formData.email} onChange={handleChange} required />
              </FormInput>
              <FormInput>
                <Label htmlFor="phone">Phone Number</Label>
                <InputField name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </FormInput>
            </PassengerInputSection>
            
            <FormRow style={{ marginTop: '30px' }}>
              <ActionButton type="submit" disabled={isSubmitting}>
                 {isSubmitting ? 'Processing...' : `Pay NGN ${totalAmount.toLocaleString()}`}
              </ActionButton>
            </FormRow>
            <BackButton onClick={() => setStep('results')}>&larr; Back to Results</BackButton>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <BookingSectionWrapper>
      <Overlay />
      <BookingFormContainer>
        {renderContent()}
      </BookingFormContainer>
    </BookingSectionWrapper>
  );
};

export default FlightBookingApp;