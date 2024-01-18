import React from 'react';
import s from './IntroMain.module.css'
import {BiMap} from "react-icons/bi";
import avatar from '../../../img/photo.webp'
import icon from '../../../img/logo192.png'
import Social from "../../../ReusableComponents/Social";

type IntroMainPropsType = {
    isDarkMode: boolean
}

const IntroMain = (props: IntroMainPropsType) => {
    return (
        <div className={`${s.introMain} ${props.isDarkMode ? `${s._darkModeBC} ${s._darkMode}` : ''}`}>
            <div className={s.text}>
                <h1 className={s.title}>Front-End React <br/>Developer
                    <img className={s.icon} src={icon} alt="icon React"/>
                </h1>
                <p className={s.description}>
                    Greetings, I'm Oleksii Miroshnichenko,
                    a Creative Front-end Developer specializing
                    in React based in the heart of Warsaw, Poland.
                    <BiMap color='#d261fb'/>
                </p>
            </div>
            <div className={`${s.imageContainer} ${props.isDarkMode ? `${s._darkModeBC} ${s._darkMode}` : ''}`}>
                <img className={`${s.image} ${props.isDarkMode ? `${s._darkModeBC} ${s._darkMode}` : ''}`} src={avatar} alt="avatar"/>
                <Social display={["instagram", "github", "linkedin"]} iconHoverColor={'#d261fb'} iconColor={props.isDarkMode? '#fff' : ''}/>

            </div>
        </div>
    );
};

export default IntroMain;
