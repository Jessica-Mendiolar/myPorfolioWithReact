import React from "react";
import './sidebar.css';
import { FaReact, FaGraduationCap,  } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts} from "react-icons/ai";
import { BsBriefcase, BsFillLayersFill } from "react-icons/bs";
import { BiNote } from "react-icons/bi";

const Sidebar = () => {
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">JM
                <FaReact />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                            <AiOutlineHome/>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                            <AiOutlineUser/>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                            <BsBriefcase/>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                            <FaGraduationCap/>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                           < BsFillLayersFill/>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                            <BiNote/>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <AiOutlineContacts/>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2022 -2023.</span>
            </div>
        </aside>
    )
}

export default Sidebar