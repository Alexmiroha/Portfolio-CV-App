import React from 'react';
import s from './IntroSkills.module.css'
import HTML from '../../../img/html.svg'
import CSS from '../../../img/css.svg'
import JS from '../../../img/js.svg'
import TS from '../../../img/typescript.svg'
import REACT from '../../../img/logo192.png'
import MUI from '../../../img/MUI.svg'
import {Icon} from "./Icon";

type IntroSkills = {
    isDarkMode: boolean
}

const tech = [HTML, CSS, JS, REACT, TS, MUI,]


const IntroSkills = (props:IntroSkills) => {
    return (
        <div className={`${s.introSkills} ${props.isDarkMode? s.darkMode : ''}`}>
            <p className={s.description}>Tech Stack</p>
            <ul className={s.icons}>
                {tech.map(icon => <Icon src={icon} isDarkMode={props.isDarkMode}/>)}
            </ul>
        </div>
    );
};

export default IntroSkills;
