
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Hero = styled.div`
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 3px 6px rgba(0,0,0,0.3);
`;

const HeroText = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover { transform: translateY(-5px); }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .card-body {
    padding: 1rem;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: #555;
    }

    button {
      background: #ff6b6b;
      color: #fff;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
      &:hover { background: #ff4757; }
    }
  }
`;

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('https://harvannatravelsandtour.com/api/get_hotels.php', {
        //   headers: { 'Cache-Control': 'no-cache' } // optional
        });

        if (response.data.success) {
          setHotels(response.data.hotels);
        } else {
          Swal.fire('Error', response.data.error, 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch hotels', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <Container>Loading...</Container>;

  return (
    <>
      <Hero>
        <HeroText>Discover Our Hotels</HeroText>
      </Hero>

      <Container>
        <HotelsGrid>
          {hotels.map(hotel => (
            <Card key={hotel.id}>
              <img src={`https://harvannatravelsandtour.com/api/uploads/hotels/${hotel.hotel_images[0]}`} alt={hotel.hotel_name} />
              <div className="card-body">
                <h2 style={{color:"blue"}}>{hotel.hotel_name.toUpperCase()}</h2>
                <p style={{ fontWeight: "bold" }}>
  NGN {Number(hotel.price_per_night).toLocaleString()}
</p>

                <button onClick={() => navigate(`/hoteldetail/${hotel.id}`)}>View</button>
              </div>
            </Card>
          ))}
        </HotelsGrid>
      </Container>
    </>
  );
};

export default HotelsPage;
