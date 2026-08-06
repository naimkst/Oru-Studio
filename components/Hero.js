import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from "react-slick";

const videoAreaImages = [
    {
        src: "/images/hero-video-area-01.webp",
        alt: "Full stack and Shopify development interface collage",
    },
    {
        src: "/images/hero-video-area-02.webp",
        alt: "Shopify app automation dashboard interface",
    },
    {
        src: "/images/hero-video-area-03.webp",
        alt: "Shopify theme development storefront interface",
    },
    {
        src: "/images/hero-video-area-04.webp",
        alt: "Headless commerce storefront architecture interface",
    },
    {
        src: "/images/hero-video-area-05.webp",
        alt: "Full stack SaaS dashboard and data interface",
    },
    {
        src: "/images/hero-video-area-06.webp",
        alt: "Backend API integration workflow interface",
    },
    {
        src: "/images/hero-video-area-07.webp",
        alt: "Custom ecommerce product builder interface",
    },
    {
        src: "/images/hero-video-area-08.webp",
        alt: "DevOps deployment and monitoring dashboard interface",
    },
    {
        src: "/images/hero-video-area-09.webp",
        alt: "UI UX product design system interface",
    },
    {
        src: "/images/hero-video-area-10.webp",
        alt: "Performance SEO and QA audit dashboard interface",
    },
    {
        src: "/images/hero-video-area-shopify-01.webp",
        alt: "Shopify speed optimization storefront performance visual",
    },
    {
        src: "/images/hero-video-area-shopify-02.webp",
        alt: "Custom Shopify app integration dashboard visual",
    },
    {
        src: "/images/hero-video-area-shopify-03.webp",
        alt: "Shopify checkout extensibility migration visual",
    },
    {
        src: "/images/hero-video-area-shopify-04.webp",
        alt: "Shopify product page conversion optimization visual",
    },
    {
        src: "/images/hero-video-area-shopify-05.webp",
        alt: "Shopify Hydrogen and Liquid architecture visual",
    },
    {
        src: "/images/hero-video-area-shopify-06.webp",
        alt: "Shopify performance audit interface visual",
    },
    {
        src: "/images/hero-video-area-shopify-07.webp",
        alt: "Custom app integration architecture visual",
    },
    {
        src: "/images/hero-video-area-shopify-08.webp",
        alt: "Checkout extensibility migration workflow visual",
    },
    {
        src: "/images/hero-video-area-shopify-09.webp",
        alt: "Product page conversion journey visual",
    },
    {
        src: "/images/hero-video-area-shopify-10.webp",
        alt: "Headless Shopify architecture and global storefront visual",
    },
];



const Hero = () => {
    const [text, setText] = useState('Tech');
    const texts = ['Tech', 'Shopify', 'SaaS', 'Web', 'Smart'];
    const imagesRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const topShowcaseImages = videoAreaImages.filter((_, index) => index % 2 === 0);
    const bottomShowcaseImages = videoAreaImages.filter((_, index) => index % 2 === 1);

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
        speed: 12000,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.45,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.08,
                },
            },
        ],
    };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 13500,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        rtl: true,
        pauseOnHover: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.45,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.08,
                },
            },
        ],
    };



    return (
        <section className="hero-area">
            <div className="container container--custom">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 mb-30">
                        <div className="hero-content">
                            <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                                <div>
                                    <h1 className="hero-title">
                                        <span className="title-line">Let’s build</span>
                                        <span className="middle-text">
                                            <span className="home-images" aria-hidden="true" ref={(el) => { imagesRef.current = el ? [...el.children] : [] }}>
                                                <img src="/images/home-hero_01.png" alt="" />
                                                <img src="/images/home-hero_02.png" alt="" />
                                                <img src="/images/home-hero_03.png" alt="" />
                                                <img src="/images/home-hero_04.png" alt="" />
                                            </span>
                                            THE NEXT
                                        </span>
                                        <span className="dynamic-line"><span id="changing">{text}</span> THING</span>
                                    </h1>
                                </div>
                            </Fade>
                            <div className="hero-bottom-text">
                                <div className="left-text">
                                    <h2>10Y</h2>
                                    <p>of Full Stack & Shopify Product Development</p>
                                </div>
                                <div className="right-text">
                                    <Link href="/contact" className='btn-style-2 button'>
                                        <span className='main-text'>Let’s TALK</span>
                                        <span className='hover-text'>Let’s TALK</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hero-right">

                            <div className="video-area">
                                <div className="logo">
                                    <img src="/logo.png" alt="Logo" />
                                </div>
                                <div className="showcase-chip">
                                    <span></span>
                                    {videoAreaImages.length} service views
                                </div>
                                <div className="image-slide-wrap row-a">
                                    <Slider {...settings}>
                                        {topShowcaseImages.map((image) => (
                                            <div className="image-wrap" key={image.src}>
                                                <img src={image.src} alt={image.alt} />
                                            </div>
                                        ))}
                                    </Slider>

                                </div>
                                <div className="image-slide-wrap row-b">
                                    <Slider {...settings2}>
                                        {bottomShowcaseImages.map((image) => (
                                            <div className="image-wrap" key={image.src}>
                                                <img src={image.src} alt={image.alt} />
                                            </div>
                                        ))}
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
