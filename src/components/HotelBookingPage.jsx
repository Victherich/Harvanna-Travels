// // UI1
// // // HotelBookingPage.jsx
// // import React, { useEffect, useState, useRef } from "react";
// // import styled from "styled-components";
// // import { FaSearch, FaBed, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";

// // const RAPIDAPI_KEY = "a148c5c47cmshb2e3f102fefc8a5p1c21bcjsn70935ecb599b"; // replace with backend proxy
// // const RAPIDAPI_HOST = "travel-advisor.p.rapidapi.com";

// // // ---------------- Styled Components ----------------
// // const PageWrapper = styled.div`
// //   font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
// //     Arial;
// //   color: #0f172a;
// //   min-height: 100vh;
// //   background: linear-gradient(180deg, #f6f8ff 0%, #ffffff 100%);
// // `;

// // const Hero = styled.section`
// //   position: relative;
// //   background-image: linear-gradient(135deg, rgba(13,40,109,0.85), rgba(230,0,0,0.85)),
// //     url("https://images.unsplash.com/photo-1501117716987-c8e6d4bf6e74?auto=format&fit=crop&w=1400&q=80");
// //   background-size: cover;
// //   background-position: center;
// //   color: white;
// //   padding: 80px 20px;
// //   border-bottom-left-radius: 36px;
// //   border-bottom-right-radius: 36px;
// // `;

// // const HeroInner = styled.div`
// //   max-width: 1200px;
// //   margin: 0 auto;
// //   display: grid;
// //   grid-template-columns: 1fr 420px;
// //   gap: 40px;
// //   align-items: center;

// //   @media (max-width: 900px) {
// //     grid-template-columns: 1fr;
// //     padding-bottom: 0;
// //   }
// // `;

// // const HeroLeft = styled.div``;

// // const Title = styled.h1`
// //   font-size: 42px;
// //   margin: 0 0 12px;
// //   line-height: 1.05;
// //   font-weight: 700;
// // `;

// // const Subtitle = styled.p`
// //   margin: 0 0 20px;
// //   color: rgba(255,255,255,0.9);
// //   font-size: 16px;
// // `;

// // const HeroRight = styled.div`
// //   background: rgba(255,255,255,0.06);
// //   padding: 18px;
// //   border-radius: 12px;
// //   box-shadow: 0 8px 30px rgba(2,6,23,0.35);
// // `;

// // const SearchForm = styled.form`
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   gap: 10px;

// //   @media (max-width: 500px) {
// //     grid-template-columns: 1fr;
// //   }
// // `;

// // const Field = styled.label`
// //   display: flex;
// //   flex-direction: column;
// //   font-size: 13px;
// //   color: rgba(255,255,255,0.9);
// //   position: relative;
// // `;

// // const Input = styled.input`
// //   margin-top: 8px;
// //   padding: 12px 12px;
// //   border-radius: 8px;
// //   border: none;
// //   outline: none;
// //   font-size: 14px;
// // `;

// // const SuggestionsBox = styled.ul`
// //   position: absolute;
// //   top: 72px;
// //   left: 0;
// //   right: 0;
// //   background: white;
// //   color: black;
// //   border-radius: 8px;
// //   box-shadow: 0 6px 20px rgba(0,0,0,0.15);
// //   list-style: none;
// //   margin: 0;
// //   padding: 6px 0;
// //   max-height: 240px;
// //   overflow-y: auto;
// //   z-index: 20;
// // `;

// // const SuggestionItem = styled.li`
// //   padding: 8px 12px;
// //   cursor: pointer;
// //   &:hover { background: #f3f4f6; }
// // `;

// // const Select = styled.select`
// //   margin-top: 8px;
// //   padding: 12px;
// //   border-radius: 8px;
// //   border: none;
// //   font-size: 14px;
// // `;

// // const SearchButton = styled.button`
// //   grid-column: span 2;
// //   margin-top: 6px;
// //   background: #ff6b6b;
// //   color: white;
// //   padding: 12px 18px;
// //   border-radius: 10px;
// //   border: none;
// //   font-weight: 700;
// //   cursor: pointer;
// //   display:flex;
// //   align-items:center;
// //   gap:10px;
// //   justify-content:center;

// //   &:hover { transform: translateY(-1px); }
// // `;

// // const Content = styled.main`
// //   max-width: 1200px;
// //   margin: 34px auto;
// //   padding: 0 16px 80px;
// // `;

// // const ResultsHeader = styled.div`
// //   display:flex;
// //   justify-content:space-between;
// //   align-items:center;
// //   margin-bottom:18px;
// // `;

// // const ResultsTitle = styled.h2`
// //   margin:0;
// //   font-size:20px;
// // `;

// // const Grid = styled.div`
// //   display:grid;
// //   grid-template-columns: repeat(3, 1fr);
// //   gap: 18px;

// //   @media (max-width: 1000px) {
// //     grid-template-columns: repeat(2, 1fr);
// //   }
// //   @media (max-width: 650px) {
// //     grid-template-columns: 1fr;
// //   }
// // `;

// // const Card = styled.div`
// //   background:white;
// //   border-radius:10px;
// //   overflow:hidden;
// //   box-shadow: 0 8px 20px rgba(17,24,39,0.06);
// //   display:flex;
// //   flex-direction:column;
// // `;

// // const CardImage = styled.div`
// //   height:160px;
// //   background-size:cover;
// //   background-position:center;
// // `;

