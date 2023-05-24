import React from "react";
import s from "./Icon.module.css";

export type IconPropsType = {
    src: string;
}
export const Icon: React.FC<IconPropsType> = (props) => {
    return (
        <div className={s.flipCard}>
            <div className={s.flipCardInner}>
                <li className={s.flipCardFront}>
                    <img className={s.logo} src={props.src} alt="HTML" />
                </li>
                <li className={s.flipCardBack}>
                    <img className={s.logo} src={props.src} alt="HTML" />
                </li>
            </div>
        </div>

    );
};