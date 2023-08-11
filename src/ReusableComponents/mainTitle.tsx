import React from "react";
import s from "../ReusableComponents/mainTitle.module.css";
import {FaMapMarked} from "react-icons/fa";
import {TbCodeCircle2} from "react-icons/tb";

export type MainTitlePropsType = {
    title: string
    displayIcon: number
    iconColor: string
}
export const MainTitle: React.FC<MainTitlePropsType> = (props) => {
    return (
        <div className={s.mainTitleComponent}>
            <h3 className={s.title}>
                {props.title}
            </h3>
            <div className={s.icons}>
                <FaMapMarked color={props.iconColor} display={props.displayIcon === 1 ? '' : 'none'}/>
                <TbCodeCircle2 color={props.iconColor} display={props.displayIcon === 2 ? '' : 'none'}/>
            </div>
        </div>
    )
}