// // const CardBody = styled.div`
// //   padding:14px;
// //   display:flex;
// //   flex-direction:column;
// //   gap:8px;
// //   flex:1;
// // `;

// // const HotelTitle = styled.h3`
// //   margin:0;
// //   font-size:16px;
// // `;

// // const HotelMeta = styled.div`
// //   display:flex;
// //   gap:10px;
// //   align-items:center;
// //   color: #475569;
// //   font-size:13px;
// // `;

// // const Price = styled.div`
// //   margin-top:auto;
// //   display:flex;
// //   justify-content:space-between;
// //   align-items:center;
// //   padding-top:6px;
// // `;

// // const BookBtn = styled.button`
// //   background:#0d286d;
// //   color:white;
// //   padding:10px 12px;
// //   border-radius:8px;
// //   border:none;
// //   cursor:pointer;
// // `;

// // const Loader = styled.div`
// //   padding: 40px;
// //   text-align:center;
// // `;

// // const ErrorBox = styled.div`
// //   padding:12px;
// //   background:#ffe7e7;
// //   color:#b72121;
// //   border-radius:8px;
// // `;

// // const formatPrice = (p) =>
// //   p ? `NGN ${Number(p).toLocaleString()}` : "From NGN —";

// // // ---------------- Component ----------------
// // export default function HotelBookingPage() {
// //   const [destination, setDestination] = useState("Lagos");
// //   const [checkin, setCheckin] = useState("");
// //   const [checkout, setCheckout] = useState("");
// //   const [guests, setGuests] = useState(2);

// //   const [hotels, setHotels] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // autocomplete
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [showSuggestions, setShowSuggestions] = useState(false);
// //   const inputRef = useRef(null);

// //   // Close suggestions when clicking outside
// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (inputRef.current && !inputRef.current.contains(e.target)) {
// //         setShowSuggestions(false);
// //       }
// //     };
// //     document.addEventListener("click", handler);
// //     return () => document.removeEventListener("click", handler);
// //   }, []);

// //   useEffect(() => {
// //     performSearch("Lagos");
// //     // eslint-disable-next-line
// //   }, []);

// //   // fetch hotels
// //   async function performSearch(query) {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const url = `https://${RAPIDAPI_HOST}/hotels/list?location=${encodeURIComponent(query)}&adults=${guests}&currency=NGN`;

// //       const response = await fetch(url, {
// //         method: "GET",
// //         headers: {
// //           "X-RapidAPI-Key": RAPIDAPI_KEY,
// //           "X-RapidAPI-Host": RAPIDAPI_HOST,
// //         },
// //       });

// //       if (!response.ok) throw new Error(`API error: ${response.status}`);

// //       const data = await response.json();
// //       setHotels(transformApiToHotels(data));
// //     } catch (err) {
// //       console.error("Hotel fetch error:", err);
// //       setError(err.message || "Failed to fetch hotels");
// //       setHotels([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   // transform API
// //   function transformApiToHotels(apiResponse) {
// //     const arr = apiResponse?.data || apiResponse?.results || [];
// //     return (Array.isArray(arr) ? arr : [])
// //       .map((h, i) => ({
// //         id: h.id ?? i,
// //         name: h.name ?? "Hotel",
// //         city: h.location_string ?? "",
// //         country: h.country ?? "",
// //         thumbnail: h.photo?.images?.medium?.url || `https://picsum.photos/seed/hotel${i}/600/400`,
// //         rating: h.rating ?? null,
// //         price: h.price ?? null,
// //       }))
// //       .slice(0, 48);
// //   }

// //   // autocomplete fetch
// //   async function fetchCitySuggestions(query) {
// //     if (!query) return setSuggestions([]);
// //     try {
// //       const res = await fetch(
// //         `https://${RAPIDAPI_HOST}/locations/search?query=${encodeURIComponent(query)}`,
// //         {
// //           headers: {
// //             "X-RapidAPI-Key": RAPIDAPI_KEY,
// //             "X-RapidAPI-Host": RAPIDAPI_HOST,
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       const cities = (data?.data || [])
// //         .map((c) => c.result_object?.name)
// //         .filter(Boolean)
// //         .slice(0, 8);
// //       setSuggestions(cities);
// //       setShowSuggestions(true);
// //     } catch (err) {
// //       console.error("City autocomplete error:", err);
// //     }
// //   }

// //   const onSubmitSearch = async (e) => {
// //     e.preventDefault();
// //     await performSearch(destination);
// //     setShowSuggestions(false);
// //   };

// //   return (
// //     <PageWrapper>
// //       <Hero>
// //         <HeroInner>
// //           <HeroLeft>
// //             <Title>Find great hotels — fast</Title>
// //             <Subtitle>
// //               Search millions of trusted hotels and compare prices. Flexible cancellation and real people to help when you need it.
// //             </Subtitle>
// //           </HeroLeft>

// //           <HeroRight>
// //             <form onSubmit={onSubmitSearch}>
// //               <SearchForm>
// //                 <Field ref={inputRef}>
// //                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //                     <FaSearch />
// //                     <span style={{ fontSize: 12 }}>Destination</span>
// //                   </div>
// //                   <Input
// //                     placeholder="City or attraction (e.g. Dubai, London)"
// //                     value={destination}
// //                     onChange={(e) => {
// //                       setDestination(e.target.value);
// //                       fetchCitySuggestions(e.target.value);
// //                     }}
// //                     required
// //                   />
// //                   {showSuggestions && suggestions.length > 0 && (
// //                     <SuggestionsBox>
// //                       {suggestions.map((city, i) => (
// //                         <SuggestionItem
// //                           key={i}
// //                           onClick={() => {
// //                             setDestination(city);
// //                             setShowSuggestions(false);
// //                           }}
// //                         >
// //                           {city}
// //                         </SuggestionItem>
// //                       ))}
// //                     </SuggestionsBox>
// //                   )}
// //                 </Field>

