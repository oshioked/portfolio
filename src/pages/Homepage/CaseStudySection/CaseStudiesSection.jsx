import React from 'react';
import './CaseStudiesSection.scss';
import CaseStudyCard from '../../../components/CaseStudyCard/CaseStudyCard';

const caseStudies = [
    {
        title: 'Quickeats',
        details: [
        `
            Quickeats is a full resturant app  built with React native, Node JS (to manage backend activities like authentication, user activities 
            like ordering, searching, liking a meal, etc., calculating user bonuses and sending a push notification to the store owner's device on order.),
            POSTGRESQL for database management and Firebase storage for media storage.
        `
        ],
        images: [
            require('../../../assests/images/Quickeats/quickeats1.jpg'),
            require('../../../assests/images/Quickeats/quickeats2.jpg'),
            require('../../../assests/images/Quickeats/quickeats3.jpg'),
            require('../../../assests/images/Quickeats/quickeats4.jpg'),
        ],
        repoLink: "https://github.com/oshioked/Quickeats-mobile-app",
        appLink: ""
    },
    {
        title: 'Alox',
        details: [`
            An ecommerce travel brand website built with React and Firebase to manange authentication and database management. It is integrated with Stripe for payment handling.
            It is fully responsive, accessible and dynamic with good performance.
        `],
        images: [
            require('../../../assests/images/Alox/alox.jpg'),
            require('../../../assests/images/Alox/alox3 (1).png'),
            require('../../../assests/images/Alox/alox4 (1).png'),
            require('../../../assests/images/Alox/alox2 (1).png'),
        ],
        repoLink: "https://github.com/oshioked/Alox-travel",
        appLink: "https://alox.herokuapp.com"
    },
    {
        title: 'Quickeats Landing Page',
        details: [`
            An ecommerce travel brand website built with React and Firebase to manange authentication and database management. It is integrated with Stripe for payment handling.
            It is fully responsive, accessible and dynamic with good performance.
        `],
        images: [
            require('../../../assests/images/QLanding/QLP1.png'),
            require('../../../assests/images/Alox/alox2 (1).png'),
            require('../../../assests/images/Alox/alox3 (1).png'),
            require('../../../assests/images/Alox/alox4 (1).png'),
        ],
        repoLink: 'https://github.com/oshioked/quickeats-app-landing-page',
        appLink: 'https://quickeatss.herokuapp.com'
    },
]

const CaseStudiesSection = props =>{
    return(
        <div className = "case-study-section">
            <div className = "head">
                <h1>
                    <div>CASE STUDIES</div>
                </h1> 
            </div>
            <div className = "cases-container">
                {
                    caseStudies.map( (study, i) => (
                        <div key = {i} className = "set">
                            <CaseStudyCard 
                                repoLink = {study.repoLink}
                                appLink = {study.appLink}
                                order = {i % 2 ? true : false}
                                imgs = {study.images}
                                details = {study.details}
                                title = {study.title}
                            />
                        </div>  
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudiesSection;