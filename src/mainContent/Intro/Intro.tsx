import React from 'react';
import s from './Intro.module.css'
import IntroMain from "./IntroMain/IntroMain";
import IntroSkills from "./IntroSkills/IntroSkills";

const Intro = () => {
    return (
        <div className={s.introBlock}>
            <IntroMain/>
            <IntroSkills/>
        </div>
    );
};

export default Intro;
