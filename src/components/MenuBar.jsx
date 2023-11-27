import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ changeLanguage }) => {
    const [theme, setTheme] = useState('dark');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <nav className="menu-bar">
            <div className="social-icons">
                <a href="https://github.com/0xS4cr" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/cl%C3%A9ment-renaud-a85874241/" target="_blank" rel="noopener noreferrer" aria-label="Codepen">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://discordapp.com/users/511582036839104532" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a href="mailto:agence.sheep@gmail.com" aria-label="mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="navigation-links">
                <a href="#Home">
                    <FormattedMessage id="navbar.home" defaultMessage="HOME" />
                </a>
                <a href="#Works">
                    <FormattedMessage id="navbar.works" defaultMessage="WORKS" />
                </a>
                <a href="#More">
                    <FormattedMessage id="navbar.more" defaultMessage="MORE" />
                </a>
            </div>
            <div className="language-theme" aria-label="Lang button">
                <button onClick={() => changeLanguage('fr')}>FR</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={toggleTheme} aria-label="Theme button">
                    <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                </button>
            </div>
            <div className="menu-toggle">
                <button className='menu-button' aria-label="Menu button" onClick={toggleModal}>
                    <FontAwesomeIcon icon={isModalOpen ? faTimes : faBars} />
                </button>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={toggleModal}>
                    <div className='top-modal'>
                        <button className="close-modal" aria-label="Close modal">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="mobile-settings" aria-label="Lang button">
                            <button onClick={() => changeLanguage('fr')}>FR</button>
                            <button onClick={() => changeLanguage('en')}>EN</button>
                            <button onClick={toggleTheme} aria-label="Theme button">
                                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                            </button>
                        </div>
                    </div>
                    <div className="mobile-links">
                        <a href="#Home">
                            <FormattedMessage id="navbar.home" defaultMessage="HOME" />
                        </a>
                        <a href="#Works">
                            <FormattedMessage id="navbar.works" defaultMessage="WORKS" />
                        </a>
                        <a href="#More">
                            <FormattedMessage id="navbar.more" defaultMessage="MORE" />
                        </a>
                    </div>
                    <p className='info'>© 2023 - Clément RENAUD</p>
                    <div className="mobile-social">
                        <a href="https://github.com/0xS4cr" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/cl%C3%A9ment-renaud-a85874241/" target="_blank" rel="noopener noreferrer" aria-label="Codepen">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://discordapp.com/users/511582036839104532" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a href="mailto:agence.sheep@gmail.com" aria-label="mail">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default MenuBar;
