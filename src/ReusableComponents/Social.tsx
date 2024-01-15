import React from 'react';
import s from "./Social.module.css";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import IconSocial from "./IconSocial";

type SocialPropsType = {
    display: string[],
    iconColor?: string,
    iconHoverColor?: string
}

const Social: React.FC<SocialPropsType> = (props) => {

    return (
        <div className={s.social}>
            {props.display.includes('linkedin') && (
                <IconSocial href="https://www.linkedin.com/in/alex-m-60354b263/" icon={<BsLinkedin size='25px'/>}
                            iconColor={props.iconColor} iconHoverColor={props.iconHoverColor}

                />
            )}
            {props.display.includes('github') && (
                <IconSocial href="https://github.com/Alexmiroha" icon={<BsGithub size='25px'/>}
                            iconColor={props.iconColor} iconHoverColor={props.iconHoverColor}
                />
            )}
            {props.display.includes('instagram') && (
                <IconSocial href="https://www.instagram.com/a1exm1roha_dev/" icon={<GrInstagram size='25px'/>}
                            iconColor={props.iconColor} iconHoverColor={props.iconHoverColor}
                />
            )}
        </div>
    );
};

export default Social;
