import React from 'react';
import './CaseStudyCard.scss';

const CaseStudyCard = props =>{
    return(
        <div className = "case-study-card">
            <div className = "dark-bg-container"/>
            <div className = "other-photos" style = {props.order? {order: 1} : null}>
                <div className = "image-container">
                    <img src = {require('../../assests/images/casestudysample.png')} alt = 'case-study'/>
                </div>
                <div className = "image-container">
                    <img src = {require('../../assests/images/casestudysample.png')} alt = 'case-study'/>
                </div>
                <div className = "image-container">
                    <img src = {require('../../assests/images/casestudysample.png')} alt = 'case-study'/>
                </div>
                <div className = "image-container">
                    <img src = {require('../../assests/images/casestudysample.png')} alt = 'case-study'/>
                </div>
            </div>
            <div className = "main-content">
                <div className = "image-container">
                    <img src = {require('../../assests/images/casestudysample.png')} alt = 'case study'/>
                </div>
                <div>
                    <h1>
                        <div>
                            Alox
                        </div>
                    </h1>
                    <div>
                        <p>
                        An ecommerce travel brand website for a merce travel brand website for a travel bags and accessories.
                        </p>
                    </div>
                    <div>
                        <p>
                        An ecommerce travel brand website for a merce travel brand website for a travel bags and accessories.
                        </p>
                    </div>
                    <div>
                        <button>View Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyCard;