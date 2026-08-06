import Link from 'next/link';
import React from 'react'
import { featuredPortfolio } from '../data/siteContent';

const Cases = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <section className="cases-area section-padding pt-0">
                <div className="container">
                    <div className="cases-wrap">
                        <div className="cases-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title s2">
                                        <h2>some of
                                            <br />
                                            Our Cases</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-md-center mt-none-30">
                            {featuredPortfolio.map((cases, index) => (
                                <div className={"col-lg-6 col-md-12 mt-30"} key={index}>
                                    <div className="cases-item">
                                        <div className="cases-img mb-50">
                                            <img src={cases.image} alt="" />
                                            <Link className="link-btn" href={`/portfolio/${cases.slug}`}>
                                                <i className='ti-plus'></i>
                                            </Link>
                                        </div>
                                        <div className="cases-content">
                                            <div className="country">
                                                <span>{cases.category}</span>
                                                <small><img src={cases.cIcon} alt="" /></small>
                                            </div>
                                            <h3><Link onClick={ClickHandler} href={`/portfolio/${cases.slug}`}>{cases.title}</Link></h3>
                                            <p>{cases.description}</p>
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

export default Cases;
