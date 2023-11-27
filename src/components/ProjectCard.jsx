import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import booki from "../assets/projectsImg/booki.png";
import doticon from "../assets/projectsImg/doticon.png";
import morpion from "../assets/projectsImg/morpion.png";
import ohmyfood from "../assets/projectsImg/ohmyfood.png";
import portfolio1 from "../assets/projectsImg/portfolio1.png";
import sheeplabs from "../assets/projectsImg/sheeplabs.png";

const images = {
    booki,
    doticon,
    morpion,
    ohmyfood,
    portfolio1,
    sheeplabs
  };

const ProjectCard = ({ projet }) => {
    const handleCardClick = () => {
        window.open(projet.icones.siteWeb, '_blank');
    };

    const handleCodeClick = (e) => {
        e.stopPropagation(); 
        window.open(projet.icones.gitHub, '_blank');
    };

    return (
        <div className="project-card" onClick={handleCardClick}>
            <img src={images[projet.image]} alt={projet.nom} className="project-image"/>
            <div className="project-content">
                <h3 className="project-title">{projet.nom}</h3>
                <p className="project-description">{projet.description}</p>
                <div className="project-technologies">
                    {projet.technologies.map((tech, index) => (
                        <span key={index} className="technology-tag">{tech}</span>
                    ))}
                </div>
                <button className="code-link" onClick={handleCodeClick}>
                    <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;
