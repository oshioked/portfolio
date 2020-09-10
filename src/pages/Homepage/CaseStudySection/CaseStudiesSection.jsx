import React from 'react';
import './CaseStudiesSection.scss';
import CaseStudyCard from '../../../components/CaseStudyCard/CaseStudyCard';

const caseStudies = [
    {
        title: 'Quickeats',
        details: [
        `
            Quickeats is a resturant mobile app for both android and iOS built with React native. It uses NodeJS to handle backend activities like authentication, user activities 
            (ordering, searching, liking a meal, etc), calculating user bonuses and sending a push notification to the store owner's device on order. It also uses
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
            A travel lifestyle and brand ecommerce web application (PWA) built with React and Firebase to manange authentication and database management. 
            It is integrated with Stripe for payment handling. It is also fully responsive, accessible and dynamic with good performance.
        `],
        images: [
            require('../../../assests/images/Alox/alox1.jpg'),
            require('../../../assests/images/Alox/alox2.jpg'),
            require('../../../assests/images/Alox/alox3.jpg'),
            require('../../../assests/images/Alox/alox4.jpg'),
        ],
        repoLink: "https://github.com/oshioked/Alox-travel",
        appLink: "https://alox.herokuapp.com"
    },
    {
        title: 'Quickeats Landing Page',
        details: [`
            The official landing page of quickeats app. It is mainly built with React and SCSS.
            It is fully responsive, accessible and dynamic with good performance.
        `],
        images: [
            require('../../../assests/images/QLanding/Qlanding.jpg'),
            require('../../../assests/images/QLanding/Qlanding2.jpg'),
            require('../../../assests/images/QLanding/Qlanding3.jpg'),
            require('../../../assests/images/QLanding/Qlanding4.jpg'),
        ],
        repoLink: 'https://github.com/oshioked/quickeats-app-landing-page',
        appLink: 'https://quickeatss.herokuapp.com'
    },
    {
        title: 'Lite Bank',
        details: [`
            A banking / fintech mobile app. Built with react native. This is one of many results from a personal challenge I had a while ago.
            Redesign on figma and build with react native. To see more results from the challenge, check my github.
        `],
        images: [
            require('../../../assests/images/LiteBank/Litebank1.jpg'),
            require('../../../assests/images/LiteBank/Litebank2.jpg'),
            require('../../../assests/images/LiteBank/Litebank3.jpg'),
            require('../../../assests/images/LiteBank/Litebank4.jpg'),
        ],
        repoLink: 'https://github.com/oshioked/finApp',
        appLink: ''
    },
    {
        title: 'Personal Portfolio',
        details: [`
            Personal portfolio built with React and SCSS. Hosted on heroku. It is fully responsive, accessible and with great performance.
        `],
        images: [
            require('../../../assests/images/Portfolio/portfolio2.jpg'),
            require('../../../assests/images/Portfolio/portfolio1.jpg'),
            require('../../../assests/images/Portfolio/portfolio3.jpg'),
            require('../../../assests/images/Portfolio/portfolio4.jpg'),
        ],
        repoLink: '',
        appLink: ''
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