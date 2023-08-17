import React from 'react';
import s from './Projecjts.module.css'
import {MainTitle} from "../../ReusableComponents/mainTitle";
import {BlueTitle} from "../../ReusableComponents/blueTitle";
import ProjectComponent from "./ProjectComponent";

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
                    <div className={s.projectsContainer}>
                        <ProjectComponent
                            image='https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp'
                            title='Car Rental'
                            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, accusantium corporis ipsam itaque minus quia reiciendis rerum tempore voluptate. Esse libero, nesciunt. Ipsam magnam repellendus velit.'                            stack={['React', 'CSS']}
                            code='https://github.com/Alexmiroha/luxestateReact'
                            demo='https://alexmiroha.github.io/luxestateReact/'
                        />
                        <ProjectComponent
                            image='https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png'
                            title='Coindom'
                            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, accusantium corporis ipsam itaque minus quia reiciendis rerum tempore voluptate. Esse libero, nesciunt. Ipsam magnam repellendus velit.'
                            stack={['React', 'CSS']}
                            code='https://github.com/Alexmiroha/luxestateReact'
                            demo='https://alexmiroha.github.io/luxestateReact/'
                        />
                        <ProjectComponent
                            image='https://stefantopalovicdev.vercel.app/static/media/gymate-home.52d00d03c15713c601c4.webp'
                            title='Gymate'
                            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, accusantium corporis ipsam itaque minus quia reiciendis rerum tempore voluptate. Esse libero, nesciunt. Ipsam magnam repellendus velit.'                            stack={['React', 'CSS']}
                            code='https://github.com/Alexmiroha/luxestateReact'
                            demo='https://alexmiroha.github.io/luxestateReact/'
                        />
                        <ProjectComponent
                            image='https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp'
                            title='RAOUF ECOMMERCE'
                            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, accusantium corporis ipsam itaque minus quia reiciendis rerum tempore voluptate. Esse libero, nesciunt. Ipsam magnam repellendus velit.'                            stack={['React', 'CSS']}
                            code='https://github.com/Alexmiroha/luxestateReact'
                            demo='https://alexmiroha.github.io/luxestateReact/'
                        />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Projects;