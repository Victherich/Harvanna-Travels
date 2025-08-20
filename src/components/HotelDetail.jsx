
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaBed } from 'react-icons/fa';
import HotelBookingModal from './HotelBookingModal';

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding-top:100px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color:blue;
  text-transform:uppercase;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const DetailItem = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
  span {
    font-weight: normal;
    margin-left: 0.5rem;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ff6b6b;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #ff4757;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  svg {
    font-size: 1.1rem;
  }
`;



const BookNowButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ff6b6b;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #ff4757;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  svg {
    font-size: 1.2rem;
  }
`;

// Centering container
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* full viewport height */

`;


const HotelDetail = () => {
  const { id } = useParams(); // URL param like /hotel/123
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [hotelBookingModal, setHotelBookingModal]=useState(false);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`https://harvannatravelsandtour.com/api/get_hotel_by_id.php?id=${id}`, {
          headers: { 'Cache-Control': 'no-cache' } // Prevent caching
        });

        if (response.data.success) {
          setHotel(response.data.hotel);
          console.log(response.data.hotel)
        } else {
          Swal.fire('Error', response.data.error, 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch hotel details', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) return <Container>Loading...</Container>;
  if (!hotel) return <Container>No hotel found.</Container>;

  return (
    <Container>
         <BackButton onClick={() => navigate(-1)}>
      <FaArrowLeft />
      Back
    </BackButton>
      <Title>{hotel.hotel_name}</Title>
      <Description>{hotel.description}</Description>

      <DetailItem>
  Price per night: NGN
  <span>{Number(hotel.price_per_night).toLocaleString()}</span>
</DetailItem>

      {/* <DetailItem>Available Rooms: <span>{hotel.available_rooms}</span></DetailItem> */}
      <DetailItem>Location: <span>{hotel.location}</span></DetailItem>

      {hotel.hotel_images.length > 0 && (
        <ImageGallery>
          {hotel.hotel_images.map((img, idx) => (
            <img key={idx} src={`https://harvannatravelsandtour.com/api/uploads/hotels/${img}`} alt={hotel.hotel_name} />
          ))}
        </ImageGallery>
      )}

      <CenterContainer>

        <BookNowButton onClick={() => setHotelBookingModal(true)}>
  <FaBed /> Book Now
</BookNowButton>
      </CenterContainer>
         

      {hotelBookingModal&&<HotelBookingModal hotel={hotel} onClose={()=>setHotelBookingModal(false)}/>}
    </Container>
  );
};

export default HotelDetail;
