import Link from 'next/link';
import React from 'react'

const CasesArray = [
    {
        Id: '1',
        sImg: '/images/case1.webp',
        title: 'Raven.gg — the leading brand for custom esports clothing design',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
        slug: 'leading',
    },
    {
        Id: '2',
        sImg: '/images/case2.webp',
        title: 'Digital rebirth of Bookclub24 — #1 German online library for book collectors',
        slug: 'Leading',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
    },
    {
        Id: '3',
        sImg: '/images/case3.webp',
        title: 'Mighty Buildings — sustainable 3D printed houses of the future',
        slug: 'Leading',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
    },
    {
        Id: '4',
        sImg: '/images/case4.webp',
        title: 'LinkByCar — adaptable design for AI-driven vehicle operation startup',
        slug: 'Leading',
        country: 'E-commerce, Fashion',
        cIcon: '/images/country.png',
    },
]

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
                            {CasesArray.map((cases, index) => (
                                <div className={"col-lg-6 col-md-12 mt-30"} key={index}>
                                    <div className="cases-item">
                                        <div className="cases-img mb-50">
                                            <img src={cases.sImg} alt="" />
                                            <Link className="link-btn" href={"/"}>
                                                <i className='ti-plus'></i>
                                            </Link>
                                        </div>
                                        <div className="cases-content">
                                            <div className="country">
                                                <span>{cases.country}</span>
                                                <small><img src={cases.cIcon} alt="" /></small>
                                            </div>
                                            <h3><Link onClick={ClickHandler} href={'/cases-single/[slug]'} as={`/cases-single/${cases.slug}`}>{cases.title}</Link></h3>
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
