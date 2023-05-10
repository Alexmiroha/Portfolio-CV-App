import React from 'react';
import s from './Intro.module.css'
import IntroMain from "./IntroMain/IntroMain";

const Intro = () => {
    return (
        <div className={s.introBlock}>
            <IntroMain/>
        </div>
    );
};

export default Intro;
