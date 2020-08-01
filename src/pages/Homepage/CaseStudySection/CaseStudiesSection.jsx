import React, {useRef, useEffect} from 'react';
import './CaseStudiesSection.scss';
import gsap from 'gsap';
import CaseStudyCard from '../../../components/CaseStudyCard/CaseStudyCard';

const CaseStudiesSection = props =>{
    const sectionRef = useRef(null);
    

    useEffect(()=>{
        const slideRef = sectionRef.current.children[1].children[0];


    })
    return(
        <div ref = {sectionRef} className = "case-study-section">
            <div className = "head">
                <h1>
                    <div>CASE STUDIES</div>
                </h1> 
            </div>
            <div className = "cases-container">
                    <div className = "set">
                        <CaseStudyCard/>
                    </div>  
                    <div className = "set">
                        <CaseStudyCard order/>
                    </div>  
                    <div className = "set">
                        <CaseStudyCard/>
                    </div>
            </div>
        </div>
    )
}

export default CaseStudiesSection;