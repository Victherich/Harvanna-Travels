
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import logo from '../Images/logo.png'
// import { useNavigate } from 'react-router-dom';

// // Styled Components
// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 40px;
//   background-color: #ffffff; /* White background */
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   font-family: Arial, sans-serif;
//   min-height: 60px; /* Ensure sufficient height */
//   position:fixed;
//   top:0;
//   left:0;
//   width:100%;
//   z-index:11;


//   @media (max-width: 1024px) {
//     padding: 10px 20px;
//   }

//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     padding: 10px 15px;
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const LogoImage = styled.img`
//   height: 40px; /* Adjust as needed */
//   margin-right: 5px;
// `;

// const LogoText = styled.span`
//   font-size: 28px;
//   font-weight: bold;
//   color: #0d286d; /* Dark blue, adjust if different from image */
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     flex-direction: column;
//     width: 100%;
//     background-color: #ffffff;
//     position: absolute;
//     top: 70px; /* Below the header */
//     left: 0;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     z-index: 1000;
//   }
// `;

// const NavItem = styled.li`
//   position: relative;
//   margin: 0 15px;
//   cursor:pointer;

//   @media (max-width: 768px) {
//     margin: 10px 0;
//     width: 100%;
//     text-align: center;
//   }
// `;

// const NavLink = styled.a`
//   color: #333333; /* Dark gray for text */
//   text-decoration: none;
//   font-size: 0.9rem;
//   font-weight: 500;
//   padding: 5px 0;
//   display: flex;
//   align-items: center;

//   &:hover {
//     color: #0d286d; /* Dark blue on hover */
//   }
// `;

// const DropdownArrow = styled.span`
//   margin-left: 5px;
//   font-size: 12px; /* Adjust size of the dropdown arrow */
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   @media (max-width: 768px) {
//     margin-left: auto; /* Push icons to the right on smaller screens */
//   }
// `;

// const SearchIcon = styled.span`
//   font-size: 20px;
//   color: #333333;
//   cursor: pointer;

//   &:hover {
//     color: #0d286d;
//   }
// `;

// const ChatButton = styled.button`
//   background-color: #0d286d; /* Dark blue button */
//   color: #ffffff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 15px;
//   font-weight: bold;
//   cursor: pointer;
//   text-align: center;
//   line-height: 1.2; /* Adjust line height for multiline text */

//   &:hover {
//     background-color: #081a4d; /* Slightly darker blue on hover */
//   }

//   @media (max-width: 768px) {
//     padding: 8px 15px;
//     font-size: 14px;
//   }
// `;

// const HamburgerMenu = styled.div`
//   display: none;
//   flex-direction: column;
//   cursor: pointer;
//   margin-left: 20px; /* Space between logo and hamburger */

//   span {
//     height: 3px;
//     width: 25px;
//     background: #333333;
//     margin-bottom: 4px;
//     border-radius: 2px;
//   }

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `;


// // React Component
// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <NavbarContainer>
//       <LogoContainer>
//         {/* Replace 'path/to/your/logo.png' with the actual path to your Harvanna Travels and Tour Ltd logo image */}
//         <LogoImage src={logo} alt="Harvanna Travels and Tour Ltd Logo" />
//         {/* <LogoText>Harvanna Travels and Tour Ltd</LogoText> */}
//       </LogoContainer>

//       <HamburgerMenu onClick={toggleNav}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </HamburgerMenu>

//       <NavLinks isOpen={isNavOpen}>
//         <NavItem onClick={()=>navigate('/')}><NavLink>HOME</NavLink></NavItem>
//         <NavItem><NavLink href="#">FLIGHTS</NavLink></NavItem>
//         <NavItem>
//           <NavLink href="#">HOLIDAYS <DropdownArrow>&#9662;</DropdownArrow></NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">VISA SERVICES <DropdownArrow>&#9662;</DropdownArrow></NavLink>
//         </NavItem>
//         <NavItem onClick={()=>navigate('/services')}>
//           <NavLink>HARVANNA SERVICES</NavLink>
//         </NavItem>
//         <NavItem onClick={()=>navigate('/contactus')}><NavLink>CONTACT US</NavLink></NavItem>
//         <NavItem
//         onClick={()=>navigate('/blogs')}
//         ><NavLink>BLOG</NavLink></NavItem>
//       </NavLinks>

//       <IconsContainer>
//         {/* <SearchIcon><i className="fas fa-search"></i></SearchIcon> */}
//         <ChatButton>Chat<br/>Whatsapp</ChatButton>
//       </IconsContainer>
//     </NavbarContainer>
//   );
// };

// export default Header;







import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../Images2/Harvanna Logo.jpg'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// --- Styled Components ---
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #ffffff; /* White background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  font-family: Arial, sans-serif;
  min-height: 60px; /* Ensure sufficient height */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`;

const LogoImage = styled.img`
  height: 40px; /* Adjust as needed */
  margin-right: 5px;
`;

const LogoText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #0d286d; /* Dark blue, adjust if different from image */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 884px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 70px; /* Below the header */
    left: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding-left:20px;
  }
`;

const NavItem = styled.li`
  position: relative; /* Essential for positioning the dropdown */
  margin: 0 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled.a`
  color: #333333; /* Dark gray for text */
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 5px 0;
  display: flex;
  align-items: center;
  white-space: nowrap; /* Prevent text wrapping */

  &:hover {
    color: #0d286d; /* Dark blue on hover */
  }
`;

