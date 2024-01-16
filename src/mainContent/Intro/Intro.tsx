import React from 'react';
import s from './Intro.module.css'
import IntroMain from "./IntroMain/IntroMain";
import IntroSkills from "./IntroSkills/IntroSkills";

type IntroPropsType = {
    isDarkMode: boolean
}

const Intro = (props: IntroPropsType) => {
    return (
        <section className='intro' id='Home'>
            <div className='contentContainer'>
                <div className={s.introBlock}>
                    <IntroMain isDarkMode={props.isDarkMode}/>
                    <IntroSkills isDarkMode={props.isDarkMode}/>
                </div>
            </div>
        </section>

    );
};

export default Intro;
