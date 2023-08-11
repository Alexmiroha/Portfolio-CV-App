import React from 'react';
import s from './Projecjts.module.css'
import {MainTitle} from "../AboutMe/MainTitle";
import {SectionTitle} from "../AboutMe/SectionTitle";

const Projects = () => {
    return (

        <section className='projects'>
            <div className='contentContainer'>
                <div className={s.projects}>
                    <div className={s.title}>
                        <SectionTitle title={'PORTFOLIO'}/>
                        <MainTitle title={'Working with Projects: Showcasing My Creative Development'}
                                   displayIcon={2}
                                   iconColor={'#D261FB'}
                        />
                    </div>

                </div>
            </div>
        </section>


    );
};

export default Projects;