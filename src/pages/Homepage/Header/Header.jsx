import React, {useRef, useEffect} from 'react';
import './Header.scss';
import gsap from 'gsap';
import { GithubIcon, TwitterIcon, MailIcon } from '../../../components/svgs';

const Header = props =>{
    const headerRef = useRef(null);
    const titleRef = useRef(null);
    const paraRef = useRef(null);
    const buttonRef = useRef(null);
    const imgBgContRef = useRef(null);
    const shapeContRef = useRef(null);
    const socialLinksRef = useRef(null);

    useEffect(()=>{
        const titles = [[...titleRef.current.children].map(a => a.children)];
        const tl = gsap.timeline({delay: (.4 + 5)});
        
        tl
            .from([...titles, ...paraRef.current.children, ...buttonRef.current.children], {
                opacity: 0,
                yPercent: 100,
                duration: .7, 
                stagger: .3,
                ease: 'power3.easeOut'
            })
            .from(shapeContRef.current.children, {
                yPercent: 100,
                duration: 1,
                scale: 1.4,
                opacity: 0,
                stagger: .3
            }, '-=1.1')
            .from(socialLinksRef.current.children, {
                duration: .3,
                yPercent: 100,
                stagger: .1
            }, '-=1')
            .fromTo(imgBgContRef.current.children, {
                animation: 'none'
            },{
                animation: null
            }, '-=2.5')
    }, [])

    return(
        <header ref = {headerRef} className = "homepage-header">
            <div ref = {imgBgContRef} className = "img-bg-container">
                <img src = {require('../../../assests/images/0&1.png')} alt = 'hoesAndOnes'/>
                <img src = {require('../../../assests/images/0&1.png')} alt = 'hoesAndOnes'/>
            </div>
            <div className = "gradient-bg-container"/>
            <div className = "content">
                <h1 ref = {titleRef} className = "content-titles">
                    <div className = "content-title1">
                        <div>
                            Hi,
                        </div>
                    </div>
                    <div className = "content-title2">
                        <div>
                             I'm Oshioke
                        </div>
                    </div>
                </h1>
                <div ref = {paraRef} className = "content-para-container">
                    <p className = "content-para">
                    I am a passionate and creative fullstack developer who build products that solve problems.
                    </p>
                </div>
                <div ref = {buttonRef} className = "content-btn-container">
                    <a href="mailto:danieloshos3@gmail.com">Hire Me</a>                    
                </div>
            </div>
            <div ref = {shapeContRef}  className = "shapes-container">
                <div className = "shape shape1"/>
                <div className = "shape shape2"/>
                <div className = "shape shape3"/>
                <div className = "shape shape4"/>
                <div className = "shape shape5"/>
            </div>
            <div ref = {socialLinksRef} className = "socials-links">
                <a href = 'https://github.com/oshioked' rel="noopener noreferrer" target = "_blank">
                    <GithubIcon/>
                </a>
                <a href = 'https://twitter.com/DanielOshos' rel="noopener noreferrer" target = "_blank">
                    <TwitterIcon/>
                </a>
                <a id = 'mail-icon' href="mailto:danieloshos3@gmail.com">
                    <MailIcon/>
                </a>
            </div>
        </header>
    )
}

export default Header;