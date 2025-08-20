import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.3rem;
`;

const PayButton = styled.button`
  width: 100%;
  background: #ff6b6b;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #ff4757;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
`;

const HotelBookingModal = ({ hotel, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendPaymentEmail = (transaction) => {
    const payload = {
      reference: transaction.reference,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      amount: hotel.price_per_night,
      description: `Booking for ${hotel.hotel_name}`,
    };

    fetch("https://harvannatravelsandtour.com/api/send_hotel_booking_details.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Emails sent successfully");
        } else {
          console.error("Email sending failed:", data.error);
        }
      })
      .catch((err) => console.error("Error sending email:", err));
  };

  const handlePayment = () => {
    const { name, email, phone } = formData;
    const amount = hotel.price_per_night;

    if (!name || !email || !phone) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
        // key: 'pk_test_41a396ef9a4f9c53cf4f1139cc7e7002fc085f55',
      key: "pk_live_64a5f718f2e9bfe267d3c4a93c2b8a90e66b915a",
      email,
      firstname: name,
      phone,
      amount: Number(amount) * 100, // kobo
      onSuccess: (transaction) => {
        sendPaymentEmail(transaction); // send booking + payment details via PHP
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Our agent shall get back to you for confirmation! Please Check your email inbox or spam folder for details.",
          confirmButtonColor: "#3085d6",
        });
        onClose();
      },
      onCancel: () => {
        Swal.fire({
          icon: "info",
          title: "Payment Cancelled",
          text: "You cancelled the transaction.",
        });
      },
      onError: (error) => {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: `Payment failed: ${error.message}`,
        });
      },
    });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2 style={{color:"blue"}}>Book {hotel.hotel_name}</h2>

        <Label>Name</Label>
        <Input name="name" value={formData.name} onChange={handleChange} />

        <Label>Email</Label>
        <Input name="email" value={formData.email} onChange={handleChange} />

        <Label>Phone</Label>
        <Input name="phone" value={formData.phone} onChange={handleChange} />

        <PayButton onClick={handlePayment}>
          Pay NGN {Number(hotel.price_per_night).toLocaleString()}
        </PayButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default HotelBookingModal;
