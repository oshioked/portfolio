import React, { useRef, useEffect } from 'react';
import './AboutMeSection.scss';
import gsap from 'gsap';

const AboutMeSection = props =>{
    const h1Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(()=>{
        [h1Ref.current, pRef.current].forEach(a =>{
        gsap.from(a, {
            scrollTrigger: {
                trigger: a,
                start: 'top+=50 bottom',
            },
            autoAlpha: 0,
            duration: .5,
            y: 100
        })            
        })

        


    }, [])
    return(
        <div className = "about-section">
            <div className = "head">
                <h3>A FEW WORDS ABOUT ME</h3>                
            </div>
            <div className = "details">
                <h1 ref = {h1Ref}>
                I’m Daniel Oshioke Iyogwoya, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
                </h1>
                <p ref = {pRef}>
                Over the past 9 years I have been working with big companies and rising startups around the world as a designer and art director, working solo and leading small design teams. In my spare time I enjoy photography and motorcycle adventures.
                </p>
            </div>
            
        </div>
    )
}

export default AboutMeSection;