// //                 <Field>
// //                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //                     <FaCalendarAlt />
// //                     <span style={{ fontSize: 12 }}>Check-in</span>
// //                   </div>
// //                   <Input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} />
// //                 </Field>

// //                 <Field>
// //                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //                     <FaCalendarAlt />
// //                     <span style={{ fontSize: 12 }}>Check-out</span>
// //                   </div>
// //                   <Input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} />
// //                 </Field>

// //                 <Field>
// //                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //                     <FaUser />
// //                     <span style={{ fontSize: 12 }}>Guests</span>
// //                   </div>
// //                   <Select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
// //                     {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} guest{n>1?"s":""}</option>)}
// //                   </Select>
// //                 </Field>

// //                 <SearchButton type="submit"><FaSearch /> Search hotels</SearchButton>
// //               </SearchForm>
// //             </form>
// //           </HeroRight>
// //         </HeroInner>
// //       </Hero>

// //       <Content>
// //         <ResultsHeader>
// //           <ResultsTitle>Hotels near <strong>{destination}</strong></ResultsTitle>
// //           <div style={{ color: "#64748b", fontSize: 14 }}>
// //             {hotels.length ? `${hotels.length} options` : "No results yet"}
// //           </div>
// //         </ResultsHeader>

// //         {loading && <Loader>Loading hotels…</Loader>}
// //         {error && <ErrorBox>{error}</ErrorBox>}

// //         {!loading && !error && hotels.length > 0 && (
// //           <Grid>
// //             {hotels.map(h => (
// //               <Card key={h.id}>
// //                 <CardImage style={{ backgroundImage: `url(${h.thumbnail})` }} />
// //                 <CardBody>
// //                   <HotelTitle>{h.name}</HotelTitle>
// //                   <HotelMeta>
// //                     <div>{h.city}{h.country ? `, ${h.country}` : ""}</div>
// //                     {h.rating && <div style={{ display:"flex", alignItems:"center", gap:6 }}>
// //                       <FaStar color="#f59e0b" /> <strong style={{fontSize:13}}>{h.rating}</strong>
// //                     </div>}
// //                   </HotelMeta>

// //                   <Price>
// //                     <div style={{ fontWeight:700 }}>{formatPrice(h.price)}</div>
// //                     <BookBtn onClick={() => alert(`Book flow not implemented in this demo.\nHotel: ${h.name}`)}>
// //                       Book
// //                     </BookBtn>
// //                   </Price>
// //                 </CardBody>
// //               </Card>
// //             ))}
// //           </Grid>
// //         )}
// //       </Content>
// //     </PageWrapper>
// //   );
// // }







// // UI2

// // import React, { useState, useEffect } from "react";
// // import styled from "styled-components";

// // // --- Styled Components ---
// // const PageWrapper = styled.div`
// //   font-family: "Poppins", sans-serif;
// //   background: #f9fafc;
// //   color: #333;
// // `;

// // const Hero = styled.section`
// //   background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
// //     url("https://source.unsplash.com/1600x900/?hotel,travel") center/cover no-repeat;
// //   height: 60vh;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   text-align: center;
// //   color: #fff;
// // `;

// // const HeroContent = styled.div`
// //   max-width: 700px;
// //   padding: 2rem;
// // `;

// // const HeroTitle = styled.h1`
// //   font-size: 3rem;
// //   margin-bottom: 1rem;
// // `;

// // const HeroSubtitle = styled.p`
// //   font-size: 1.25rem;
// // `;

// // const SearchSection = styled.section`
// //   background: #fff;
// //   padding: 2rem;
// //   margin: -3rem auto 2rem;
// //   border-radius: 12px;
// //   box-shadow: 0 8px 20px rgba(0,0,0,0.1);
// //   max-width: 800px;
// //   position: relative;
// //   z-index: 2;
// // `;

// // const SearchInput = styled.input`
// //   width: 100%;
// //   padding: 0.75rem;
// //   margin-bottom: 0.5rem;
// //   border: 1px solid #ccc;
// //   border-radius: 8px;
// //   font-size: 1rem;
// // `;

// // const SuggestionsList = styled.ul`
// //   list-style: none;
// //   padding: 0;
// //   margin: 0.5rem 0;
// //   background: #fff;
// //   border: 1px solid #ddd;
// //   border-radius: 8px;
// //   max-height: 200px;
// //   overflow-y: auto;
// // `;

// // const SuggestionItem = styled.li`
// //   padding: 0.75rem;
// //   cursor: pointer;
// //   &:hover {
// //     background: #f0f0f0;
// //   }
// // `;

// // const Button = styled.button`
// //   background: #0077ff;
// //   color: #fff;
// //   padding: 0.75rem 1.25rem;
// //   font-size: 1rem;
// //   border: none;
// //   border-radius: 8px;
// //   cursor: pointer;
// //   transition: background 0.2s ease;

// //   &:hover {
// //     background: #005fcc;
// //   }
// // `;

// // const HotelsGrid = styled.div`
// //   display: grid;
// //   gap: 1.5rem;
// //   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //   padding: 2rem;
// // `;

