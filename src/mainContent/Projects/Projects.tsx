import React from 'react';
import s from './Projecjts.module.css'
import {MainTitle} from "../../ReusableComponents/mainTitle";
import {BlueTitle} from "../../ReusableComponents/blueTitle";
import ProjectComponent from "./ProjectComponent";
import Funiro from '../../img/Funiro-min.webp'
import luxestate from '../../img/luxestate-min.webp'

type ProjectsPropsType = {
    isDarkMode: boolean
}


const projects = [
    {
        image: Funiro,
        title: 'Furniture Shop',
        paragraph: 'A designer furniture and room design website is an online platform that allows users to purchase premium designer furniture for home and office. The website provides an interface for searching, comparing, and buying furniture.',
        stack: ['Gulp', 'CSS', 'JS'],
        code: 'https://github.com/Alexmiroha/FuniroShop/tree/gh-pages',
        demo: 'https://alexmiroha.github.io/FuniroShop/',
        id: 1
    },
    {
        image: luxestate,
        title: 'luxestate',
        paragraph: 'A website for searching apartments for sale and rent. On this site, users can find and purchase or rent apartments. The website features the ability to search for accommodations based on location and provides feedback options with agents.',
        stack: ['React', 'CSS'],
        code: 'https://github.com/Alexmiroha/luxestateReact',
        demo: 'https://alexmiroha.github.io/luxestateReact/',
        id:2
    },
]

const Projects = (props: ProjectsPropsType) => {
    return (

        <section className={`${'projects'} ${props.isDarkMode ? s.darkMode : ''}`} id='Projects'>
            <div className='contentContainer'>
                <div className={s.projects}>
                    <div className={s.title}>
                        <BlueTitle title={'PORTFOLIO'}/>
                        <MainTitle title={'Showcasing My Creative Development🧩'}
                        />
                    </div>
                    <div className={s.projectsContainer}>

                        {projects.map(project =>
                            <ProjectComponent image={project.image}
                                              title={project.title}
                                              paragraph={project.paragraph}
                                              stack={project.stack}
                                              code={project.code}
                                              demo={project.demo}
                                              isDarkMode={props.isDarkMode}
                                              key={project.id}
                            />)}

                    </div>
                </div>
            </div>
        </section>


    );
};

export default Projects;