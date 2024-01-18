import React from 'react';
import s from './AboutMe.module.css'
import laptop from '../../img/laptop.webp'
import REACT from '../../img/logo192.png'
import {Icon} from "../Intro/IntroSkills/Icon";
import {MainTitle} from "../../ReusableComponents/mainTitle";
import {BlueTitle} from "../../ReusableComponents/blueTitle";

type AboutMePropsType = {
    isDarkMode: boolean
}

const AboutMe = (props:AboutMePropsType) => {
    return (

        <section className={`${'AboutMe'} ${props.isDarkMode? s.darkMode : s.whiteMode}`} id='About'>
            <div className='contentContainer'>
                <div className={s.AboutMe}>
                    <div className={s.imageSection}>
                        <div className={s.icon}>
                            <Icon src={REACT}/>
                        </div>
                        <img className={s.image} src={laptop} alt=""/>
                    </div>
                    <div className={s.infoSection}>
                        <BlueTitle title={'ABOUT ME'}/>
                        <MainTitle title={'An interested and enthusiastic Front-End Developer based in Warsaw, Poland🗺️'}
                        />
                        <p className={s.description}>
                            Enthusiastic about learning and always ready to enhance my skills,
                            I am proactive and unafraid of challenges.
                            My primary goal is to create high-quality products that bring tangible benefits.
                            With experience in HTML, CSS, JavaScript, React, Tailwind, and SCSS, among other technologies,
                            I specialize in the art of crafting and maintaining responsive websites that prioritize a seamless user experience.
                            With enthusiasm, I adeptly craft dynamic, captivating interfaces through the
                            deployment of pristine, optimized code and harnessing cutting-edge development tools.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
