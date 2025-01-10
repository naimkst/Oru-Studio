import Link from 'next/link';
import React from 'react'

const TechnologyArray = [
    {
        Id: '1',
        tIcon: '/images/tech1.svg',
        title: 'React.js',
    },
    {
        Id: '2',
        tIcon: '/images/tech2.svg',
        title: 'Next.js',
    },
    {
        Id: '3',
        tIcon: '/images/tech3.svg',
        title: 'Nest.js',
    },
    {
        Id: '4',
        tIcon: '/images/tech4.svg',
        title: 'Express',
    },
    {
        Id: '5',
        tIcon: '/images/tech5.svg',
        title: 'React.js',
    },
    {
        Id: '6',
        tIcon: '/images/tech6.svg',
        title: 'Next.js',
    },
    {
        Id: '7',
        tIcon: '/images/tech7.svg',
        title: 'Nest.js',
    },
    {
        Id: '8',
        tIcon: '/images/tech8.svg',
        title: 'Express',
    },
]

const Technology = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <section className="technology-area section-padding pt-0">
                <div className="container">
                    <div className="technology-wrap">
                        <div className="technology-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title s2">
                                        <h2>Technology
                                            <br />
                                            Stack</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="technology-items">
                            {TechnologyArray.map((tech, index) => (
                                <div className="technology-item" key={index}>
                                    <div className="technology-inner">
                                        <div className="technology-item-wrap">
                                            <div className="technology-icon mb-50">
                                                <img src={tech.tIcon} alt="" />
                                            </div>
                                            <div className="technology-content">
                                                <h3>{tech.title}</h3>
                                            </div>
                                            <div className="round-border"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;
