import React from "react";
import s from "./Icon.module.css";

export type IconPropsType = {
    src: string,
    isDarkMode?: boolean
}
export const Icon: React.FC<IconPropsType> = (props) => {
    return (
        <div className={`${s.flipCard} ${props.isDarkMode? s.darkMode : ''}`}>
            <div className={s.flipCardInner}>
                <li className={s.flipCardFront}>
                    <img className={s.logo} src={props.src} alt='tech-icon' />
                </li>
                <li className={s.flipCardBack}>
                    <img className={s.logo} src={props.src} alt='tech-icon' />
                </li>
            </div>
        </div>

    );
};