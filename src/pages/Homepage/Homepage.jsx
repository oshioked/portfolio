import React from 'react';
import './Homepage.scss';
import Header from './Header/Header';
import CaseStudiesSection from './CaseStudySection/CaseStudiesSection';
import ContactSection from './ContactSection/ContactSection';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import NavMenu from '../../components/NavMenu/NavMenu';
import Navbar from '../../components/Navbar/Navbar';

const Homepage = props =>{
    return(
        <div className = "homepage">
            <Header/>
            <Navbar/>
            <NavMenu/>
            <CaseStudiesSection/>
            <AboutMeSection/>
            <ContactSection/>
        </div>
    )
}

export default Homepage;