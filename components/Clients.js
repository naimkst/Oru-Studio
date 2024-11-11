import React from 'react'

const ClientArray = [
    {
        Id: '1',
        sIcon: '/images/client1.svg',
        description: 'Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.',
    },
    {
        Id: '2',
        sIcon: '/images/client2.svg',
        description: 'Enhancing digital presence and engagement through our tailored web and marketing strategies.',
    },
    {
        Id: '3',
        sIcon: '/images/client3.svg',
        description: 'Refining brand manuals and design assets for a leading browser company. ',
    },
    {
        Id: '4',
        sIcon: '/images/client4.svg',
        description: 'Online marketplace that provides a platform for creators to buy and sell design assets.',
    },
    {
        Id: '5',
        sIcon: '/images/client5.svg',
        description: 'Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.',
    },
    {
        Id: '6',
        sIcon: '/images/client6.svg',
        description: 'Enhancing digital presence and engagement through our tailored web and marketing strategies.',
    },
    {
        Id: '7',
        sIcon: '/images/client7.svg',
        description: 'Refining brand manuals and design assets for a leading browser company. ',
    },
    {
        Id: '8',
        sIcon: '/images/client4.svg',
        description: 'Online marketplace that provides a platform for creators to buy and sell design assets.',
    },
]

const Clients = () => {

    return (
        <div>
            <section className="client-area section-padding">
                <div className="container">
                    <div className="client-wrap">
                        <div className="row justify-content-md-center mt-none-30 g-0">
                            {ClientArray.map((service, srv) => (
                                <div className={"col col-lg-3 col-sm-6 col-12 mt-30"} key={srv}>
                                    <div className="client-item">
                                        <div className="client-icon mb-50">
                                            <div className="icon">
                                                <img src={service.sIcon} alt="" />
                                            </div>
                                        </div>
                                        <div className="client-content">
                                            <p>{service.description}</p>
                                        </div>
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
