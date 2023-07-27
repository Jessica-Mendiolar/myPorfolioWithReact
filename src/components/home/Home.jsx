import React from "react";
import './home.css';
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src="" alt="" className="home__img" />
                <h1 className="home__name">Jessica Mendiolar</h1>
                <span className="home__education">I'm a Full Stack developer</span>


                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown />
                <Shapes />
            </div>
        </section>
    );
};

export default Home;