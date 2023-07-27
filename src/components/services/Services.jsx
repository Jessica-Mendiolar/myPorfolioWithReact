import React from 'react';
import './services.css';

const data = [
    {
        id: 1,
        icon: <i className='icon-screen-desktop'></i>,
        title: "Web Development",
        description: "I know the importance of web design and I can help you create a website that you will love at first glance.",
    },
    {
        id: 2,
        icon: <i className='icon-rocket'></i>,
        title: "SEO",
        description: "I will optimize your site with intelligent Search Engine Optimization strategy to generate leads.",
    },
    {
        id: 3,
        icon: <i className='icon-screen-smartphone'></i>,
        title: "Fully Responsive",
        description: "Your site will display properly on any device, including desktop computers, tablets and mobile phones.",
    }
];

const Services = () => {
    return (
        <section className='services container section' id='services'>
            <h2 className="section__title">Services</h2>

            <div className='services__container grid'>
                {data.map(({id, icon, title, description})=>{
                    return(
                        <div className="services__card" key={id}>
                            <i className='services__icon'>{icon}</i>
                            <h3 className='services__title'>{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Services