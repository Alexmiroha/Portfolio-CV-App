import React from 'react';
import s from './IntroMain.module.css'
import {BiMap} from "react-icons/bi";
import avatar from '../../../img/photo.webp'
import icon from '../../../img/logo192.png'
import Social from "../../../ReusableComponents/Social";

const IntroMain = () => {
    return (
        <div className={s.introMain}>
            <div className={s.text}>
                <h1 className={s.title}>Front-End React <br/>Developer
                    <img className={s.icon} src={icon} alt="icon React"/>
                </h1>
                <p className={s.description}>
                    Hi, I'm Oleksii Miroshnichenko. <br/>A passionate Front-end React <br/>Developer
                    based in Warsaw, <br/>Poland.
                    <BiMap color='#d261fb'/>
                </p>
            </div>
            <div className={s.imageContainer}>
                <img className={s.image} src={avatar} alt="avatar"/>
                <Social display={["instagram", "github", "linkedin"]} iconHoverColor={'#d261fb'}/>

            </div>
        </div>
    );
};

export default IntroMain;
