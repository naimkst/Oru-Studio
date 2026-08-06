"use client";

import React from 'react';
import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const ReviewArray = [
    {
        Id: '1',
        tImg: '/images/testimonial-avatar-01.webp',
        name: 'Shopify Merchant',
        title: 'Ecommerce Founder',
        description: 'Oru Studio rebuilt our storefront with cleaner product pages, faster load times, and flexible theme sections our team can update without developer help.',
    },
    {
        Id: '2',
        tImg: '/images/testimonial-avatar-02.webp',
        name: 'SaaS Operator',
        title: 'Product Lead',
        description: 'The team handled frontend, backend, deployment, and QA in one flow. We shipped a stable dashboard without adding internal engineering overhead.',
    },
    {
        Id: '3',
        tImg: '/images/testimonial-avatar-03.webp',
        name: 'Agency Partner',
        title: 'Creative Director',
        description: 'Oru Studio turned our design files into a polished Next.js site with integrations, forms, and launch checks already handled before handoff.',
    },
    {
        Id: '4',
        tImg: '/images/testimonial-avatar-04.webp',
        name: 'Commerce Team',
        title: 'Operations Lead',
        description: 'Their custom Shopify workflow reduced manual admin work and gave our team clearer product, order, and customer data in one place.',
    }
]

const Testimonial = () => {

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
        <section className="testimonial-area section-padding pt-0">
            <div className="container">
                <div className="testimonial-top">
                    <div className="section-title testimonial-section-title">
                        <h2>CLIENT <br />
                            RESULTS</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="testimonial-wrap">
                    <div className="row align-items-end">
                        <div className="col-lg-4">
                            <div className="testimonial-left">
                                <div className="man-img">
                                    <img src="/images/testimonial-client-results.webp" alt="Founder reviewing a Shopify product dashboard" />
                                </div>
                                <div className="testimonial-left-text">
                                    <h2>Client-backed delivery</h2>
                                    <h3>Practical results from Shopify app, theme, and full stack builds delivered with senior product judgment.</h3>
                                </div>
                                <div className="slide-btns">
                                    <button className='prev' ref={prevRef}><i className='ti-arrow-left'></i></button>
                                    <button className='next' ref={nextRef}><i className='ti-arrow-right'></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="testimonial-right">
                                <div className="testimonial-text">
                                    <h3>We help founders and commerce teams turn complex product ideas into shipped Shopify stores, custom apps, and full stack platforms.</h3>
                                </div>
                                <div className="testimonial-slider">
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
                                        breakpoints={{
                                            576: {
                                                slidesPerView: 2,
                                            },
                                            1200: {
                                                slidesPerView: 3,
                                            },
                                        }}
                                    >
                                        {ReviewArray.map((review, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="testimonial-item">
                                                    <div className="ratting">
                                                        <span>5.0</span>
                                                        <ul>
                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="text">
                                                        <p>{review.description}</p>
                                                    </div>
                                                    <div className="bottom-info">
                                                        <div className="info-img">
                                                            <img src={review.tImg} alt="" />
                                                        </div>
                                                        <div className="info-text">
                                                            <h4>{review.name}</h4>
                                                            <span>{review.title}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
