import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";


const Hero2 = () => {
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
