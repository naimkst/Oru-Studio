import { Fade } from "react-awesome-reveal";
import React from 'react'


const WhyChooseArray = [
    {
        Id: '1',
        sIcon: '/images/choose1.svg',
        subTitle: 'Eyes on the goal',
        description: 'When working, we always focus on the bigger picture, ensuring efficient and effective product development.',
        duration:1000,
    },
    {
        Id: '2',
        sIcon: '/images/choose2.svg',
        subTitle: 'Unique solutions',
        description: 'Our custom and clever solutions will amplify your websites distinctiveness, setting it apart from the rest.',
        duration:1200,
    },
    {
        Id: '3',
        sIcon: '/images/choose3.svg',
        subTitle: 'Winning Ideas',
        description: 'Experience the revolutionary and transformative impact of our ideas and stay ahead of the competition.',
        duration:1400,
    },
    {
        Id: '4',
        sIcon: '/images/choose2.svg',
        subTitle: 'Issue Fixing',
        description: 'Experience the revolutionary and transformative impact of our ideas and stay ahead of the competition.',
        duration:1600,
    },
]

const WhyChoose = () => {

    return (
        <div>
            <section className="choose-area section-padding pt-0">
                <div className="container">
                    <div className="choose-wrap">
                        <div className="choose-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title">
                                        <h2>Why <br />
                                            Choose Us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            {WhyChooseArray.map((choose, index) => (
                                <div className={"col-xl-3 col-lg-4 col-md-6 col-12 mt-30"} key={index}>
                                    <Fade direction="up" triggerOnce="false" duration={choose.duration} delay={9}>
                                        <div className="choose-item">
                                            <div className="choose-content">
                                                <div className="icon">
                                                    <img src={choose.sIcon} alt="" />
                                                </div>
                                                <h3>{choose.subTitle}</h3>
                                                <p>{choose.description}</p>
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

export default WhyChoose;
