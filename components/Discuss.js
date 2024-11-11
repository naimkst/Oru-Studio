import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";



const Discuss = () => {

    return (
        <div>
            <div className="discuss-area section-padding">
                <div className="container">
                    <div className="discuss-wrap">
                        <div className="discuss-text-wrap">
                            <Fade direction="up" triggerOnce="false" duration={1000} delay={9}>
                                <h2>Ready to discuss
                                    your project with us?</h2>
                            </Fade>
                            <Fade direction="up" triggerOnce="false" duration={1200} delay={9}>
                                <p>Let’s talk about how we can craft a user experience that not only looks great but drives real growth for your product.</p>
                            </Fade>
                            <Fade direction="up" triggerOnce="false" duration={1400} delay={9}>
                                <Link className="btn-style-2" href={'/'}>
                                    <span className='main-text'>Book a call</span>
                                    <span className='hover-text'>Book a call</span>
                                </Link>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="video">
                    <video src="/images/bg-discuss.mp4" autoPlay muted loop></video>
                </div>
            </div>
        </div>
    );
};

export default Discuss;
