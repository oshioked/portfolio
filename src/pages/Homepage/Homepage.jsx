import React from 'react';
import './Homepage.scss';
import Header from './Header/Header';
import CaseStudiesSection from './CaseStudySection/CaseStudiesSection';
import ContactSection from './ContactSection/ContactSection';

const Homepage = props =>{
    return(
        <div className = "homepage">
            <Header/>
            <CaseStudiesSection/>
            <ContactSection/>
        </div>
    )
}

export default Homepage;