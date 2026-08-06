import { Fade } from "react-awesome-reveal";
import React from 'react'
import Link from "next/link";

const clientsArray = [
    {
        Id: '1',
        cImg: '/images/service1.svg',
        title: 'Shopify Storefront Buildouts',
        duration: 1000,
    },
    {
        Id: '2',
        cImg: '/images/service2.svg',
        title: 'Custom App Development',
        duration: 1200,
    },
    {
        Id: '3',
        title: 'Full Stack Product Systems',
        cImg: '/images/service3.svg',
        duration: 1400,
    },
    {
        Id: '4',
        title: 'Launch QA and Optimization',
        cImg: '/images/service4.svg',
        duration: 1600,
    },
]

const Discuss = () => {

    return (
        <div>
            <div className="discuss-area section-padding pt-0">
                <div className="container">
                    <div className="discuss-wrap">
                        <div className="discuss-text-wrap">
                            <Fade direction="up" triggerOnce="false" duration={1000} delay={9}>
                                <h2>Interested in discussing your project with us?</h2>
                            </Fade>
                            <Fade direction="up" triggerOnce="false" duration={1200} delay={9}>
                                <p>Let’s discuss how we can create a user experience that’s both visually stunning and drives real growth for your product.</p>
                            </Fade>
                            <Fade direction="up" triggerOnce="false" duration={1400} delay={9}>
                                <Link className="btn-style-2" href={'/contact'}>
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
            </div>
        </div>
    );
};

export default Discuss;
