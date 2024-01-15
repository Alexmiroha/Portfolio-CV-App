import React, {useState} from 'react';
import s from "./Social.module.css";

type IconSocialPropsType = {
    icon: React.ReactNode,
    href: string,
    iconColor?: string,
    iconHoverColor?: string

}

const IconSocial = (props: IconSocialPropsType) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const defaultColor = '#1F1F1F';
    const defaultHoverColor = '#d261fb';


    const iconStyle = {
        color: isHovered ? props.iconHoverColor ? props.iconHoverColor : defaultHoverColor : props.iconColor || defaultColor,
        // Якщо наведено, то хаверколор з пропсів або дефолтний, якщо ні, то колір з пропсів або дефолтний
        transition: 'color 1s ease'
    };


    return (
        <a
            href={props.href}
            className={s.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {React.cloneElement(props.icon as React.ReactElement, {style: iconStyle})}
        </a>
    );
};

export default IconSocial;