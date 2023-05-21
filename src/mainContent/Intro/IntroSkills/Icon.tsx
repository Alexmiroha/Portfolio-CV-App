import React from "react";
import s from "./Icon.module.css";

export type IconPropsType = {
    src: string;
}
export const Icon: React.FC<IconPropsType> = (props) => {
    return (
        <li className={s.icon}>
            <img className={s.logo} src={props.src} alt="HTML"/>
        </li>
    );
};