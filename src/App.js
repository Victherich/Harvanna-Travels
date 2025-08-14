import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUsPage from './components/ContactUsPage';
import Services from './components/Services';
import BlogPage from './components/BlogPage';
import PlannedPackages from './components/PlannedPackages';
import CustomizedTourForm from './components/RequestHoliday';
import VisaApplicationForm from './components/VisaApplicationForm';
import EventComponent from './components/EventComponent';
import AppUpdate from './components/AppUpdate';
import ScrollToTop from './components/ScrollToTop';
import AboutUsPage from './components/AboutUs';
import FAQPage from './components/Faq';
import HolidayDetailsPage from './components/HolidayDetailsPage';
import VisaServiceDetails from './components/VisaServiceDetails';
import VisaServicesPage from './components/VisaServicesPage';
import AppointmentBookingPage from './components/AppointmentBookingPage';

function App() {
  return (
   <BrowserRouter>
   <AppUpdate/>
   <ScrollToTop/>
   <Header/>
   <Routes>

 {/* <Route path='/' element={<h1>hi</h1>}/> */}
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/contactus' element={<ContactUsPage/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/blogs' element={<BlogPage/>}/>
    <Route path='/plannedpackages' element={<PlannedPackages/>}/>
    <Route path='/requestholiday' element={<CustomizedTourForm/>}/>
    <Route path='/visaapplicationform' element={<VisaApplicationForm/>}/>
    <Route path='/events' element={<EventComponent/>}/>
    <Route path='/about' element={<AboutUsPage/>}/>
    <Route path='/faq' element={<FAQPage/>}/>
    <Route path='/holidaydetailspage/:id' element={<HolidayDetailsPage/>}/>
    <Route path='/visa-services/:id' element={<VisaServiceDetails/>}/>
    <Route path='/visa-services' element={<VisaServicesPage/>}/>
    <Route path='/bookappointment' element={<AppointmentBookingPage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
