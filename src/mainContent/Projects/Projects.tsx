import React from 'react';
import s from './Projecjts.module.css'
import {MainTitle} from "../../ReusableComponents/mainTitle";
import {BlueTitle} from "../../ReusableComponents/blueTitle";
import ProjectComponent from "./ProjectComponent";
import Funiro from '../../img/Funiro-min.webp'
import luxestate from '../../img/luxestate-min.webp'

const Projects = () => {
    return (

        <section className='projects'>
            <div className='contentContainer'>
                <div className={s.projects}>
                    <div className={s.title}>
                        <BlueTitle title={'PORTFOLIO'}/>
                        <MainTitle title={'Showcasing My Creative Development🧩'}
                                   displayIcon={0}
                                   iconColor={''}
                        />
                    </div>
                    <div className={s.projectsContainer}>
                        <ProjectComponent
                            image={Funiro}
                            title='Furniture Shop'
                            paragraph='A designer furniture and room design website is an online platform that allows users to purchase premium designer furniture for home and office. The website provides an interface for searching, comparing, and buying furniture.'
                            stack={['Gulp', 'CSS', 'JS']}
                            code='https://github.com/Alexmiroha/FuniroShop/tree/gh-pages'
                            demo='https://alexmiroha.github.io/FuniroShop/'
                        />
                        <ProjectComponent
                            image={luxestate}
                            title='luxestate'
                            paragraph='A website for searching apartments for sale and rent. On this site, users can find and purchase or rent apartments. The website features the ability to search for accommodations based on location and provides feedback options with agents.'
                            stack={['React', 'CSS']}
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