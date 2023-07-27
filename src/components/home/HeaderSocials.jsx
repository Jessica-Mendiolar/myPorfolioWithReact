import React from 'react'
import { BsTwitter,  BsLinkedin, BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://twitter.com/jessieScript_" className="home__social-link" target='_blanck'>
        <BsTwitter/>
        </a>

        <a href="https://www.linkedin.com/in/jessicamendiolar20/" className="home__social-link" target='_blanck'>
        <BsLinkedin/>
        </a>

        <a href="https://github.com/Jessica-Mendiolar" className="home__social-link" target='_blanck'>
        <BsGithub/>
        </a>
    </div>
  )
}
export default HeaderSocials