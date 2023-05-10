import React from 'react';
import s from './mainContent.module.css'
import Intro from "./Intro/Intro";

const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <Intro/>
        </div>
    );
};

export default MainContent;
