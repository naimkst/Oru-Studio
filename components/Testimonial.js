import React from 'react';
import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const ReviewArray = [
    {
        Id: '1',
        tImg: '/images/tsm1.jpg',
        name: 'Kisu Misu Hoilo',
        title: 'we developer',
        description: 'Oru-studio successfully delivered a product design that has proved popular with users. The team’s professionalism and creative abilities come at a very reasonable price. Their motivation is admirable, and their organization makes for a smooth workflow.',
    },
    {
        Id: '2',
        tImg: '/images/tsm1.jpg',
        name: 'Kisu Misu Hoilo',
        title: 'we developer',
        description: 'Oru-studio successfully delivered a product design that has proved popular with users. The team’s professionalism and creative abilities come at a very reasonable price. Their motivation is admirable, and their organization makes for a smooth workflow.',
    },
    {
        Id: '3',
        tImg: '/images/tsm1.jpg',
        name: 'Kisu Misu Hoilo',
        title: 'we developer',
        description: 'Oru-studio successfully delivered a product design that has proved popular with users. The team’s professionalism and creative abilities come at a very reasonable price. Their motivation is admirable, and their organization makes for a smooth workflow.',
    },
    {
        Id: '4',
        tImg: '/images/tsm1.jpg',
        name: 'Kisu Misu Hoilo',
        title: 'we developer',
        description: 'Oru-studio successfully delivered a product design that has proved popular with users. The team’s professionalism and creative abilities come at a very reasonable price. Their motivation is admirable, and their organization makes for a smooth workflow.',
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
        <section className="testimonial-area section-padding">
            <div className="container">
                <div className="testimonial-top">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-top-img">
                                <span><img src="/images/testimonial-logo.svg" alt="" /></span>
                                <p>80+ REVIEWS</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="testimonial-text">
                                <h3>We’ve helped hundreds of partners, ranging from startups to medium-sized businesses to achieve their goals. And stellar feedback — is our reward!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="testimonial-wrap">
                    <div className="row align-items-end">
                        <div className="col-lg-4">
                            <div className="testimonial-left">
                                <div className="man-img">
                                    <img src="/images/testimonial-left.png" alt="" />
                                </div>
                                <div className="testimonial-left-text">
                                    <h2>4.9</h2>
                                    <h3>Clutch average based on 80+ reviews. All chances are you’ll be impressed too.</h3>
                                </div>
                                <div className="slide-btns">
                                    <button className='prev' ref={prevRef}><i className='ti-arrow-left'></i></button>
                                    <button className='next' ref={nextRef}><i className='ti-arrow-right'></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="testimonial-right">
                                <div className="swiper-slide">
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