// // const HotelCard = styled.div`
// //   background: #fff;
// //   border-radius: 12px;
// //   overflow: hidden;
// //   box-shadow: 0 6px 16px rgba(0,0,0,0.1);
// // `;

// // const HotelImage = styled.img`
// //   width: 100%;
// //   height: 180px;
// //   object-fit: cover;
// // `;

// // const HotelContent = styled.div`
// //   padding: 1rem;
// // `;

// // const HotelTitle = styled.h3`
// //   margin: 0;
// //   font-size: 1.25rem;
// // `;

// // const HotelLocation = styled.p`
// //   color: #666;
// //   margin: 0.5rem 0;
// // `;

// // const HotelPrice = styled.p`
// //   font-weight: bold;
// //   color: #0077ff;
// // `;

// // // --- Component ---
// // export default function HotelBookingApp() {
// //   const [city, setCity] = useState("");
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [hotels, setHotels] = useState([]);

// //   // Autocomplete Cities API
// //   const fetchCities = async (query) => {
// //     if (!query) {
// //       setSuggestions([]);
// //       return;
// //     }
// //     try {
// //       const res = await fetch(
// //         `https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${query}&search_type=CITY`,
// //         {
// //           method: "GET",
// //           headers: {
// //             "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
// //             "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       setSuggestions(data.slice(0, 8)); // Limit suggestions
// //     } catch (err) {
// //       console.error("Error fetching cities:", err);
// //     }
// //   };

// //   const handleCityInput = (e) => {
// //     const value = e.target.value;
// //     setCity(value);
// //     fetchCities(value);
// //   };

// //   const handleSuggestionClick = (suggestion) => {
// //     setCity(suggestion.cityName);
// //     setSuggestions([]);
// //   };

// //   // Fetch Hotels API
// //   const fetchHotels = async () => {
// //     try {
// //       const res = await fetch(
// //         `https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?location_id=${city}&sort_order=PRICE`,
// //         {
// //           method: "GET",
// //           headers: {
// //             "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
// //             "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
// //           },
// //         }
// //       );
// //       const data = await res.json();
// //       setHotels(data.hotels || []);
// //     } catch (err) {
// //       console.error("Error fetching hotels:", err);
// //     }
// //   };

// //   return (
// //     <PageWrapper>
// //       {/* Hero Section */}
// //       <Hero>
// //         <HeroContent>
// //           <HeroTitle>Find Your Perfect Stay</HeroTitle>
// //           <HeroSubtitle>
// //             Discover the best hotels, compare prices, and book instantly.
// //           </HeroSubtitle>
// //         </HeroContent>
// //       </Hero>

// //       {/* Search Section */}
// //       <SearchSection>
// //         <SearchInput
// //           type="text"
// //           placeholder="Enter city..."
// //           value={city}
// //           onChange={handleCityInput}
// //         />
// //         {suggestions.length > 0 && (
// //           <SuggestionsList>
// //             {suggestions.map((s, idx) => (
// //               <SuggestionItem key={idx} onClick={() => handleSuggestionClick(s)}>
// //                 {s.cityName}, {s.stateCode} {s.countryCode}
// //               </SuggestionItem>
// //             ))}
// //           </SuggestionsList>
// //         )}
// //         <Button onClick={fetchHotels}>Search Hotels</Button>
// //       </SearchSection>

// //       {/* Hotels List */}
// //       <HotelsGrid>
// //         {hotels.length > 0 ? (
// //           hotels.map((hotel, idx) => (
// //             <HotelCard key={idx}>
// //               <HotelImage
// //                 src={hotel.thumbnailUrl || "https://via.placeholder.com/400"}
// //                 alt={hotel.name}
// //               />
// //               <HotelContent>
// //                 <HotelTitle>{hotel.name}</HotelTitle>
// //                 <HotelLocation>{hotel.location?.address?.addressLine1}</HotelLocation>
// //                 <HotelPrice>${hotel.ratePlan?.price?.current || "N/A"} / night</HotelPrice>
// //               </HotelContent>
// //             </HotelCard>
// //           ))
// //         ) : (
// //           <p style={{ textAlign: "center", width: "100%" }}>
// //             No hotels found. Try searching a different city.
// //           </p>
// //         )}
// //       </HotelsGrid>
// //     </PageWrapper>
// //   );
// // }




// // UI3
// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaSearch, FaBed, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";
// import s6 from '../Images/s6.png'

// // ================== STYLES ==================
// const PageWrapper = styled.div`
//   font-family: "Inter", sans-serif;
//   background: #f8fafc;
//   color: #0f172a;
//   min-height: 100vh;
  
// `;

// // Hero
// const Hero = styled.section`
//   background: 
//     linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
//     url(${s6});
//   background-size: cover;
//   background-position: center;
//   color: white;
//   padding: 4rem 2rem;
//   padding-top: 100px;
//   text-align: center;
//   min-height: 80vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;


// const HeroInner = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   font-weight: 700;
//   margin-bottom: 0.75rem;
// `;

// const Subtitle = styled.p`
//   font-size: 1.25rem;
//   opacity: 0.9;
//   margin-bottom: 2rem;
// `;

// // Search Form
// const SearchForm = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   gap: 1rem;
//   background: white;
//   border-radius: 16px;
//   padding: 1rem;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
//   color: #0f172a;
//   position: relative;
// `;

// const Field = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `;

// const Input = styled.input`
//   margin-top: 0.5rem;
//   padding: 0.75rem;
//   border: 1px solid #cbd5e1;
//   border-radius: 8px;
//   font-size: 1rem;
//   &:focus {
//     outline: 2px solid #2563eb;
//     border-color: #2563eb;
//   }
// `;

