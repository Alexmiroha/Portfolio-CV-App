import React from 'react';
import s from './AboutMe.module.css'
import {BiMap} from "react-icons/bi";
import laptop from '../../img/laptop.jpg'
import REACT from '../../img/logo192.png'
import {Icon} from "../Intro/IntroSkills/Icon";

export type SectionTitlePropsType = {
    title: string
}

export const SectionTitle:React.FC<SectionTitlePropsType> = (props) => {
    return (
        <h4 className={s.SectionTitle}>{props.title}</h4>
    )
}

export type MainTitlePropsType = {
    title: string
    displayIcon: string
    iconColor: string
}

export const MainTitle:React.FC<MainTitlePropsType> = (props) => {
    return (
        <h3 className={s.title}>
            {props.title}
            <BiMap color={props.iconColor} display={props.displayIcon}/>
        </h3>
    )
}

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
                <SectionTitle title={'ABOUT ME'}/>
                <MainTitle title={'An interested and enthusiastic Front-End Developer based in Warsaw, Poland'}
                           displayIcon={''}
                           iconColor={'#147EFB'}
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
    );
};

export default AboutMe;
