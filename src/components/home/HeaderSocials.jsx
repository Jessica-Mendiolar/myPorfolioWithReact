import React from 'react'
import { BsInstagram, BsTwitter,  BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/" className="home__social-link" target='_blanck'>
        <BsInstagram/>
        </a>

        <a href="https://twitter.com/" className="home__social-link" target='_blanck'>
        <BsTwitter/>
        </a>

        <a href="https://www.linkedin.com/" className="home__social-link" target='_blanck'>
        <BsLinkedin/>
        </a>

        <a href="https://www.youtube.com/" className="home__social-link" target='_blanck'>
        <BsYoutube/>
        </a>

        <a href="https://github.com/" className="home__social-link" target='_blanck'>
        <BsGithub/>
        </a>
    </div>
  )
}
export default HeaderSocials;