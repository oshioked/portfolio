import React from 'react';
import './CaseStudiesSection.scss';
import CaseStudyCard from '../../../components/CaseStudyCard/CaseStudyCard';

const CaseStudiesSection = props =>{
    return(
        <div className = "case-study-section">
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