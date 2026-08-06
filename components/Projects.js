import Link from 'next/link';
import React from 'react'
import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { featuredPortfolio } from '../data/siteContent';

const Projects = () => {
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
                                <div className="col-12">
                                    <div className="section-title">
                                        <h2>OUR <br />
                                            Works</h2>
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

                            {featuredPortfolio.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="row justify-content-md-center mt-none-30">
                                        <div className={"col-lg-6 col-md-12 mt-30"}>
                                            <div className="project-item">
                                                <div className="project-icon mb-50">
                                                    <div className="icon">
                                                        <img src={project.logo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="project-content">
                                                    <h3><Link onClick={ClickHandler} href={`/portfolio/${project.slug}`}>{project.title}</Link></h3>
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className="country">
                                                    <span>{project.category}</span>
                                                    <small><img src={project.cIcon} alt="" /></small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"col-lg-6 col-md-12 mt-30"}>
                                            <div className="project-right">
                                                <img src={project.image} alt={project.title} />
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
        </div>
    );
};

export default Projects;
