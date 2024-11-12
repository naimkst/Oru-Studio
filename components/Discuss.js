import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";

const clientsArray = [
    {
        Id: '1',
        cImg: '/images/partner1.svg',
        title: '4.9 AVG. SCORE Based on 80+ reviews',
        duration: 1000,
    },
    {
        Id: '2',
        cImg: '/images/partner2.svg',
        title: 'TOP DESIGN AGENCY WORLDWIDE',
        duration: 1200,
    },
    {
        Id: '3',
        title: 'FEATURED Web Design AgencY IN UAE',
        cImg: '/images/partner3.svg',
        duration: 1400,
    },
    {
        Id: '4',
        title: 'TOP DESIGN AGENCY WORLDWIDE',
        cImg: '/images/partner4.svg',
        duration: 1600,
    },
]

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
                    <div className="clients">
                        <div className="row">
                            {clientsArray.map((client, index) => (
                                <div className="col-lg-3 col-md-3 col-12" key={index}>
                                    <Fade direction="up" triggerOnce="false" duration={client.duration} delay={9}>
                                        <div className="clients-item">
                                            <img src={client.cImg} alt="" />
                                            <p>{client.title}</p>
                                        </div>
                                    </Fade>
                                </div>
                            ))}
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
