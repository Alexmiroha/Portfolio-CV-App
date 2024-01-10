import React, {useEffect, useRef, useState} from 'react';
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

    const imageRef = useRef<HTMLImageElement | null>(null);
    const [imageHeight, setImageHeight] = useState<number | null>(null);
    const getParentHeight = (element: HTMLElement | null): number => {
        if (!element) {
            return 0;
        }
        return element.offsetHeight;
    };

    useEffect(() => {
        const imageCurrent = imageRef.current;
        const handleImageLoad = () => {
            if (imageCurrent) {
                setImageHeight(imageCurrent.clientHeight);
            }
        };

        if (imageCurrent) {
            // Визначення висоти зображення після завантаження
            imageCurrent.addEventListener('load', handleImageLoad);
        }

        return () => {
            // Прибирання обробника подій при видаленні компонента
            if (imageCurrent) {
                imageCurrent.removeEventListener('load', handleImageLoad);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (imageRef.current && imageHeight !== null) {
            const parentHeight = getParentHeight(imageRef.current.parentElement);
            imageRef.current.style.transition = 'transform 8s ease';
            imageRef.current.style.transform = `translateY(-${imageHeight - parentHeight}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (imageRef.current) {
            imageRef.current.style.transition = 'transform 8s ease';
            imageRef.current.style.transform = 'translateY(0)';
        }
    };

    return (
        <div className={s.projectContainer}>
            <a className={s.projectLinkWrapper} href={props.demo}>
                <div className={s.image} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img ref={imageRef} src={props.image} alt="ExampleImage"/>
                </div>
            </a>

            <div className={s.description}>
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