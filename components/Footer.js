import React from 'react'
import Link from 'next/link';
import { company, services } from '../data/siteContent';

const Footer = () => {

    return (
        <div>
            <footer className="footer-section">
                <div className="upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src="/images/logo.svg" alt="logo" />
                                    </div>
                                    <div className="contact-ft">
                                        <p>{company.address}</p>
                                        <ul>
                                            <li><i className="flaticon-envelope"></i>{company.email}</li>
                                            <li><i className="flaticon-telephone"></i>{company.phone}</li>
                                        </ul>
                                    </div>
                                    <div className="widget social-widget">
                                        <ul>
                                            <li><Link href={`mailto:${company.email}`} aria-label="Email Oru Studio"><i className="ti-email"></i></Link></li>
                                            <li><Link href={company.telegramUrl} target="_blank" aria-label="Message Oru Studio on Telegram"><i className="ti-comment"></i></Link></li>
                                            <li><Link href="/contact" aria-label="Contact Oru Studio"><i className="ti-arrow-top-right"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link href="/about">About Company</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/blog">News & Media</Link></li>
                                        <li><Link href="/portfolio">Our Portfolio</Link></li>
                                        <li><Link href="/process">Our Process</Link></li>
                                        <li><Link href="/contact">Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <ul>
                                        {services.slice(0, 7).map((service) => (
                                            <li key={service.id}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget subscribe">
                                    <div className="widget-title">
                                        <h3>News Letter</h3>
                                    </div>
                                    <p>
                                    The Oru Studio blog is a treasure trove of our best technical tips and expert knowledge. Here you will discover all the valuable secrets and trends of the IT industry.</p>
                                    <form action="#">
                                        <div className="form-field">
                                            <input type="email" placeholder="Your Email..." id="emails"
                                                required />
                                            <button type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col col-lg-6 col-12">
                                <div className="copy-right">
                                    <p className="copyright">Copyright 2026 <Link href="/">Oru Studio</Link>, All
                                        Rights
                                        Reserved.</p>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-12">
                                <ul className="lower-footer-link">
                                    <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
