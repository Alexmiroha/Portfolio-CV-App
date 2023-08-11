import React from "react";
import s from "./AboutMe.module.css";
import {BiMap} from "react-icons/bi";
import {TbCodeCircle2} from "react-icons/tb";

export type MainTitlePropsType = {
    title: string
    displayIcon: number
    iconColor: string
}
export const MainTitle: React.FC<MainTitlePropsType> = (props) => {
    return (
        <h3 className={s.mainTitleComponent}>
            <div className={s.title}>
                {props.title}
            </div>
            <div className={s.icons}>
                <BiMap color={props.iconColor} display={props.displayIcon === 1 ? '' : 'none'}/>
                <TbCodeCircle2 color={props.iconColor} display={props.displayIcon === 2 ? '' : 'none'}/>
            </div>
        </h3>
    )
}