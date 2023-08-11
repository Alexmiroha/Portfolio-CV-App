import React from 'react';
import s from './Projecjts.module.css'
import {MainTitle} from "../../ReusableComponents/mainTitle";
import {BlueTitle} from "../../ReusableComponents/blueTitle";

const Projects = () => {
    return (

        <section className='projects'>
            <div className='contentContainer'>
                <div className={s.projects}>
                    <div className={s.title}>
                        <BlueTitle title={'PORTFOLIO'}/>
                        <MainTitle title={'Showcasing My Creative Development'}
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