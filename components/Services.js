import Link from 'next/link';
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Fade } from "react-awesome-reveal";

const ServiceArray = [
    {
        Id: '1',
        sIcon: '/images/service1.svg',
        title: 'Discovery',
        slug: 'Discovery',
        duration: 1000,
        description: 'To lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.',
    },
    {
        Id: '2',
        sIcon: '/images/service2.svg',
        title: 'Design',
        slug: 'Design',
        duration: 1200,
        description: 'By putting users needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.',
    },
    {
        Id: '3',
        sIcon: '/images/service1.svg',
        title: 'Development',
        slug: 'Development',
        duration: 1400,
        description: 'The motto of our development process is creating digital experiences that are both appealing and functional.',
    },
    {
        Id: '4',
        sIcon: '/images/service2.svg',
        title: 'Marketing',
        slug: 'Marketing',
        duration: 1600,
        description: 'With various tools, our experts can help you expand the target audience and increase brand awareness.',
    },
]

const Services = () => {
    const [isOpen, setOpen] = useState(false)

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
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title">
                                        <h2>OUR <br />
                                            SERVICES</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-video">
                                        <div className="video">
                                            <video src="/images/embed.mp4" autoPlay muted loop></video>
                                        </div>
                                        <div className="video-btn">
                                            <button className="btn-wrap" onClick={() => setOpen(true)}><i className="fi flaticon-play-1" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {ServiceArray.map((service, srv) => (
                                <div className={"col-lg-6 col-md-12 mt-30"} key={srv}>
                                    <Fade direction="up" triggerOnce="false" duration={service.duration} delay={9}>
                                        <div className="service-item">
                                            <div className="service-icon mb-50">
                                                <div className="icon">
                                                    <img src={service.sIcon} alt="" />
                                                </div>
                                                <Link className="link-btn" href={"/"}>
                                                    <i className='ti-arrow-top-right'></i>
                                                </Link>
                                            </div>
                                            <div className="service-content">
                                                <h3><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h3>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="AKYDnVE7AYo" onClose={() => setOpen(false)} />
        </div>
    );
};

export default Services;
