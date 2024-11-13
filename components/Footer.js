import React from 'react'
import Link from 'next/link';

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
                                        <p>71-75 Shelton Street, Covent Garden London - WC2H 9JQ London, United Kingdom</p>
                                        <p>F # F1 (5th Floor), H # 1188, Avenue # 11, Mirpur DOHS, Dhaka, Bangladesh</p>
                                        <ul>
                                            <li><i className="flaticon-envelope"></i>needhelp@company.com</li>
                                            <li><i className="flaticon-telephone"></i>+92 666 888 0000</li>
                                        </ul>
                                    </div>
                                    <div className="widget social-widget">
                                        <ul>
                                            <li><Link href="#"><i className="ti-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="ti-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link href="#"><i className="ti-pinterest"></i></Link></li>
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
                                        <li><Link href="/about"> About Company</Link></li>
                                        <li><Link href="/team">Meet the Team</Link></li>
                                        <li><Link href="/blog">News & Media</Link></li>
                                        <li><Link href="/project">Our Projects</Link></li>
                                        <li><Link href="/contact">Contact us</Link></li>
                                        <li><Link href="/contact">WooCommerce Plugin</Link></li>
                                        <li><Link href="/contact">Documentation</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <ul>
                                        <li><Link href="/about"> Installation & Deployment</Link></li>
                                        <li><Link href="/team">DevOps Services</Link></li>
                                        <li><Link href="/blog">Free Consultation</Link></li>
                                        <li><Link href="/project">Technical Support</Link></li>
                                        <li><Link href="/contact">Quality Assurance Testing</Link></li>
                                        <li><Link href="/contact">UI/UX Design</Link></li>
                                        <li><Link href="/contact">Web Development</Link></li>
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
                                    <p className="copyright">Copyright  2024 <Link href="home">Oru-studio</Link>, All
                                        Rights
                                        Reserved.</p>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-12">
                                <ul className="lower-footer-link">
                                    <li><Link href="/contact">Trams & Condition</Link></li>
                                    <li><Link href="/contact">Privacy Policy</Link></li>
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
