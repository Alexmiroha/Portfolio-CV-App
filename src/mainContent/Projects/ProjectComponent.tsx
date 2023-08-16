import React from 'react';
import s from "./ProjectComponent.module.css";

export type ProjectComponentPropsType = {

}

const ProjectComponent = (props:ProjectComponentPropsType) => {
    return (
        <div className={s.projectContainer}>
            <div>
                Content
            </div>
        </div>
    );
};

export default ProjectComponent;