// const Button = styled.button`
//   background: #2563eb;
//   color: white;
//   font-size: 1.1rem;
//   font-weight: 600;
//   border: none;
//   border-radius: 12px;
//   padding: 0.9rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   transition: 0.2s;
//   &:hover {
//     background: #1d4ed8;
//   }
// `;

// // Suggestions dropdown
// const SuggestionsBox = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   background: white;
//   color: #0f172a;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   max-height: 220px;
//   overflow-y: auto;
//   z-index: 20;
// `;

// const SuggestionItem = styled.li`
//   padding: 10px 12px;
//   cursor: pointer;
//   &:hover {
//     background: #f1f5f9;
//   }
// `;

// // Hotel results
// const Results = styled.section`
//   max-width: 1100px;
//   margin: 3rem auto;
//   padding: 0 1rem;
// `;

// const HotelGrid = styled.div`
//   display: grid;
//   gap: 1.5rem;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// `;

// const HotelCard = styled.div`
//   background: white;
//   border-radius: 16px;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: 0.2s;
//   &:hover {
//     transform: translateY(-3px);
//   }
// `;

// const HotelImg = styled.div`
//   background: #e2e8f0;
//   height: 180px;
// `;

// const HotelContent = styled.div`
//   padding: 1rem;
// `;

// const HotelTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
// `;

// const HotelInfo = styled.p`
//   color: #475569;
//   font-size: 0.95rem;
// `;

// const Price = styled.p`
//   color: #2563eb;
//   font-weight: 700;
//   margin-top: 0.5rem;
// `;

// // ================== COMPONENT ==================
// const OPENWEATHER_KEY = "ce3c9caa2d6bc5ed8ac2d6dc1c1793bd"; // 🔑 Put your key here

// export default function HotelBookingPage() {
//   const [destination, setDestination] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [hotels, setHotels] = useState([]);

//   // Autocomplete with OpenWeather Geocoding API
//   async function fetchCitySuggestions(query) {
//     if (!query || query.length < 2) {
//       setSuggestions([]);
//       return;
//     }
//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
//           query
//         )}&limit=6&appid=${OPENWEATHER_KEY}`
//       );
//       const data = await res.json();
//       const mapped = data.map((c, i) => ({
//         id: i,
//         name: `${c.name}${c.state ? ", " + c.state : ""}, ${c.country}`,
//         lat: c.lat,
//         lon: c.lon,
//       }));
//       setSuggestions(mapped);
//       setShowSuggestions(true);
//     } catch (err) {
//       console.error("Autocomplete error:", err);
//       setSuggestions([]);
//     }
//   }

//   const handleSuggestionClick = (city) => {
//     setDestination(city.name);
//     setSuggestions([]);
//     setShowSuggestions(false);
//   };

//   // Fake hotel search (replace with RapidAPI later)
//   const onSubmitSearch = (e) => {
//     e.preventDefault();
//     // here you can call your RapidAPI Hotels API using city
//     setHotels([
//       {
//         id: 1,
//         name: "Grand Luxury Hotel",
//         location: destination,
//         price: "$240/night",
//       },
//       {
//         id: 2,
//         name: "City Center Inn",
//         location: destination,
//         price: "$120/night",
//       },
//     ]);
//   };

//   return (
//     <PageWrapper>
//       <Hero>
//         <HeroInner>
//           <Title>Book Your Perfect Stay</Title>
//           <Subtitle>Find hotels in top cities worldwide</Subtitle>

//           <form onSubmit={onSubmitSearch}>
//             <SearchForm>
//               <Field>
//                 <label>
//                   <FaSearch /> Destination
//                 </label>
//                 <Input
//                   value={destination}
//                   placeholder="Enter a city (e.g. London, Dubai)"
//                   onChange={(e) => {
//                     setDestination(e.target.value);
//                     fetchCitySuggestions(e.target.value);
//                   }}
//                   onFocus={() => {
//                     if (suggestions.length > 0) setShowSuggestions(true);
//                   }}
//                   onBlur={() =>
//                     setTimeout(() => setShowSuggestions(false), 200)
//                   }
//                 />
//                 {showSuggestions && suggestions.length > 0 && (
//                   <SuggestionsBox>
//                     {suggestions.map((s) => (
//                       <SuggestionItem
//                         key={s.id}
//                         onClick={() => handleSuggestionClick(s)}
//                       >
//                         {s.name}
//                       </SuggestionItem>
//                     ))}
//                   </SuggestionsBox>
//                 )}
//               </Field>

//               <Field>
//                 <label>
//                   <FaCalendarAlt /> Check-In
//                 </label>
//                 <Input type="date" required />
//               </Field>

//               <Field>
//                 <label>
//                   <FaCalendarAlt /> Check-Out
//                 </label>
//                 <Input type="date" required />
//               </Field>

//               <Field>
//                 <label>
//                   <FaUser /> Guests
//                 </label>
//                 <Input type="number" min="1" defaultValue="2" />
//               </Field>

//               <Button type="submit">
//                 <FaSearch /> Search
//               </Button>
//             </SearchForm>
//           </form>
//         </HeroInner>
//       </Hero>

