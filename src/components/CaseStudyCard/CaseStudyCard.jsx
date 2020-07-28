import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

import './CaseStudyCard.scss';



const CaseStudyCard = props =>{
    const imgs = [
        require('../../assests/images/casestudysample.png'),
        require('../../assests/images/dimitar-donovski-cIG6MZFamyU-unsplash.jpg'),
        require('../../assests/images/dimitar-donovski-cIG6MZFamyU-unsplash.jpg'),
        require('../../assests/images/casestudysample.png')
    ]
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
            duration: 2.5,
            scale: 1.22
        },)

        .from([...detailsChildren].map(a => a.children), {
            autoAlpha: 0,
            yPercent: 100,
            duration: .3,
            stagger: .2
        }, '-=2')
        .from(otherPhotosChildren[0], {
            autoAlpha: 0,
            duration: .3,
        }, '-=1.5')
        .from(otherPhotosChildren[1], {
            duration: .3,
            autoAlpha: 0,
            x: -(otherPhotosContWidth/1.5)
        }, '-=.2')
        .from(otherPhotosChildren[3], {
            duration: .3,
            autoAlpha: 0,
            y: -(otherPhotosContHeight * 2)
        })
        .from(otherPhotosChildren[2], {
            duration: .3,
            autoAlpha: 0,
            x: (otherPhotosContWidth/1.5)
        })
        .set(otherPhotosChildren, {
            zIndex: 0
        })
        
        
    }, [])

    return(
        <div className = "case-study-card">
            <div className = "dark-bg-container"/>
            <div ref = {otherPhotosRef} className = "other-photos" style = {props.order? {order: 1} : null}>
                {
                    imgs.map((img, i) =>{
                        return(
                            <div style = {{zIndex: i === 2 ? -4 : -i}} onClick = {()=>onImgClick(i)} active = {activeImg === i ? 'true' : 'false'} className = "image-container">
                                <div className = "image-darkener"/>
                                <img src = {img} alt = 'case-study'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className = "main-content">
                <div className = "image-block">
                    <div className = 'container'>
                        <div ref = {mainImagesRef} className = "images-container">
                            {
                                imgs.map((img, i) =>{
                                    return(
                                        <div className = {`image ${i + 1} ${activeImg === i ? 'active' : ''}`}>
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
                            ALOX BRAND WEBSITE
                        </div>
                    </h1>
                    <div className = 'details para1'>
                        <p>
                        An ecommerce travel brand website for a merce travel brand website for a travel bags and accessories.
                        </p>
                    </div>
                    <div className = 'details para1'>
                        <p>
                        An ecommerce travel brand website for a merce travel brand website for a travel bags and accessories.
                        </p>
                    </div>
                    <div className = 'button-container'>
                        <button>View Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyCard;