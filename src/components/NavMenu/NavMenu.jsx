import React, {useRef, useEffect, useState, useContext} from 'react';
import './NavMenu.scss';
import gsap from 'gsap';
import { MenuContext } from '../../contextTheme/MenuContext';

const NavMenu = props =>{
    const navRef = useRef(null);
    const imgBgRef = useRef(null);
    const imgDarkenerRef = useRef(null);
    const linksRef = useRef(null);
    const {hidden, toggleHidden} = useContext(MenuContext);
    const tl = useState(()=>gsap.timeline({paused: true}))[0]

    useEffect(()=>{
        const linksChildren = [...linksRef.current.children].map(a => a.children)
        tl
            .to(navRef.current,{
                y: 0,
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
            }, '-=1.5');
  
    }, [tl])

    useEffect(()=>{
        if(!hidden){
            document.body.style.overflow = 'hidden'
            tl.timeScale(1).play()
        }else{
            document.body.style.overflow = null
            tl.timeScale(2).reverse();
        } 
    }, [hidden])

    const onLinkClick = (selector) =>{
        toggleHidden();
        const el = document.querySelector(selector);
        el.scrollIntoView({behaviour: 'smooth'})
    }
    return(
        <div ref = {navRef} className = "nav-menu">
            <div ref = {imgBgRef} className = "img-bg-holder">
                <img src = {require('../../assests/images/profile.jpeg')} alt = "nav-menu-bg"/>
            </div>
            <div ref = {imgDarkenerRef} className = "image-darkener"/>
            <div className = "content">
                <ul ref = {linksRef}>
                    <li onClick = {()=>onLinkClick('.homepage-header')}><h1>HOME</h1></li>
                    <li onClick = {()=>onLinkClick('.case-study-section')}><h1>PROJECTS</h1></li>
                    <li onClick = {()=>onLinkClick('.about-section')}><h1>ABOUT ME</h1></li>
                    <li onClick = {()=>onLinkClick('.contact-section')}><h1>CONTACT</h1></li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;