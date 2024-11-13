import Link from 'next/link';
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const ProjectArray = [
    {
        Id: '1',
        sIcon: '/images/project-logo.svg',
        vUrl: "/images/project.mp4",
        title: 'The Leading Brand for Custom Esports Clothing Design',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
        slug: 'leading',
        description: 'oru studio crafted a 3D Builder for Raven from scratch, helping them dominate the esports market with a custom ecommerce product.',
    },
    {
        Id: '2',
        sIcon: '/images/project-logo.svg',
        vUrl: "/images/project.mp4",
        title: 'The Leading Brand for Custom Esports Clothing Design',
        slug: 'Leading',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
        description: 'By putting users needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.',
    },
    {
        Id: '3',
        sIcon: '/images/project-logo.svg',
        vUrl: "/images/project.mp4",
        title: 'The Leading Brand for Custom Esports Clothing Design',
        slug: 'Leading',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
        description: 'The motto of our development process is creating digital experiences that are both appealing and functional.',
    },
]

const Projects = () => {
    const [isOpen, setOpen] = useState(false)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);


    return (
        <div>
            <section className="project-area section-padding pt-0">
                <div className="container">
                    <div className="project-wrap">
                        <div className="project-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title">
                                        <h2>OUR <br />
                                            Works</h2>
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
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation]}
                            spaceBetween={15}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >

                            {ProjectArray.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="row justify-content-md-center mt-none-30">
                                        <div className={"col-lg-6 col-md-12 mt-30"}>
                                            <div className="project-item">
                                                <div className="project-icon mb-50">
                                                    <div className="icon">
                                                        <img src={project.sIcon} alt="" />
                                                    </div>
                                                </div>
                                                <div className="project-content">
                                                    <h3><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h3>
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className="country">
                                                    <span>{project.country}</span>
                                                    <small><img src={project.cIcon} alt="" /></small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"col-lg-6 col-md-12 mt-30"}>
                                            <div className="project-right">
                                                <video src={project.vUrl} autoPlay muted loop></video>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="slide-btns">
                        <button className='prev' ref={prevRef}><i className='ti-arrow-left'></i></button>
                        <button className='next' ref={nextRef}><i className='ti-arrow-right'></i></button>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="AKYDnVE7AYo" onClose={() => setOpen(false)} />
        </div>
    );
};

export default Projects;
