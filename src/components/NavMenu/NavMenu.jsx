import React, {useRef, useEffect} from 'react';
import './NavMenu.scss';
import gsap from 'gsap';

const NavMenu = props =>{
    const navRef = useRef(null);
    const imgBgRef = useRef(null);
    const imgDarkenerRef = useRef(null);
    const linksRef = useRef(null)

    useEffect(()=>{
        const linksChildren = [...linksRef.current.children].map(a => a.children)
        
        const tl = gsap.timeline();

        tl.from(navRef.current,{
            yPercent: -100,
            duration: 1.3,
            ease: 'power3.inOut'
        })
        .from(imgDarkenerRef.current, {
            opacity: 1,
            duration: 1.3
        }, '-=.8')
        .from(imgBgRef.current, {
            scale: 1.07,
            duration: 1.5
        }, '-=1')
        .from(linksChildren, {
            yPercent: 100,
            duration: .5,
            opacity: 0,
            stagger: .2
        }, '-=1.5')
        
    }, [])
    return(
        <div ref = {navRef} className = "nav-menu">
            <div ref = {imgBgRef} className = "img-bg-holder">
                <img src = {require('../../assests/images/dimitar-donovski-cIG6MZFamyU-unsplash.jpg')} alt = "nav-menu-bg"/>
            </div>
            <div ref = {imgDarkenerRef} className = "image-darkener"/>
            <div className = "content">
                <ul ref = {linksRef}>
                    <li><h1>HOME</h1></li>
                    <li><h1>PROJECTS</h1></li>
                    <li><h1>ABOUT ME</h1></li>
                    <li><h1>CONTACT</h1></li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;