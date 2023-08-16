import React from 'react';
import s from "./ProjectComponent.module.css";

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
                <p>{props.paragraph}</p>
                <div className={s.stack}>
                    {props.stack.map((e, index) => (
                        <p key={index}>{e}</p>
                    ))}
                </div>
                <div className={s.links}>
                    <a href={props.code}>Code</a>
                    <a href={props.demo}>Demo</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;