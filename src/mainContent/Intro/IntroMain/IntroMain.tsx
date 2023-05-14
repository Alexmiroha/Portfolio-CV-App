import React from 'react';
import s from './IntroMain.module.css'
import {BiMap} from "react-icons/bi";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import avatar from '../../../img/photo.jpg'
import icon from '../../../img/logo192.png'

const IntroMain = () => {
    return (
        <div className={s.introMain}>
            <div className={s.text}>
                <h1 className={s.title}>Front-End React Developer
                    <img className={s.icon} src={icon} alt=""/>
                </h1>
                <p className={s.description}>
                    Hi, I'm Oleksii Miroshnichenko. A passionate Front-end React Developer
                    based in Warsaw, Poland.
                    <BiMap color='#d261fb'/>
                </p>
                <div className={s.social}>
                    <base target='_blank'/>
                    <a href="https://www.linkedin.com/in/alex-m-60354b263/" className={s.link}>
                        <BsLinkedin size='25px'/>
                    </a>
                    <a href="https://github.com/Alexmiroha" className={s.link}>
                        <BsGithub size='25px'/>
                    </a>
                    <a href="https://www.instagram.com/a1exm1roha_dev/" className={s.link}>
                        <GrInstagram size='25px'/>
                    </a>
                </div>
            </div>
            <div className={s.imageContainer}>
                <img className={s.image} src={avatar} alt="image"/>
            </div>
        </div>
    );
};

export default IntroMain;
