import React from 'react';

const Testimonial = () => {

    return (
        <section className="testimonial-area section-padding">
            <div className="container">
                <div className="testimonial-top">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-img">
                                <img src="/images/testimonial-logo.svg" alt="" />
                                <p>80+ REVIEWS</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="testimonial-text">
                                <h3>We’ve helped hundreds of partners, ranging from startups to medium-sized businesses to achieve their goals. And stellar feedback — is our reward!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
