import React from 'react';
import s from './mainContent.module.css'
import Intro from "./Intro/Intro";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

type MainContentPropsType = {
    isDarkMode: boolean
}

const MainContent = (props: MainContentPropsType) => {
    return (
        <div className={s.mainContent}>
            <Intro isDarkMode={props.isDarkMode}/>
            <AboutMe isDarkMode={props.isDarkMode}/>
            <Projects isDarkMode={props.isDarkMode}/>
            <Contact isDarkMode={props.isDarkMode}/>
        </div>
    );
};

export default MainContent;
