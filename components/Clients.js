import React from 'react'
import { Fade } from "react-awesome-reveal";

const ClientArray = [
    {
        Id: '1',
        sIcon: '/images/client1.svg',
        description: 'Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.',
        duration: 1000,
    },
    {
        Id: '2',
        sIcon: '/images/client2.svg',
        description: 'Enhancing digital presence and engagement through our tailored web and marketing strategies.',
        duration: 1200,
    },
    {
        Id: '3',
        sIcon: '/images/client3.svg',
        description: 'Refining brand manuals and design assets for a leading browser company. ',
        duration: 1400,
    },
    {
        Id: '4',
        sIcon: '/images/client4.svg',
        description: 'Online marketplace that provides a platform for creators to buy and sell design assets.',
        duration: 1600,
    },
    {
        Id: '5',
        sIcon: '/images/client5.svg',
        description: 'Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.',
        duration: 1000,
    },
    {
        Id: '6',
        sIcon: '/images/client6.svg',
        description: 'Enhancing digital presence and engagement through our tailored web and marketing strategies.',
        duration: 1200,
    },
    {
        Id: '7',
        sIcon: '/images/client7.svg',
        description: 'Refining brand manuals and design assets for a leading browser company. ',
        duration: 1400,
    },
    {
        Id: '8',
        sIcon: '/images/client4.svg',
        description: 'Online marketplace that provides a platform for creators to buy and sell design assets.',
        duration: 1600,
    },
]

const Clients = () => {

    return (
        <div>
            <section className="client-area section-padding">
                <div className="container">
                    <div className="client-wrap">
                        <div className="row justify-content-md-center mt-none-30 g-0">
                            {ClientArray.map((client, srv) => (
                                <div className={"col col-lg-3 col-sm-6 col-12 mt-30"} key={srv}>
                                    <div className="client-item">
                                        <Fade direction="up" triggerOnce="false" duration={client.duration} delay={9}>
                                            <div className="client-icon mb-50">
                                                <div className="icon">
                                                    <img src={client.sIcon} alt="" />
                                                </div>
                                            </div>
                                            <div className="client-content">
                                                <p>{client.description}</p>
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
