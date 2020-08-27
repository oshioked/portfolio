import React from 'react';
import './ContactSection.scss';
import {MailIcon} from '../../../components/svgs'

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
                        <a href = "mailto:danieloshos3@gmail.com">danieloshos3@gmail.com</a> 
                    </div>
                </div>
            </div>
            <div className = "last-note">
                <p className = 'copyright'>&copy; 2020 OSHIOKE DANIEL</p>                
            </div>

        </div>
   )
}

export default ContactSection;