import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";


const RelatedServiceArray = [
    {
        Id: '1',
        subTitle: 'Web Design development',
        description: 'ensuring efficient and effective product development.',
        duration: 1000,
    },
    {
        Id: '2',
        subTitle: 'Front-end development',
        description: 'ensuring efficient and effective product development.',
        duration: 1200,
    },
    {
        Id: '3',
        subTitle: 'Back-end development',
        description: 'ensuring efficient and effective product development.',
        duration: 1400,
    },
    {
        Id: '4',
        subTitle: 'CMS development Agency',
        description: 'Experience the revolutionary and transformative',
        duration: 1600,
    },
]

const RelatedService = () => {

    return (
        <div>
            <section className="related-area section-padding pt-0">
                <div className="container">
                    <div className="related-wrap">
                        <div className="related-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title s2">
                                        <h2>Related <br />
                                            Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {RelatedServiceArray.map((choose, index) => (
                                <div className={"col-xl-3 col-lg-4 col-md-6 col-12 mt-30"} key={index}>
                                    <Fade direction="up" triggerOnce="false" duration={choose.duration} delay={9}>
                                        <div className="related-item">
                                            <div className="related-content">
                                                <h3>{choose.subTitle}</h3>
                                                <p>{choose.description}</p>
                                                <Link href="/home" className='btn-style-2 button'>
                                                    <span className='main-text'>Learn more</span>
                                                    <span className='hover-text'>Learn more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelatedService;
