import React from 'react';
import './about.css';
import AboutBox from './AboutBox'


const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className="section___title">About Me</h2>

            <div className="about__container grid">
                <img src="" alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am Jessica, web developer from Buenos Aires, Argentina.
                            I have rich experience in web site desing and building and customuzation,
                            also i am good at backend.</p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className='about__skills grid'>
                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>lorem</h3>
                                <span className='skills__number '>90%</span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage development'></span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>lorem</h3>
                                <span className='skills__number '>70%</span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage ui__desing'></span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>lorem</h3>
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