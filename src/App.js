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

function App() {
  return (
   <BrowserRouter>
   <AppUpdate/>
   <ScrollToTop/>
   <Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/contactus' element={<ContactUsPage/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/blogs' element={<BlogPage/>}/>
    <Route path='/plannedpackages' element={<PlannedPackages/>}/>
    <Route path='/requestholiday' element={<CustomizedTourForm/>}/>
    <Route path='/visaapplicationform' element={<VisaApplicationForm/>}/>
    <Route path='events' element={<EventComponent/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
