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
        title: 'CSS IN JS',
        image: ''
    },
    {
        title: 'GraphQL',
        image: ''
    },{
        title: 'Testing',
        image: ''
    }
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
                    I’m Daniel Oshioke Iyogwoya, a creative and passionate software developer and UI enthusiast who focuses on building products that solves real problems through enjoyable and meaningful experiences. 
                    I specialize in turning functional user interfaces designs in to real life applications. But before all these things, I am a fast and open minded learner. 
                </h1>
                <p ref = {pRef}>
                    Over the past 2 years I have been working on many simple to complex projects as a developer with various technologies and tools including;
                    
                </p>
            </div>
            <div ref = {techRef} className = 'technologies'>
                {
                    techs.map((tech, i)=>(
                        <div key = {i} className = 'tech-set'>
                            <h2>{tech.title}</h2>
                        </div>
                    ))
                }
            </div>
            <div className = "details">
                <p ref = {pRef}>
                    Others includes  Responsive web design, Performance Optimization and Progressive web applications. 
                    I'm currently learning Next.js and I'm open to learning more interesting things as per requirements. 
                </p>
            </div>
        </div>
    )
}

export default AboutMeSection;