import React from 'react';
import s from './AboutMe.module.css'
import {BiMap} from "react-icons/bi";
import laptop from '../../img/laptop.jpg'
import REACT from '../../img/logo192.png'
import {Icon} from "../Intro/IntroSkills/Icon";

const AboutMe = () => {
    return (
        <div className={s.AboutMe}>
            <div className={s.imageSection}>
                <div className={s.icon}>
                    <Icon src={REACT}/>
                </div>
                <img className={s.image} src={laptop} alt=""/>
            </div>
            <div className={s.infoSection}>
                <h4>About me</h4>
                <h3 className={s.title}>
                    An interested and enthusiastic Front-End Developer <br/>based in Warsaw, Poland
                    <BiMap color='#d261fb'/>
                </h3>
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
    );
};

export default AboutMe;
