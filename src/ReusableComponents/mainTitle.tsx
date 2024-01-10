import React from "react";
import s from "../ReusableComponents/mainTitle.module.css";
import {FaMapMarked} from "react-icons/fa";
import {TbCodeCircle2} from "react-icons/tb";

export type MainTitlePropsType = {
    title: string
}
export const MainTitle: React.FC<MainTitlePropsType> = (props) => {

    return (
        <div className={s.mainTitleComponent}>
            <h3 className={s.titleWrapper}>
                {props.title}
            </h3>

        </div>
    )
}