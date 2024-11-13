import { Fade } from "react-awesome-reveal";
import React from 'react'


const BenefitsArray = [
    {
        Id: '1',
        title: '$600M',
        subTitle: 'Total funding',
        description: 'Hard work and dedication of the Oru Studio team help our clients secure new successful investment deals.',
        duration:1000,
    },
    {
        Id: '2',
        title: '800+',
        subTitle: 'Completed projects',
        description: 'With our exceptional approach to every project, we bring the dream projects of our clients to life.',
        duration:1200,
    },
    {
        Id: '3',
        title: '95%',
        subTitle: 'Successful Projects',
        description: 'With our exceptional approach to every project, we bring the dream projects of our clients to life.',
        duration:1400,
    },
    {
        Id: '4',
        title: '4.9',
        subTitle: 'Positive Review',
        description: 'Hard work and dedication of the Oru Studio team help our clients secure new successful investment deals.',
        duration:1600,
    },
]

const Benefits = () => {

    return (
        <div>
            <section className="benefits-area section-padding pt-0">
                <div className="container">
                    <div className="benefits-wrap">
                        <div className="benefits-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title">
                                        <h2>OUR <br />
                                            BENEFITS</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {BenefitsArray.map((benefits, index) => (
                                <div className={"col-xl-3 col-lg-4 col-md-6 col-12 mt-30"} key={index}>
                                    <Fade direction="up" triggerOnce="false" duration={benefits.duration} delay={9}>
                                        <div className="benefits-item">
                                            <div className="benefits-content">
                                                <h2>{benefits.title}</h2>
                                                <h3>{benefits.subTitle}</h3>
                                                <p>{benefits.description}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;