//       <Results>
//         <h2>Available Hotels</h2>
//         <HotelGrid>
//           {hotels.map((h) => (
//             <HotelCard key={h.id}>
//               <HotelImg />
//               <HotelContent>
//                 <HotelTitle>{h.name}</HotelTitle>
//                 <HotelInfo>{h.location}</HotelInfo>
//                 <Price>{h.price}</Price>
//               </HotelContent>
//             </HotelCard>
//           ))}
//         </HotelGrid>
//       </Results>
//     </PageWrapper>
//   );
// }


// import React, { useState, useEffect } from "react";

// // --- Mock Hotel Data (Initial state to simulate fetching from a backend) ---
// const initialHotels = [
//   {
//     id: 1,
//     name: "Lagos Grandeur Hotel",
//     location: "Lagos, Nigeria",
//     price: 35000,
//     rating: 4.5,
//     description: "A luxury hotel with a stunning rooftop pool and ocean views.",
//     imageUrl: "https://placehold.co/600x400/0d286d/ffffff?text=Lagos+Grandeur",
//   },
//   {
//     id: 2,
//     name: "Abuja Hilton Garden Inn",
//     location: "Abuja, Nigeria",
//     price: 28000,
//     rating: 4.2,
//     description: "Modern comfort and excellent service in a prime location.",
//     imageUrl: "https://placehold.co/600x400/2563eb/ffffff?text=Abuja+Hilton",
//   },
//   {
//     id: 3,
//     name: "Calabar Paradise Resort",
//     location: "Calabar, Nigeria",
//     price: 45000,
//     rating: 4.8,
//     description: "Escape to a serene resort surrounded by lush greenery.",
//     imageUrl: "https://placehold.co/600x400/1d4ed8/ffffff?text=Calabar+Resort",
//   },
// ];

// // ---------------- Custom CSS Styles ----------------
// // All styles from styled-components have been converted to standard CSS
// // to make the application self-contained and runnable.
// const styles = `
//   .page-wrapper {
//     font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
//     color: #0f172a;
//     min-height: 100vh;
//     background: linear-gradient(180deg, #f6f8ff 0%, #ffffff 100%);
//   }
  
//   .hero {
//     position: relative;
//     background-image: linear-gradient(135deg, rgba(13,40,109,0.85), rgba(230,0,0,0.85)), url("https://images.unsplash.com/photo-1501117716987-c8e6d4bf6e74?auto=format&fit=crop&w=1400&q=80");
//     background-size: cover;
//     background-position: center;
//     color: white;
//     padding: 80px 20px;
//     border-bottom-left-radius: 36px;
//     border-bottom-right-radius: 36px;
//   }
  
//   .hero-inner {
//     max-width: 1200px;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 40px;
//     align-items: center;
//   }
  
//   @media (max-width: 900px) {
//     .hero-inner {
//       grid-template-columns: 1fr;
//       padding-bottom: 0;
//     }
//   }
  
//   .hero-content {
//     text-align: center;
//   }
  
//   .title {
//     font-size: 42px;
//     margin: 0 0 12px;
//     line-height: 1.05;
//     font-weight: 700;
//   }
  
//   .subtitle {
//     margin: 0 0 20px;
//     color: rgba(255,255,255,0.9);
//     font-size: 16px;
//   }
  
//   .add-hotel-button {
//     background: #ff6b6b;
//     color: white;
//     padding: 12px 24px;
//     border-radius: 10px;
//     border: none;
//     font-weight: 700;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     justify-content: center;
//     margin: 0 auto;
//     transition: transform 0.2s, box-shadow 0.2s;
//   }
  
//   .add-hotel-button:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 4px 12px rgba(255,107,107,0.4);
//   }
  
//   .content {
//     max-width: 1200px;
//     margin: 34px auto;
//     padding: 0 16px 80px;
//   }
  
//   .results-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 18px;
//   }
  
//   .results-title {
//     margin: 0;
//     font-size: 20px;
//   }
  
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 18px;
//   }
  
//   @media (max-width: 1000px) {
//     .grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
  
//   @media (max-width: 650px) {
//     .grid {
//       grid-template-columns: 1fr;
//     }
//   }
  
//   .card {
//     background: white;
//     border-radius: 10px;
//     overflow: hidden;
//     box-shadow: 0 8px 20px rgba(17,24,39,0.06);
//     display: flex;
//     flex-direction: column;
//   }
  
//   .card-image {
//     height: 160px;
//     background-size: cover;
//     background-position: center;
//   }
  
//   .card-body {
//     padding: 14px;
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//     flex: 1;
//   }
  
//   .hotel-title {
//     margin: 0;
//     font-size: 16px;
//   }
  
//   .hotel-meta {
//     display: flex;
//     gap: 10px;
//     align-items: center;
//     color: #475569;
//     font-size: 13px;
//   }
  
//   .actions {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-top: 6px;
//     margin-top: auto;
//   }
  
//   .action-button {
//     background: #fff;
//     color: #0d286d;
//     border: 1px solid #0d286d;
//     padding: 8px 12px;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: all 0.2s;
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 6px;
//   }

//   .action-button.primary {
//     background: #0d286d;
//     color: white;
//   }
  
//   .action-button:hover {
//     background: #f0f4f9;
//   }

//   .action-button.primary:hover {
//     background: #1a377d;
//   }
  
//   .delete-button {
//     background: #dc2626;
//     border-color: #dc2626;
//     color: white;
//     margin-left: 8px;
//     transition: all 0.2s;
//   }
  
//   .delete-button:hover {
//     background: #b91c1c;
//     box-shadow: 0 4px 12px rgba(220,38,38,0.3);
//   }
  
