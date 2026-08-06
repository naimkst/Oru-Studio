import React from 'react';
import { Fade } from "react-awesome-reveal";

const Founders = () => {

    return (
        <section className="founder-area section-padding">
            <div className="container">
                <div className="founder-top">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="founder-card">
                                <div className="founder-photo">
                                    <img src="/images/founder-studio-workspace.webp" alt="Oru Studio founder working on a Shopify product build" />
                                </div>
                                <div className="founder-badge">
                                    <div className="founder-avatars" aria-label="Oru Studio founder team">
                                        <img src="/images/founder-avatar-01.webp" alt="Oru Studio founder" />
                                        <img src="/images/founder-avatar-02.webp" alt="Oru Studio product partner" />
                                        <img src="/images/founder-avatar-03.webp" alt="Oru Studio development partner" />
                                    </div>
                                    <p>Founder-led <br />
                                        OruStudio</p>
                                </div>
                                <div className="founder-card-footer">
                                    <span>10Y</span>
                                    <p>Full stack, Shopify app, and theme delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="founder-text">
                                <span>Founder-led full stack and Shopify development</span>
                                <h3>After a decade of building digital products, we help serious founders and commerce teams turn ideas into fast, reliable Shopify apps, themes, and web platforms.</h3>
                                <p>You work directly with a senior product partner who can shape the strategy, design the flow, build the frontend and backend, and keep the launch moving with clear technical decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="awards-area">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1000} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/service1.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Shopify Theme Development</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1200} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/service2.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Custom Shopify App Workflows</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1400} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/service3.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Full Stack Product Delivery</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1600} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/service4.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Performance and Launch Support</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="awards-bg-wrap">
                <img src="/images/bg-blue.webp" alt="" />
            </div> */}

        </section>
    );
};

export default Founders;
