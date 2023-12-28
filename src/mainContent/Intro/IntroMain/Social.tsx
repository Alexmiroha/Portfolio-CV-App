import React from 'react';
import s from "./Social.module.css";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";

const Social = () => {
    return (
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
    );
};

export default Social;