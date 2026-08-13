import React from 'react'
import { Fade } from "react-awesome-reveal";
import { platformLogos } from '../data/platforms';

const Clients = () => {

    return (
        <div>
            <section className="client-area section-padding pt-0">
                <div className="container">
                    <div className="client-wrap">
                        <div className="client-heading">
                            <span>Platform experience</span>
                            <h2>Commerce and product tools we build with</h2>
                            <p>
                                Selected platforms, APIs, and infrastructure used across Shopify,
                                ecommerce, SaaS, and custom web application work.
                            </p>
                        </div>
                        <div className="row justify-content-md-center mt-none-30 g-0">
                            {platformLogos.map((platform) => (
                                <div className={"col col-lg-3 col-sm-6 col-12 mt-30"} key={platform.id}>
                                    <div className="client-item">
                                        <Fade direction="up" triggerOnce={false} duration={platform.duration} delay={9}>
                                            <div className="client-icon mb-50">
                                                <div className="icon">
                                                    <img src={platform.logo} alt={`${platform.name} logo`} />
                                                </div>
                                            </div>
                                            <div className="client-content">
                                                <span>{platform.category}</span>
                                                <p>{platform.description}</p>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
