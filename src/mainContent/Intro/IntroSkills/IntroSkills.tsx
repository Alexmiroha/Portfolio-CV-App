import React from 'react';
import s from './IntroSkills.module.css'
import HTML from '../../../img/html.svg'
import CSS from '../../../img/css.svg'
import JS from '../../../img/js.svg'
import TS from '../../../img/typescript.svg'
import REACT from '../../../img/logo192.png'
import MUI from '../../../img/MUI.svg'
import {Icon} from "./Icon";

const IntroSkills = () => {
    return (
        <div className={s.introSkills}>
            <p className={s.description}>Tech Stack</p>
            <ul className={s.icons}>
                <Icon src={HTML}/>
                <Icon src={CSS}/>
                <Icon src={JS}/>
                <Icon src={REACT}/>
                <Icon src={TS}/>
                <Icon src={MUI}/>
            </ul>
        </div>
    );
};

export default IntroSkills;
