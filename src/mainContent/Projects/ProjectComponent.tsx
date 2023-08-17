import React from 'react';
import s from "./ProjectComponent.module.css";
import {AiFillGithub} from "react-icons/ai";
import {MdOutlineOpenInNew} from "react-icons/md";

export type ProjectComponentPropsType = {
    image: string,
    title: string,
    paragraph: string,
    stack: Array<string>,
    code: string,
    demo: string
}

const ProjectComponent = (props: ProjectComponentPropsType) => {
    return (
        <div className={s.projectContainer}>
            <div className={s.image}>
                <img src={props.image} alt="ExampleImage"/>
            </div>
            <div className={s.discription}>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.paragraph}>{props.paragraph}</p>
                <div className={s.stack}>
                    {props.stack.map((e, index) => (
                        <p className={s.stack} key={index}>{e}</p>
                    ))}
                </div>
                <div className={s.links}>
                    <a className={s.link} href={props.code}>Code<AiFillGithub/></a>
                    <a className={s.link} href={props.demo}>Demo<MdOutlineOpenInNew/></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;