//   .form-container {
//     background: #f0f4f9;
//     padding: 2rem;
//     border-radius: 16px;
//     box-shadow: 0 8px 20px rgba(0,0,0,0.1);
//     margin-bottom: 2rem;
//   }
  
//   .form {
//     display: grid;
//     gap: 1.5rem;
//     grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   }
  
//   .field {
//     display: flex;
//     flex-direction: column;
//   }
  
//   .label {
//     font-weight: 600;
//     font-size: 0.9rem;
//     color: #334155;
//     margin-bottom: 0.5rem;
//   }
  
//   .input {
//     padding: 0.75rem;
//     border: 1px solid #cbd5e1;
//     border-radius: 8px;
//     font-size: 1rem;
//   }
  
//   .input:focus, .textarea:focus {
//     outline: 2px solid #2563eb;
//     border-color: #2563eb;
//   }
  
//   .textarea {
//     padding: 0.75rem;
//     border: 1px solid #cbd5e1;
//     border-radius: 8px;
//     font-size: 1rem;
//     resize: vertical;
//     min-height: 80px;
//   }
  
//   .form-actions {
//     grid-column: 1 / -1;
//     display: flex;
//     justify-content: flex-end;
//     gap: 1rem;
//     margin-top: 1rem;
//   }
  
//   .submit-button {
//     background: #0d286d;
//     color: white;
//     padding: 12px 24px;
//     border-radius: 8px;
//     border: none;
//     font-weight: 700;
//     cursor: pointer;
//     transition: background 0.2s;
//   }
  
//   .submit-button:hover {
//     background: #1a377d;
//   }
  
//   .cancel-button {
//     background: #cbd5e1;
//     color: #334155;
//     padding: 12px 24px;
//     border-radius: 8px;
//     border: none;
//     font-weight: 600;
//     cursor: pointer;
//     transition: background 0.2s;
//   }
  
//   .cancel-button:hover {
//     background: #e2e8f0;
//   }
  
//   .empty-state {
//     text-align: center;
//     padding: 4rem 0;
//     color: #64748b;
//   }
  
//   .empty-state svg {
//     font-size: 4rem;
//     margin-bottom: 1rem;
//   }
  
//   .empty-state p {
//     font-size: 1.25rem;
//   }
// `;

// // --- Inline SVG Icons (replacing react-icons) ---
// const PlusIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
//   </svg>
// );
// const PenIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M15.502 1.503a.5.5 0 0 1 0 .707l-14 14a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l14-14a.5.5 0 0 1 .707 0l.707.707zM14 2.207l-13 13-1.06-1.06L12.94 1.147 14 2.207zM.161 14.839l1.06 1.06L0 16.06V14.5a.5.5 0 0 1 .161-.354z"/>
//     <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-12.5 12.5a.5.5 0 0 1-.353.146H.5a.5.5 0 0 1-.5-.5V12.793a.5.5 0 0 1 .146-.353L12.146.146zM13.854 1.854l-2.5-2.5-12.5 12.5v1.207a.5.5 0 0 0 .5.5h1.207z"/>
//   </svg>
// );
// const TrashIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//     <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V3zM4.118 4l.84-2.837A1 1 0 0 1 5.823 1h4.354a1 1 0 0 1 .864.163L11.882 4H4.118zM4 14V5h8v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/>
//   </svg>
// );
// const BedIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M2 4v.5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-18a2 2 0 0 0-2 2z"/>
//     <path d="M12 11V8"/>
//     <path d="M17 11V8"/>
//     <path d="M7 11V8"/>
//     <path d="M17 22v-3.5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2V22"/>
//     <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
//     <path d="M22 17h-1.5a2 2 0 0 0-2 2V22"/>
//     <path d="M2 17h1.5a2 2 0 0 0 2 2V22"/>
//   </svg>
// );
// const StarIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f59e0b" viewBox="0 0 16 16">
//     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.89-.696L7.493.193c.273-.42.748-.42.921 0l2.64 4.126 4.89.696c.441.063.612.636.283.95l-3.513 3.336.83 4.73c.084.443-.352.79-.746.592L8 13.187l-4.389 2.256z"/>
//   </svg>
// );

// // ---------------- Component ----------------
// export default function App() {
//   const [hotels, setHotels] = useState(initialHotels);
//   const [editingHotel, setEditingHotel] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);

//   // --- CRUD Operations (Simulated Backend) ---

//   // READ/GET Hotels
//   useEffect(() => {
//     // This effect simulates fetching data from a backend on initial load.
//     // In a real application, you would replace setHotels with a fetch call.
//     // async function fetchHotels() {
//     //   try {
//     //     const response = await fetch('your-php-api-url/hotels');
//     //     const data = await response.json();
//     //     if (data.success) {
//     //       setHotels(data.hotels);
//     //     }
//     //   } catch (error) {
//     //     console.error("Failed to fetch hotels:", error);
//     //   }
//     // }
//     // fetchHotels();
//   }, []);

//   // CREATE/POST New Hotel
//   const handleAddHotel = (newHotel) => {
//     // This simulates a POST request to your PHP backend.
//     // In a real app, the backend would assign the ID. Here, we generate one locally.
//     const hotelWithId = { ...newHotel, id: Date.now() };
//     setHotels([...hotels, hotelWithId]);
//     setIsAdding(false);
//   };

//   // UPDATE/EDIT Hotel
//   const handleUpdateHotel = (updatedHotel) => {
//     // This simulates a PUT/PATCH request to your PHP backend.
//     setHotels(hotels.map(h => (h.id === updatedHotel.id ? updatedHotel : h)));
//     setEditingHotel(null);
//   };

