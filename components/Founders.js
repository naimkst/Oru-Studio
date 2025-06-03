import React from 'react';
import { Fade } from "react-awesome-reveal";

const Founders = () => {

    return (
        <section className="founder-area section-padding">
            <div className="container">
                <div className="founder-top">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="founder-img">
                                <img src="/images/founders.png" alt="" />
                                <p>FOUNDERS <br />
                                    of Orustudio</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="founder-text">
                                <h3>After a decade of refining our Design & Development process, we're ready to team up with driven Founders who are ready to level up. Because big wins happen when great minds collaborate. Let’s build something extraordinary—together.</h3>
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
                                        <img src="/images/award-dribbble.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Leading Design Team on Dribbble</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1200} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/award-clutch.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Clutch Top 100 Global Provider</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1400} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/award-5stars.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>5-Star Review on GoodFirms</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <Fade direction="up" triggerOnce="false" duration={1600} delay={9}>
                                <div className="awards-item">
                                    <div className="awards-img">
                                        <img src="/images/award-upwork.svg" alt="" />
                                    </div>
                                    <div className="awards-text">
                                        <p>Upwork Job Success: 100%</p>
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
