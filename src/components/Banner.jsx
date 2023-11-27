import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass, faNodeJs, faFigma, faShopify, faWordpressSimple} from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';




const Banner = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className="banner">
            <div className='title' id='Home'>
            <h1>Clément Renaud</h1>
            <h2><FormattedMessage id="banner.header1" defaultMessage="Independant Web Developer" /></h2>
            <h2><FormattedMessage id="banner.header2" defaultMessage="Base in France" /></h2>
            </div>
            <div className='element-ctn'>
                <div className="side left" data-aos="fade-right">
                    <div className="element bio">
                        <h3><FormattedMessage id="banner.title1" defaultMessage="Biography" /></h3>
                        <p><FormattedMessage id="banner.subtitle11" defaultMessage="Work for money and" /></p>
                        <p><FormattedMessage id="banner.subtitle12" defaultMessage="Develope for love! My name is Clément," /></p>
                        <p><FormattedMessage id="banner.subtitle13" defaultMessage="a Front-end / React developer," /></p>
                        <p><FormattedMessage id="banner.subtitle14" defaultMessage="independent and based in France." /></p>
                        <p><FormattedMessage id="banner.subtitle15" defaultMessage="Available for freelance assignments," /></p>
                        <p><FormattedMessage id="banner.subtitle16" defaultMessage="I prefer remote but can," /></p>
                        <p><FormattedMessage id="banner.subtitle17" defaultMessage="if necessary." /></p>
                    </div>
                    <div className="element contact">
                        <h3><FormattedMessage id="banner.title2" defaultMessage="Contact" /></h3>
                        <a href="https://www.google.com/maps/place/70100+Gray/" target="_blank"><p>Gray(70), Haute-Sône, France</p></a>
                        <a href="mailto:agence.sheep@gmail.com"><p>agence.sheep@gmail.com</p></a>
                        <a href="https://wa.me/0033769913909"><p>+33 7 69 91 39 09</p></a>
                    </div>
                </div>
                <div className="side right " data-aos="fade-left">
                    <div className="element services">
                        <h3><FormattedMessage id="banner.title3" defaultMessage="Services" /></h3>
                        <p><FormattedMessage id="banner.subtitle31" defaultMessage="Visual identity" /></p>
                        <p><FormattedMessage id="banner.subtitle32" defaultMessage="Website and web application" /></p>
                        <p><FormattedMessage id="banner.subtitle33" defaultMessage="Search engine optimization" /></p>
                        <p><FormattedMessage id="banner.subtitle34" defaultMessage="Social networks" /></p>
                    </div>
                    <div className="element techno">
                        <h3><FormattedMessage id="banner.title4" defaultMessage="Technologies" /></h3>
                        <p><span><FontAwesomeIcon icon={faReact} /></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path fill="var(--text-color)" opacity="1.000000" stroke="none" 
                             d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"/></svg></span>
                        <span><FontAwesomeIcon icon={faNodeJs} /></span>
                        <span><FontAwesomeIcon icon={faSass} /></span></p>
                        <p><span><FontAwesomeIcon icon={faFigma} /></span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">
                                <path fill="var(--text-color)" opacity="1.000000" stroke="none" 
                                 d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"/></svg></span>
                        <span><FontAwesomeIcon icon={faShopify} /></span>
                        <span><FontAwesomeIcon icon={faWordpressSimple} /></span></p>
                    </div>
                </div>
            </div>
            <div className='scroll'>
            <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    );
};

export default Banner;
