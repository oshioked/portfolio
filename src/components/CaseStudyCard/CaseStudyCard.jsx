import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

import './CaseStudyCard.scss';


const ContentContainerComponent = ({children}) =>{
    const [windowWidth, setWindowWith] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWindowWith(window.innerWidth)
        })
        return( () =>
            window.removeEventListener('resize', ()=>{
                setWindowWith(window.innerWidth)
            })
        )
    }, [setWindowWith])

    return(
        windowWidth > 768 ? 
            <div className = "main-content">{children}</div>
        : <React.Fragment>{children}</React.Fragment>        
    )
}


const CaseStudyCard = props =>{
    const {imgs, title, details } = props;
    const [activeImg, setActiveImage] = useState(0);
    const mainImagesRef = useRef(null);
    const otherPhotosRef = useRef(null);
    const detailsRef = useRef(null);


    const onImgClick = useCallback(async (i) =>{
        if(i === activeImg)return;
        const allImages = mainImagesRef.current.children;
        const Tl = gsap.timeline({defaults: {ease: 'power3.inOut', duration: .7}});
        const allButNewActive = [...allImages].filter((a, idx) => idx !== i);

        await Tl.to(allImages[activeImg], {
            transform: 'translateY(-100%)',
        }, 'same')
        .to(allImages[activeImg].children,{
            transform: 'translateY(100%)',
        }, '0')
        .set(allButNewActive, {
            transform: 'translateY(100%)',
        })
        .set(allImages[activeImg].children,{
            transform: 'translateY(-100%) scale(1.2)',
        })
        .to(allImages[i], {
            transform: 'translateY(0%)',
        }, '0')
        .to(allImages[i].children,{
            transform: 'translateY(0%)',
        }, '.0')
        .to(allImages[i].children,{
            scale: 1,
            duration: .5,
        }, '-=.2')

        setActiveImage(i)
    }, [activeImg])

    useEffect(()=>{
        const otherPhotosChildren = otherPhotosRef.current.children;
        const detailsChildren = detailsRef.current.children;
        const tl = gsap.timeline({scrollTrigger: {
            trigger: otherPhotosRef.current,
            start: 'top bottom'
        }});
        const otherPhotosContWidth = otherPhotosRef.current.clientWidth;
        const otherPhotosContHeight = otherPhotosRef.current.clientHeight;
        tl
        .from(mainImagesRef.current, {
            duration: 2,
            scale: 1.22
        })
        // for mobile
        .from(otherPhotosChildren, {
            duration: window.innerWidth > 768 ? null : .4,
            autoAlpha: window.innerWidth > 768 ? null : 0,
            yPercent: window.innerWidth > 768 ? null : -110,
            stagger: window.innerWidth > 768 ? null : .3,
        }, '-=.5')
        .from([...detailsChildren].map(a => a.children), {
            autoAlpha: 0,
            yPercent: 100,
            duration: .4,
            stagger: .2
        }, window.innerWidth > 768 ? '-=1.5' : '-=.3')
        // for pc
        .from(otherPhotosChildren[0], {
            duration: window.innerWidth < 768 ? null : .4,
            autoAlpha: window.innerWidth < 768 ? null : 0,
        }, "-=1")
        .from(otherPhotosChildren[1], {
            duration:  window.innerWidth < 768 ? null : .4,
            autoAlpha:  window.innerWidth < 768 ? null : 0,
            x:  window.innerWidth < 768 ? null : -(otherPhotosContWidth/1.5)
        }, "-=.5")
        .from(otherPhotosChildren[3], {
            duration:  window.innerWidth < 768 ? null : .4,
            autoAlpha:  window.innerWidth < 768 ? null : 0,
            y:  window.innerWidth < 768 ? null : -(otherPhotosContHeight * 2)
        })
        .from(otherPhotosChildren[2], {
            duration:  window.innerWidth < 768 ? null : .4,
            autoAlpha:  window.innerWidth < 768 ? null : 0,
            x:  window.innerWidth < 768 ? null : (otherPhotosContWidth/1.5)
        })
        .set(otherPhotosChildren, {
            zIndex: 0
        })
    }, [])

    const onLinkClick = (url) =>{
        if(url){
            window.open(url);
            window.focus()            
        }

    }

    return(
        <div className = "case-study-card">
            <div className = "dark-bg-container"/>
            <div ref = {otherPhotosRef} className = "other-photos" style = {props.order? {order: 1} : null}>
                {
                    imgs.map((img, i) =>{
                        return(
                            <div key = {i} style = {{zIndex: i === 2 ? -4 : -i}} onClick = {()=>onImgClick(i)} active = {activeImg === i ? 'true' : 'false'} className = "image-container">
                                <div className = "image-darkener"/>
                                <img src = {img} alt = 'case-study'/>
                            </div>
                        )
                    })
                }
            </div>
            <ContentContainerComponent>
                <div className = "image-block">
                    <div className = 'container'>
                        <div ref = {mainImagesRef} className = "images-container">
                            {
                                imgs.map((img, i) =>{
                                    return(
                                        <div key = {i} className = {`image ${i + 1} ${activeImg === i ? 'active' : ''}`}>
                                            <img  src = {img} alt = 'case study'/>
                                        </div>
                                    )
                                })
                            }
                        </div>                        
                    </div>
                </div>
                <div ref ={detailsRef} className = "details"> 
                    <h1 className = 'title'>
                        <div>
                            {title}
                        </div>
                    </h1>
                    {
                        details.map((detail, i)=>(
                            <div key = {i} className = "para1">
                                <p>{detail}</p>
                            </div>
                        ))
                    }
                    <div className = 'button-container'>
                        <button 
                            onClick = {()=>onLinkClick(props.appLink)}
                        >View Project</button>
                        <button
                            onClick = {()=>onLinkClick(props.repoLink)}
                        >View Code</button>
                    </div>
                </div>
            </ContentContainerComponent>
        </div>
    )
}

export default CaseStudyCard;