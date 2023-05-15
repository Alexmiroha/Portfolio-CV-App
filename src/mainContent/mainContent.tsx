import React from 'react';
import s from './mainContent.module.css'
import Intro from "./Intro/Intro";
import AboutMe from "./AboutMe/AboutMe";

const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <Intro/>
            <AboutMe/>
        </div>
    );
};

export default MainContent;
