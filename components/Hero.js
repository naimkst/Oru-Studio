import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const Hero = () => {
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


    return (
        <section className="hero-area">
            <div className="container container--custom">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 mb-30">
                        <div className="hero-content">
                            <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                                <div>
                                    <h1 className="hero-title">Let’s build
                                        <span className="middle-text">
                                            <div className="home-images" ref={(el) => { imagesRef.current = el ? [...el.children] : [] }}>
                                                <img src="/images/home-hero_01.png" alt="Hero 1" />
                                                <img src="/images/home-hero_02.png" alt="Hero 2" />
                                                <img src="/images/home-hero_03.png" alt="Hero 3" />
                                                <img src="/images/home-hero_04.png" alt="Hero 4" />
                                            </div>
                                            THE NEXT
                                        </span> <span id="changing">{text}</span> THING
                                    </h1>
                                </div>
                            </Fade>
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
                    <div className="col-lg-4">
                        <div className="hero-right">
                            <div className="video-area">
                                <div className="logo">
                                    <img src="/logo.png" alt="Logo" />
                                </div>
                                <video src="/images/home-story-1-v2.mp4" autoPlay muted loop></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
