import React from 'react';
import './about.css';
import AboutBox from './AboutBox'
import AboutMe from "../../assets/avatar.png"
import Avatar from "../../assets/Mendiolar-Jessica-cv.pdf"


const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className="section___title">About Me</h2>

            <div className="about__container grid">
                <img src={AboutMe} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                       Hi, I'm Jess! I'm Full-stack developer with large experience participating
                        in a variety of projects. 
                        Knowledge and skills in agile methodologies.
                        Proactive, curious, 
                  excellent personal relationships and efficient conflict resolver.
            Strong in high-demand work environments.</p>
                        <a href={Avatar} className="btn" download="Mendiolar-Jessica-cv.pdf"><i className='icon-cloud-download'></i>  Download cv</a>
                    </div>

                    <div className='about__skills grid'>
                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Full Stack Developer MERN</h3>
                                <span className='skills__number '>90%</span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage development'></span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Tools Design and UX</h3>
                                <span className='skills__number '>70%</span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage ui__desing'></span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Cibersegurity</h3>
                                <span className='skills__number '>60%</span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage photography'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section >
    )
}


export default About;