import React, {useRef, useEffect, useContext} from 'react';
import './Navbar.scss';
import gsap from'gsap';
import NavTogglerIcon from '../NavTogglerIcon/NavTogglerIcon';
import { MenuContext } from '../../contextTheme/MenuContext';


const Navbar = props =>{
    const brandRef = useRef(null);
    const togglerRef = useRef(null);
    const {toggleHidden} = useContext(MenuContext);
    

    useEffect(()=>{
        const brandTitles = [...brandRef.current.children].map(a => a.children);

        const tl = gsap.timeline({delay: ( 5.5)});
        tl
            .from(brandTitles, {
                yPercent: 100,
                duration: .5,
                stagger: .2,
                ease: 'power3.easeOut'
            })
            .from(togglerRef.current.children, {
                yPercent: 100,
                duration: .3,
                ease: 'power3.easeOut'
            }, '-=.2')
    }, [])

    return(
        <nav className = "navbar">
            <div ref = {brandRef} className = "brand">
                <h1><div>OSHIOKE DANIEL</div></h1>
                <h4><div>SOFTWARE DEVELOPER</div></h4>
            </div>
            <div ref = {togglerRef} className = "button-container">
                <button onClick = {toggleHidden}>
                    <NavTogglerIcon/>
                </button>                 
            </div>

        </nav>
    )
}

export default Navbar;