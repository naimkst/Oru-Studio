import Link from 'next/link';
import React from 'react'
import { Fade } from "react-awesome-reveal";
import { services } from '../data/siteContent';

const Services = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <section className="service-area section-padding pt-0">
                <div className="container">
                    <div className="service-wrap">
                        <div className="service-top">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h2>OUR <br />
                                            SERVICES</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {services.map((service, srv) => (
                                <div className={"col-lg-6 col-md-12 mt-30"} key={srv}>
                                    <Fade direction="up" triggerOnce={false} duration={service.duration} delay={9}>
                                        <div className="service-item">
                                            <div className="service-icon mb-50">
                                                <div className="icon">
                                                    <img src={service.icon} alt="" />
                                                </div>
                                                <Link className="link-btn" href={`/services/${service.slug}`}>
                                                    <i className='ti-arrow-top-right'></i>
                                                </Link>
                                            </div>
                                            <div className="service-card-media">
                                                <img src={service.image} alt={`${service.title} service visual`} />
                                            </div>
                                            <div className="service-content">
                                                <h3><Link onClick={ClickHandler} href={`/services/${service.slug}`}>{service.title}</Link></h3>
                                                <p>{service.shortDescription}</p>
                                                <ul className="service-card-tags">
                                                    {service.deliverables.slice(0, 2).map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
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

export default Services;
