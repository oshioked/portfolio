import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import './NavTogglerIcon.scss';
import gsap from 'gsap';
import { MenuContext } from '../../contextTheme/MenuContext';

const NavTogglerIcon = props =>{
    const svgRef = useRef(null);
    const {hidden} = useContext(MenuContext);
    const [tl] = useState(gsap.timeline({paused: true}))


    const toggleIconForm = useCallback(() =>{
        console.log('toggle icon changw', hidden, tl)
        const rectsRef = [...svgRef.current.children];
        
        if(!hidden){
            tl
                .to(rectsRef[0], {
                    duration: .5,
                    y: (svgRef.current.clientHeight) / 2
                })
                .to(rectsRef[2], {
                    duration: .5,
                    y: -(svgRef.current.clientHeight) / 2
                }, '0')
                .set(rectsRef[1], {
                    opacity: 0
                })
                .to(rectsRef[0], {
                    transformOrigin: 'center',
                    rotate: 45,
                }, 'same')
                .to(rectsRef[2], {
                    transformOrigin: 'center',
                    rotate: -45
                }, 'same')
            
        }else{
            tl.reverse()
        }
    }, [hidden, tl])

    useEffect(()=>{
        toggleIconForm();
    }, [hidden, toggleIconForm])
    return(
        <svg ref = {svgRef} width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="37" height="4" fill="#C4C4C4"/>
        <rect y="12" width="37" height="4" fill="#C4C4C4"/>
        <rect y="24" width="37" height="4" fill="#C4C4C4"/>
        </svg>
    )
}

export default NavTogglerIcon;