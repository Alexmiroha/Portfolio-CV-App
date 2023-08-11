import React from "react";
import s from "./AboutMe.module.css";

export type SectionTitlePropsType = {
    title: string
}
export const SectionTitle: React.FC<SectionTitlePropsType> = (props) => {
    return (
        <h4 className={s.SectionTitle}>{props.title}</h4>
    )
}