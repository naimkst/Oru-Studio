import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from "react-slick";



const Hero2 = () => {
    const [text, setText] = useState('Tech');
    const texts = ['Tech', 'Cool', 'Buzz', 'Big', 'Smart'];
    const imagesRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(1);

    // Text changing effect
    useEffect(() => {
        const startChangingText = () => {
            setText(texts[currentIndex]);
            setCurrentIndex((currentIndex + 1) % texts.length);
        };
        const interval = setInterval(startChangingText, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Image animation effect
    useEffect(() => {
        const images = Array.from(imagesRef.current);

        const intervalId = setInterval(() => {
            if (images && images.length) {
                images.forEach((img, index) => {
                    img.classList.remove('active', 'done');
                    if (index === currentIndex) img.classList.add('active');
                    if (index === currentIndex - 1) img.classList.add('active', 'done');
                });

                setCurrentIndex((currentIndex + 1) % images.length);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
    };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        rtl: true,
    };



    return (
        <section className="hero-area style-2">
            <div className="container container--custom">
                <div className="hero-content">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                                <div>
                                    <h1 className="hero-title">Web Development Services</h1>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="hero-right">
                                <img src="/images/home-hero_02.png" alt="Hero 1" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-bottom-text">
                        <div className="left-text">
                            <h2>10Y</h2>
                            <p>OF Design-Driven
                                PRODUCT DEVELOPMENT</p>
                        </div>
                        <div className="right-text">
                            <Link href="/home" className='btn-style-2 button'>
                                <span className='main-text'>Let’s TALK</span>
                                <span className='hover-text'>Let’s TALK</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
