import React, { useRef, useEffect } from 'react';
import './AboutMeSection.scss';
import gsap from 'gsap';

const techs = [
    {
        title: 'Javascript',
        image: ''
    },
    {
        title: 'React',
        image: ''
    },
    {
        title: 'React Native',
        image: ''
    },
    {
        title: 'Node Js',
        image: ''
    },
    {
        title: 'Figma',
        image: ''
    },
    {
        title: 'SASS',
        image: ''
    },
    {
        title: 'AJAX',
        image: ''
    },
    {
        title: 'PostgreSQL',
        image: ''
    },
    {
        title: 'Heroku',
        image: ''
    },
    {
        title: 'SASS',
        image: ''
    },
    {
        title: 'GraphQL',
        image: ''
    },{
        title: 'Testing',
        image: ''
    },

]

const AboutMeSection = props =>{
    const techRef = useRef(null)
    const h1Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(()=>{
        [h1Ref.current, pRef.current, techRef.current.children].forEach(a =>{
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
                    I’m Daniel Oshioke Iyogwoya, a creative and passionate fullstack developer and UI enthusiast who focuses on building products that solves real problems through enjoyable and meaningful experiences. 
                    I specialize in turning functional user interfaces designs in to real life applications. But before all these things, I am a fast and open minded learner. 
                </h1>
                <p ref = {pRef}>
                    Over the past 2 years I have been working with big companies and rising startups around the world as a developer and sometimes, a UI/UX designer, working solo and leading small design teams. In my spare time I enjoy watching football and the online bants it comes with.
                </p>
            </div>
            <div ref = {techRef} className = 'technologies'>
                {
                    techs.map((tech, i)=>(
                        <div className = 'tech-set'>
                            <h2>{tech.title}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutMeSection;