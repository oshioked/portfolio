import React from 'react';
import './ContactSection.scss';
import {HeartIcon, MailIcon, PhoneIcon} from '../../../components/svgs'

const ContactSection = props =>{
    return(
        <div className = "contact-section">
            <div className = 'head'>
                <h1>CONTACT INFORMATION</h1>     
                <h3>GET IN TOUCH</h3>           
            </div>
            <div className = "content">
                <div className = "section-1">
                    <div className = "contact-set">
                        <MailIcon/>
                        <p>DanielOshos3@gmail.com</p> 
                    </div>
                    <div className = "contact-set">
                        <PhoneIcon/>
                        <p>+234 80 5605 5305</p>
                    </div>
                </div>
            </div>
            <div className = "last-note">
                <p className = 'copyright'>&copy; 2020 OSHIOKE DANIEL</p>
                <p className = "made-with">
                    Made with <span><HeartIcon/> </span> in Nigeria.
                </p>                
            </div>

        </div>
   )
}

export default ContactSection;