//   // DELETE Hotel
//   const handleDeleteHotel = (hotelId) => {
//     // This simulates a DELETE request to your PHP backend.
//     const messageBox = document.createElement('div');
//     messageBox.style.cssText = `
//         position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
//         background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//         z-index: 1000; text-align: center;
//     `;
//     messageBox.innerHTML = `
//         <p style="margin-bottom: 15px;">Are you sure you want to delete this hotel?</p>
//         <div style="display: flex; justify-content: space-around;">
//             <button id="confirm-delete" style="padding: 8px 16px; border: none; background: #dc2626; color: white; border-radius: 5px; cursor: pointer;">Delete</button>
//             <button id="cancel-delete" style="padding: 8px 16px; border: 1px solid #ccc; background: #f0f0f0; border-radius: 5px; cursor: pointer;">Cancel</button>
//         </div>
//     `;
//     document.body.appendChild(messageBox);

//     document.getElementById('confirm-delete').onclick = () => {
//         setHotels(hotels.filter(h => h.id !== hotelId));
//         document.body.removeChild(messageBox);
//     };

//     document.getElementById('cancel-delete').onclick = () => {
//         document.body.removeChild(messageBox);
//     };
//   };

//   // --- UI Logic ---
//   const handleEditClick = (hotel) => {
//     setEditingHotel(hotel);
//     setIsAdding(false);
//   };

//   const handleCancelForm = () => {
//     setEditingHotel(null);
//     setIsAdding(false);
//   };

//   // --- Hotel Form Component (for Add/Edit) ---
//   const HotelForm = () => {
//     const isEditing = !!editingHotel;
//     const [formData, setFormData] = useState(isEditing ? editingHotel : {
//       name: '', location: '', price: '', rating: '', description: '', imageUrl: '',
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (isEditing) {
//         handleUpdateHotel(formData);
//       } else {
//         handleAddHotel(formData);
//       }
//     };

//     return (
//       <div className="form-container">
//         <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>
//           {isEditing ? 'Edit Hotel' : 'Add New Hotel'}
//         </h2>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="field">
//             <label className="label" htmlFor="name">Hotel Name</label>
//             <input className="input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div className="field">
//             <label className="label" htmlFor="location">Location</label>
//             <input className="input" type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
//           </div>
//           <div className="field">
//             <label className="label" htmlFor="price">Price (NGN)</label>
//             <input className="input" type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
//           </div>
//           <div className="field">
//             <label className="label" htmlFor="rating">Rating (1-5)</label>
//             <input className="input" type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} step="0.1" min="1" max="5" required />
//           </div>
//           <div className="field" style={{ gridColumn: 'span 2' }}>
//             <label className="label" htmlFor="imageUrl">Image URL</label>
//             <input className="input" type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
//           </div>
//           <div className="field" style={{ gridColumn: 'span 2' }}>
//             <label className="label" htmlFor="description">Description</label>
//             <textarea className="textarea" id="description" name="description" value={formData.description} onChange={handleChange} required />
//           </div>
//           <div className="form-actions">
//             <button type="button" className="cancel-button" onClick={handleCancelForm}>Cancel</button>
//             <button type="submit" className="submit-button">{isEditing ? 'Update Hotel' : 'Add Hotel'}</button>
//           </div>
//         </form>
//       </div>
//     );
//   };

//   return (
//     <div className="page-wrapper">
//       <style>{styles}</style>
//       <section className="hero">
//         <div className="hero-inner">
//           <div className="hero-content">
//             <h1 className="title">Manage Your Hotels</h1>
//             <p className="subtitle">
//               Post, edit, and delete hotel listings to keep your inventory up to date.
//             </p>
//             <button className="add-hotel-button" onClick={() => setIsAdding(true)}>
//               <PlusIcon /> Add New Hotel
//             </button>
//           </div>
//         </div>
//       </section>

//       <main className="content">
//         {isAdding || editingHotel ? (
//           <HotelForm />
//         ) : (
//           <>
//             <div className="results-header">
//               <h2 className="results-title">Current Hotels</h2>
//               <div style={{ color: "#64748b", fontSize: 14 }}>
//                 {hotels.length} hotel{hotels.length !== 1 ? "s" : ""}
//               </div>
//             </div>

//             {hotels.length > 0 ? (
//               <div className="grid">
//                 {hotels.map(h => (
//                   <div className="card" key={h.id}>
//                     <div className="card-image" style={{ backgroundImage: `url(${h.imageUrl})` }} />
//                     <div className="card-body">
//                       <h3 className="hotel-title">{h.name}</h3>
//                       <div className="hotel-meta">
//                         <div>{h.location}</div>
//                         <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                           <StarIcon /> <strong style={{ fontSize: 13 }}>{h.rating}</strong>
//                         </div>
//                       </div>
//                       <div style={{ fontWeight: 700, marginTop: 'auto', fontSize: '1.25rem', color: '#0d286d' }}>
//                         NGN {Number(h.price).toLocaleString()}
//                       </div>
//                       <div className="actions">
//                         <button className="action-button" onClick={() => handleEditClick(h)}>
//                           <PenIcon /> Edit
//                         </button>
//                         <button className="delete-button" onClick={() => handleDeleteHotel(h.id)}>
//                           <TrashIcon /> Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="empty-state">
//                 <BedIcon />
//                 <p>No hotels available. Add your first one!</p>
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// }

