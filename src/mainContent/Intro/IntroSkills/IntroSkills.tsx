import React from 'react';
import s from './IntroSkills.module.css'
import html from '../../../img/html.svg'
import css from '../../../img/css.svg'
import js from '../../../img/js.svg'
import ts from '../../../img/typescript.svg'
import react from '../../../img/logo192.png'
import MUI from '../../../img/MUI.svg'


const IntroSkills = () => {
    return (
        <div className={s.introSkills}>
            <p className={s.description}>Tech Stack &nbsp;&nbsp;|</p>
            <ul className={s.icons}>
                <li>
                    <img className={s.icon} src={html} alt="HTML"/>
                </li>
                <li>
                    <img className={s.icon} src={css} alt="CSS"/>
                </li>
                <li>
                    <img className={s.icon} src={js} alt="JS"/>
                </li>
                <li>
                    <img className={s.icon} src={ts} alt="TS"/>
                </li>
                <li>
                    <img className={s.icon} src={react} alt="React"/>
                </li>
                <li>
                    <img className={s.icon} src={MUI} alt="Material UI"/>
                </li>
            </ul>
        </div>
    );
};

export default IntroSkills;
