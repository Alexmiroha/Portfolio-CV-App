import React from 'react';
import s from './mainContent.module.css'
import Intro from "./Intro/Intro";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <Intro/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default MainContent;
