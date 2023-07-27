import React from 'react'
import { BsFire } from "react-icons/bs";

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
        <BsFire/>

        <div>
            <h3 className='about__title'>15</h3>
            <span className='about__subtitle'>Project completed</span>
        </div>
        </div>

        <div className="about__box">
        <BsFire/>

        <div>
            <h3 className='about__title'>300</h3>
            <span className='about__subtitle'>Cup of coffee</span>
        </div>
        </div>

        <div className="about__box">
        <BsFire/>

        <div>
            <h3 className='about__title'>10</h3>
            <span className='about__subtitle'>Satisfied clients</span>
        </div>
        </div>

        <div className="about__box">
        <BsFire/>

        <div>
            <h3 className='about__title'>10</h3>
            <span className='about__subtitle'>Satisfied clients</span>
        </div>
        </div>

    </div>
  )
}

export default AboutBox