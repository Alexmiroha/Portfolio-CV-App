import React from "react";
import s from "./blueTitle.module.css";

export type BlueTitlePropsType = {
    title: string
}
export const BlueTitle: React.FC<BlueTitlePropsType> = (props) => {
    return (
        <h4 className={s.SectionTitle}>{props.title}</h4>
    )
}