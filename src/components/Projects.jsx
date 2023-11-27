import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import ProjectCard from './ProjectCard';
import projetsData from '../data/projects.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 900 }); 
    }, []);

    return (
        <div className='project-section-title' id='Works'>
            <h1><FormattedMessage id="navbar.works" defaultMessage="WORKS" /></h1>
            <div className="projects-container">
                {projetsData.projets.map((projet, index) => (
                    <div key={index} data-aos="fade-up">
                        <ProjectCard projet={projet} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
