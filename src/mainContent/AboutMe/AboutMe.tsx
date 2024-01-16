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
                            As a Junior Front-End Developer,
                            I possess an impressive arsenal of skills
                            in HTML, CSS, JavaScript, React, Tailwind,
                            and SCSS. I excel in designing and maintaining
                            responsive websites that offer a smooth user
                            experience. My expertise lies in crafting dynamic,
                            engaging interfaces through writing clean and optimized
                            code and utilizing cutting-edge development tools and
                            techniques. I am also a team player who thrives in
                            collaborating with cross-functional teams to produce
                            outstanding web applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