const DropdownArrow = styled.span`
  margin-left: 5px;
  font-size: 12px; /* Adjust size of the dropdown arrow */
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-left: auto; /* Push icons to the right on smaller screens */
  }
`;

const SearchIcon = styled.span`
  font-size: 20px;
  color: #333333;
  cursor: pointer;

  &:hover {
    color: #0d286d;
  }
`;

const ChatButton = styled.button`
  background-color: #0d286d; /* Dark blue button */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 1.2; /* Adjust line height for multiline text */

  &:hover {
    background-color: #081a4d; /* Slightly darker blue on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: 20px; /* Space between logo and hamburger */

  span {
    height: 3px;
    width: 25px;
    background: #333333;
    margin-bottom: 4px;
    border-radius: 2px;
  }

  @media (max-width: 884px) {
    display: flex;
  }
`;

// --- NEW Dropdown Styled Components ---
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* Position below the parent NavItem */
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  min-width: 180px; /* Adjust width as needed */
  z-index: 1;
  border-radius: 5px;
  overflow: hidden; /* Ensures rounded corners apply to content */
  visibility: hidden; /* Hidden by default */
  opacity: 0; /* Fully transparent by default */
  transform: translateY(10px); /* Start slightly below */
  transition: visibility 0.3s ease, opacity 0.3s ease, transform 0.3s ease; /* Smooth transition */

  ${NavItem}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateY(0); /* Move to original position */
  }

  @media (max-width: 768px) {
    position: static; /* Stack dropdown items normally on mobile */
    box-shadow: none;
    background-color: transparent;
    min-width: unset;
    visibility: visible; /* Always visible on mobile when nav is open */
    opacity: 1;
    transform: none;
    text-align: center; /* Center items on mobile */
  }
`;

const DropdownItem = styled.a`
  color: #333333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.9rem;
  white-space: nowrap; /* Prevent text wrapping */

  &:hover {
    background-color: #f1f1f1;
    color: #0d286d;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 0.9rem;
  }
`;


// --- React Component ---
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleComingSoon = ()=>{
    Swal.fire({
      title:"Coming soon...",
      icon:"info",
      timer:1000
    })
  }

  return (
    <NavbarContainer>
      <LogoContainer onClick={()=>navigate('/')}>
        <LogoImage src={logo} alt="Harvanna Logo" />
        
      </LogoContainer>

      <HamburgerMenu onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>

      <NavLinks isOpen={isNavOpen}>
        <NavItem onClick={() => {navigate('/');setIsNavOpen(false)}}>
          <NavLink>HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {navigate('/flights');setIsNavOpen(false)}}>FLIGHTS</NavLink>
        </NavItem>

        {/* HOLIDAYS Dropdown */}
        <NavItem>
          <NavLink href="#">
            HOLIDAYS <DropdownArrow>&#9662;</DropdownArrow>
          </NavLink>
          <DropdownMenu>
            <DropdownItem onClick={()=>{navigate('/plannedpackages'); setIsNavOpen(false)}}>Planned Packages</DropdownItem>
            <DropdownItem onClick={()=>{navigate('/requestholiday');setIsNavOpen(false)}}>Request Holiday</DropdownItem>
            <DropdownItem onClick={()=>{navigate('/events');setIsNavOpen(false)}}>Events</DropdownItem>
            {/* Add more holiday options as needed */}
          </DropdownMenu>
        </NavItem>

        {/* VISA SERVICES Dropdown */}
        {/* <NavItem>
          <NavLink href="#">
            VISA SERVICES <DropdownArrow>&#9662;</DropdownArrow>
          </NavLink>
          <DropdownMenu>
            <DropdownItem href="/visaapplicationform">Schengen Visa</DropdownItem>
            <DropdownItem href="/visaapplicationform">Canada Visa</DropdownItem>
            <DropdownItem href="/visaapplicationform">USA Visa</DropdownItem>
            <DropdownItem href="/visaapplicationform">UK Visa</DropdownItem>
            <DropdownItem href="/visaapplicationform">Dubai Visa</DropdownItem>
            <DropdownItem href="/visaapplicationform">Visa Assessment</DropdownItem>
        
          </DropdownMenu>
        </NavItem> */}


         <NavItem>
          <NavLink onClick={() => {navigate('/visa-services');setIsNavOpen(false)}}>
            VISA SERVICES
          </NavLink>
        </NavItem>

        <NavItem onClick={() => {navigate('/services');setIsNavOpen(false)}}>
          <NavLink>HARVANNA SERVICES</NavLink>
        </NavItem>
        <NavItem onClick={() => {navigate('/contactus');setIsNavOpen(false)}}>
          <NavLink>CONTACT US</NavLink>
        </NavItem>
        <NavItem onClick={() => {navigate('/blogs');setIsNavOpen(false)}}>
          <NavLink>BLOG</NavLink>
        </NavItem>
        <NavItem onClick={() => {navigate('/bookappointment');setIsNavOpen(false)}}>
          <NavLink>BOOK APPOINTMENT</NavLink>
        </NavItem>
      </NavLinks>

      <IconsContainer>
        {/* <SearchIcon><i className="fas fa-search"></i></SearchIcon> */}
       <ChatButton onClick={() => window.open('https://wa.me/2347075603404', "_blank")}>
  Chat<br />Whatsapp
</ChatButton>
</IconsContainer>
    </NavbarContainer>
  );
};

export default Header;