import React from 'react';
import './AboutMeSection.scss';


const AboutMeSection = props =>{
    return(
        <div className = "about-section">
            <div className = "head">
                <h3>A FEW WORDS ABOUT ME</h3>                
            </div>
            <div className = "details">
                <h1>
                I’m Daniel Oshioke Iyogwoya, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
                </h1>
                <p>
                Over the past 9 years I have been working with big companies and rising startups around the world as a designer and art director, working solo and leading small design teams. In my spare time I enjoy photography and motorcycle adventures.
                </p>
            </div>
            
        </div>
    )
}

export default AboutMeSection;