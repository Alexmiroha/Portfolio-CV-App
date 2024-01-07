import React from 'react';
import s from './Intro.module.css'
import IntroMain from "./IntroMain/IntroMain";
import IntroSkills from "./IntroSkills/IntroSkills";

const Intro = () => {
    return (
        <section className='intro' id='Home'>
            <div className='contentContainer'>
                <div className={s.introBlock}>
                    <IntroMain/>
                    <IntroSkills/>
                </div>
            </div>
        </section>

    );
};

export default Intro;
