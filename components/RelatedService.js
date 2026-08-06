import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";
import { services } from "../data/siteContent";

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
                            {services.slice(0, 4).map((choose, index) => (
                                <div className={"col-xl-3 col-lg-4 col-md-6 col-12 mt-30"} key={index}>
                                    <Fade direction="up" triggerOnce={false} duration={choose.duration} delay={9}>
                                        <div className="related-item">
                                            <div className="related-content">
                                                <h3>{choose.title}</h3>
                                                <p>{choose.shortDescription}</p>
                                                <Link href={`/services/${choose.slug}`} className='btn-style-2 button'>
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
